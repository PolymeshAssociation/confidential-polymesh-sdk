import { Claim as MeshClaim } from 'polymesh-types/types';

import { Identity } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { IdentityId } from '~/polkadot';
import { ClaimTargets, ErrorCode } from '~/types';
import { claimToMeshClaim, stringToIdentityId, valueToDid } from '~/utils';

interface RevokeClaimItem {
  target: IdentityId;
  claim: MeshClaim;
}

export interface RevokeClaimsParams {
  claims: Omit<ClaimTargets, 'expiry'>[];
}

/**
 * @hidden
 */
export async function prepareRevokeClaims(
  this: Procedure<RevokeClaimsParams, void>,
  args: RevokeClaimsParams
): Promise<void> {
  const { claims } = args;

  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;

  const revokeClaimItems: RevokeClaimItem[] = [];
  const allTargets: (string | Identity)[] = [];

  claims.forEach(({ targets, claim }) => {
    targets.forEach(target => {
      allTargets.push(target);
      revokeClaimItems.push({
        target: stringToIdentityId(valueToDid(target), context),
        claim: claimToMeshClaim(claim, context),
      });
    });
  });

  const nonExistentDids: string[] = await context.getInvalidDids(allTargets);

  // TODO @monitz87: check if the claim exists when the harvester is done

  if (nonExistentDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `Some of the supplied identity IDs do not exist: ${nonExistentDids.join(', ')}`,
    });
  }

  this.addTransaction(tx.identity.revokeClaimsBatch, {}, revokeClaimItems);
}

export const revokeClaims = new Procedure(prepareRevokeClaims);