import { Option, u64 } from '@polkadot/types';
import { PolymeshPrimitivesIdentityIdPortfolioId } from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import P from 'bluebird';

import { assertInstructionValid } from '~/api/procedures/utils';
import { Instruction, PolymeshError, Procedure } from '~/internal';
import { Moment } from '~/polkadot';
import {
  AffirmationStatus,
  DefaultPortfolio,
  ErrorCode,
  Identity,
  InstructionAffirmationOperation,
  Leg,
  ModifyInstructionAffirmationParams,
  NumberedPortfolio,
  PortfolioId,
  PortfolioLike,
  TxTag,
  TxTags,
} from '~/types';
import {
  ExtrinsicParams,
  PolymeshTx,
  ProcedureAuthorization,
  TransactionSpec,
} from '~/types/internal';
import { tuple } from '~/types/utils';
import {
  bigNumberToU64,
  dateToMoment,
  mediatorAffirmationStatusToStatus,
  meshAffirmationStatusToAffirmationStatus,
  portfolioIdToMeshPortfolioId,
  portfolioLikeToPortfolioId,
  stringToIdentityId,
} from '~/utils/conversion';
import { optionize } from '~/utils/internal';

export interface Storage {
  portfolios: (DefaultPortfolio | NumberedPortfolio)[];
  portfolioParams: PortfolioLike[];
  senderLegAmount: BigNumber;
  totalLegAmount: BigNumber;
  signer: Identity;
}

/**
 * @hidden
 */
export async function prepareModifyInstructionAffirmation(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  args: ModifyInstructionAffirmationParams
): Promise<
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'affirmInstruction'>>
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'withdrawAffirmation'>>
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'rejectInstruction'>>
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'affirmInstructionAsMediator'>>
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'withdrawAffirmationAsMediator'>>
  | TransactionSpec<Instruction, ExtrinsicParams<'settlementTx', 'rejectInstructionAsMediator'>>
> {
  const {
    context: {
      polymeshApi: {
        tx: { settlement: settlementTx },
        query: { settlement },
      },
    },
    context,
    storage: { portfolios, portfolioParams, senderLegAmount, totalLegAmount, signer },
  } = this;

  const { operation, id } = args;

  const instruction = new Instruction({ id }, context);

  await assertInstructionValid(instruction, context);

  if (portfolioParams.length && portfolioParams.length !== portfolios.length) {
    throw new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'Some of the portfolios are not a involved in this instruction',
    });
  }

  if (!portfolios.length) {
    throw new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'The signing Identity is not involved in this Instruction',
    });
  }

  const rawInstructionId = bigNumberToU64(id, context);
  const rawPortfolioIds: PolymeshPrimitivesIdentityIdPortfolioId[] = portfolios.map(portfolio =>
    portfolioIdToMeshPortfolioId(portfolioLikeToPortfolioId(portfolio), context)
  );

  const rawDid = stringToIdentityId(signer.did, context);
  const multiArgs = rawPortfolioIds.map(portfolioId => tuple(portfolioId, rawInstructionId));

  const [rawAffirmationStatuses, rawMediatorAffirmation] = await Promise.all([
    settlement.userAffirmations.multi(multiArgs),
    settlement.instructionMediatorsAffirmations(rawInstructionId, rawDid),
  ]);

  const affirmationStatuses = rawAffirmationStatuses.map(meshAffirmationStatusToAffirmationStatus);
  const { status: mediatorStatus, expiry } =
    mediatorAffirmationStatusToStatus(rawMediatorAffirmation);

  const excludeCriteria: AffirmationStatus[] = [];
  let errorMessage: string;
  let transaction:
    | PolymeshTx<[u64, PolymeshPrimitivesIdentityIdPortfolioId[]]>
    | PolymeshTx<[u64, Option<Moment>]>
    | PolymeshTx<[u64]>
    | null = null;

  switch (operation) {
    case InstructionAffirmationOperation.Reject: {
      return {
        transaction: settlementTx.rejectInstruction,
        resolver: instruction,
        feeMultiplier: totalLegAmount,
        args: [rawInstructionId, rawPortfolioIds[0]],
      };
    }
    case InstructionAffirmationOperation.AffirmAsMediator: {
      if (mediatorStatus === AffirmationStatus.Unknown) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'The signer is not a mediator',
          data: { signer: signer.did, instructionId: id.toString() },
        });
      }

      const givenExpiry = args.expiry;
      const now = new Date();
      if (givenExpiry && givenExpiry < now) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'The expiry must be in the future',
          data: { expiry, now },
        });
      }

      const rawExpiry = optionize(dateToMoment)(givenExpiry, context);

      return {
        transaction: settlementTx.affirmInstructionAsMediator,
        resolver: instruction,
        args: [rawInstructionId, rawExpiry],
      };
    }

    case InstructionAffirmationOperation.WithdrawAsMediator: {
      if (mediatorStatus !== AffirmationStatus.Affirmed) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'The signer is not a mediator that has already affirmed the instruction',
          data: { signer: signer.did, instructionId: id.toString() },
        });
      }

      return {
        transaction: settlementTx.withdrawAffirmationAsMediator,
        resolver: instruction,
        args: [rawInstructionId],
      };
    }

    case InstructionAffirmationOperation.RejectAsMediator: {
      if (mediatorStatus === AffirmationStatus.Unknown) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'The signer is not a mediator for the instruction',
          data: { did: signer.did, instructionId: id.toString() },
        });
      }

      return {
        transaction: settlementTx.rejectInstructionAsMediator,
        resolver: instruction,
        args: [rawInstructionId, optionize(bigNumberToU64)(undefined, context)],
      };
    }
    case InstructionAffirmationOperation.Affirm: {
      excludeCriteria.push(AffirmationStatus.Affirmed);
      errorMessage = 'The Instruction is already affirmed';
      transaction = settlementTx.affirmInstruction;

      break;
    }
    case InstructionAffirmationOperation.Withdraw: {
      excludeCriteria.push(AffirmationStatus.Pending);
      errorMessage = 'The instruction is not affirmed';
      transaction = settlementTx.withdrawAffirmation;

      break;
    }
  }

  const validPortfolioIds = rawPortfolioIds.filter(
    (_, index) => !excludeCriteria.includes(affirmationStatuses[index])
  );

  if (!validPortfolioIds.length) {
    throw new PolymeshError({
      code: ErrorCode.NoDataChange,
      message: errorMessage,
    });
  }

  return {
    transaction,
    resolver: instruction,
    feeMultiplier: senderLegAmount,
    args: [rawInstructionId, validPortfolioIds],
  };
}

/**
 * @hidden
 */
export async function getAuthorization(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  { operation }: ModifyInstructionAffirmationParams
): Promise<ProcedureAuthorization> {
  const {
    storage: { portfolios },
  } = this;

  let transactions: TxTag[];

  switch (operation) {
    case InstructionAffirmationOperation.Affirm: {
      transactions = [TxTags.settlement.AffirmInstruction];

      break;
    }
    case InstructionAffirmationOperation.Withdraw: {
      transactions = [TxTags.settlement.WithdrawAffirmation];

      break;
    }
    case InstructionAffirmationOperation.Reject: {
      transactions = [TxTags.settlement.RejectInstruction];

      break;
    }
    case InstructionAffirmationOperation.AffirmAsMediator: {
      transactions = [TxTags.settlement.AffirmInstructionAsMediator];

      break;
    }
    case InstructionAffirmationOperation.WithdrawAsMediator: {
      transactions = [TxTags.settlement.WithdrawAffirmationAsMediator];

      break;
    }
    case InstructionAffirmationOperation.RejectAsMediator: {
      transactions = [TxTags.settlement.RejectInstructionAsMediator];

      break;
    }
  }

  return {
    permissions: {
      portfolios,
      transactions,
      assets: [],
    },
  };
}

/**
 * @hidden
 */
function extractPortfolioParams(params: ModifyInstructionAffirmationParams): PortfolioLike[] {
  const { operation } = params;
  let portfolioParams: PortfolioLike[] = [];
  if (operation === InstructionAffirmationOperation.Reject) {
    const { portfolio } = params;
    if (portfolio) {
      portfolioParams.push(portfolio);
    }
  } else if (
    operation === InstructionAffirmationOperation.Affirm ||
    operation === InstructionAffirmationOperation.Withdraw
  ) {
    const { portfolios } = params;
    if (portfolios) {
      portfolioParams = [...portfolioParams, ...portfolios];
    }
  }
  return portfolioParams;
}

/**
 * @hidden
 */
const isParam = (
  legPortfolio: DefaultPortfolio | NumberedPortfolio,
  portfolioIdParams: PortfolioId[]
): boolean => {
  const { did: legPortfolioDid, number: legPortfolioNumber } =
    portfolioLikeToPortfolioId(legPortfolio);
  return (
    !portfolioIdParams.length ||
    portfolioIdParams.some(
      ({ did, number }) =>
        did === legPortfolioDid &&
        new BigNumber(legPortfolioNumber || 0).eq(new BigNumber(number || 0))
    )
  );
};

/**
 * @hidden
 */
const assemblePortfolios = async (
  result: [(DefaultPortfolio | NumberedPortfolio)[], BigNumber],
  from: DefaultPortfolio | NumberedPortfolio,
  to: DefaultPortfolio | NumberedPortfolio,
  signingDid: string,
  portfolioIdParams: PortfolioId[]
): Promise<[(DefaultPortfolio | NumberedPortfolio)[], BigNumber]> => {
  const [fromExists, toExists] = await Promise.all([from.exists(), to.exists()]);

  const [custodiedPortfolios, amount] = result;

  let res = [...custodiedPortfolios];
  let legAmount = amount;

  const checkCustody = async (
    legPortfolio: DefaultPortfolio | NumberedPortfolio,
    exists: boolean,
    sender: boolean
  ): Promise<void> => {
    if (exists) {
      const isCustodied = await legPortfolio.isCustodiedBy({ identity: signingDid });
      if (isCustodied) {
        res = [...res, legPortfolio];
        if (sender) {
          legAmount = legAmount.plus(1);
        }
      }
    } else if (legPortfolio.owner.did === signingDid) {
      res = [...res, legPortfolio];
    }
  };

  const promises = [];
  if (isParam(from, portfolioIdParams)) {
    promises.push(checkCustody(from, fromExists, true));
  }

  if (isParam(to, portfolioIdParams)) {
    promises.push(checkCustody(to, toExists, false));
  }

  await Promise.all(promises);

  return tuple(res, legAmount);
};

/**
 * @hidden
 */
export async function prepareStorage(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  params: ModifyInstructionAffirmationParams
): Promise<Storage> {
  const { context } = this;
  const { id } = params;

  const portfolioParams = extractPortfolioParams(params);

  const portfolioIdParams = portfolioParams.map(portfolioLikeToPortfolioId);

  const instruction = new Instruction({ id }, context);
  const [{ data: legs }, signer] = await Promise.all([
    instruction.getLegs(),
    context.getSigningIdentity(),
  ]);

  const [portfolios, senderLegAmount] = await P.reduce<
    Leg,
    [(DefaultPortfolio | NumberedPortfolio)[], BigNumber]
  >(
    legs,
    async (result, { from, to }) =>
      assemblePortfolios(result, from, to, signer.did, portfolioIdParams),
    [[], new BigNumber(0)]
  );

  return {
    portfolios,
    portfolioParams,
    senderLegAmount,
    totalLegAmount: new BigNumber(legs.length),
    signer,
  };
}

/**
 * @hidden
 */
export const modifyInstructionAffirmation = (): Procedure<
  ModifyInstructionAffirmationParams,
  Instruction,
  Storage
> => new Procedure(prepareModifyInstructionAffirmation, getAuthorization, prepareStorage);
