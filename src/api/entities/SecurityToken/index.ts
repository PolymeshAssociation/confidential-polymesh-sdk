import { Option, StorageKey } from '@polkadot/types';
import {
  AgentGroup,
  Counter,
  IdentityId,
  SecurityToken as MeshSecurityToken,
  Ticker,
} from 'polymesh-types/types';

import {
  Context,
  controllerTransfer,
  ControllerTransferParams,
  Entity,
  Identity,
  modifyPrimaryIssuanceAgent,
  ModifyPrimaryIssuanceAgentParams,
  modifyToken,
  ModifyTokenParams,
  redeemToken,
  RedeemTokenParams,
  // removePrimaryIssuanceAgent,
  toggleFreezeTransfers,
  transferTokenOwnership,
  TransferTokenOwnershipParams,
} from '~/internal';
import { eventByIndexedArgs } from '~/middleware/queries';
import { EventIdEnum, ModuleIdEnum, Query } from '~/middleware/types';
import {
  Ensured,
  EventIdentifier,
  ProcedureMethod,
  SubCallback,
  TokenIdentifier,
  UnsubCallback,
} from '~/types';
import { MAX_TICKER_LENGTH } from '~/utils/constants';
import {
  assetIdentifierToTokenIdentifier,
  assetNameToString,
  assetTypeToString,
  balanceToBigNumber,
  boolToBoolean,
  fundingRoundNameToString,
  identityIdToString,
  middlewareEventToEventIdentifier,
  stringToTicker,
  tickerToDid,
  u64ToBigNumber,
} from '~/utils/conversion';
import { createProcedureMethod, optionize, padString } from '~/utils/internal';

import { Checkpoints } from './Checkpoints';
import { Compliance } from './Compliance';
import { CorporateActions } from './CorporateActions';
import { Documents } from './Documents';
import { Issuance } from './Issuance';
import { Offerings } from './Offerings';
import { Settlements } from './Settlements';
import { TokenHolders } from './TokenHolders';
import { TransferRestrictions } from './TransferRestrictions';
import { SecurityTokenDetails } from './types';

/**
 * Properties that uniquely identify a Security Token
 */
export interface UniqueIdentifiers {
  /**
   * ticker of the security token
   */
  ticker: string;
}

/**
 * Class used to manage all the Security Token functionality
 */
export class SecurityToken extends Entity<UniqueIdentifiers> {
  /**
   * @hidden
   * Check if a value is of type [[UniqueIdentifiers]]
   */
  public static isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { ticker } = identifier as UniqueIdentifiers;

    return typeof ticker === 'string';
  }

  /**
   * identity id of the Security Token
   */
  public did: string;

  /**
   * ticker of the Security Token
   */
  public ticker: string;

  // Namespaces
  public documents: Documents;
  public settlements: Settlements;
  public tokenHolders: TokenHolders;
  public issuance: Issuance;
  public compliance: Compliance;
  public transferRestrictions: TransferRestrictions;
  public offerings: Offerings;
  public checkpoints: Checkpoints;
  public corporateActions: CorporateActions;

  /**
   * @hidden
   */
  constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { ticker } = identifiers;

    this.ticker = ticker;
    this.did = tickerToDid(ticker);

    this.documents = new Documents(this, context);
    this.settlements = new Settlements(this, context);
    this.tokenHolders = new TokenHolders(this, context);
    this.issuance = new Issuance(this, context);
    this.compliance = new Compliance(this, context);
    this.transferRestrictions = new TransferRestrictions(this, context);
    this.offerings = new Offerings(this, context);
    this.checkpoints = new Checkpoints(this, context);
    this.corporateActions = new CorporateActions(this, context);

    this.transferOwnership = createProcedureMethod(
      { getProcedureAndArgs: args => [transferTokenOwnership, { ticker, ...args }] },
      context
    );
    this.modify = createProcedureMethod(
      { getProcedureAndArgs: args => [modifyToken, { ticker, ...args }] },
      context
    );
    this.freeze = createProcedureMethod(
      { getProcedureAndArgs: () => [toggleFreezeTransfers, { ticker, freeze: true }] },
      context
    );
    this.unfreeze = createProcedureMethod(
      { getProcedureAndArgs: () => [toggleFreezeTransfers, { ticker, freeze: false }] },
      context
    );
    this.modifyPrimaryIssuanceAgent = createProcedureMethod(
      { getProcedureAndArgs: args => [modifyPrimaryIssuanceAgent, { ticker, ...args }] },
      context
    );
    // this.removePrimaryIssuanceAgent = createProcedureMethod(
    //   { getProcedureAndArgs: () => [removePrimaryIssuanceAgent, { ticker }] },
    //   context
    // );
    this.redeem = createProcedureMethod(
      { getProcedureAndArgs: args => [redeemToken, { ticker, ...args }] },
      context
    );
    this.controllerTransfer = createProcedureMethod(
      { getProcedureAndArgs: args => [controllerTransfer, { ticker, ...args }] },
      context
    );
  }

  /**
   * Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
   *   by the destinatary
   *
   * @note this will create [[AuthorizationRequest | Authorization Requests]] which have to be accepted by
   *   the corresponding [[Account | Accounts]] and/or [[Identity | Identities]]. An Account or Identity can
   *   fetch its pending Authorization Requests by calling `authorizations.getReceived`
   *
   * @note required role:
   *   - Security Token Owner
   */
  public transferOwnership: ProcedureMethod<TransferTokenOwnershipParams, SecurityToken>;

  /**
   * Modify some properties of the Security Token
   *
   * @throws if the passed values result in no changes being made to the token
   *
   * @note required role:
   *   - Security Token Owner
   */
  public modify: ProcedureMethod<ModifyTokenParams, SecurityToken>;

  /**
   * Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner
   *
   * @note can be subscribed to
   */
  public details(): Promise<SecurityTokenDetails>;
  public details(callback: SubCallback<SecurityTokenDetails>): Promise<UnsubCallback>;

  // eslint-disable-next-line require-jsdoc
  public async details(
    callback?: SubCallback<SecurityTokenDetails>
  ): Promise<SecurityTokenDetails | UnsubCallback> {
    const {
      context: {
        polymeshApi: {
          query: { asset, externalAgents },
        },
      },
      ticker,
      context,
    } = this;

    /* eslint-disable @typescript-eslint/naming-convention */
    const assembleResult = (
      { name, total_supply, divisible, owner_did, asset_type }: MeshSecurityToken,
      agentGroups: [StorageKey<[Ticker, IdentityId]>, Option<AgentGroup>][]
    ): SecurityTokenDetails => {
      const primaryIssuanceAgents: Identity[] = [];

      agentGroups.forEach(([storageKey, agentGroup]) => {
        if (agentGroup.isSome) {
          const rawAgentGroup = agentGroup.unwrap();
          if (rawAgentGroup.isPolymeshV1Pia) {
            primaryIssuanceAgents.push(
              new Identity({ did: identityIdToString(storageKey.args[1]) }, context)
            );
          }
        }
      });

      const owner = new Identity({ did: identityIdToString(owner_did) }, context);
      return {
        assetType: assetTypeToString(asset_type),
        isDivisible: boolToBoolean(divisible),
        name: assetNameToString(name),
        owner,
        totalSupply: balanceToBigNumber(total_supply),
        primaryIssuanceAgents,
      };
    };
    /* eslint-enable @typescript-eslint/naming-convention */

    const rawTicker = stringToTicker(ticker, context);

    const groupOfAgentPromise = externalAgents.groupOfAgent.entries(rawTicker);

    if (callback) {
      const groupOfAgents = await groupOfAgentPromise;

      return asset.tokens(rawTicker, securityToken => {
        callback(assembleResult(securityToken, groupOfAgents));
      });
    }

    const [token, groupOfAgent] = await Promise.all([asset.tokens(rawTicker), groupOfAgentPromise]);

    return assembleResult(token, groupOfAgent);
  }

  /**
   * Retrieve the Security Token's funding round
   *
   * @note can be subscribed to
   */
  public currentFundingRound(): Promise<string>;
  public currentFundingRound(callback: SubCallback<string>): Promise<UnsubCallback>;

  // eslint-disable-next-line require-jsdoc
  public async currentFundingRound(
    callback?: SubCallback<string>
  ): Promise<string | UnsubCallback> {
    const {
      context: {
        polymeshApi: {
          query: { asset },
        },
      },
      ticker,
      context,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    if (callback) {
      return asset.fundingRound(rawTicker, round => {
        callback(fundingRoundNameToString(round));
      });
    }

    const fundingRound = await asset.fundingRound(rawTicker);
    return fundingRoundNameToString(fundingRound);
  }

  /**
   * Retrieve the Security Token's asset identifiers list
   *
   * @note can be subscribed to
   */
  public getIdentifiers(): Promise<TokenIdentifier[]>;
  public getIdentifiers(callback?: SubCallback<TokenIdentifier[]>): Promise<UnsubCallback>;

  // eslint-disable-next-line require-jsdoc
  public async getIdentifiers(
    callback?: SubCallback<TokenIdentifier[]>
  ): Promise<TokenIdentifier[] | UnsubCallback> {
    const {
      context: {
        polymeshApi: {
          query: { asset },
        },
      },
      ticker,
      context,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    if (callback) {
      return asset.identifiers(rawTicker, identifiers => {
        callback(identifiers.map(assetIdentifierToTokenIdentifier));
      });
    }

    const assetIdentifiers = await asset.identifiers(rawTicker);

    return assetIdentifiers.map(assetIdentifierToTokenIdentifier);
  }

  /**
   * Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created
   *
   * @note uses the middleware
   * @note there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned
   */
  public async createdAt(): Promise<EventIdentifier | null> {
    const { ticker, context } = this;

    const {
      data: { eventByIndexedArgs: event },
    } = await context.queryMiddleware<Ensured<Query, 'eventByIndexedArgs'>>(
      eventByIndexedArgs({
        moduleId: ModuleIdEnum.Asset,
        eventId: EventIdEnum.AssetCreated,
        eventArg1: padString(ticker, MAX_TICKER_LENGTH),
      })
    );

    return optionize(middlewareEventToEventIdentifier)(event);
  }

  /**
   * Freezes transfers and minting of the Security Token
   *
   * @note required role:
   *   - Security Token Owner
   */
  public freeze: ProcedureMethod<void, SecurityToken>;

  /**
   * Unfreeze transfers and minting of the Security Token
   *
   * @note required role:
   *   - Security Token Owner
   */
  public unfreeze: ProcedureMethod<void, SecurityToken>;

  /**
   * Check whether transfers are frozen for the Security Token
   *
   * @note can be subscribed to
   */
  public isFrozen(): Promise<boolean>;
  public isFrozen(callback: SubCallback<boolean>): Promise<UnsubCallback>;

  // eslint-disable-next-line require-jsdoc
  public async isFrozen(callback?: SubCallback<boolean>): Promise<boolean | UnsubCallback> {
    const {
      ticker,
      context: {
        polymeshApi: {
          query: { asset },
        },
      },
      context,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    if (callback) {
      return asset.frozen(rawTicker, frozen => {
        callback(boolToBoolean(frozen));
      });
    }

    const result = await asset.frozen(rawTicker);

    return boolToBoolean(result);
  }

  /**
   * Assign a new primary issuance agent for the Security Token
   *
   * @note this may create AuthorizationRequest which have to be accepted by
   *   the corresponding Account. An Account or Identity can
   *   fetch its pending Authorization Requests by calling `authorizations.getReceived`
   *
   * @note required role:
   *   - Security Token Owner
   *
   * @deprecated in favor of `inviteAgent`
   */
  public modifyPrimaryIssuanceAgent: ProcedureMethod<ModifyPrimaryIssuanceAgentParams, void>;

  /**
   * Remove the primary issuance agent of the Security Token
   *
   * @note if primary issuance agent is not set, Security Token owner would be used by default
   *
   * @note required role:
   *   - Security Token Owner
   */
  // public removePrimaryIssuanceAgent: ProcedureMethod<void, void>;

  /**
   * Redeem (burn) an amount of this Security Token
   *
   * @note Tokens are removed from the Primary Issuance Agent's Default Portfolio.
   *   If the Security Token has no Primary Issuance Agent, funds are removed from the owner's
   *   Default Portfolio instead
   *
   * @note required role:
   *   - Security Token Primary Issuance Agent
   */
  public redeem: ProcedureMethod<RedeemTokenParams, void>;

  /**
   * Retrieve the amount of unique investors that hold this Security Token
   *
   * @note this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
   *   of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same
   *   Scope ID, then they will only be counted once for the purposes of this result
   *
   * @note can be subscribed to
   */
  public investorCount(): Promise<number>;
  public investorCount(callback: SubCallback<number>): Promise<UnsubCallback>;

  // eslint-disable-next-line require-jsdoc
  public async investorCount(callback?: SubCallback<number>): Promise<number | UnsubCallback> {
    const {
      context: {
        polymeshApi: {
          query: { statistics },
        },
      },
      context,
      ticker,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    const assembleResult = (value: Counter): number => u64ToBigNumber(value).toNumber();

    if (callback) {
      return statistics.investorCountPerAsset(rawTicker, count => {
        callback(assembleResult(count));
      });
    }

    const result = await statistics.investorCountPerAsset(stringToTicker(ticker, context));

    return u64ToBigNumber(result).toNumber();
  }

  /**
   * Force a transfer from a given Portfolio to the PIA’s default Portfolio
   *
   * @note required role:
   *   - Security Token Primary Issuance Agent
   */
  public controllerTransfer: ProcedureMethod<ControllerTransferParams, void>;
}
