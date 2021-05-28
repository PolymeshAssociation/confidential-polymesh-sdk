import BigNumber from 'bignumber.js';

import { PolymeshError, Procedure, Venue } from '~/internal';
import { ErrorCode, RoleType, TxTags, VenueType } from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import { numberToU64, stringToVenueDetails, venueTypeToMeshVenueType } from '~/utils/conversion';
import { optionize } from '~/utils/internal';

export type ModifyVenueParams =
  | {
      description?: string;
      type: VenueType;
    }
  | {
      description: string;
      type?: VenueType;
    }
  | {
      description: string;
      type: VenueType;
    };

/**
 * @hidden
 */
export type Params = { venueId: BigNumber } & ModifyVenueParams;

/**
 * @hidden
 */
export async function prepareModifyVenue(
  this: Procedure<Params, void>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;

  const { venueId, description, type } = args;

  const venue = new Venue({ id: venueId }, context);

  const { description: currentDescription, type: currentType } = await venue.details();

  if (currentDescription === description) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'New description is the same as the current one',
    });
  }

  if (currentType === type) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'New type is the same as the current one',
    });
  }

  this.addTransaction(
    tx.settlement.updateVenue,
    {},
    numberToU64(venueId, context),
    optionize(stringToVenueDetails)(description, context),
    optionize(venueTypeToMeshVenueType)(type, context)
  );
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params, void>,
  { venueId }: Params
): ProcedureAuthorization {
  return {
    identityRoles: [{ type: RoleType.VenueOwner, venueId }],
    signerPermissions: {
      tokens: [],
      portfolios: [],
      transactions: [TxTags.settlement.UpdateVenue],
    },
  };
}

/**
 * @hidden
 */
export const modifyVenue = (): Procedure<Params, void> =>
  new Procedure(prepareModifyVenue, getAuthorization);