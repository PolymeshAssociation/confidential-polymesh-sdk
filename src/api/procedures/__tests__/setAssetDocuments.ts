import { Vec } from '@polkadot/types';
import { PolymeshPrimitivesDocument } from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import { when } from 'jest-when';
import { Document, DocumentId, Ticker } from 'polymesh-types/types';

import {
  getAuthorization,
  Params,
  prepareSetAssetDocuments,
  prepareStorage,
  Storage,
} from '~/api/procedures/setAssetDocuments';
import { Asset, Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { AssetDocument, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import { tuple } from '~/types/utils';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);

describe('setAssetDocuments procedure', () => {
  let mockContext: Mocked<Context>;
  let stringToTickerSpy: jest.SpyInstance<Ticker, [string, Context]>;
  let assetDocumentToDocumentSpy: jest.SpyInstance<
    PolymeshPrimitivesDocument,
    [AssetDocument, Context]
  >;
  let ticker: string;
  let documents: AssetDocument[];
  let rawTicker: Ticker;
  let rawDocuments: PolymeshPrimitivesDocument[];
  let documentEntries: [[Ticker, DocumentId], PolymeshPrimitivesDocument][];
  let args: Params;

  beforeAll(() => {
    dsMockUtils.initMocks({
      contextOptions: {
        balance: {
          free: new BigNumber(500),
          locked: new BigNumber(0),
          total: new BigNumber(500),
        },
      },
    });
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    stringToTickerSpy = jest.spyOn(utilsConversionModule, 'stringToTicker');
    jest.spyOn(utilsConversionModule, 'signerValueToSignatory');
    assetDocumentToDocumentSpy = jest.spyOn(utilsConversionModule, 'assetDocumentToDocument');
    ticker = 'SOME_TICKER';
    documents = [
      {
        name: 'someDocument',
        uri: 'someUri',
        contentHash: '0x01',
      },
      {
        name: 'otherDocument',
        uri: 'otherUri',
        contentHash: '0x02',
      },
    ];
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawDocuments = documents.map(({ name, uri, contentHash, type, filedAt }) =>
      dsMockUtils.createMockDocument({
        name: dsMockUtils.createMockBytes(name),
        uri: dsMockUtils.createMockBytes(uri),
        contentHash: dsMockUtils.createMockDocumentHash({
          H128: dsMockUtils.createMockU8aFixed(contentHash, true),
        }),
        docType: dsMockUtils.createMockOption(type ? dsMockUtils.createMockBytes(type) : null),
        filingDate: dsMockUtils.createMockOption(
          filedAt ? dsMockUtils.createMockMoment(new BigNumber(filedAt.getTime())) : null
        ),
      })
    );
    documentEntries = rawDocuments.map((doc, index) =>
      tuple([rawTicker, dsMockUtils.createMockU32(new BigNumber(index))], doc)
    );
    args = {
      ticker,
      documents,
    };
  });

  let removeDocumentsTransaction: PolymeshTx<[Vec<DocumentId>, Ticker]>;
  let addDocumentsTransaction: PolymeshTx<[Vec<Document>, Ticker]>;

  beforeEach(() => {
    dsMockUtils.createQueryMock('asset', 'assetDocuments', {
      entries: [documentEntries[0]],
    });

    removeDocumentsTransaction = dsMockUtils.createTxMock('asset', 'removeDocuments');
    addDocumentsTransaction = dsMockUtils.createTxMock('asset', 'addDocuments');

    mockContext = dsMockUtils.getContextInstance();

    when(stringToTickerSpy).calledWith(ticker, mockContext).mockReturnValue(rawTicker);
    documents.forEach((doc, index) => {
      when(assetDocumentToDocumentSpy)
        .calledWith(doc, mockContext)
        .mockReturnValue(rawDocuments[index]);
    });
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

  it('should throw an error if the new list is the same as the current one', () => {
    const proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
      currentDocs: documents,
      currentDocIds: [],
    });

    return expect(prepareSetAssetDocuments.call(proc, args)).rejects.toThrow(
      'The supplied document list is equal to the current one'
    );
  });

  it('should add a remove documents transaction and an add documents transaction to the batch', async () => {
    const docIds = [documentEntries[0][0][1]];
    const proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
      currentDocIds: docIds,
      currentDocs: [],
    });

    const result = await prepareSetAssetDocuments.call(proc, args);

    expect(result).toEqual({
      transactions: [
        {
          transaction: removeDocumentsTransaction,
          feeMultiplier: new BigNumber(1),
          args: [docIds, rawTicker],
        },
        {
          transaction: addDocumentsTransaction,
          feeMultiplier: new BigNumber(rawDocuments.length),
          args: [rawDocuments, rawTicker],
        },
      ],
      resolver: expect.objectContaining({ ticker }),
    });
  });

  it('should not add a remove documents transaction if there are no documents linked to the Asset', async () => {
    const proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
      currentDocIds: [],
      currentDocs: [],
    });

    const result = await prepareSetAssetDocuments.call(proc, args);

    expect(result).toEqual({
      transactions: [
        {
          transaction: addDocumentsTransaction,
          feeMultiplier: new BigNumber(rawDocuments.length),
          args: [rawDocuments, rawTicker],
        },
      ],
      resolver: expect.objectContaining({ ticker }),
    });
  });

  it('should not add an add documents transaction if there are no documents passed as arguments', async () => {
    const docIds = [documentEntries[0][0][1]];
    const proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
      currentDocs: [documents[0]],
      currentDocIds: docIds,
    });

    const result = await prepareSetAssetDocuments.call(proc, { ...args, documents: [] });

    expect(result).toEqual({
      transactions: [
        {
          transaction: removeDocumentsTransaction,
          feeMultiplier: new BigNumber(1),
          args: [docIds, rawTicker],
        },
      ],
      resolver: expect.objectContaining({ ticker }),
    });
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      let proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
        currentDocIds: [documentEntries[0][0][1]],
        currentDocs: [],
      });
      let boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.asset.AddDocuments, TxTags.asset.RemoveDocuments],
          portfolios: [],
        },
      });

      proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext, {
        currentDocIds: [],
        currentDocs: [],
      });
      boundFunc = getAuthorization.bind(proc);

      expect(boundFunc({ ...args, documents: [] })).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [],
          portfolios: [],
        },
      });
    });
  });

  describe('prepareStorage', () => {
    it('should return the current documents and their ids', async () => {
      const proc = procedureMockUtils.getInstance<Params, Asset, Storage>(mockContext);
      const boundFunc = prepareStorage.bind(proc);

      dsMockUtils.createQueryMock('asset', 'assetDocuments', {
        entries: documentEntries,
      });

      const result = await boundFunc(args);

      expect(result).toEqual({
        currentDocs: documents,
        currentDocIds: documentEntries.map(([[, id]]) => id),
      });
    });
  });
});
