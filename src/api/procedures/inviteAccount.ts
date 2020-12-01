import {
  Account,
  DefaultPortfolio,
  NumberedPortfolio,
  PolymeshError,
  Procedure,
  SecurityToken,
} from '~/internal';
import { TxTag } from '~/polkadot/types';
import { AuthorizationType, ErrorCode, Permissions } from '~/types';
import { SignerType } from '~/types/internal';
import {
  authorizationToAuthorizationData,
  dateToMoment,
  signerToString,
  signerValueToSignatory,
} from '~/utils/conversion';

export interface InviteAccountParams {
  targetAccount: string | Account;
  permissions?: {
    tokens?: (string | SecurityToken)[];
    transactions?: TxTag[];
    portfolios?: (DefaultPortfolio | NumberedPortfolio)[];
  };
  expiry?: Date;
}

/**
 * @hidden
 */
export async function prepareInviteAccount(
  this: Procedure<InviteAccountParams, void>,
  args: InviteAccountParams
): Promise<void> {
  const {
    context: {
      polymeshApi: {
        tx: { identity },
      },
    },
    context,
  } = this;

  const { targetAccount, permissions, expiry } = args;

  const address = signerToString(targetAccount);

  let account: Account;

  if (targetAccount instanceof Account) {
    account = targetAccount;
  } else {
    account = new Account({ address: targetAccount }, context);
  }

  const currentIdentity = await context.getCurrentIdentity();

  const [authorizationRequests, secondaryKeys, existingIdentity] = await Promise.all([
    currentIdentity.authorizations.getSent(),
    context.getSecondaryKeys(),
    account.getIdentity(),
  ] as const);

  if (existingIdentity) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The target Account is already part of an Identity',
    });
  }

  const isPresent = !!secondaryKeys.find(({ signer }) => signerToString(signer) === address);

  if (isPresent) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The target Account is already a secondary key for this Identity',
    });
  }

  const hasPendingAuth = !!authorizationRequests.data.find(authorizationRequest => {
    const {
      target,
      data: { type },
    } = authorizationRequest;
    return (
      signerToString(target) === address &&
      !authorizationRequest.isExpired() &&
      type === AuthorizationType.JoinIdentity
    );
  });

  if (hasPendingAuth) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The target Account already has a pending invitation to join this Identity',
    });
  }

  const rawSignatory = signerValueToSignatory(
    { type: SignerType.Account, value: address },
    context
  );

  let authorizationValue = {
    tokens: [],
    transactions: [],
    portfolios: [],
  } as Permissions;

  if (permissions) {
    const { tokens, transactions, portfolios } = permissions;

    const rawTokens =
      tokens?.map(ticker =>
        typeof ticker !== 'string' ? ticker : new SecurityToken({ ticker }, context)
      ) ?? [];

    authorizationValue = {
      tokens: rawTokens,
      transactions: transactions ?? [],
      portfolios: portfolios ?? [],
    };
  }

  const rawAuthorizationData = authorizationToAuthorizationData(
    {
      type: AuthorizationType.JoinIdentity,
      value: authorizationValue,
    },
    context
  );
  const rawExpiry = expiry ? dateToMoment(expiry, context) : null;

  this.addTransaction(identity.addAuthorization, {}, rawSignatory, rawAuthorizationData, rawExpiry);
}

/**
 * @hidden
 */
export const inviteAccount = new Procedure(prepareInviteAccount);
