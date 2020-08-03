import { Text } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces/runtime';
import sinon from 'sinon';

import { ProposalStage } from '~/api/entities/Proposal/types';
import { isAuthorized, Params, prepareEditProposal } from '~/api/procedures/editProposal';
import { PostTransactionValue } from '~/base';
import { Context } from '~/context';
import { AccountKey } from '~/polkadot';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsModule from '~/utils';

jest.mock(
  '~/api/entities/Proposal',
  require('~/testUtils/mocks/entities').mockProposalModule('~/api/entities/Proposal')
);

describe('editProposal procedure', () => {
  const pipId = 10;
  const mockAddress = 'someAddress';
  const description = 'Some Proposal';
  const discussionUrl = 'www.proposal.com';
  const args = {
    description,
    discussionUrl,
  };
  const proposal = ('proposal' as unknown) as PostTransactionValue<void>;
  const rawDescription = dsMockUtils.createMockText(description);
  const rawDiscussionUrl = dsMockUtils.createMockText(discussionUrl);

  let mockContext: Mocked<Context>;
  let stringToTextStub: sinon.SinonStub<[string, Context], Text>;
  let accountKeyToStringStub: sinon.SinonStub<[AccountKey], string>;
  let addTransactionStub: sinon.SinonStub;
  let editProposalTransaction: PolymeshTx<unknown[]>;

  beforeAll(() => {
    dsMockUtils.initMocks({
      contextOptions: {
        currentPairAddress: mockAddress,
      },
    });
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();

    stringToTextStub = sinon.stub(utilsModule, 'stringToText');
    accountKeyToStringStub = sinon.stub(utilsModule, 'accountKeyToString');
  });

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub().returns([proposal]);

    editProposalTransaction = dsMockUtils.createTxStub('pips', 'amendProposal');

    mockContext = dsMockUtils.getContextInstance();

    stringToTextStub.withArgs(description, mockContext).returns(rawDescription);
    stringToTextStub.withArgs(discussionUrl, mockContext).returns(rawDiscussionUrl);
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

  test('should throw an error if the user has not passed any arguments', () => {
    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareEditProposal.call(proc, ({} as unknown) as Params)).rejects.toThrow(
      'Nothing to modify'
    );
  });

  test('should throw an error if the proposal is not in pending state', async () => {
    entityMockUtils.configureMocks({
      proposalOptions: {
        getDetails: dsMockUtils.createMockPip({
          id: dsMockUtils.createMockU32(),
          proposal: ('proposal' as unknown) as Call,
          state: dsMockUtils.createMockProposalState('Killed'),
        }),
      },
    });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let error;
    try {
      await prepareEditProposal.call(proc, { pipId, ...args });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The proposal must be in pending state');
  });

  test('should throw an error if the proposal is not in the cool off period', async () => {
    entityMockUtils.configureMocks({
      proposalOptions: {
        getDetails: dsMockUtils.createMockPip({
          id: dsMockUtils.createMockU32(),
          proposal: ('proposal' as unknown) as Call,
          state: dsMockUtils.createMockProposalState('Pending'),
        }),
      },
    });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let error;
    try {
      await prepareEditProposal.call(proc, { pipId, ...args });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The proposal is mutable only during its cool off period');
  });

  test('should add an edit proposal transaction to the queue', async () => {
    entityMockUtils.configureMocks({
      proposalOptions: {
        getStage: ProposalStage.CoolOff,
        getDetails: dsMockUtils.createMockPip({
          id: dsMockUtils.createMockU32(),
          proposal: ('proposal' as unknown) as Call,
          state: dsMockUtils.createMockProposalState('Pending'),
        }),
      },
    });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareEditProposal.call(proc, { pipId, ...args });

    sinon.assert.calledWith(
      addTransactionStub,
      editProposalTransaction,
      {},
      pipId,
      rawDiscussionUrl,
      rawDescription
    );

    await prepareEditProposal.call(proc, {
      pipId,
      description,
    });

    sinon.assert.calledWith(
      addTransactionStub,
      editProposalTransaction,
      {},
      pipId,
      null,
      rawDescription
    );

    await prepareEditProposal.call(proc, {
      pipId,
      discussionUrl,
    });

    sinon.assert.calledWith(
      addTransactionStub,
      editProposalTransaction,
      {},
      pipId,
      rawDiscussionUrl,
      null
    );
  });

  describe('isAuthorized', () => {
    test('should return whether the current account is the owner of the proposal', async () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

      accountKeyToStringStub.returns(mockAddress);

      dsMockUtils.createQueryStub('pips', 'proposalMetadata', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockProposalMetadata({
            proposer: dsMockUtils.createMockAccountKey(mockAddress),
            // eslint-disable-next-line @typescript-eslint/camelcase
            cool_off_until: dsMockUtils.createMockU32(),
            end: dsMockUtils.createMockU32(),
          })
        ),
      });

      const boundFunc = isAuthorized.bind(proc);
      let result = await boundFunc({ pipId, ...args });
      expect(result).toBe(true);

      dsMockUtils.configureMocks({
        contextOptions: {
          currentPairAddress: 'otherAddress',
        },
      });

      result = await boundFunc({ pipId, ...args });
      expect(result).toBe(false);
    });
  });
});
