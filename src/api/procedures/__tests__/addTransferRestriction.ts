import { u64, u128, Vec } from '@polkadot/types';
import { Permill } from '@polkadot/types/interfaces';
import {
  BTreeSetIdentityId,
  BTreeSetStatUpdate,
  PolymeshPrimitivesStatisticsStat2ndKey,
  PolymeshPrimitivesStatisticsStatOpType,
  PolymeshPrimitivesStatisticsStatType,
  PolymeshPrimitivesStatisticsStatUpdate,
} from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import { ScopeId, Ticker, TransferCondition } from 'polymesh-types/types';
import sinon from 'sinon';

import { StatisticsOpType } from '~/api/entities/Asset/TransferRestrictions/types';
import {
  AddTransferRestrictionParams,
  getAuthorization,
  prepareAddTransferRestriction,
  prepareStorage,
  Storage,
} from '~/api/procedures/addTransferRestriction';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { TransferRestriction, TransferRestrictionType, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);
jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('addTransferRestriction procedure', () => {
  let mockContext: Mocked<Context>;
  let transferRestrictionToTransferRestrictionStub: sinon.SinonStub<
    [TransferRestriction, Context],
    TransferCondition
  >;
  let stringToTickerStub: sinon.SinonStub<[string, Context], Ticker>;
  let opPrimitiveStub: sinon.SinonStub<
    [StatisticsOpType, Context],
    PolymeshPrimitivesStatisticsStatOpType
  >;
  let primitivesStatisticsStatType: sinon.SinonStub<
    [PolymeshPrimitivesStatisticsStatOpType, Context],
    PolymeshPrimitivesStatisticsStatType
  >;
  let statUpdateStub: sinon.SinonStub<
    [PolymeshPrimitivesStatisticsStat2ndKey, u128, Context],
    PolymeshPrimitivesStatisticsStatUpdate
  >;
  let primitive2ndKeyStub: sinon.SinonStub<[Context], PolymeshPrimitivesStatisticsStat2ndKey>;
  let ticker: string;
  let count: BigNumber;
  let percentage: BigNumber;
  let countTm: TransferRestriction;
  let percentageTm: TransferRestriction;
  let rawTicker: Ticker;
  let rawCount: u64;
  let rawPercentage: Permill;
  let rawCountCondition: TransferCondition;
  let rawPercentageCondition: TransferCondition;
  let args: AddTransferRestrictionParams;
  let rawOp: PolymeshPrimitivesStatisticsStatOpType;
  let rawStatType: PolymeshPrimitivesStatisticsStatType;
  let raw2ndKey: PolymeshPrimitivesStatisticsStat2ndKey;
  let rawStatUpdate: PolymeshPrimitivesStatisticsStatUpdate;

  const emptyStorage = {
    needStat: false,
    currentExemptions: [],
    currentRestrictions: [],
    currentStats: [] as unknown as Vec<PolymeshPrimitivesStatisticsStatType>,
  };

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    transferRestrictionToTransferRestrictionStub = sinon.stub(
      utilsConversionModule,
      'transferRestrictionToPolymeshTransferCondition'
    );
    stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    opPrimitiveStub = sinon.stub(utilsConversionModule, 'primitiveOpType');
    primitivesStatisticsStatType = sinon.stub(utilsConversionModule, 'primitiveStatisticsStatType');
    statUpdateStub = sinon.stub(utilsConversionModule, 'statUpdate');
    primitive2ndKeyStub = sinon.stub(utilsConversionModule, 'primitive2ndKey');

    ticker = 'someTicker';
    count = new BigNumber(10);
    percentage = new BigNumber(49);
    countTm = { type: TransferRestrictionType.Count, value: count };
    percentageTm = { type: TransferRestrictionType.Percentage, value: percentage };
  });

  let addBatchTransactionStub: sinon.SinonStub;

  let setAssetTransferCompliance: PolymeshTx<[Ticker, TransferCondition]>;
  let addExemptedEntitiesTransaction: PolymeshTx<[Ticker, TransferCondition, ScopeId[]]>;
  let batchUpdateAssetStatsTransaction: PolymeshTx<
    [Ticker, PolymeshPrimitivesStatisticsStatType, BTreeSetStatUpdate[]]
  >;

  beforeEach(() => {
    addBatchTransactionStub = procedureMockUtils.getAddBatchTransactionStub();

    setAssetTransferCompliance = dsMockUtils.createTxStub(
      'statistics',
      'setAssetTransferCompliance'
    );
    addExemptedEntitiesTransaction = dsMockUtils.createTxStub('statistics', 'setEntitiesExempt');
    batchUpdateAssetStatsTransaction = dsMockUtils.createTxStub(
      'statistics',
      'batchUpdateAssetStats'
    );

    mockContext = dsMockUtils.getContextInstance();

    dsMockUtils.setConstMock('statistics', 'maxTransferConditionsPerAsset', {
      returnValue: dsMockUtils.createMockU32(new BigNumber(3)),
    });
    rawOp = dsMockUtils.createMockStatisticsOpType(StatisticsOpType.Count);
    rawStatType = dsMockUtils.createMockStatistics();
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawCount = dsMockUtils.createMockU64(count);
    rawPercentage = dsMockUtils.createMockPermill(percentage.multipliedBy(10000));
    rawCountCondition = dsMockUtils.createMockTransferCondition({ MaxInvestorCount: rawCount });
    rawPercentageCondition = dsMockUtils.createMockTransferCondition({
      MaxInvestorOwnership: rawPercentage,
    });
    raw2ndKey = dsMockUtils.createMock2ndKey();
    rawStatUpdate = dsMockUtils.createMockStatUpdate();

    transferRestrictionToTransferRestrictionStub
      .withArgs(countTm, mockContext)
      .returns(rawCountCondition);
    transferRestrictionToTransferRestrictionStub
      .withArgs(percentageTm, mockContext)
      .returns(rawPercentageCondition);
    stringToTickerStub.withArgs(ticker, mockContext).returns(rawTicker);
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  it('should add an add asset transfer compliance transaction to the queue', async () => {
    args = {
      type: 'Count',
      exemptedIdentities: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [] },
    });

    let result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addBatchTransactionStub.firstCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, [rawCountCondition]],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));

    args = {
      type: 'Percentage',
      exemptedIdentities: [],
      percentage,
      ticker,
    };

    result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addBatchTransactionStub.secondCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, [rawPercentageCondition]],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should add an add exempted entities transaction to the queue', async () => {
    const did = 'someDid';
    const scopeId = 'someScopeId';
    const rawScopeId = dsMockUtils.createMockScopeId(scopeId);
    const identityScopeId = 'anotherScopeId';
    const rawIdentityScopeId = dsMockUtils.createMockScopeId(identityScopeId);
    entityMockUtils.configureMocks({
      identityOptions: { getScopeId: identityScopeId },
      assetOptions: { details: { requiresInvestorUniqueness: true } },
    });
    args = {
      type: 'Count',
      exemptedIdentities: [did],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [] },
    });

    const stringToScopeIdStub = sinon.stub(utilsConversionModule, 'stringToScopeId');

    stringToScopeIdStub.withArgs(scopeId, mockContext).returns(rawScopeId);
    stringToScopeIdStub.withArgs(identityScopeId, mockContext).returns(rawIdentityScopeId);
    opPrimitiveStub.withArgs(StatisticsOpType.Count, mockContext).returns(rawOp);

    sinon
      .stub(utilsConversionModule, 'scopeIdsToBtreeSetIdentityId')
      .returns([rawIdentityScopeId] as unknown as BTreeSetIdentityId);

    let result = await prepareAddTransferRestriction.call(proc, args);
    sinon.assert.calledWith(addBatchTransactionStub.firstCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, [rawCountCondition]],
        },
        {
          transaction: addExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [true, { asset: { Ticker: rawTicker }, op: rawOp }, [rawIdentityScopeId]],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));

    result = await prepareAddTransferRestriction.call(proc, {
      ...args,
      exemptedIdentities: [entityMockUtils.getIdentityInstance()],
    });

    sinon.assert.calledWith(addBatchTransactionStub.secondCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, [rawCountCondition]],
        },
        {
          transaction: addExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [true, { asset: { Ticker: rawTicker }, op: rawOp }, [rawIdentityScopeId]],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should create stats and initialize stats if they do not exist', async () => {
    args = {
      type: 'Count',
      exemptedIdentities: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      {
        ...emptyStorage,
        needStat: true,
      }
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [] },
    });

    dsMockUtils.createQueryStub('asset', 'balanceOf', {
      returnValue: ['one', 'two', 'three'],
    });

    primitivesStatisticsStatType.returns(rawStatType);
    primitive2ndKeyStub.withArgs(mockContext).returns(raw2ndKey);
    statUpdateStub.returns(rawStatUpdate);

    await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addBatchTransactionStub, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, [rawCountCondition]],
        },
        {
          transaction: batchUpdateAssetStatsTransaction,
          args: [{ Ticker: rawTicker }, rawStatType, [rawStatUpdate]],
        },
      ],
    });
  });

  it('should throw an error if attempting to add a restriction that already exists', async () => {
    args = {
      type: 'Count',
      exemptedIdentities: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [rawCountCondition] },
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Cannot add the same restriction more than once');

    args = {
      type: 'Percentage',
      exemptedIdentities: [],
      percentage,
      ticker,
    };

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [rawCountCondition, rawPercentageCondition] },
    });

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Cannot add the same restriction more than once');
  });

  it('should throw an error if attempting to add a restriction when the restriction limit has been reached', async () => {
    args = {
      type: TransferRestrictionType.Count,
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: {
        requirements: [rawPercentageCondition, rawPercentageCondition, rawPercentageCondition],
      },
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Transfer Restriction limit reached');
    expect(err.data).toEqual({ limit: new BigNumber(3) });
  });

  it('should throw an error if exempted entities are repeated', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: ['someScopeId', 'someScopeId'],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
      returnValue: { requirements: [] },
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe(
      'One or more of the passed exempted Identities are repeated or have the same Scope ID'
    );
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      args = {
        ticker,
        count,
        type: 'Count',
      };

      let proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext,
        emptyStorage
      );
      let boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.SetAssetTransferCompliance],
          portfolios: [],
        },
      });
      expect(boundFunc({ ...args, exemptedIdentities: ['someScopeId'] })).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [
            TxTags.statistics.SetAssetTransferCompliance,
            TxTags.statistics.SetEntitiesExempt,
          ],
          portfolios: [],
        },
      });

      proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext,
        {
          ...emptyStorage,
          needStat: true,
        }
      );
      boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [
            TxTags.statistics.SetAssetTransferCompliance,
            TxTags.statistics.SetActiveAssetStats,
          ],
          portfolios: [],
        },
      });
    });
  });

  describe('prepareStorage', () => {
    it('should fetch, process and return shared data', async () => {
      const did = 'someDid';
      dsMockUtils.configureMocks({
        contextOptions: {
          did,
        },
      });
      dsMockUtils.createQueryStub('statistics', 'activeAssetStats', {
        returnValue: [],
      });
      const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext
      );
      const boundFunc = prepareStorage.bind(proc);

      const result = await boundFunc({
        ticker: 'TICKER',
        type: 'Count',
        count: new BigNumber(1),
      } as AddTransferRestrictionParams);

      expect(result).toEqual({
        currentRestrictions: [],
        currentStats: [],
        needStat: true,
      });
    });
  });
});
