import { bool, StorageKey } from '@polkadot/types';
import {
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesTransferComplianceTransferCondition,
  PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
} from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import { flatten } from 'lodash';
import { TransferCondition } from 'polymesh-types/types';

import { SetTransferRestrictionsParams } from '~/api/entities/Asset/TransferRestrictions/TransferRestrictionBase';
import { Asset, Context, Identity, PolymeshError, Procedure } from '~/internal';
import {
  ClaimCountRestrictionValue,
  ClaimCountTransferRestriction,
  ClaimCountTransferRestrictionInput,
  ClaimPercentageTransferRestriction,
  ClaimPercentageTransferRestrictionInput,
  ClaimType,
  CountTransferRestrictionInput,
  ErrorCode,
  PercentageTransferRestrictionInput,
  TransferRestriction,
  TransferRestrictionType,
  TxTag,
  TxTags,
} from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import {
  complianceConditionsToBtreeSet,
  identitiesToBtreeSet,
  identityIdToString,
  meshClaimTypeToClaimType,
  stringToTickerKey,
  toExemptKey,
  transferRestrictionToPolymeshTransferCondition,
  transferRestrictionTypeToStatOpType,
  u32ToBigNumber,
} from '~/utils/conversion';
import {
  assertStatIsSet,
  checkTxType,
  compareTransferRestrictionToInput,
  neededStatTypeForRestrictionInput,
} from '~/utils/internal';

/**
 * @hidden
 */

type ClaimKey = keyof typeof ClaimType | 'None';
type ExemptionRecords = Partial<Record<ClaimKey, Identity[]>>;

const addExemptionIfNotPresent = (
  toInsertId: Identity,
  filterSet: Identity[],
  claimType: ClaimKey,
  exemptionRecords: ExemptionRecords
): void => {
  const found = filterSet.find(currentId => currentId.did === toInsertId.did);
  if (!found) {
    const entry = exemptionRecords[claimType];
    if (entry) {
      entry.push(toInsertId);
    } else {
      exemptionRecords[claimType] = [toInsertId];
    }
  }
};

export interface Storage {
  currentRestrictions: TransferCondition[];
  currentExemptions: ExemptionRecords;
  occupiedSlots: BigNumber;
}
/**
 * @hidden
 */
function transformInput(
  restrictions:
    | CountTransferRestrictionInput[]
    | PercentageTransferRestrictionInput[]
    | ClaimCountTransferRestrictionInput[]
    | ClaimPercentageTransferRestrictionInput[],
  currentRestrictions: TransferCondition[],
  currentExemptions: ExemptionRecords,
  type: TransferRestrictionType,
  context: Context
): [PolymeshPrimitivesTransferComplianceTransferCondition[], ExemptionRecords, ExemptionRecords] {
  const toSet: ExemptionRecords = {};
  const toRemove: ExemptionRecords = {};

  let needDifferentConditions = restrictions.length !== currentRestrictions.length;
  const conditions: PolymeshPrimitivesTransferComplianceTransferCondition[] = [];
  const givenExemptions: ExemptionRecords = {};

  restrictions.forEach(r => {
    let value: BigNumber | ClaimCountRestrictionValue | ClaimPercentageTransferRestriction;
    let claimType: ClaimType | undefined;
    if ('count' in r) {
      value = r.count;
    } else if ('percentage' in r) {
      value = r.percentage;
    } else {
      value = r;
      claimType = r.claim.type;
    }

    const condition = { type, value } as TransferRestriction;

    const compareConditions = (transferCondition: TransferCondition): boolean =>
      compareTransferRestrictionToInput(transferCondition, condition);
    if (!needDifferentConditions) {
      needDifferentConditions = ![...currentRestrictions].find(compareConditions);
    }
    const rawCondition = transferRestrictionToPolymeshTransferCondition(condition, context);
    conditions.push(rawCondition);

    r.exemptedIdentities?.forEach(e => {
      const key = claimType || 'None';
      const id = typeof e === 'string' ? new Identity({ did: e }, context) : e;
      addExemptionIfNotPresent(id, [], key, givenExemptions);
    });
  });

  Object.entries(givenExemptions).forEach(([cType, toAddIds]) => {
    const currentIds = currentExemptions[cType as ClaimKey] || [];
    toAddIds.forEach(id => {
      addExemptionIfNotPresent(id, currentIds, cType as ClaimKey, toSet);
    });
  });

  Object.entries(currentExemptions).forEach(([cType, currentIds]) => {
    const given = givenExemptions[cType as ClaimKey] || [];
    currentIds.forEach(id => {
      addExemptionIfNotPresent(id, given, cType as ClaimKey, toRemove);
    });
  });

  const sizeOf = (obj: Record<string, unknown>): number => Object.keys(obj).length;
  const needDifferentExemptions = sizeOf(toSet) > 0 || sizeOf(toRemove) > 0;
  if (!needDifferentConditions && !needDifferentExemptions) {
    throw new PolymeshError({
      code: ErrorCode.NoDataChange,
      message: 'The restrictions and exemptions are already in place',
    });
  }

  return [conditions, toSet, toRemove];
}

/**
 * @hidden
 */
export async function prepareSetTransferRestrictions(
  this: Procedure<SetTransferRestrictionsParams, BigNumber, Storage>,
  args: SetTransferRestrictionsParams
): Promise<BigNumber> {
  const {
    context: {
      polymeshApi: {
        tx: { statistics },
        consts,
      },
    },
    storage: { currentRestrictions, occupiedSlots, currentExemptions },
    context,
  } = this;
  const {
    restrictions: { length: newRestrictionAmount },
    restrictions,
    type,
    ticker,
  } = args;
  const tickerKey = stringToTickerKey(ticker, context);

  const [conditions, toSetExemptions, toRemoveExemptions] = transformInput(
    restrictions,
    currentRestrictions,
    currentExemptions,
    type,
    context
  );

  const maxTransferConditions = u32ToBigNumber(consts.statistics.maxTransferConditionsPerAsset);
  const finalCount = occupiedSlots.plus(newRestrictionAmount);
  if (finalCount.gte(maxTransferConditions)) {
    throw new PolymeshError({
      code: ErrorCode.LimitExceeded,
      message: 'Cannot set more Transfer Restrictions than there are slots available',
      data: {
        availableSlots: maxTransferConditions.minus(occupiedSlots),
      },
    });
  }

  const transactions = [];
  const op = transferRestrictionTypeToStatOpType(type, context);
  transactions.push(
    checkTxType({
      transaction: statistics.setAssetTransferCompliance,
      args: [tickerKey, complianceConditionsToBtreeSet(conditions, context)],
    })
  );

  Object.entries(toSetExemptions).forEach(([claimType, exempted]) => {
    const rawClaimType = claimType === 'None' ? undefined : (claimType as ClaimType);
    const exemptKey = toExemptKey(tickerKey, op, rawClaimType);
    const exemptedIds = identitiesToBtreeSet(exempted, context);
    transactions.push(
      checkTxType({
        transaction: statistics.setEntitiesExempt,
        feeMultiplier: new BigNumber(exemptedIds.size),
        args: [true, exemptKey, exemptedIds],
      })
    );
  });

  Object.entries(toRemoveExemptions).forEach(([claimType, unExempted]) => {
    const rawClaimType = claimType === 'None' ? undefined : (claimType as ClaimType);
    const exemptKey = toExemptKey(tickerKey, op, rawClaimType);
    const unExemptedIds = identitiesToBtreeSet(unExempted, context);
    transactions.push(
      checkTxType({
        transaction: statistics.setEntitiesExempt,
        feeMultiplier: new BigNumber(unExemptedIds.size),
        args: [false, exemptKey, unExemptedIds],
      })
    );
  });

  this.addBatchTransaction({ transactions });
  return finalCount;
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<SetTransferRestrictionsParams, BigNumber, Storage>,
  { ticker, restrictions }: SetTransferRestrictionsParams
): ProcedureAuthorization {
  const transactions: TxTag[] = [TxTags.statistics.SetAssetTransferCompliance];

  const needExemptionsPermission = restrictions.some(r => r.exemptedIdentities?.length);
  if (needExemptionsPermission) {
    transactions.push(TxTags.statistics.SetEntitiesExempt);
  }

  return {
    permissions: {
      assets: [new Asset({ ticker }, this.context)],
      transactions,
      portfolios: [],
    },
  };
}

/**
 * @hidden
 */
export async function prepareStorage(
  this: Procedure<SetTransferRestrictionsParams, BigNumber, Storage>,
  args: SetTransferRestrictionsParams
): Promise<Storage> {
  const {
    context,
    context: {
      polymeshApi: {
        query: { statistics },
      },
    },
  } = this;
  const { ticker, type } = args;

  const tickerKey = stringToTickerKey(ticker, context);

  const currentStats = await statistics.activeAssetStats(tickerKey);

  args.restrictions.forEach(restriction => {
    let claimIssuer;
    if (
      type === TransferRestrictionType.ClaimCount ||
      type === TransferRestrictionType.ClaimPercentage
    ) {
      const {
        claim: { type: claimType },
        issuer,
      } = restriction as ClaimCountTransferRestriction | ClaimPercentageTransferRestriction;
      claimIssuer = { claimType, issuer };
    }
    const neededStat = neededStatTypeForRestrictionInput({ type, claimIssuer }, context);
    assertStatIsSet(currentStats, neededStat);
  });

  const {
    transferRestrictions: { count, percentage, claimCount, claimPercentage },
  } = new Asset({ ticker }, context);

  const [
    { restrictions: currentCountRestrictions },
    { restrictions: currentPercentageRestrictions },
    { restrictions: currentClaimCountRestrictions },
    { restrictions: currentClaimPercentageRestrictions },
  ] = await Promise.all([count.get(), percentage.get(), claimCount.get(), claimPercentage.get()]);

  const currentRestrictions: TransferRestriction[] = [];

  let occupiedSlots =
    currentCountRestrictions.length +
    currentPercentageRestrictions.length +
    currentClaimCountRestrictions.length +
    currentClaimPercentageRestrictions.length;
  if (type === TransferRestrictionType.Count) {
    occupiedSlots -= currentCountRestrictions.length;
  } else if (type === TransferRestrictionType.Percentage) {
    occupiedSlots -= currentPercentageRestrictions.length;
  } else if (type === TransferRestrictionType.ClaimCount) {
    occupiedSlots -= currentClaimCountRestrictions.length;
  } else {
    occupiedSlots -= currentClaimPercentageRestrictions.length;
  }

  if (type === TransferRestrictionType.Count) {
    currentCountRestrictions.forEach(({ count: value }) => {
      const restriction = { type: TransferRestrictionType.Count, value } as const;
      currentRestrictions.push(restriction);
    });
  } else if (type === TransferRestrictionType.Percentage) {
    currentPercentageRestrictions.forEach(({ percentage: value }) => {
      const restriction = { type: TransferRestrictionType.Percentage, value } as const;
      currentRestrictions.push(restriction);
    });
  } else if (type === TransferRestrictionType.ClaimCount) {
    currentClaimCountRestrictions.forEach(({ claim, min, max, issuer }) => {
      const restriction = { type, value: { claim, min, max, issuer } };
      currentRestrictions.push(restriction);
    });
  } else {
    currentClaimPercentageRestrictions.forEach(({ claim, min, max, issuer }) => {
      const restriction = { type, value: { claim, min, max, issuer } };
      currentRestrictions.push(restriction);
    });
  }

  const op = transferRestrictionTypeToStatOpType(type, context);
  const claimTypes = [ClaimType.Accredited, ClaimType.Affiliate, ClaimType.Jurisdiction, undefined];
  const exemptionFetchers: Promise<
    [
      StorageKey<
        [
          PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
          PolymeshPrimitivesIdentityId
        ]
      >,
      bool
    ][]
  >[] = [];
  claimTypes.forEach(claimType => {
    exemptionFetchers.push(
      statistics.transferConditionExemptEntities.entries({
        asset: tickerKey,
        op,
        claimType,
      })
    );
  });
  const rawCurrentExemptions = flatten(await Promise.all(exemptionFetchers));
  const currentExemptions: ExemptionRecords = {};
  rawCurrentExemptions.forEach(([key]) => {
    const { claimType: rawClaimType } = key.args[0];
    let claimType: ClaimKey = 'None';
    if (rawClaimType.isSome) {
      claimType = meshClaimTypeToClaimType(rawClaimType.unwrap());
    }
    const did = identityIdToString(key.args[1]);
    const identity = new Identity({ did }, context);
    addExemptionIfNotPresent(identity, [], claimType, currentExemptions);
  });

  const transformRestriction = (
    restriction: TransferRestriction
  ): PolymeshPrimitivesTransferComplianceTransferCondition => {
    return transferRestrictionToPolymeshTransferCondition(restriction, context);
  };

  return {
    occupiedSlots: new BigNumber(occupiedSlots),
    currentRestrictions: currentRestrictions.map(transformRestriction),
    currentExemptions,
  };
}

/**
 * @hidden
 */
export const setTransferRestrictions = (): Procedure<
  SetTransferRestrictionsParams,
  BigNumber,
  Storage
> => new Procedure(prepareSetTransferRestrictions, getAuthorization, prepareStorage);
