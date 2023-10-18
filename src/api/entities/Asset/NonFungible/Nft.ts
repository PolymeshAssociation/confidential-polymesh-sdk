import BigNumber from 'bignumber.js';

import { Context, Entity, NftCollection, redeemNft } from '~/internal';
import { NftMetadata, OptionalArgsProcedureMethod, RedeemNftParams } from '~/types';
import {
  bigNumberToU64,
  bytesToString,
  meshMetadataKeyToMetadataKey,
  u64ToBigNumber,
} from '~/utils/conversion';
import { createProcedureMethod } from '~/utils/internal';

export type NftUniqueIdentifiers = {
  ticker: string;
  id: BigNumber;
};

export interface HumanReadable {
  id: string;
  collection: string;
}

/**
 * Class used to manage Nft functionality
 */
export class Nft extends Entity<NftUniqueIdentifiers, HumanReadable> {
  public id: BigNumber;

  public collection: NftCollection;

  /**
   * Redeem (or "burns") the NFT
   */
  public redeem: OptionalArgsProcedureMethod<RedeemNftParams, void>;

  /**
   * @hidden
   * Check if a value is of type {@link UniqueIdentifiers}
   */
  public static override isUniqueIdentifiers(
    identifier: unknown
  ): identifier is NftUniqueIdentifiers {
    const { ticker, id } = identifier as NftUniqueIdentifiers;

    return typeof ticker === 'string' && id instanceof BigNumber;
  }

  /**
   * @hidden
   */
  constructor(identifiers: NftUniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { ticker, id } = identifiers;

    this.id = id;

    this.collection = new NftCollection({ ticker }, context);

    this.redeem = createProcedureMethod(
      { getProcedureAndArgs: args => [redeemNft, { ticker, id, ...args }], optionalArgs: true },
      context
    );
  }

  /**
   * Get metadata associated with this token
   */
  public async getMetadata(): Promise<NftMetadata[]> {
    const {
      id,
      context,
      collection,
      context: {
        polymeshApi: { query },
      },
    } = this;

    const collectionId = await collection.getCollectionId();

    const rawCollectionId = bigNumberToU64(collectionId, context);
    const rawId = bigNumberToU64(id, context);

    const entries = await query.nft.metadataValue.entries([rawCollectionId, rawId]);

    return entries.map(([storageKey, rawValue]) => {
      const rawMetadataKey = storageKey.args[1];
      const key = meshMetadataKeyToMetadataKey(rawMetadataKey, collection.ticker);
      const value = bytesToString(rawValue);

      return { key, value };
    });
  }

  /**
   * Determine if the NFT exists on chain
   *
   * @note This method returns true, even if the token has been redeemed/burned
   */
  public async exists(): Promise<boolean> {
    const {
      context,
      context: {
        polymeshApi: { query },
      },
      collection,
      id,
    } = this;
    const collectionId = await collection.getCollectionId();
    const rawCollectionId = bigNumberToU64(collectionId, context);

    // note: "nextId" is actually the last used id
    const rawNextId = await query.nft.nextNFTId(rawCollectionId);
    const nextId = u64ToBigNumber(rawNextId);

    return id.lte(nextId);
  }

  /**
   * @hidden
   */
  public toHuman(): HumanReadable {
    const {
      collection: { ticker },
      id,
    } = this;

    return {
      collection: ticker,
      id: id.toString(),
    };
  }
}