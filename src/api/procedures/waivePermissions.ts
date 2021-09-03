import { Identity, PolymeshError, Procedure, SecurityToken } from '~/internal';
import { ErrorCode, RoleType, TxTags } from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import { stringToTicker } from '~/utils/conversion';
import { getTicker } from '~/utils/internal';

export interface WaivePermissionsParams {
  token: string | SecurityToken;
}

/**
 * @hidden
 */
export type Params = WaivePermissionsParams & {
  identity: Identity;
};

/**
 * @hidden
 */
export interface Storage {
  token: SecurityToken;
}

/**
 * @hidden
 */
export async function prepareWaivePermissions(
  this: Procedure<Params, void, Storage>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
    storage: { token },
  } = this;

  const { identity } = args;

  const tokensWithGroups = await identity.getTokenPermissions();

  const isAgent = tokensWithGroups.some(({ token: permissionedToken }) =>
    permissionedToken.isEqual(token)
  );

  if (!isAgent) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The Identity is not an Agent for the Security Token',
    });
  }

  const rawTicker = stringToTicker(token.ticker, context);

  this.addTransaction(tx.externalAgents.abdicate, {}, rawTicker);
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params, void, Storage>,
  { identity: { did } }: Params
): ProcedureAuthorization {
  const {
    storage: { token },
  } = this;
  return {
    signerPermissions: {
      transactions: [TxTags.externalAgents.Abdicate],
      tokens: [token],
      portfolios: [],
    },
    roles: [{ type: RoleType.Identity, did }],
  };
}

/**
 * @hidden
 */
export function prepareStorage(this: Procedure<Params, void, Storage>, { token }: Params): Storage {
  const { context } = this;

  const ticker = getTicker(token);

  return {
    token: new SecurityToken({ ticker }, context),
  };
}

/**
 * @hidden
 */
export const waivePermissions = (): Procedure<Params, void, Storage> =>
  new Procedure(prepareWaivePermissions, getAuthorization, prepareStorage);
