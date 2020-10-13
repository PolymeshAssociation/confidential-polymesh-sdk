import { u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import {
  AuthorizationStatus as MeshAuthorizationStatus,
  PortfolioId as MeshPortfolioId,
} from 'polymesh-types/types';
import sinon from 'sinon';

import { Entity, Instruction } from '~/api/entities';
import { Identity } from '~/api/entities/Identity';
import { Context } from '~/base';
import { dsMockUtils, entityMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { AuthorizationStatus, InstructionStatus, InstructionType } from '~/types';
import { tuple } from '~/types/utils';
import * as utilsModule from '~/utils';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);
jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('Instruction class', () => {
  let context: Mocked<Context>;
  let instruction: Instruction;

  let id: BigNumber;

  let rawId: u64;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();

    id = new BigNumber(1);
    rawId = dsMockUtils.createMockU64(id.toNumber());
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
    instruction = new Instruction({ id }, context);
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    entityMockUtils.cleanup();
  });

  test('should extend Entity', () => {
    expect(Instruction.prototype instanceof Entity).toBe(true);
  });

  describe('method: isUniqueIdentifiers', () => {
    test('should return true if the object conforms to the interface', () => {
      expect(Instruction.isUniqueIdentifiers({ id: new BigNumber(1) })).toBe(true);
      expect(Instruction.isUniqueIdentifiers({})).toBe(false);
      expect(Instruction.isUniqueIdentifiers({ id: 3 })).toBe(false);
    });
  });

  describe('method: details', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should return the Instruction details', async () => {
      const status = InstructionStatus.Pending;
      const createdAt = new Date('10/14/1987');
      const validFrom = new Date('11/17/1987');
      let type = InstructionType.SettleOnAuthorization;
      const owner = 'someDid';

      entityMockUtils.configureMocks({ identityOptions: { did: owner } });
      sinon
        .stub(utilsModule, 'numberToU64')
        .withArgs(id, context)
        .returns(rawId);

      const queryResult = {
        status: dsMockUtils.createMockInstructionStatus(status),
        /* eslint-disable @typescript-eslint/camelcase */
        created_at: dsMockUtils.createMockOption(dsMockUtils.createMockMoment(createdAt.getTime())),
        valid_from: dsMockUtils.createMockOption(dsMockUtils.createMockMoment(validFrom.getTime())),
        settlement_type: dsMockUtils.createMockSettlementType(type),
        /* eslint-enable @typescript-eslint/camelcase */
      };

      const instructionDetailsStub = dsMockUtils
        .createQueryStub('settlement', 'instructionDetails')
        .withArgs(rawId)
        .resolves(queryResult);

      let result = await instruction.details();

      expect(result).toEqual({
        status,
        createdAt,
        validFrom,
        type,
      });

      type = InstructionType.SettleOnBlock;
      const endBlock = new BigNumber(100);

      instructionDetailsStub.resolves({
        ...queryResult,
        /* eslint-disable @typescript-eslint/camelcase */
        valid_from: dsMockUtils.createMockOption(),
        settlement_type: dsMockUtils.createMockSettlementType({
          SettleOnBlock: dsMockUtils.createMockU32(endBlock.toNumber()),
        }),
        /* eslint-enable @typescript-eslint/camelcase */
      });

      result = await instruction.details();

      expect(result).toEqual({
        status,
        createdAt,
        validFrom: null,
        type,
        endBlock,
      });
    });
  });

  describe('method: getAuthorizations', () => {
    const did = 'someDid';
    const status = AuthorizationStatus.Authorized;
    let rawStorageKey: [u64, MeshPortfolioId][];
    let authsReceivedEntries: [[u64, MeshPortfolioId], MeshAuthorizationStatus][];

    afterAll(() => {
      sinon.restore();
    });

    beforeAll(() => {
      rawStorageKey = [
        tuple(
          dsMockUtils.createMockU64(),
          dsMockUtils.createMockPortfolioId({
            did: dsMockUtils.createMockIdentityId(did),
            kind: dsMockUtils.createMockPortfolioKind('Default'),
          })
        ),
      ];
      authsReceivedEntries = rawStorageKey.map(([instructionId, portfolioId]) =>
        tuple(
          [instructionId, portfolioId],
          dsMockUtils.createMockAuthorizationStatus(AuthorizationStatus.Authorized)
        )
      );
      dsMockUtils.createQueryStub('settlement', 'authsReceived', {
        entries: [authsReceivedEntries[0]],
      });
      sinon.stub(utilsModule, 'identityIdToString').returns(did);
      sinon.stub(utilsModule, 'meshAuthorizationStatusToAuthorizationStatus').returns(status);
    });

    test('should return a list of Authorization Statuses', async () => {
      const result = await instruction.getAuthorizations();

      expect(result).toHaveLength(1);
      expect(result[0].identity).toEqual(new Identity({ did }, context));
      expect(result[0].authorizationStatus).toEqual(status);
    });
  });

  describe('method: getLegs', () => {
    afterAll(() => {
      sinon.restore();
    });

    test("should return the instruction's legs", async () => {
      const identityConstructor = entityMockUtils.getIdentityConstructorStub();
      const fromDid = 'fromDid';
      const toDid = 'toDid';
      const ticker = 'SOMETICKER';
      const amount = new BigNumber(1000);

      entityMockUtils.configureMocks({ securityTokenOptions: { ticker } });
      sinon
        .stub(utilsModule, 'numberToU64')
        .withArgs(id, context)
        .returns(rawId);
      dsMockUtils.createQueryStub('settlement', 'instructionLegs', {
        entries: [
          tuple(['instructionId', 'legId'], {
            from: dsMockUtils.createMockPortfolioId({
              did: dsMockUtils.createMockIdentityId(fromDid),
              kind: dsMockUtils.createMockPortfolioKind('Default'),
            }),
            to: dsMockUtils.createMockPortfolioId({
              did: dsMockUtils.createMockIdentityId(toDid),
              kind: dsMockUtils.createMockPortfolioKind('Default'),
            }),
            asset: dsMockUtils.createMockTicker(ticker),
            amount: dsMockUtils.createMockBalance(amount.times(Math.pow(10, 6)).toNumber()),
          }),
        ],
      });

      const [leg] = await instruction.getLegs();

      sinon.assert.calledTwice(identityConstructor);
      sinon.assert.calledWithExactly(identityConstructor.firstCall, { did: fromDid }, context);
      sinon.assert.calledWithExactly(identityConstructor.secondCall, { did: toDid }, context);
      expect(leg.amount).toEqual(amount);
      expect(leg.token).toEqual(entityMockUtils.getSecurityTokenInstance());
    });
  });
});
