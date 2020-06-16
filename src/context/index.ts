import { ApiPromise, Keyring } from '@polkadot/api';
import { AccountInfo } from '@polkadot/types/interfaces';
import stringToU8a from '@polkadot/util/string/toU8a';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import BigNumber from 'bignumber.js';
import { DidRecord, IdentityId } from 'polymesh-types/types';

import { Identity } from '~/api/entities';
import { PolymeshError } from '~/base';
import { CommonKeyring, ErrorCode, KeyringPair, SubCallback, UnsubCallback } from '~/types';
import {
  balanceToBigNumber,
  identityIdToString,
  stringToAccountKey,
  stringToIdentityId,
  valueToDid,
} from '~/utils';

interface SignerData {
  currentPair: KeyringPair;
  did: IdentityId;
}

interface ConstructorParams {
  polymeshApi: ApiPromise;
  harvesterClient: ApolloClient<NormalizedCacheObject> | null;
  keyring: CommonKeyring;
  pair?: SignerData;
}

interface AccountData {
  address: string;
  name?: string;
}

/**
 * Context in which the SDK is being used
 *
 * - Holds the current low level API
 * - Holds the current keyring pair
 * - Holds the current Identity
 */
export class Context {
  private keyring: CommonKeyring;

  public polymeshApi: ApiPromise;

  public currentPair?: KeyringPair;

  private currentIdentity?: Identity;

  private _harvesterClient: ApolloClient<NormalizedCacheObject> | null;

  /**
   * @hidden
   */
  private constructor(params: ConstructorParams) {
    const { polymeshApi, harvesterClient, keyring, pair } = params;

    this._harvesterClient = harvesterClient;

    this.polymeshApi = new Proxy(polymeshApi, {
      get: (target, prop: keyof ApiPromise): ApiPromise[keyof ApiPromise] => {
        if (prop === 'tx' && !this.currentPair) {
          throw new PolymeshError({
            code: ErrorCode.FatalError,
            message: 'Cannot perform transactions without an active account',
          });
        }

        return target[prop];
      },
    });
    this.keyring = keyring;

    if (pair) {
      this.currentPair = pair.currentPair;
      this.currentIdentity = new Identity({ did: pair.did.toString() }, this);
    }
  }

  static async create(params: {
    polymeshApi: ApiPromise;
    harvesterClient: ApolloClient<NormalizedCacheObject> | null;
    seed: string;
  }): Promise<Context>;

  static async create(params: {
    polymeshApi: ApiPromise;
    harvesterClient: ApolloClient<NormalizedCacheObject> | null;
    keyring: CommonKeyring;
  }): Promise<Context>;

  static async create(params: {
    polymeshApi: ApiPromise;
    harvesterClient: ApolloClient<NormalizedCacheObject> | null;
    uri: string;
  }): Promise<Context>;

  static async create(params: {
    polymeshApi: ApiPromise;
    harvesterClient: ApolloClient<NormalizedCacheObject> | null;
  }): Promise<Context>;

  /**
   * Create the Context instance
   */
  static async create(params: {
    polymeshApi: ApiPromise;
    harvesterClient: ApolloClient<NormalizedCacheObject> | null;
    seed?: string;
    keyring?: CommonKeyring;
    uri?: string;
  }): Promise<Context> {
    const { polymeshApi, harvesterClient, seed, keyring: passedKeyring, uri } = params;

    let keyring: CommonKeyring = new Keyring({ type: 'sr25519' });
    let currentPair: KeyringPair | undefined;

    if (passedKeyring) {
      keyring = passedKeyring;
      currentPair = keyring.getPairs()[0];
    } else if (seed) {
      if (seed.length !== 32) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'Seed must be 32 characters in length',
        });
      }

      currentPair = keyring.addFromSeed(stringToU8a(seed));
    } else if (uri) {
      currentPair = keyring.addFromUri(uri);
    }

    if (currentPair) {
      try {
        const identityIds = await polymeshApi.query.identity.keyToIdentityIds(
          currentPair.publicKey
        );
        const did = identityIds.unwrap().asUnique;

        return new Context({
          polymeshApi,
          harvesterClient,
          keyring,
          pair: { currentPair, did },
        });
      } catch (err) {
        throw new PolymeshError({
          code: ErrorCode.IdentityNotPresent,
          message: 'There is no Identity associated to this account',
        });
      }
    }

    return new Context({ polymeshApi, harvesterClient, keyring });
  }

  /**
   * Retrieve a list of addresses associated with the account
   */
  public getAccounts(): Array<AccountData> {
    const { keyring } = this;
    return keyring.getPairs().map(({ address, meta }) => {
      return { address, name: meta.name as string };
    });
  }

  /**
   * Set a pair as the current account keyring pair
   */
  public async setPair(address: string): Promise<void> {
    const {
      keyring,
      polymeshApi: {
        query: { identity },
      },
    } = this;

    let newCurrentPair;
    let identityIds;
    let did;

    try {
      newCurrentPair = keyring.getPair(address);
    } catch (e) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'The address is not present in the keyring set',
      });
    }

    try {
      identityIds = await identity.keyToIdentityIds(
        stringToAccountKey(newCurrentPair.address, this)
      );

      did = identityIds.unwrap().asUnique;
    } catch (e) {
      throw new PolymeshError({
        code: ErrorCode.IdentityNotPresent,
        message: 'There is no Identity associated to this account',
      });
    }

    this.currentPair = newCurrentPair;
    this.currentIdentity = new Identity({ did: identityIdToString(did) }, this);
  }

  public accountBalance(accountId?: string): Promise<BigNumber>;
  public accountBalance(
    accountId: string | undefined,
    callback: SubCallback<BigNumber>
  ): Promise<UnsubCallback>;

  /**
   * Retrieve the account level POLYX balance
   *
   * @note can be subscribed to
   */
  public async accountBalance(
    accountId?: string,
    callback?: SubCallback<BigNumber>
  ): Promise<BigNumber | UnsubCallback> {
    const {
      currentPair,
      polymeshApi: {
        query: { system },
      },
    } = this;
    let address: string;

    if (accountId) {
      address = accountId;
    } else if (currentPair) {
      address = currentPair.address;
    } else {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'There is no account associated with the SDK',
      });
    }

    const assembleResult = ({ data: { free } }: AccountInfo): BigNumber => balanceToBigNumber(free);

    if (callback) {
      return system.account(address, info => {
        callback(assembleResult(info));
      });
    }

    const accountInfo = await this.polymeshApi.query.system.account(address);

    return assembleResult(accountInfo);
  }

  /**
   * Retrieve current Identity
   *
   * @throws if there is no identity associated to the current account (or there is no current account associated to the SDK instance)
   */
  public getCurrentIdentity(): Identity {
    const { currentIdentity } = this;

    if (!currentIdentity) {
      throw new PolymeshError({
        code: ErrorCode.IdentityNotPresent,
        message: 'The current account does not have an associated identity',
      });
    }

    return currentIdentity;
  }

  /**
   * Retrieve current Keyring Pair
   *
   * @throws if there is no account associated to the SDK instance
   */
  public getCurrentPair(): KeyringPair {
    const { currentPair } = this;
    if (!currentPair) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'There is no account associated with the current SDK instance',
      });
    }

    return currentPair;
  }

  /**
   * Check whether identities exist
   */
  public async getInvalidDids(identities: (string | Identity)[]): Promise<string[]> {
    const dids = identities.map(valueToDid);
    const rawIdentities = dids.map(did => stringToIdentityId(did, this));
    const records = await this.polymeshApi.query.identity.didRecords.multi<DidRecord>(
      rawIdentities
    );

    const invalidDids: string[] = [];

    records.forEach((record, index) => {
      if (record.isEmpty) {
        invalidDids.push(dids[index]);
      }
    });

    return invalidDids;
  }

  /**
   * Retrieve the harvester client
   *
   * @throws if credentials are not set
   */
  public get harvesterClient(): ApolloClient<NormalizedCacheObject> {
    const { _harvesterClient } = this;

    if (!_harvesterClient) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'Cannot perform this action without an active harvester connection',
      });
    }

    return _harvesterClient;
  }
}
