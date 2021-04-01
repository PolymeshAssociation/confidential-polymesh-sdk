import { ISubmittableResult } from '@polkadot/types/types';

import { Checkpoint, Context, PostTransactionValue, Procedure, SecurityToken } from '~/internal';
import { RoleType, TxTags } from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import { stringToTicker, u64ToBigNumber } from '~/utils/conversion';
import { findEventRecord } from '~/utils/internal';

/**
 * @hidden
 */
export interface Params {
  ticker: string;
}

/**
 * @hidden
 */
export const createCheckpointResolver = (ticker: string, context: Context) => (
  receipt: ISubmittableResult
): Checkpoint => {
  const { data } = findEventRecord(receipt, 'checkpoint', 'CheckpointCreated');
  const id = u64ToBigNumber(data[2]);

  return new Checkpoint({ ticker, id }, context);
};

/**
 * @hidden
 */
export async function prepareCreateCheckpoint(
  this: Procedure<Params, Checkpoint>,
  args: Params
): Promise<PostTransactionValue<Checkpoint>> {
  const { context } = this;
  const { ticker } = args;

  const rawTicker = stringToTicker(ticker, context);

  const [checkpoint] = this.addTransaction(
    context.polymeshApi.tx.checkpoint.createCheckpoint,
    {
      resolvers: [createCheckpointResolver(ticker, context)],
    },
    rawTicker
  );

  return checkpoint;
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params, Checkpoint>,
  { ticker }: Params
): ProcedureAuthorization {
  return {
    identityRoles: [{ type: RoleType.TokenOwner, ticker }],
    signerPermissions: {
      transactions: [TxTags.checkpoint.CreateCheckpoint],
      tokens: [new SecurityToken({ ticker }, this.context)],
      portfolios: [],
    },
  };
}

/**
 * @hidden
 */
export const createCheckpoint = new Procedure(prepareCreateCheckpoint, getAuthorization);
