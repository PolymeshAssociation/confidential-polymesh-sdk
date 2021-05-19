import { assertDistributionOpen } from '~/api/procedures/utils';
import { DividendDistribution, PolymeshError, Procedure } from '~/internal';
import { ErrorCode, TxTags } from '~/types';
import { corporateActionIdentifierToCaId } from '~/utils/conversion';

/**
 * @hidden
 */
export interface Params {
  distribution: DividendDistribution;
}

/**
 * @hidden
 */
export async function prepareClaimDividends(
  this: Procedure<Params, void>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;
  const {
    distribution,
    distribution: { id: localId, ticker, paymentDate, expiryDate },
  } = args;

  assertDistributionOpen(paymentDate, expiryDate);

  const identity = await context.getCurrentIdentity();

  const participant = await distribution.getParticipant({ identity });

  if (!participant) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The current Identity is not included in this Distribution',
    });
  }

  const { paid } = participant;

  if (paid) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The current Identity has already claimed dividends',
    });
  }

  const rawCaId = corporateActionIdentifierToCaId({ ticker, localId }, context);

  this.addTransaction(tx.capitalDistribution.claim, {}, rawCaId);
}

/**
 * @hidden
 */
export const claimDividends = (): Procedure<Params, void> =>
  new Procedure(prepareClaimDividends, {
    signerPermissions: {
      transactions: [TxTags.capitalDistribution.Claim],
      tokens: [],
      portfolios: [],
    },
  });
