import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { getAuthorization, Params, prepareCancelSto } from '~/api/procedures/cancelSto';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { RoleType, StoStatus, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Sto',
  require('~/testUtils/mocks/entities').mockStoModule('~/api/entities/Sto')
);
jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('cancelOffering procedure', () => {
  const ticker = 'SOMETICKER';
  const id = new BigNumber(1);

  const rawTicker = dsMockUtils.createMockTicker(ticker);
  const rawId = dsMockUtils.createMockU64(id.toNumber());

  let mockContext: Mocked<Context>;
  let addTransactionStub: sinon.SinonStub;
  let stopStoTransaction: PolymeshTx<unknown[]>;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();

    sinon.stub(utilsConversionModule, 'stringToTicker').returns(rawTicker);
    sinon.stub(utilsConversionModule, 'numberToU64').returns(rawId);
  });

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    stopStoTransaction = dsMockUtils.createTxStub('sto', 'stop');
    mockContext = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  test('should add a stop sto transaction to the queue', async () => {
    entityMockUtils.initMocks({
      stoOptions: {
        details: {
          status: StoStatus.Live,
        },
      },
    });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareCancelSto.call(proc, { ticker, id });

    sinon.assert.calledWith(addTransactionStub, stopStoTransaction, {}, rawTicker, rawId);
  });

  test('should throw an error if the sto is already closed', async () => {
    entityMockUtils.configureMocks({
      stoOptions: {
        details: {
          status: StoStatus.Closed,
        },
      },
    });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareCancelSto.call(proc, { ticker, id })).rejects.toThrow(
      'The STO is already closed'
    );
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);
      const boundFunc = getAuthorization.bind(proc);
      const args = {
        ticker,
      } as Params;

      expect(boundFunc(args)).toEqual({
        identityRoles: [{ type: RoleType.TokenPia, ticker }],
        signerPermissions: {
          transactions: [TxTags.sto.Stop],
          tokens: [entityMockUtils.getSecurityTokenInstance({ ticker })],
          portfolios: [],
        },
      });
    });
  });
});
