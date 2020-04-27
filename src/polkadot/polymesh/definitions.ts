/* eslint-disable @typescript-eslint/camelcase */
export default {
  types: {
    IdentityId: '[u8; 32]',
    Ticker: '[u8; 12]',
    PosRatio: '(u32, u32)',
    DocumentName: 'Text',
    DocumentUri: 'Text',
    DocumentHash: 'Text',
    Document: {
      name: 'DocumentName',
      uri: 'DocumentUri',
      content_hash: 'DocumentHash',
    },
    AssetType: {
      _enum: {
        Equity: '',
        Debt: '',
        Commodity: '',
        StructuredProduct: '',
        Custom: 'Vec<u8>',
      },
    },
    IdentifierType: {
      _enum: {
        Cins: '',
        Cusip: '',
        Isin: '',
      },
    },
    TokenName: 'Text',
    AssetIdentifier: 'Text',
    FundingRoundName: 'Text',
    SecurityToken: {
      name: 'TokenName',
      total_supply: 'Balance',
      owner_did: 'IdentityId',
      divisible: 'bool',
      asset_type: 'AssetType',
      link_id: 'u64',
    },
    LinkedKeyInfo: {
      _enum: {
        Unique: 'IdentityId',
        Group: 'Vec<IdentityId>',
      },
    },
    AccountKey: '[u8;32]',
    Permission: {
      _enum: ['Full', 'Admin', 'Operator', 'SpendFunds'],
    },
    Link: {
      link_data: 'LinkData',
      expiry: 'Option<Moment>',
      link_id: 'u64',
    },
    LinkData: {
      _enum: {
        DocumentOwned: 'Document',
        TickerOwned: 'Ticker',
        TokenOwned: 'Ticker',
      },
    },
    SignatoryType: {
      _enum: ['External', 'Identity', 'MultiSig', 'Relayer'],
    },
    Signatory: {
      _enum: {
        Identity: 'IdentityId',
        AccountKey: 'AccountKey',
      },
    },
    SigningItem: {
      signer: 'Signatory',
      signer_type: 'SignatoryType',
      permissions: 'Vec<Permission>',
    },
    SigningItemWithAuth: {
      signing_item: 'SigningItem',
      auth_signature: 'Signature',
    },
    IdentityRole: {
      _enum: [
        'Issuer',
        'SimpleTokenIssuer',
        'Validator',
        'ClaimIssuer',
        'Investor',
        'NodeRunner',
        'PM',
        'CDDAMLClaimIssuer',
        'AccreditedInvestorClaimIssuer',
        'VerifiedIdentityClaimIssuer',
      ],
    },
    PreAuthorizedKeyInfo: {
      target_id: 'IdentityId',
      signing_item: 'SigningItem',
    },
    DidRecord: {
      roles: 'Vec<IdentityRole>',
      master_key: 'AccountKey',
      signing_items: 'Vec<SigningItem>',
    },
    JurisdictionName: 'Text',
    Scope: 'IdentityId',
    Claim: {
      _enum: {
        Accredited: 'Scope',
        Affiliate: 'Scope',
        BuyLockup: 'Scope',
        SellLockup: 'Scope',
        CustomerDueDiligence: '',
        KnowYourCustomer: 'Scope',
        Jurisdiction: '(JurisdictionName, Scope)',
        Whitelisted: 'Scope',
        Blacklisted: 'Scope',
        NoData: '',
      },
    },
    ClaimType: {
      _enum: {
        Accredited: '',
        Affiliate: '',
        BuyLockup: '',
        SellLockup: '',
        CustomerDueDiligence: '',
        KnowYourCustomer: '',
        Jurisdiction: '',
        Whitelisted: '',
        Blacklisted: '',
        NoType: '',
      },
    },
    IdentityClaim: {
      claim_issuer: 'IdentityId',
      issuance_date: 'Moment',
      last_update_date: 'Moment',
      expiry: 'Option<Moment>',
      claim: 'Claim',
    },
    IdentityClaimKey: {
      id: 'IdentityId',
      claim_type: 'ClaimType',
    },
    AssetTransferRule: {
      sender_rules: 'Vec<Rule>',
      receiver_rules: 'Vec<Rule>',
      rule_id: 'u32',
    },
    RuleType: {
      _enum: {
        IsPresent: 'Claim',
        IsAbsent: 'Claim',
        IsAnyOf: 'Vec<Claim>',
        IsNoneOf: 'Vec<Claim>',
      },
    },
    Rule: {
      rule_type: 'RuleType',
      issuers: 'Vec<IdentityId>',
    },
    STO: {
      beneficiary_did: 'IdentityId',
      cap: 'Balance',
      sold: 'Balance',
      rate: 'u64',
      start_date: 'Moment',
      end_date: 'Moment',
      active: 'bool',
    },
    Investment: {
      investor_did: 'IdentityId',
      amount_paid: 'Balance',
      tokens_purchased: 'Balance',
      last_purchase_date: 'Moment',
    },
    SimpleTokenRecord: {
      ticker: 'Ticker',
      total_supply: 'Balance',
      owner_did: 'IdentityId',
    },
    FeeOf: 'Balance',
    Dividend: {
      amount: 'Balance',
      active: 'bool',
      maturates_at: 'Option<u64>',
      expires_at: 'Option<u64>',
      payout_currency: 'Option<Ticker>',
      checkpoint_id: 'u64',
    },
    TargetIdAuthorization: {
      target_id: 'IdentityId',
      nonce: 'u64',
      expires_at: 'Moment',
    },
    TickerRegistration: {
      owner: 'IdentityId',
      expiry: 'Option<Moment>',
      link_id: 'u64',
    },
    TickerRegistrationConfig: {
      max_ticker_length: 'u8',
      registration_length: 'Option<Moment>',
    },
    SignData: {
      custodian_did: 'IdentityId',
      holder_did: 'IdentityId',
      ticker: 'Ticker',
      value: 'Balance',
      nonce: 'u16',
    },
    MotionTitle: 'Text',
    MotionInfoLink: 'Text',
    Motion: {
      title: 'MotionTitle',
      info_link: 'MotionInfoLink',
      choices: 'Vec<MotionTitle>',
    },
    Ballot: {
      checkpoint_id: 'u64',
      voting_start: 'Moment',
      voting_end: 'Moment',
      motions: 'Vec<Motion>',
    },
    Url: 'Text',
    MipDescription: 'Text',
    MipsMetadata: {
      proposer: 'AccountKey',
      index: 'u32',
      end: 'u32',
      url: 'Option<Url>',
      description: 'Option<MipDescription>',
      cool_off_until: 'u32',
      beneficiaries: 'Vec<Beneficiary>',
    },
    Beneficiary: {
      id: 'IdentityId',
      amount: 'Balance',
    },
    DepositInfo: {
      owner: 'AccountKey',
      amount: 'Balance',
    },
    PolymeshVotes: {
      index: 'u32',
      ayes: 'Vec<(IdentityId, Balance)>',
      nays: 'Vec<(IdentityId, Balance)>',
    },
    MipId: 'u32',
    ProposalState: {
      _enum: ['Pending', 'Cancelled', 'Killed', 'Rejected', 'Referendum'],
    },
    ReferendumState: {
      _enum: ['Pending', 'Scheduled', 'Rejected', 'Failed', 'Executed'],
    },
    ReferendumType: {
      _enum: ['FastTracked', 'Emergency', 'Community'],
    },
    MIP: {
      index: 'MipId',
      proposal: 'Call',
      state: 'ProposalState',
    },
    Referendum: {
      index: 'MipId',
      state: 'ReferendumState',
      referendum_type: 'ReferendumType',
      enactment_period: 'u32',
    },
    TickerTransferApproval: {
      authorized_by: 'IdentityId',
      next_ticker: 'Option<Ticker>',
      previous_ticker: 'Option<Ticker>',
    },
    OffChainSignature: 'H512',
    PermissionedValidator: {
      compliance: 'Compliance',
    },
    Authorization: {
      authorization_data: 'AuthorizationData',
      authorized_by: 'Signatory',
      expiry: 'Option<Moment>',
      auth_id: 'u64',
    },
    AuthorizationData: {
      _enum: {
        AttestMasterKeyRotation: 'IdentityId',
        RotateMasterKey: 'IdentityId',
        TransferTicker: 'Ticker',
        AddMultiSigSigner: '',
        TransferTokenOwnership: 'Ticker',
        JoinIdentity: 'IdentityId',
        Custom: 'Vec<u8>',
        NoData: '',
      },
    },
    AuthIdentifier: {
      signatory: 'Signatory',
      auth_id: 'u64',
    },
    Compliance: {
      _enum: ['Pending', 'Active'],
    },
    SmartExtensionType: {
      _enum: {
        TransferManager: '',
        Offerings: '',
        Custom: 'Vec<u8>',
      },
    },
    SmartExtensionName: 'Text',
    SmartExtension: {
      extension_type: 'SmartExtensionType',
      extension_name: 'SmartExtensionName',
      extension_id: 'IdentityId',
      is_archive: 'bool',
    },
    ProportionMatch: {
      _enum: ['AtLeast', 'MoreThan'],
    },
    AuthorizationNonce: 'u64',
    Counter: 'u64',
    Commission: {
      _enum: {
        Individual: '',
        Global: 'u32',
      },
    },
    RestrictionResult: {
      _enum: ['Valid', 'Invalid', 'ForceValid'],
    },
    Memo: '[u8;32]',
    IssueRecipient: {
      _enum: {
        Account: 'AccountKey',
        Identity: 'IdentityId',
      },
    },
    BridgeTx: {
      nonce: 'u64',
      recipient: 'IssueRecipient',
      value: 'u128',
      tx_hash: 'H256',
    },
    PendingTx: {
      did: 'IdentityId',
      bridge_tx: 'BridgeTx',
    },
    OfflineSlashingParams: {
      max_offline_percent: 'u32',
      constant: 'u32',
      max_slash_percent: 'u32',
    },
    AssetTransferRules: {
      is_paused: 'bool',
      rules: 'Vec<AssetTransferRule>',
    },
    Claim1stKey: {
      target: 'IdentityId',
      claim_type: 'ClaimType',
    },
    Claim2ndKey: {
      issuer: 'IdentityId',
      scope: 'Option<Scope>',
    },
    BatchAddClaimItem: {
      target: 'IdentityId',
      claim: 'Claim',
      expiry: 'Option<u64>',
    },
    BatchRevokeClaimItem: {
      target: 'IdentityId',
      claim: 'Claim',
    },
    InactiveMember: {
      id: 'IdentityId',
      deactivated_at: 'Moment',
      expiry: 'Option<Moment>',
    },
    VotingResult: {
      ayes_count: 'u32',
      ayes_stake: 'Balance',
      nays_count: 'u32',
      nays_stake: 'Balance',
    },
    ProtocolOp: {
      _enum: [
        'AssetRegisterTicker',
        'AssetIssue',
        'AssetAddDocument',
        'AssetCreateToken',
        'DividendNew',
        'GeneralTmAddActiveRule',
        'IdentityRegisterDid',
        'IdentityCddRegisterDid',
        'IdentityAddClaim',
        'IdentitySetMasterKey',
        'IdentityAddSigningItem',
        'MipsPropose',
        'VotingAddBallot',
      ],
    },
    CddStatus: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>',
      },
    },
    AssetDidResult: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>',
      },
    },
    DidRecordsSuccess: {
      master_key: 'AccountKey',
      signing_items: 'Vec<SigningItem>',
    },
    DidRecords: {
      _enum: {
        Success: 'DidRecordsSuccess',
        IdNotFound: 'Vec<u8>',
      },
    },
    CappedVoteCountSuccess: {
      ayes: 'u64',
      nays: 'u64',
    },
    CappedVoteCount: {
      _enum: {
        Success: 'CappedVoteCountSuccess',
        ProposalNotFound: 'Vec<u8>',
      },
    },
    Weight: 'u32',
    CappedFee: 'u64',
  },
  rpc: {
    identity: {
      isIdentityHasValidCdd: {
        description: 'use to tell whether the given ' + 'did has valid cdd claim or not',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'did',
            type: 'IdentityId',
            isOptional: false,
          },
          {
            name: 'buffer_time',
            type: 'u64',
            isOptional: true,
          },
        ],
        type: 'CddStatus',
      },
      getAssetDid: {
        description: 'function is used to query the given ticker DID',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'ticker',
            type: 'Ticker',
            isOptional: false,
          },
        ],
        type: 'AssetDidResult',
      },
      getDidRecords: {
        description: 'Used to get the did record values for a given DID',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'did',
            type: 'IdentityId',
            isOptional: false,
          },
        ],
        type: 'DidRecords',
      },
    },
    mips: {
      getVotes: {
        description: 'Summary of votes of a proposal given by index',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'index',
            type: 'u32',
            isOptional: false,
          },
        ],
        type: 'CappedVoteCount',
      },
      proposedBy: {
        description: 'Retrieves proposal indices started by address',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'address',
            type: 'AccountId',
            isOptional: false,
          },
        ],
        type: 'Vec<u32>',
      },
      votedOn: {
        description: 'Retrieves proposal address indices voted on',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'address',
            type: 'AccountId',
            isOptional: false,
          },
        ],
        type: 'Vec<u32>',
      },
    },
    protocolFee: {
      computeFee: {
        description: 'Gets the fee of a chargeable extrinsic operation',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
          {
            name: 'op',
            type: 'ProtocolOp',
            isOptional: false,
          },
        ],
        type: 'CappedFee',
      },
    },
    staking: {
      getCurve: {
        description: 'Retrieves curves parameters',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<(Perbill, Perbill)>',
      },
    },
  },
};
