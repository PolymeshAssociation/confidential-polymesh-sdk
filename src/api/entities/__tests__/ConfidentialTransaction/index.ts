import { Bytes, u64 } from '@polkadot/types';
import { PalletConfidentialAssetTransactionLegState } from '@polkadot/types/lookup';
import { ErrorCode, UnsubCallback } from '@polymeshassociation/polymesh-sdk/types';
import * as utilsConversionModule from '@polymeshassociation/polymesh-sdk/utils/conversion';
import BigNumber from 'bignumber.js';
import { when } from 'jest-when';

import {
  ConfidentialTransaction,
  Context,
  Entity,
  PolymeshError,
  PolymeshTransaction,
} from '~/internal';
import {
  confidentialTransactionQuery,
  getConfidentialTransactionProofsQuery,
} from '~/middleware/queries';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import {
  createMockConfidentialAssetTransaction,
  createMockConfidentialTransactionStatus,
  createMockOption,
} from '~/testUtils/mocks/dataSources';
import { Mocked } from '~/testUtils/types';
import {
  ConfidentialAffirmParty,
  ConfidentialLegStateBalances,
  ConfidentialTransactionStatus,
} from '~/types';
import { tuple } from '~/types/utils';

jest.mock(
  '~/api/entities/ConfidentialAsset',
  require('~/testUtils/mocks/entities').mockConfidentialAssetModule(
    '~/api/entities/ConfidentialAsset'
  )
);

jest.mock(
  '~/api/entities/ConfidentialAccount',
  require('~/testUtils/mocks/entities').mockConfidentialAccountModule(
    '~/api/entities/ConfidentialAccount'
  )
);

jest.mock(
  '~/base/ConfidentialProcedure',
  require('~/testUtils/mocks/procedure').mockConfidentialProcedureModule(
    '~/base/ConfidentialProcedure'
  )
);

describe('ConfidentialTransaction class', () => {
  let context: Mocked<Context>;
  let transaction: ConfidentialTransaction;
  let id: BigNumber;
  let legId: BigNumber;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();
    procedureMockUtils.initMocks();

    id = new BigNumber(1);
    legId = new BigNumber(2);
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
    transaction = new ConfidentialTransaction({ id }, context);
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  it('should extend Entity', () => {
    expect(ConfidentialTransaction.prototype instanceof Entity).toBe(true);
  });

  describe('method: isUniqueIdentifiers', () => {
    it('should return true if the object conforms to the interface', () => {
      expect(ConfidentialTransaction.isUniqueIdentifiers({ id: new BigNumber(1) })).toBe(true);
      expect(ConfidentialTransaction.isUniqueIdentifiers({})).toBe(false);
      expect(ConfidentialTransaction.isUniqueIdentifiers({ id: 3 })).toBe(false);
    });
  });

  describe('method: exists', () => {
    it('should return whether the instruction exists', async () => {
      dsMockUtils
        .createQueryMock('confidentialAsset', 'transactionCounter')
        .mockResolvedValue(
          dsMockUtils.createMockCompact(dsMockUtils.createMockU64(new BigNumber(10)))
        );

      let result = await transaction.exists();

      expect(result).toBe(true);

      let fakeTransaction = new ConfidentialTransaction({ id: new BigNumber(0) }, context);

      result = await fakeTransaction.exists();

      expect(result).toBe(false);

      fakeTransaction = new ConfidentialTransaction({ id: new BigNumber(20) }, context);

      result = await fakeTransaction.exists();

      expect(result).toBe(false);
    });
  });

  describe('method: details', () => {
    const mockCreatedAt = dsMockUtils.createMockU32(new BigNumber(1));
    const mockVenueId = dsMockUtils.createMockU64(new BigNumber(2));
    const mockStatus = dsMockUtils.createMockConfidentialTransactionStatus(
      ConfidentialTransactionStatus.Pending
    );

    it('should return details', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactions').mockResolvedValue(
        dsMockUtils.createMockOption(
          createMockConfidentialAssetTransaction({
            venueId: mockVenueId,
            createdAt: mockCreatedAt,
            memo: createMockOption(),
          })
        )
      );

      dsMockUtils
        .createQueryMock('confidentialAsset', 'transactionStatuses')
        .mockResolvedValue(dsMockUtils.createMockOption(mockStatus));

      const result = await transaction.details();

      expect(result).toEqual({
        createdAt: new BigNumber(1),
        memo: undefined,
        status: ConfidentialTransactionStatus.Pending,
        venueId: new BigNumber(2),
      });
    });

    it('should throw an error if transaction details are not found', async () => {
      dsMockUtils
        .createQueryMock('confidentialAsset', 'transactions')
        .mockResolvedValue(dsMockUtils.createMockOption());

      dsMockUtils
        .createQueryMock('confidentialAsset', 'transactionStatuses')
        .mockResolvedValue(dsMockUtils.createMockOption(mockStatus));

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'Confidential transaction details were not found',
      });

      return expect(transaction.details()).rejects.toThrow(expectedError);
    });

    it('should throw an error if transaction status is not found', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactions').mockResolvedValue(
        dsMockUtils.createMockOption(
          createMockConfidentialAssetTransaction({
            venueId: mockVenueId,
            createdAt: mockCreatedAt,
            memo: createMockOption(),
          })
        )
      );

      dsMockUtils
        .createQueryMock('confidentialAsset', 'transactionStatuses')
        .mockResolvedValue(dsMockUtils.createMockOption());

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'Confidential transaction details were not found',
      });

      return expect(transaction.details()).rejects.toThrow(expectedError);
    });
  });

  describe('method: onStatusChange', () => {
    let bigNumberToU64Spy: jest.SpyInstance;
    let transactionStatusesMock: jest.Mock;
    let rawId: u64;

    afterAll(() => {
      jest.restoreAllMocks();
    });

    beforeAll(() => {
      bigNumberToU64Spy = jest.spyOn(utilsConversionModule, 'bigNumberToU64');
    });

    beforeEach(() => {
      const owner = 'someDid';
      rawId = dsMockUtils.createMockU64(new BigNumber(1));
      entityMockUtils.configureMocks({ identityOptions: { did: owner } });
      when(bigNumberToU64Spy).calledWith(id, context).mockReturnValue(rawId);

      transactionStatusesMock = dsMockUtils.createQueryMock(
        'confidentialAsset',
        'transactionStatuses'
      );
    });

    it('should allow subscription', async () => {
      const unsubCallback = 'unsubCallback' as unknown as Promise<UnsubCallback>;
      const callback = jest.fn();

      const mockPendingStatus = dsMockUtils.createMockConfidentialTransactionStatus(
        ConfidentialTransactionStatus.Pending
      );
      const mockPending = dsMockUtils.createMockOption(
        createMockConfidentialTransactionStatus(ConfidentialTransactionStatus.Pending)
      );
      transactionStatusesMock.mockImplementationOnce(async (_, cbFunc) => {
        cbFunc(mockPending);
        return unsubCallback;
      });

      when(transactionStatusesMock).calledWith(rawId).mockResolvedValue(mockPendingStatus);

      let result = await transaction.onStatusChange(callback);

      expect(result).toEqual(unsubCallback);
      expect(callback).toBeCalledWith(ConfidentialTransactionStatus.Pending);

      const mockRejectedStatus = dsMockUtils.createMockOption(
        dsMockUtils.createMockInstructionStatus(ConfidentialTransactionStatus.Rejected)
      );

      transactionStatusesMock.mockImplementationOnce(async (_, cbFunc) => {
        cbFunc(mockRejectedStatus);
        return unsubCallback;
      });

      result = await transaction.onStatusChange(callback);

      expect(result).toEqual(unsubCallback);
      expect(callback).toBeCalledWith(ConfidentialTransactionStatus.Rejected);
    });

    it('should error missing transaction status', () => {
      const unsubCallback = 'unsubCallback' as unknown as Promise<UnsubCallback>;
      const callback = jest.fn();

      transactionStatusesMock.mockImplementationOnce(async (_, cbFunc) => {
        cbFunc(dsMockUtils.createMockOption());
        return unsubCallback;
      });

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'The status of the transaction was not found',
      });

      return expect(transaction.onStatusChange(callback)).rejects.toThrow(expectedError);
    });
  });

  describe('method: getInvolvedParties', () => {
    it('should get involved parties for the transaction', async () => {
      const rawId = dsMockUtils.createMockU64(transaction.id);
      dsMockUtils.createQueryMock('confidentialAsset', 'transactionParties', {
        entries: [
          tuple(
            [rawId, dsMockUtils.createMockIdentityId('0x01')],
            dsMockUtils.createMockBool(true)
          ),
          tuple(
            [rawId, dsMockUtils.createMockIdentityId('0x02')],
            dsMockUtils.createMockBool(true)
          ),
        ],
      });

      const result = await transaction.getInvolvedParties();

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ did: '0x01' }),
          expect.objectContaining({ did: '0x02' }),
        ])
      );
    });

    it('should throw an error if no parties are found', () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactionParties', {
        entries: [],
      });

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message:
          'No involved parties were found for this transaction. Its likely been completed and the chain storage has been pruned',
      });

      return expect(transaction.getInvolvedParties()).rejects.toThrow(expectedError);
    });
  });

  describe('method: getLegs', () => {
    const rawTransactionId = dsMockUtils.createMockConfidentialAssetTransactionId(id);
    const senderKey = '0x01';
    const receiverKey = '0x02';
    const mediatorDid = 'someDid';
    const sender = dsMockUtils.createMockConfidentialAccount(senderKey);
    const receiver = dsMockUtils.createMockConfidentialAccount(receiverKey);
    const mediator = dsMockUtils.createMockIdentityId(mediatorDid);
    const legDetails = dsMockUtils.createMockOption(
      dsMockUtils.createMockConfidentialLegDetails({
        sender,
        receiver,
        auditors: dsMockUtils.createMockBTreeMap(),
        mediators: [mediator],
      })
    );

    beforeEach(() => {});

    it('should return the transaction legs', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactionLegs', {
        entries: [
          tuple(
            [rawTransactionId, dsMockUtils.createMockConfidentialTransactionLegId(legId)],
            legDetails
          ),
        ],
      });

      const result = await transaction.getLegs();
      expect(result).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: new BigNumber(2) })])
      );
    });

    it('should return the transaction legs in order of their IDs', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactionLegs', {
        entries: [
          tuple(
            [
              rawTransactionId,
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(2)),
            ],
            legDetails
          ),
          tuple(
            [
              rawTransactionId,
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(0)),
            ],
            legDetails
          ),
          tuple(
            [
              rawTransactionId,
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(1)),
            ],
            legDetails
          ),
        ],
      });

      const result = await transaction.getLegs();
      expect(result[0].id).toEqual(new BigNumber(0));
      expect(result[1].id).toEqual(new BigNumber(1));
      expect(result[2].id).toEqual(new BigNumber(2));
    });

    it('should throw an error if details are None', () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'transactionLegs', {
        entries: [
          tuple(
            [
              dsMockUtils.createMockConfidentialAssetTransactionId(id),
              dsMockUtils.createMockConfidentialTransactionLegId(legId),
            ],
            dsMockUtils.createMockOption()
          ),
        ],
      });

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'There were no details for a confidential transaction leg',
      });

      return expect(transaction.getLegs()).rejects.toThrow(expectedError);
    });
  });

  describe('method: getPendingAffirmsCount', () => {
    const mockCount = new BigNumber(3);
    const rawMockCount = dsMockUtils.createMockU32(mockCount);
    it('should return the number of pending affirmations', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'pendingAffirms', {
        returnValue: dsMockUtils.createMockOption(rawMockCount),
      });

      const result = await transaction.getPendingAffirmsCount();
      expect(result).toEqual(mockCount);
    });

    it('should throw an error if the count is not found', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'pendingAffirms', {
        returnValue: dsMockUtils.createMockOption(),
      });

      const expectedError = new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'Affirm count not available. The transaction has likely been completed and pruned',
      });

      return expect(transaction.getPendingAffirmsCount()).rejects.toThrow(expectedError);
    });
  });

  describe('method: execute', () => {
    it('should prepare the procedure and return the resulting transaction', async () => {
      const expectedTransaction =
        'someTransaction' as unknown as PolymeshTransaction<ConfidentialTransaction>;

      when(procedureMockUtils.getPrepareMock())
        .calledWith(
          {
            args: { transaction },
            transformer: undefined,
          },
          context,
          {}
        )
        .mockResolvedValue(expectedTransaction);

      const tx = await transaction.execute();

      expect(tx).toBe(expectedTransaction);
    });
  });

  describe('method: affirmLeg', () => {
    it('should prepare the procedure and return the resulting transaction', async () => {
      const expectedTransaction =
        'someTransaction' as unknown as PolymeshTransaction<ConfidentialTransaction>;

      const args = { legId, party: ConfidentialAffirmParty.Mediator } as const;

      when(procedureMockUtils.getPrepareMock())
        .calledWith(
          {
            args: { transaction, ...args },
            transformer: undefined,
          },
          context,
          {}
        )
        .mockResolvedValue(expectedTransaction);

      const tx = await transaction.affirmLeg(args);

      expect(tx).toBe(expectedTransaction);
    });
  });

  describe('method: reject', () => {
    it('should prepare the procedure and return the resulting transaction', async () => {
      const expectedTransaction =
        'someTransaction' as unknown as PolymeshTransaction<ConfidentialTransaction>;

      when(procedureMockUtils.getPrepareMock())
        .calledWith(
          {
            args: { transaction },
            transformer: undefined,
          },
          context,
          {}
        )
        .mockResolvedValue(expectedTransaction);

      const tx = await transaction.reject();

      expect(tx).toBe(expectedTransaction);
    });
  });

  describe('leg state methods', () => {});
  let mockLegState: dsMockUtils.MockCodec<PalletConfidentialAssetTransactionLegState>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockLegReturn: any;

  beforeEach(() => {
    mockLegState = dsMockUtils.createMockConfidentialLegState({
      assetState: dsMockUtils.createMockBTreeMap<
        Bytes,
        PalletConfidentialAssetTransactionLegState
      >(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mockLegState.assetState as any).toJSON = (): Record<string, ConfidentialLegStateBalances> => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '0x01': {
        senderInitBalance: '0x02',
        senderAmount: '0x03',
        receiverAmount: '0x04',
      },
    });

    mockLegReturn = dsMockUtils.createMockOption(mockLegState);
  });

  describe('method: getLegStates', () => {
    it('should return the leg states for the transaction', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'txLegStates', {
        entries: [
          tuple(
            [
              dsMockUtils.createMockConfidentialTransactionId(id),
              dsMockUtils.createMockConfidentialTransactionLegId(legId),
            ],
            mockLegReturn
          ),
          tuple(
            [
              dsMockUtils.createMockConfidentialTransactionId(id),
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(legId.plus(1))),
            ],
            dsMockUtils.createMockOption()
          ),
        ],
      });

      const result = await transaction.getLegStates();

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            proved: true,
            assetState: expect.arrayContaining([
              expect.objectContaining({
                asset: expect.objectContaining({ id: '01' }),
                balances: expect.objectContaining({
                  senderInitBalance: '0x02',
                  senderAmount: '0x03',
                  receiverAmount: '0x04',
                }),
              }),
            ]),
          }),
          expect.objectContaining({
            proved: false,
          }),
        ])
      );
    });

    it('should return the leg states ordered by their id', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'txLegStates', {
        entries: [
          tuple(
            [
              dsMockUtils.createMockConfidentialTransactionId(new BigNumber(2)),
              dsMockUtils.createMockConfidentialTransactionLegId(legId),
            ],
            mockLegReturn
          ),
          tuple(
            [
              dsMockUtils.createMockConfidentialTransactionId(id),
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(0)),
            ],
            dsMockUtils.createMockOption()
          ),
          tuple(
            [
              dsMockUtils.createMockConfidentialTransactionId(id),
              dsMockUtils.createMockConfidentialTransactionLegId(new BigNumber(1)),
            ],
            dsMockUtils.createMockOption()
          ),
        ],
      });

      const result = await transaction.getLegStates();
      expect(result[0].legId).toEqual(new BigNumber(0));
      expect(result[1].legId).toEqual(new BigNumber(1));
      expect(result[2].legId).toEqual(new BigNumber(2));
    });
  });

  describe('method: getLegState', () => {
    it('should return the leg state for the leg when its pending proof', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'txLegStates', {
        returnValue: dsMockUtils.createMockOption(),
      });
      const result = await transaction.getLegState(legId);

      expect(result).toEqual({ proved: false });
    });

    it('should return the leg state for the leg when it has been proved', async () => {
      dsMockUtils.createQueryMock('confidentialAsset', 'txLegStates', {
        returnValue: mockLegReturn,
      });

      const result = await transaction.getLegState(legId);

      expect(result).toEqual({
        proved: true,
        assetState: expect.arrayContaining([
          expect.objectContaining({
            asset: expect.objectContaining({ id: '01' }),
            balances: expect.objectContaining({
              senderInitBalance: '0x02',
              senderAmount: '0x03',
              receiverAmount: '0x04',
            }),
          }),
        ]),
      });
    });
  });

  describe('method: toHuman', () => {
    it('should return a human readable version of the entity', () => {
      expect(transaction.toHuman()).toBe('1');
    });
  });

  describe('method: getLegProofDetails', () => {
    it('should return the query results', async () => {
      const legProofResult = {
        confidentialTransaction: {
          affirmations: {
            nodes: [
              {
                legId: 0,
                proofs: [
                  {
                    assetId: '0x08abb6e3550f385721cfd4a35bd5c6fa',
                    proof: '0xsomeProof',
                  },
                ],
              },
            ],
          },
          legs: {
            nodes: [
              {
                id: '1/0',
                senderId: 'someSender',
                receiverId: 'someReceiver',
                assetAuditors: [
                  { assetId: '0x08abb6e3550f385721cfd4a35bd5c6fa', auditors: ['someAuditor'] },
                ],
              },
            ],
          },
        },
      };

      dsMockUtils.createApolloQueryMock(
        getConfidentialTransactionProofsQuery({ id: transaction.id.toString() }),
        legProofResult
      );

      const result = await transaction.getSenderProofs();

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            legId: new BigNumber('0'),
            receiver: expect.objectContaining({ publicKey: 'someReceiver' }),
            sender: expect.objectContaining({ publicKey: 'someSender' }),
            proofs: expect.arrayContaining([
              {
                assetId: '08abb6e3-550f-3857-21cf-d4a35bd5c6fa',
                proof: '0xsomeProof',
                auditors: expect.arrayContaining([
                  expect.objectContaining({ publicKey: 'someAuditor' }),
                ]),
              },
            ]),
          }),
        ])
      );
    });
  });

  describe('method: getLegProofDetails', () => {
    it('should return the query results', async () => {
      const legProofResult = {
        confidentialTransaction: {
          affirmations: {
            nodes: [
              {
                legId: 0,
                proofs: [
                  {
                    assetId: '0x08abb6e3550f385721cfd4a35bd5c6fa',
                    proof: '0xsomeProof',
                  },
                ],
              },
            ],
          },
          legs: {
            nodes: [
              {
                id: '1/0',
                senderId: 'someSender',
                receiverId: 'someReceiver',
                assetAuditors: [
                  { assetId: '0x08abb6e3550f385721cfd4a35bd5c6fa', auditors: ['someAuditor'] },
                ],
              },
              {
                id: '1/1',
                senderId: 'someSender',
                receiverId: 'someReceiver',
                assetAuditors: [
                  { assetId: '0x08abb6e3550f385721cfd4a35bd5c6fa', auditors: ['someAuditor'] },
                ],
              },
            ],
          },
        },
      };

      dsMockUtils.createApolloQueryMock(
        getConfidentialTransactionProofsQuery({ id: transaction.id.toString() }),
        legProofResult
      );

      const result = await transaction.getProofDetails();

      expect(result).toEqual({
        proved: expect.arrayContaining([
          expect.objectContaining({
            legId: new BigNumber('0'),
            receiver: expect.objectContaining({ publicKey: 'someReceiver' }),
            sender: expect.objectContaining({ publicKey: 'someSender' }),
            proofs: expect.arrayContaining([
              {
                assetId: '08abb6e3-550f-3857-21cf-d4a35bd5c6fa',
                proof: '0xsomeProof',
                auditors: expect.arrayContaining([
                  expect.objectContaining({ publicKey: 'someAuditor' }),
                ]),
              },
            ]),
          }),
        ]),
        pending: expect.arrayContaining([
          expect.objectContaining({
            legId: new BigNumber('1'),
            receiver: expect.objectContaining({ publicKey: 'someReceiver' }),
            sender: expect.objectContaining({ publicKey: 'someSender' }),
            proofs: expect.arrayContaining([
              {
                assetId: '08abb6e3-550f-3857-21cf-d4a35bd5c6fa',
                auditors: expect.arrayContaining([
                  expect.objectContaining({ publicKey: 'someAuditor' }),
                ]),
              },
            ]),
          }),
        ]),
      });
    });
  });

  describe('method: createdAt', () => {
    it('should return the event identifier object of the ConfidentialTransaction creation', async () => {
      const eventIdx = new BigNumber(1);
      const blockNumber = new BigNumber(1234);
      const blockHash = 'someHash';
      const blockDate = new Date('4/14/2020');

      const fakeResult = { blockNumber, blockHash, blockDate, eventIndex: eventIdx };

      dsMockUtils.createApolloQueryMock(
        confidentialTransactionQuery({ id: transaction.id.toString() }),
        {
          confidentialTransaction: {
            createdBlock: {
              blockId: blockNumber.toNumber(),
              datetime: blockDate,
              hash: blockHash,
            },
            eventIdx: eventIdx.toNumber(),
          },
        }
      );

      const result = await transaction.createdAt();

      expect(result).toEqual(fakeResult);
    });

    it('should return null if the query result is empty', async () => {
      dsMockUtils.createApolloQueryMock(
        confidentialTransactionQuery({ id: transaction.id.toString() }),
        {
          confidentialTransaction: null,
        }
      );
      const result = await transaction.createdAt();
      expect(result).toBeNull();
    });
  });
});
