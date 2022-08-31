import { Bytes, Option, u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';

import { Asset, MetadataEntry, Namespace, PolymeshError } from '~/internal';
import { ErrorCode, MetadataType } from '~/types';
import { bigNumberToU64, stringToTicker, u64ToBigNumber } from '~/utils/conversion';

/**
 * Handles all Asset Metadata related functionality
 */
export class Metadata extends Namespace<Asset> {
  /**
   * Retrieve all the Metadata keys for this particular asset
   */
  public async get(): Promise<MetadataEntry[]> {
    const {
      context: {
        polymeshApi: {
          query: {
            asset: { assetMetadataLocalKeyToName, assetMetadataGlobalKeyToName },
          },
        },
      },
      context,
      parent: { ticker },
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    const [rawGlobalKeys, rawLocalKeys] = await Promise.all([
      assetMetadataGlobalKeyToName.entries(),
      assetMetadataLocalKeyToName.entries(rawTicker),
    ]);

    const assembleResult = (rawId: u64, type: MetadataType): MetadataEntry =>
      new MetadataEntry({ ticker, type, id: u64ToBigNumber(rawId) }, context);

    return [
      ...rawGlobalKeys.map(
        ([
          {
            args: [rawId],
          },
        ]) => assembleResult(rawId, MetadataType.Global)
      ),
      ...rawLocalKeys.map(
        ([
          {
            args: [, rawId],
          },
        ]) => assembleResult(rawId, MetadataType.Local)
      ),
    ];
  }

  /**
   * Retrieve a single Asset Metadata by its ID and type
   *
   * @throws if there is no Asset Metadata with the passed ID and specified type
   */
  public async getOne(args: { type: MetadataType; id: BigNumber }): Promise<MetadataEntry> {
    const {
      context: {
        polymeshApi: {
          query: {
            asset: { assetMetadataLocalKeyToName, assetMetadataGlobalKeyToName },
          },
        },
      },
      context,
      parent: { ticker },
    } = this;

    const { id, type } = args;

    const rawId = bigNumberToU64(id, context);

    let rawName: Option<Bytes>;
    if (type === MetadataType.Global) {
      rawName = await assetMetadataGlobalKeyToName(rawId);
    } else {
      const rawTicker = stringToTicker(ticker, context);
      rawName = await assetMetadataLocalKeyToName(rawTicker, rawId);
    }

    if (rawName.isEmpty) {
      throw new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: `There is no ${type.toLowerCase()} Asset Metadata with id "${id.toString()}"`,
      });
    }

    return new MetadataEntry({ ticker, type, id }, context);
  }
}
