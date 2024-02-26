import { PalletConfidentialAssetConfidentialAssetDetails } from '@polkadot/types/lookup';
import { Option } from '@polkadot/types-codec';
import BigNumber from 'bignumber.js';

import {
  burnConfidentialAssets,
  ConfidentialAccount,
  ConfidentialVenue,
  Context,
  Entity,
  Identity,
  issueConfidentialAssets,
  PolymeshError,
  setConfidentialVenueFiltering,
  toggleFreezeConfidentialAsset,
} from '~/internal';
import {
  confidentialAssetQuery,
  transactionHistoryByConfidentialAssetQuery,
} from '~/middleware/queries';
import { Query } from '~/middleware/types';
import {
  BurnConfidentialAssetParams,
  ConfidentialAssetDetails,
  ConfidentialAssetTransactionHistory,
  ConfidentialVenueFilteringDetails,
  ErrorCode,
  EventIdentifier,
  GroupedAuditors,
  IssueConfidentialAssetParams,
  NoArgsProcedureMethod,
  ProcedureMethod,
  ResultSet,
  SetVenueFilteringParams,
} from '~/types';
import { Ensured } from '~/types/utils';
import {
  boolToBoolean,
  bytesToString,
  identityIdToString,
  middlewareAssetHistoryToTransactionHistory,
  middlewareEventDetailsToEventIdentifier,
  serializeConfidentialAssetId,
  u64ToBigNumber,
  u128ToBigNumber,
} from '~/utils/conversion';
import {
  assertCaAssetValid,
  calculateNextKey,
  createProcedureMethod,
  optionize,
} from '~/utils/internal';

/**
 * Properties that uniquely identify a ConfidentialAsset
 */
export interface UniqueIdentifiers {
  /**
   * ID of the asset
   *
   * @note the value can either be a valid asset ID like `76702175-d8cb-e3a5-5a19-734433351e26` or can be a string representing the asset ID without the `-` like `76702175d8cbe3a55a19734433351e26`
   */
  id: string;
}

/**
 * Represents a ConfidentialAsset in the Polymesh blockchain
 */
export class ConfidentialAsset extends Entity<UniqueIdentifiers, string> {
  /**
   * ID of the Confidential Asset
   */
  public id: string;

  /**
   * @hidden
   * Check if a value is of type {@link UniqueIdentifiers}
   */
  public static override isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { id } = identifier as UniqueIdentifiers;

    return typeof id === 'string';
  }

  /**
   * @hidden
   */
  constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { id } = identifiers;

    this.id = assertCaAssetValid(id);

    this.issue = createProcedureMethod(
      {
        getProcedureAndArgs: args => [
          issueConfidentialAssets,
          { confidentialAsset: this, ...args },
        ],
      },
      context
    );

    this.burn = createProcedureMethod(
      {
        getProcedureAndArgs: args => [burnConfidentialAssets, { confidentialAsset: this, ...args }],
      },
      context
    );

    this.setVenueFiltering = createProcedureMethod(
      { getProcedureAndArgs: args => [setConfidentialVenueFiltering, { assetId: id, ...args }] },
      context
    );

    this.freeze = createProcedureMethod(
      {
        getProcedureAndArgs: () => [
          toggleFreezeConfidentialAsset,
          { confidentialAsset: this, freeze: true },
        ],
        voidArgs: true,
      },
      context
    );

    this.unfreeze = createProcedureMethod(
      {
        getProcedureAndArgs: () => [
          toggleFreezeConfidentialAsset,
          { confidentialAsset: this, freeze: false },
        ],
        voidArgs: true,
      },
      context
    );
  }

  /**
   * Issue a certain amount of this Confidential Asset in the given `account`
   *
   * @note
   *  - Only the owner can issue a Confidential Asset
   *  - Confidential Assets can only be issued in accounts owned by the signer
   */
  public issue: ProcedureMethod<IssueConfidentialAssetParams, ConfidentialAsset>;

  /**
   * Burn a certain amount of this Confidential Asset in the given `account`
   *
   * @note
   *  - Only the owner can burn a Confidential Asset
   *  - Confidential Assets can only be burned in accounts owned by the signer
   */
  public burn: ProcedureMethod<BurnConfidentialAssetParams, ConfidentialAsset>;

  /**
   * Enable/disable confidential venue filtering for this Confidential Asset and/or set allowed/disallowed Confidential Venues
   */
  public setVenueFiltering: ProcedureMethod<SetVenueFilteringParams, void>;

  /**
   * Freezes all trading for the asset
   */
  public freeze: NoArgsProcedureMethod<void>;

  /**
   * Allows trading to resume for the asset
   */
  public unfreeze: NoArgsProcedureMethod<void>;

  /**
   * @hidden
   */
  private async getDetailsFromChain(): Promise<
    Option<PalletConfidentialAssetConfidentialAssetDetails>
  > {
    const {
      id,
      context: {
        polymeshApi: {
          query: { confidentialAsset },
        },
      },
    } = this;

    const rawAssetId = serializeConfidentialAssetId(id);

    return confidentialAsset.details(rawAssetId);
  }

  /**
   * Retrieve the confidential Asset's details
   */
  public async details(): Promise<ConfidentialAssetDetails> {
    const { context, id } = this;
    const assetDetails = await this.getDetailsFromChain();

    if (assetDetails.isNone) {
      throw new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'The Confidential Asset does not exists',
        data: { id },
      });
    }

    const { data, ownerDid, totalSupply } = assetDetails.unwrap();

    return {
      data: bytesToString(data),
      totalSupply: u128ToBigNumber(totalSupply),
      owner: new Identity({ did: identityIdToString(ownerDid) }, context),
    };
  }

  /**
   * Retrieve all the auditors for this confidential Asset grouped by their type
   */
  public async getAuditors(): Promise<GroupedAuditors> {
    const {
      id,
      context: {
        polymeshApi: {
          query: { confidentialAsset },
        },
      },
      context,
    } = this;

    const rawAssetId = serializeConfidentialAssetId(id);

    const assetAuditors = await confidentialAsset.assetAuditors(rawAssetId);

    if (assetAuditors.isNone) {
      throw new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'The Confidential Asset does not exists',
        data: { id },
      });
    }

    const { auditors, mediators } = assetAuditors.unwrap();

    return {
      auditors: [...auditors].map(
        auditor => new ConfidentialAccount({ publicKey: auditor.toString() }, context)
      ),
      mediators: [...mediators].map(
        mediator => new Identity({ did: identityIdToString(mediator) }, context)
      ),
    };
  }

  /**
   * Retrieve venue filtering details for this Confidential Asset
   */
  public async getVenueFilteringDetails(): Promise<ConfidentialVenueFilteringDetails> {
    const {
      id,
      context: {
        polymeshApi: {
          query: { confidentialAsset },
        },
      },
      context,
    } = this;

    const rawAssetId = serializeConfidentialAssetId(id);

    const [rawVenueFiltering, rawVenueAllowList] = await Promise.all([
      confidentialAsset.venueFiltering(rawAssetId),
      confidentialAsset.venueAllowList.entries(rawAssetId),
    ]);

    if (!boolToBoolean(rawVenueFiltering)) {
      return { enabled: false };
    }

    const allowedConfidentialVenues: ConfidentialVenue[] = rawVenueAllowList.map(
      ([
        {
          args: [, rawVenueId],
        },
      ]) => new ConfidentialVenue({ id: u64ToBigNumber(rawVenueId) }, context)
    );
    return {
      enabled: true,
      allowedConfidentialVenues,
    };
  }

  /**
   * Determine whether this confidential Asset exists on chain
   */
  public async exists(): Promise<boolean> {
    const details = await this.getDetailsFromChain();
    return details.isSome;
  }

  /**
   * Return the confidential Asset's ID
   */
  public toHuman(): string {
    return this.id;
  }

  /**
   * Return transaction history for thee Asset
   *
   * @param opts.size - page size
   * @param opts.start - page offset
   *
   * @note uses the middleware V2
   * @note supports pagination
   */
  public async getTransactionHistory(
    opts: {
      size?: BigNumber;
      start?: BigNumber;
    } = {}
  ): Promise<ResultSet<ConfidentialAssetTransactionHistory>> {
    const { context, id } = this;
    const { size, start } = opts;

    const {
      data: {
        confidentialAssetHistories: { nodes: transactionsResult, totalCount },
      },
    } = await context.queryMiddleware<Ensured<Query, 'confidentialAssetHistories'>>(
      transactionHistoryByConfidentialAssetQuery(
        {
          assetId: id.toString(),
        },
        size,
        start
      )
    );

    const data = transactionsResult.map(entry => middlewareAssetHistoryToTransactionHistory(entry));

    const count = new BigNumber(totalCount);

    const next = calculateNextKey(count, data.length, start);

    return {
      data,
      next,
      count,
    };
  }

  /**
   * Retrieve the identifier data (block number, date and event index) of the event that was emitted when the ConfidentialAsset was created
   *
   * @note uses the middlewareV2
   * @note there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned
   */
  public async createdAt(): Promise<EventIdentifier | null> {
    const { context, id } = this;

    const {
      data: {
        confidentialAssets: {
          nodes: [asset],
        },
      },
    } = await context.queryMiddleware<Ensured<Query, 'confidentialAssets'>>(
      confidentialAssetQuery({
        id,
      })
    );

    return optionize(middlewareEventDetailsToEventIdentifier)(asset?.createdBlock, asset?.eventIdx);
  }

  /**
   * Returns whether the asset has suspended all trading or not
   */
  public async isFrozen(): Promise<boolean> {
    const {
      id,
      context: {
        polymeshApi: {
          query: { confidentialAsset },
        },
      },
    } = this;

    const rawAssetId = serializeConfidentialAssetId(id);

    const rawIsFrozen = await confidentialAsset.assetFrozen(rawAssetId);

    return boolToBoolean(rawIsFrozen);
  }
}
