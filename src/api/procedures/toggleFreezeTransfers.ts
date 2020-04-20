import { SecurityToken } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { ErrorCode, Role, RoleType } from '~/types';
import { stringToTicker } from '~/utils';

export interface ToggleFreezeTransfersParams {
  freeze: boolean;
}

export type Params = ToggleFreezeTransfersParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareToggleFreezeTransfers(
  this: Procedure<Params, SecurityToken>,
  args: Params
): Promise<SecurityToken> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;
  const { ticker, freeze } = args;

  const rawTicker = stringToTicker(ticker, context);

  const securityToken = new SecurityToken({ ticker }, context);

  const areFrozen = await securityToken.transfers.areFrozen();

  if (freeze) {
    if (areFrozen) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'The Security Token is already frozen',
      });
    }

    this.addTransaction(tx.asset.freeze, {}, rawTicker);
  } else {
    if (!areFrozen) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'The Security Token is already unfrozen',
      });
    }

    this.addTransaction(tx.asset.unfreeze, {}, rawTicker);
  }

  return securityToken;
}

/**
 * @hidden
 */
export function getRequiredRoles({ ticker }: Params): Role[] {
  return [{ type: RoleType.TokenOwner, ticker }];
}

export const toggleFreezeTransfers = new Procedure(prepareToggleFreezeTransfers, getRequiredRoles);