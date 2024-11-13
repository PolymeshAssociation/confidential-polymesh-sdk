// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type {
  BTreeSet,
  Bytes,
  Compact,
  Null,
  Option,
  U8aFixed,
  Vec,
  WrapperOpaque,
  bool,
  u128,
  u16,
  u32,
  u64,
  u8,
} from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, Permill } from '@polkadot/types/interfaces/runtime';
import type {
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSystemAccountInfo,
  FrameSystemEventRecord,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemPhase,
  PalletAssetAssetDetails,
  PalletAssetTickerRegistration,
  PalletAssetTickerRegistrationConfig,
  PalletBalancesBalanceLock,
  PalletCommitteePolymeshVotes,
  PalletConfidentialAssetConfidentialAccount,
  PalletConfidentialAssetConfidentialAssetDetails,
  PalletConfidentialAssetConfidentialAuditors,
  PalletConfidentialAssetLegParty,
  PalletConfidentialAssetTransaction,
  PalletConfidentialAssetTransactionId,
  PalletConfidentialAssetTransactionLegDetails,
  PalletConfidentialAssetTransactionLegId,
  PalletConfidentialAssetTransactionLegState,
  PalletConfidentialAssetTransactionStatus,
  PalletContractsStorageContractInfo,
  PalletContractsStorageDeletedContract,
  PalletContractsWasmOwnerInfo,
  PalletContractsWasmPrefabWasmModule,
  PalletCorporateActionsBallotBallotMeta,
  PalletCorporateActionsBallotBallotTimeRange,
  PalletCorporateActionsBallotBallotVote,
  PalletCorporateActionsCaId,
  PalletCorporateActionsCorporateAction,
  PalletCorporateActionsDistribution,
  PalletCorporateActionsTargetIdentities,
  PalletGrandpaStoredPendingChange,
  PalletGrandpaStoredState,
  PalletIdentityClaim1stKey,
  PalletIdentityClaim2ndKey,
  PalletImOnlineBoundedOpaqueNetworkState,
  PalletImOnlineSr25519AppSr25519Public,
  PalletPipsDepositInfo,
  PalletPipsPip,
  PalletPipsPipsMetadata,
  PalletPipsProposalState,
  PalletPipsSnapshotMetadata,
  PalletPipsSnapshottedPip,
  PalletPipsVote,
  PalletPipsVotingResult,
  PalletPreimageRequestStatus,
  PalletRelayerSubsidy,
  PalletSchedulerScheduled,
  PalletStoFundraiser,
  PalletTransactionPaymentReleases,
  PolymeshCommonUtilitiesCheckpointNextCheckpoints,
  PolymeshCommonUtilitiesCheckpointScheduleCheckpoints,
  PolymeshCommonUtilitiesGroupInactiveMember,
  PolymeshCommonUtilitiesMaybeBlock,
  PolymeshCommonUtilitiesProtocolFeeProtocolOp,
  PolymeshContractsApi,
  PolymeshContractsApiCodeHash,
  PolymeshContractsChainExtensionExtrinsicId,
  PolymeshContractsNextUpgrade,
  PolymeshHostFunctionsElgamalHostCipherText,
  PolymeshPrimitivesAgentAgentGroup,
  PolymeshPrimitivesAssetAssetId,
  PolymeshPrimitivesAssetIdentifier,
  PolymeshPrimitivesAssetMetadataAssetMetadataKey,
  PolymeshPrimitivesAssetMetadataAssetMetadataSpec,
  PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail,
  PolymeshPrimitivesAuthorization,
  PolymeshPrimitivesComplianceManagerAssetCompliance,
  PolymeshPrimitivesConditionTrustedIssuer,
  PolymeshPrimitivesDocument,
  PolymeshPrimitivesIdentityClaim,
  PolymeshPrimitivesIdentityDidRecord,
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesIdentityIdPortfolioId,
  PolymeshPrimitivesMemo,
  PolymeshPrimitivesMultisigProposalState,
  PolymeshPrimitivesMultisigProposalVoteCount,
  PolymeshPrimitivesNftNftCollection,
  PolymeshPrimitivesPosRatio,
  PolymeshPrimitivesSecondaryKeyExtrinsicPermissions,
  PolymeshPrimitivesSecondaryKeyKeyRecord,
  PolymeshPrimitivesSecondaryKeySignatory,
  PolymeshPrimitivesSettlementAffirmationStatus,
  PolymeshPrimitivesSettlementInstruction,
  PolymeshPrimitivesSettlementInstructionStatus,
  PolymeshPrimitivesSettlementLeg,
  PolymeshPrimitivesSettlementLegStatus,
  PolymeshPrimitivesSettlementMediatorAffirmationStatus,
  PolymeshPrimitivesSettlementVenue,
  PolymeshPrimitivesStatisticsStat1stKey,
  PolymeshPrimitivesStatisticsStat2ndKey,
  PolymeshPrimitivesStatisticsStatType,
  PolymeshPrimitivesSubsetSubsetRestrictionAssetId,
  PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId,
  PolymeshPrimitivesTicker,
  PolymeshPrimitivesTransferComplianceAssetTransferCompliance,
  PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
  PolymeshPrivateRuntimeDevelopRuntimeSessionKeys,
  SpConsensusBabeAppPublic,
  SpConsensusBabeBabeEpochConfiguration,
  SpConsensusBabeDigestsNextConfigDescriptor,
  SpConsensusBabeDigestsPreDigest,
  SpCoreCryptoKeyTypeId,
  SpRuntimeDigest,
  SpStakingOffenceOffenceDetails,
} from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    asset: {
      /**
       * All [`Document`] attached to an asset.
       **/
      assetDocuments: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesDocument>>,
        [PolymeshPrimitivesAssetAssetId, u32]
      >;
      /**
       * [`DocumentId`] counter per [`AssetId`].
       **/
      assetDocumentsIdSequence: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Maps each [`AssetId`] to its asset identifiers ([`AssetIdentifier`]).
       **/
      assetIdentifiers: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Vec<PolymeshPrimitivesAssetIdentifier>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Maps all [`AssetId`] that are mapped to a [`Ticker`].
       **/
      assetIdTicker: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesTicker>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Asset Metadata Global Key -> Name.
       **/
      assetMetadataGlobalKeyToName: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>,
        [u64]
      >;
      /**
       * Asset Metadata Global Name -> Key.
       **/
      assetMetadataGlobalNameToKey: AugmentedQuery<
        ApiType,
        (arg: Bytes | string | Uint8Array) => Observable<Option<u64>>,
        [Bytes]
      >;
      /**
       * Asset Metadata Global Key specs.
       **/
      assetMetadataGlobalSpecs: AugmentedQuery<
        ApiType,
        (
          arg: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataSpec>>,
        [u64]
      >;
      /**
       * Asset Metadata Local Key -> Name.
       **/
      assetMetadataLocalKeyToName: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<Bytes>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Asset Metadata Local Name -> Key.
       **/
      assetMetadataLocalNameToKey: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: Bytes | string | Uint8Array
        ) => Observable<Option<u64>>,
        [PolymeshPrimitivesAssetAssetId, Bytes]
      >;
      /**
       * Asset Metadata Local Key specs.
       **/
      assetMetadataLocalSpecs: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataSpec>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Details for an asset's Metadata values.
       **/
      assetMetadataValueDetails: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2:
            | PolymeshPrimitivesAssetMetadataAssetMetadataKey
            | { Global: any }
            | { Local: any }
            | string
            | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesAssetMetadataAssetMetadataKey]
      >;
      /**
       * Metatdata values for an asset.
       **/
      assetMetadataValues: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2:
            | PolymeshPrimitivesAssetMetadataAssetMetadataKey
            | { Global: any }
            | { Local: any }
            | string
            | Uint8Array
        ) => Observable<Option<Bytes>>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesAssetMetadataAssetMetadataKey]
      >;
      /**
       * Maps each [`AssetId`] to its underling [`AssetName`].
       **/
      assetNames: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<Bytes>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * A per account nonce that is used for generating an [`AssetId`].
       **/
      assetNonce: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
      /**
       * Maps each [`AssetId`] to its underling [`AssetDetails`].
       **/
      assets: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Option<PalletAssetAssetDetails>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * A list of assets that exempt all users from affirming its receivement.
       **/
      assetsExemptFromAffirmation: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Tracks the total [`Balance`] for each [`AssetId`] per [`IdentityId`].
       **/
      balanceOf: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<u128>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The last [`AssetMetadataGlobalKey`] used for a global key.
       **/
      currentAssetMetadataGlobalKey: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * The last [`AssetMetadataLocalKey`] used for [`AssetId`].
       **/
      currentAssetMetadataLocalKey: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Option<u64>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * The next `AssetType::Custom` ID in the sequence.
       *
       * Numbers in the sequence start from 1 rather than 0.
       **/
      customTypeIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Maps custom asset type ids to the registered string contents.
       **/
      customTypes: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
        [u32]
      >;
      /**
       * Inverse map of `CustomTypes`, from registered string contents to custom asset type ids.
       **/
      customTypesInverse: AugmentedQuery<
        ApiType,
        (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>,
        [Bytes]
      >;
      /**
       * Returns `true` if transfers for the token associated to [`AssetId`] are frozen. Otherwise, returns `false`.
       **/
      frozen: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Maps each [`AssetId`] to the name of its founding round ([`FundingRoundName`]).
       **/
      fundingRound: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Bytes>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * The total [`Balance`] of tokens issued in all recorded funding rounds ([`FundingRoundName`]).
       **/
      issuedInFundingRound: AugmentedQuery<
        ApiType,
        (
          arg:
            | ITuple<[PolymeshPrimitivesAssetAssetId, Bytes]>
            | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, Bytes | string | Uint8Array]
        ) => Observable<u128>,
        [ITuple<[PolymeshPrimitivesAssetAssetId, Bytes]>]
      >;
      /**
       * The list of mandatory mediators for every ticker.
       **/
      mandatoryMediators: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<BTreeSet<PolymeshPrimitivesIdentityId>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All assets that don't need an affirmation to be received by an identity.
       **/
      preApprovedAsset: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All security tokens owned by a user.
       **/
      securityTokensOwnedByUser: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Maps all [`Ticker`] that are linked to an [`AssetId`].
       **/
      tickerAssetId: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesTicker | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAssetAssetId>>,
        [PolymeshPrimitivesTicker]
      >;
      /**
       * Returns [`TickerRegistrationConfig`] for assessing if a ticker is valid.
       **/
      tickerConfig: AugmentedQuery<
        ApiType,
        () => Observable<PalletAssetTickerRegistrationConfig>,
        []
      >;
      /**
       * All tickers owned by a user.
       **/
      tickersOwnedByUser: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesTicker | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker]
      >;
      /**
       * Maps each [`Ticker`] to its registration details ([`TickerRegistration`]).
       **/
      uniqueTickerRegistration: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesTicker | string | Uint8Array
        ) => Observable<Option<PalletAssetTickerRegistration>>,
        [PolymeshPrimitivesTicker]
      >;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<
        ApiType,
        () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>,
        []
      >;
      /**
       * This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       *
       * It is set in `on_finalize`, before it will contain the value from the last block.
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The configuration for the current epoch. Should never be `None` as it is initialized in
       * genesis.
       **/
      epochConfig: AugmentedQuery<
        ApiType,
        () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>,
        []
      >;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The block numbers when the last and current epoch have started, respectively `N-1` and
       * `N`.
       * NOTE: We track this is in order to annotate the block number when a given pool of
       * entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
       * slots, which may be skipped, the block numbers may not line up with the slot numbers.
       **/
      epochStart: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<
        ApiType,
        () => Observable<Option<Option<SpConsensusBabeDigestsPreDigest>>>,
        []
      >;
      /**
       * How late the current block is compared to its parent.
       *
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<
        ApiType,
        () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>,
        []
      >;
      /**
       * The configuration for the next epoch, `None` if the config will not change
       * (you can fallback to `EpochConfig` instead in that case).
       **/
      nextEpochConfig: AugmentedQuery<
        ApiType,
        () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>,
        []
      >;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []>;
      /**
       * Pending epoch configuration change that will be applied when the next epoch is enacted.
       **/
      pendingEpochConfigChange: AugmentedQuery<
        ApiType,
        () => Observable<Option<SpConsensusBabeDigestsNextConfigDescriptor>>,
        []
      >;
      /**
       * The epoch randomness for the *current* epoch.
       *
       * # Security
       *
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []>;
      /**
       * Randomness under construction.
       *
       * We make a trade-off between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       *
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * A list of the last 100 skipped epochs and the corresponding session index
       * when the epoch was skipped.
       *
       * This is only used for validating equivocation proofs. An equivocation proof
       * must contains a key-ownership proof for a given session, therefore we need a
       * way to tie together sessions and epoch indices, i.e. we need to validate that
       * a validator was the owner of a given key on a given session, and what the
       * active epoch index was during that session.
       **/
      skippedEpochs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u64, u32]>>>, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>,
        [u32]
      >;
    };
    balances: {
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>,
        [AccountId32]
      >;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    capitalDistribution: {
      /**
       * All capital distributions, tied to their respective corporate actions (CAs).
       *
       * (CAId) => Distribution
       **/
      distributions: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Option<PalletCorporateActionsDistribution>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Has an asset holder been paid yet?
       *
       * (CAId, DID) -> Was DID paid in the CAId?
       **/
      holderPaid: AugmentedQuery<
        ApiType,
        (
          arg:
            | ITuple<[PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]>
            | [
                PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array,
                PolymeshPrimitivesIdentityId | string | Uint8Array
              ]
        ) => Observable<bool>,
        [ITuple<[PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]>]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    cddServiceProviders: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshPrimitivesIdentityId>>,
        []
      >;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshCommonUtilitiesGroupInactiveMember>>,
        []
      >;
    };
    checkpoint: {
      /**
       * Balance of a DID at a checkpoint.
       *
       * ([`AssetId`], did, checkpoint ID) -> Balance of a DID at a checkpoint
       **/
      balance: AugmentedQuery<
        ApiType,
        (
          arg1:
            | ITuple<[PolymeshPrimitivesAssetAssetId, u64]>
            | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array],
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<u128>,
        [ITuple<[PolymeshPrimitivesAssetAssetId, u64]>, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Checkpoints where a DID's balance was updated.
       * ([`AssetId`], did) -> [checkpoint ID where user balance changed]
       **/
      balanceUpdates: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<Vec<u64>>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Cached next checkpoint for each schedule.
       *
       * This is used to quickly find the next checkpoint from a asset's schedules.
       *
       * ([`AssetId`]) -> next checkpoints
       **/
      cachedNextCheckpoints: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Option<PolymeshCommonUtilitiesCheckpointNextCheckpoints>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Checkpoints ID generator sequence.
       * ID of first checkpoint is 1 instead of 0.
       *
       * ([`AssetId`]) -> no. of checkpoints
       **/
      checkpointIdSequence: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Scheduled checkpoints.
       *
       * ([`AssetId`], schedule ID) -> schedule checkpoints
       **/
      scheduledCheckpoints: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshCommonUtilitiesCheckpointScheduleCheckpoints>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Checkpoint schedule ID sequence for assets.
       *
       * ([`AssetId`]) -> schedule ID
       **/
      scheduleIdSequence: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All the checkpoints a given schedule originated.
       *
       * ([`AssetId`], schedule ID) -> [checkpoint ID]
       **/
      schedulePoints: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Vec<u64>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * How many "strong" references are there to a given `ScheduleId`?
       *
       * The presence of a "strong" reference, in the sense of `Rc<T>`,
       * entails that the referenced schedule cannot be removed.
       * Thus, as long as `strong_ref_count(schedule_id) > 0`,
       * `remove_schedule(schedule_id)` will error.
       *
       * ([`AssetId`], schedule ID) -> strong ref count
       **/
      scheduleRefCount: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<u32>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * The maximum complexity allowed for an asset's schedules.
       **/
      schedulesMaxComplexity: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Checkpoint timestamps.
       *
       * Every schedule-originated checkpoint maps its ID to its due time.
       * Every checkpoint manually created maps its ID to the time of recording.
       *
       * ([`AssetId`]) -> (checkpoint ID) -> checkpoint timestamp
       **/
      timestamps: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Total supply of the token at the checkpoint.
       *
       * ([`AssetId`], checkpointId) -> total supply at given checkpoint
       **/
      totalSupply: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<u128>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
    };
    committeeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshPrimitivesIdentityId>>,
        []
      >;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshCommonUtilitiesGroupInactiveMember>>,
        []
      >;
    };
    complianceManager: {
      /**
       * Compliance for an asset ([`AssetId`] -> [`AssetCompliance`])
       **/
      assetCompliances: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<PolymeshPrimitivesComplianceManagerAssetCompliance>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * List of trusted claim issuer [`AssetId`] -> Issuer Identity
       **/
      trustedClaimIssuer: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Vec<PolymeshPrimitivesConditionTrustedIssuer>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
    };
    confidentialAsset: {
      /**
       * Is the confidential account asset frozen.
       *
       * account -> asset id -> bool
       **/
      accountAssetFrozen: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetConfidentialAccount | string | Uint8Array,
          arg2: U8aFixed | string | Uint8Array
        ) => Observable<bool>,
        [PalletConfidentialAssetConfidentialAccount, U8aFixed]
      >;
      /**
       * Contains the encrypted balance of a confidential account.
       *
       * account -> asset id -> Option<HostCipherText>
       **/
      accountBalance: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetConfidentialAccount | string | Uint8Array,
          arg2: U8aFixed | string | Uint8Array
        ) => Observable<Option<PolymeshHostFunctionsElgamalHostCipherText>>,
        [PalletConfidentialAssetConfidentialAccount, U8aFixed]
      >;
      /**
       * Records the did for a confidential account.
       *
       * account -> Option<IdentityId>.
       **/
      accountDid: AugmentedQuery<
        ApiType,
        (
          arg: PalletConfidentialAssetConfidentialAccount | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [PalletConfidentialAssetConfidentialAccount]
      >;
      /**
       * Confidential asset's auditor/mediators.
       *
       * asset id -> Option<ConfidentialAuditors>
       **/
      assetAuditors: AugmentedQuery<
        ApiType,
        (
          arg: U8aFixed | string | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetConfidentialAuditors>>,
        [U8aFixed]
      >;
      /**
       * Is the confidential asset frozen.
       *
       * asset id -> bool
       **/
      assetFrozen: AugmentedQuery<
        ApiType,
        (arg: U8aFixed | string | Uint8Array) => Observable<bool>,
        [U8aFixed]
      >;
      /**
       * Details of the confidential asset.
       *
       * asset id -> Option<ConfidentialAssetDetails>
       **/
      details: AugmentedQuery<
        ApiType,
        (
          arg: U8aFixed | string | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetConfidentialAssetDetails>>,
        [U8aFixed]
      >;
      /**
       * Track venues created by an identity.
       * Only needed for the UI.
       *
       * creator_did -> venue_id -> ()
       **/
      identityVenues: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Null>,
        [PolymeshPrimitivesIdentityId, u64]
      >;
      /**
       * Accumulates the encrypted incoming balance for a confidential account.
       *
       * account -> asset id -> Option<HostCipherText>
       **/
      incomingBalance: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetConfidentialAccount | string | Uint8Array,
          arg2: U8aFixed | string | Uint8Array
        ) => Observable<Option<PolymeshHostFunctionsElgamalHostCipherText>>,
        [PalletConfidentialAssetConfidentialAccount, U8aFixed]
      >;
      /**
       * Number of affirmations pending before transaction is executed.
       *
       * transaction_id -> Option<affirms_pending>
       **/
      pendingAffirms: AugmentedQuery<
        ApiType,
        (
          arg: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array
        ) => Observable<Option<u32>>,
        [PalletConfidentialAssetTransactionId]
      >;
      /**
       * RngNonce - Nonce used as `subject` to `Randomness`.
       **/
      rngNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Number of transactions in the system (It's one more than the actual number)
       **/
      transactionCounter: AugmentedQuery<ApiType, () => Observable<Compact<u64>>, []>;
      /**
       * Legs of a transaction.
       *
       * transaction_id -> leg_id -> Option<TransactionLegDetails>
       **/
      transactionLegs: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array,
          arg2: PalletConfidentialAssetTransactionLegId | AnyNumber | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetTransactionLegDetails>>,
        [PalletConfidentialAssetTransactionId, PalletConfidentialAssetTransactionLegId]
      >;
      /**
       * All parties (identities) of a transaction.
       *
       * transaction_id -> identity -> bool
       **/
      transactionParties: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<bool>,
        [PalletConfidentialAssetTransactionId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Number of parties in a transaction.
       *
       * transaction_id -> Option<party_count>
       **/
      transactionPartyCount: AugmentedQuery<
        ApiType,
        (
          arg: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array
        ) => Observable<Option<u32>>,
        [PalletConfidentialAssetTransactionId]
      >;
      /**
       * Details about an instruction.
       *
       * transaction_id -> transaction_details
       **/
      transactions: AugmentedQuery<
        ApiType,
        (
          arg: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetTransaction>>,
        [PalletConfidentialAssetTransactionId]
      >;
      /**
       * Transaction statuses.
       *
       * transaction_id -> Option<TransactionStatus>
       **/
      transactionStatuses: AugmentedQuery<
        ApiType,
        (
          arg: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetTransactionStatus>>,
        [PalletConfidentialAssetTransactionId]
      >;
      /**
       * Pending state for each leg of a transaction.
       *
       * transaction_id -> leg_id -> Option<TransactionLegState>
       **/
      txLegStates: AugmentedQuery<
        ApiType,
        (
          arg1: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array,
          arg2: PalletConfidentialAssetTransactionLegId | AnyNumber | Uint8Array
        ) => Observable<Option<PalletConfidentialAssetTransactionLegState>>,
        [PalletConfidentialAssetTransactionId, PalletConfidentialAssetTransactionLegId]
      >;
      /**
       * Track pending transaction affirmations.
       *
       * identity -> (transaction_id, leg_id, leg_party) -> Option<bool>
       **/
      userAffirmations: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2:
            | ITuple<
                [
                  PalletConfidentialAssetTransactionId,
                  PalletConfidentialAssetTransactionLegId,
                  PalletConfidentialAssetLegParty
                ]
              >
            | [
                PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array,
                PalletConfidentialAssetTransactionLegId | AnyNumber | Uint8Array,
                (
                  | PalletConfidentialAssetLegParty
                  | 'Sender'
                  | 'Receiver'
                  | 'Mediator'
                  | number
                  | Uint8Array
                )
              ]
        ) => Observable<Option<bool>>,
        [
          PolymeshPrimitivesIdentityId,
          ITuple<
            [
              PalletConfidentialAssetTransactionId,
              PalletConfidentialAssetTransactionLegId,
              PalletConfidentialAssetLegParty
            ]
          >
        ]
      >;
      /**
       * Venues that are allowed to create transactions involving a particular asset id.
       *
       * asset id -> venue_id -> allowed
       **/
      venueAllowList: AugmentedQuery<
        ApiType,
        (
          arg1: U8aFixed | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<bool>,
        [U8aFixed, u64]
      >;
      /**
       * Number of venues in the system (It's one more than the actual number)
       **/
      venueCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Venue creator.
       *
       * venue_id -> Option<IdentityId>
       **/
      venueCreator: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [u64]
      >;
      /**
       * Venue filtering is enabled for the asset.
       *
       * asset id -> filtering_enabled
       **/
      venueFiltering: AugmentedQuery<
        ApiType,
        (arg: U8aFixed | string | Uint8Array) => Observable<bool>,
        [U8aFixed]
      >;
      /**
       * Transaction created by a venue.
       * Only needed for the UI.
       *
       * venue_id -> transaction_id -> ()
       **/
      venueTransactions: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: PalletConfidentialAssetTransactionId | AnyNumber | Uint8Array
        ) => Observable<Null>,
        [u64, PalletConfidentialAssetTransactionId]
      >;
    };
    contracts: {
      /**
       * A mapping between an original code hash and instrumented wasm code, ready for execution.
       **/
      codeStorage: AugmentedQuery<
        ApiType,
        (
          arg: H256 | string | Uint8Array
        ) => Observable<Option<PalletContractsWasmPrefabWasmModule>>,
        [H256]
      >;
      /**
       * The code associated with a given account.
       *
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      contractInfoOf: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PalletContractsStorageContractInfo>>,
        [AccountId32]
      >;
      /**
       * Evicted contracts that await child trie deletion.
       *
       * Child trie deletion is a heavy operation depending on the amount of storage items
       * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
       **/
      deletionQueue: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PalletContractsStorageDeletedContract>>,
        []
      >;
      /**
       * This is a **monotonic** counter incremented on contract instantiation.
       *
       * This is used in order to generate unique trie ids for contracts.
       * The trie id of a new contract is calculated from hash(account_id, nonce).
       * The nonce is required because otherwise the following sequence would lead to
       * a possible collision of storage:
       *
       * 1. Create a new contract.
       * 2. Terminate the contract.
       * 3. Immediately recreate the contract with the same account_id.
       *
       * This is bad because the contents of a trie are deleted lazily and there might be
       * storage of the old instantiation still in it when the new contract is created. Please
       * note that we can't replace the counter by the block number because the sequence above
       * can happen in the same block. We also can't keep the account counter in memory only
       * because storage is the only way to communicate across different extrinsics in the
       * same block.
       *
       * # Note
       *
       * Do not use it to determine the number of contracts. It won't be decremented if
       * a contract is destroyed.
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * A mapping between an original code hash and its owner information.
       **/
      ownerInfoOf: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmOwnerInfo>>,
        [H256]
      >;
      /**
       * A mapping from an original code hash to the original code, untouched by instrumentation.
       **/
      pristineCode: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>,
        [H256]
      >;
    };
    corporateAction: {
      /**
       * Associations from CAs to `Document`s via their IDs.
       * (CAId => [DocumentId])
       *
       * The `CorporateActions` map stores `AssetId => LocalId => The CA`,
       * so we can infer `AssetId => CAId`. Therefore, we don't need a double map.
       **/
      caDocLink: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Vec<u32>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * The next per-`AssetId` CA ID in the sequence.
       * The full ID is defined as a combination of `AssetId` and a number in this sequence.
       **/
      caIdSequence: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All recorded CAs thus far.
       * Only generic information is stored here.
       * Specific `CAKind`s, e.g., benefits and corporate ballots, may use additional on-chain storage.
       *
       * (AssetId => local ID => the corporate action)
       **/
      corporateActions: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<PalletCorporateActionsCorporateAction>>,
        [PolymeshPrimitivesAssetAssetId, u32]
      >;
      /**
       * The identities targeted by default for CAs for this asset,
       * either to be excluded or included.
       *
       * (AssetId => target identities)
       **/
      defaultTargetIdentities: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<PalletCorporateActionsTargetIdentities>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * The default amount of tax to withhold ("withholding tax", WT) for this asset when distributing dividends.
       *
       * To understand withholding tax, e.g., let's assume that you hold ACME shares.
       * ACME now decides to distribute 100 SEK to Alice.
       * Alice lives in Sweden, so Skatteverket (the Swedish tax authority) wants 30% of that.
       * Then those 100 * 30% are withheld from Alice, and ACME will send them to Skatteverket.
       *
       * (AssetId => % to withhold)
       **/
      defaultWithholdingTax: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<Permill>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Associates details in free-form text with a CA by its ID.
       * (CAId => CADetails)
       **/
      details: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Bytes>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * The amount of tax to withhold ("withholding tax", WT) for a certain AssetId x DID.
       * If an entry exists for a certain DID, it overrides the default in `DefaultWithholdingTax`.
       *
       * (AssetId => [(did, % to withhold)]
       **/
      didWithholdingTax: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Vec<ITuple<[PolymeshPrimitivesIdentityId, Permill]>>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Determines the maximum number of bytes that the free-form `details` of a CA can store.
       *
       * Note that this is not the number of `char`s or the number of [graphemes].
       * While this may be unnatural in terms of human understanding of a text's length,
       * it more closely reflects actual storage costs (`'a'` is cheaper to store than an emoji).
       *
       * [graphemes]: https://en.wikipedia.org/wiki/Grapheme
       **/
      maxDetailsLength: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    corporateBallot: {
      /**
       * Metadata of a corporate ballot.
       *
       * (CAId) => BallotMeta
       **/
      metas: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Option<PalletCorporateActionsBallotBallotMeta>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Stores how many choices there are in each motion.
       *
       * At all times, the invariant holds that `motion_choices[idx]` is equal to
       * `metas.unwrap().motions[idx].choices.len()`. That is, this is just a cache,
       * used to avoid fetching all the motions with their associated texts.
       *
       * `u16` choices should be more than enough to fit real use cases.
       *
       * (CAId) => Number of choices in each motion.
       **/
      motionNumChoices: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Vec<u16>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Is ranked choice voting (RCV) enabled for this ballot?
       * For an understanding of how RCV is handled, see note on `BallotVote`'s `fallback` field.
       *
       * (CAId) => bool
       **/
      rcv: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<bool>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Stores the total vote tally on each choice.
       *
       * RCV is not accounted for,
       * as there are too many wants to interpret the graph,
       * and because it would not be efficient.
       *
       * (CAId) => [current vote weights]
       **/
      results: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Vec<u128>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Time details of a corporate ballot associated with a CA.
       * The timestamps denote when voting starts and stops.
       *
       * (CAId) => BallotTimeRange
       **/
      timeRanges: AugmentedQuery<
        ApiType,
        (
          arg: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array
        ) => Observable<Option<PalletCorporateActionsBallotBallotTimeRange>>,
        [PalletCorporateActionsCaId]
      >;
      /**
       * Stores each DID's votes in a given ballot.
       * See the documentation of `BallotVote` for notes on semantics.
       *
       * (CAId) => (DID) => [vote weight]
       *
       * User must enter 0 vote weight if they don't want to vote for a choice.
       **/
      votes: AugmentedQuery<
        ApiType,
        (
          arg1: PalletCorporateActionsCaId | { assetId?: any; localId?: any } | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<Vec<PalletCorporateActionsBallotBallotVote>>,
        [PalletCorporateActionsCaId, PolymeshPrimitivesIdentityId]
      >;
    };
    externalAgents: {
      /**
       * Maps an agent (`IdentityId`) to all assets they belong to, if any.
       **/
      agentOf: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<Null>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * The next per-asset AG ID in the sequence.
       *
       * The full ID is defined as a combination of `AssetId` and a number in this sequence,
       * which starts from 1, rather than 0.
       **/
      agIdSequence: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Maps agents (`IdentityId`) for an `AssetId` to what AG they belong to, if any.
       **/
      groupOfAgent: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAgentAgentGroup>>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * For custom AGs of an `AssetId`, maps to what permissions an agent in that AG would have.
       **/
      groupPermissions: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSecondaryKeyExtrinsicPermissions>>,
        [PolymeshPrimitivesAssetAssetId, u32]
      >;
      /**
       * Maps an `AssetId` to the number of `Full` agents for it.
       **/
      numFullAgents: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u32>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<
        ApiType,
        () => Observable<Option<PalletGrandpaStoredPendingChange>>,
        []
      >;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       *
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       *
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
        [u64]
      >;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []>;
    };
    identity: {
      /**
       * How many "strong" references to the account key.
       *
       * Strong references will block a key from leaving it's identity.
       *
       * Pallets using "strong" references to account keys:
       * * Relayer: For `user_key` and `paying_key`
       *
       **/
      accountKeyRefCount: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
      /**
       * All authorizations that an identity/key has
       **/
      authorizations: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesSecondaryKeySignatory
            | { Identity: any }
            | { Account: any }
            | string
            | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesAuthorization>>,
        [PolymeshPrimitivesSecondaryKeySignatory, u64]
      >;
      /**
       * All authorizations that an identity has given. (Authorizer, auth_id -> authorized)
       **/
      authorizationsGiven: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSecondaryKeySignatory>,
        [PolymeshPrimitivesIdentityId, u64]
      >;
      /**
       * A config flag that, if set, instructs an authorization from a CDD provider in order to
       * change the primary key of an identity.
       **/
      cddAuthForPrimaryKeyRotation: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * All child identities of a parent (i.e ParentDID, ChildDID, true)
       **/
      childDid: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * (Target ID, claim type) (issuer,scope) -> Associated claims
       **/
      claims: AugmentedQuery<
        ApiType,
        (
          arg1: PalletIdentityClaim1stKey | { target?: any; claimType?: any } | string | Uint8Array,
          arg2: PalletIdentityClaim2ndKey | { issuer?: any; scope?: any } | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityClaim>>,
        [PalletIdentityClaim1stKey, PalletIdentityClaim2ndKey]
      >;
      /**
       * Controls the authorization id.
       **/
      currentAuthId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * It stores the current gas fee payer for the current transaction
       **/
      currentPayer: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * The next `CustomClaimTypeId`.
       **/
      customClaimIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * CustomClaimTypeId -> String constant
       **/
      customClaims: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>,
        [u32]
      >;
      /**
       * String constant -> CustomClaimTypeId
       **/
      customClaimsInverse: AugmentedQuery<
        ApiType,
        (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>,
        [Bytes]
      >;
      /**
       * A reverse double map to allow finding all keys for an identity.
       **/
      didKeys: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, AccountId32]
      >;
      /**
       * DID -> identity info
       **/
      didRecords: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityDidRecord>>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * DID -> bool that indicates if secondary keys are frozen.
       **/
      isDidFrozen: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<bool>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * A secondary key's asset permissions.
       **/
      keyAssetPermissions: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSubsetSubsetRestrictionAssetId>>,
        [AccountId32]
      >;
      /**
       * A secondary key's extrinsic permissions.
       **/
      keyExtrinsicPermissions: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSecondaryKeyExtrinsicPermissions>>,
        [AccountId32]
      >;
      /**
       * A secondary key's portfolio permissions.
       **/
      keyPortfolioPermissions: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSubsetSubsetRestrictionPortfolioId>>,
        [AccountId32]
      >;
      /**
       * Map from AccountId to `KeyRecord` that holds the key's type and identity.
       **/
      keyRecords: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSecondaryKeyKeyRecord>>,
        [AccountId32]
      >;
      /**
       * Nonce to ensure unique actions. starts from 1.
       **/
      multiPurposeNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Track the number of authorizations given by each identity.
       **/
      numberOfGivenAuths: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u32>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * Authorization nonce per Identity. Initially is 0.
       **/
      offChainAuthorizationNonce: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * Tracks all authorizations that must be deleted
       **/
      outdatedAuthorizations: AugmentedQuery<
        ApiType,
        (
          arg:
            | PolymeshPrimitivesSecondaryKeySignatory
            | { Identity: any }
            | { Account: any }
            | string
            | Uint8Array
        ) => Observable<Option<u64>>,
        [PolymeshPrimitivesSecondaryKeySignatory]
      >;
      /**
       * Parent identity if the DID is a child Identity.
       **/
      parentDid: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQuery<
        ApiType,
        (
          arg1: u32 | AnyNumber | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<u32>,
        [u32, AccountId32]
      >;
      /**
       * The block number after which it's ok to send heartbeats in the current
       * session.
       *
       * At the beginning of each session we set this to a value that should fall
       * roughly in the middle of the session duration. The idea is to first wait for
       * the validators to produce a block in the current session, so that the
       * heartbeat later on will not be necessary.
       *
       * This value will only be used as a fallback if we fail to get a proper session
       * progress estimate from `NextSessionRotation`, as those estimates should be
       * more accurate then the value we calculate for `HeartbeatAfter`.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PalletImOnlineSr25519AppSr25519Public>>,
        []
      >;
      /**
       * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
       * `WrapperOpaque<BoundedOpaqueNetworkState>`.
       **/
      receivedHeartbeats: AugmentedQuery<
        ApiType,
        (
          arg1: u32 | AnyNumber | Uint8Array,
          arg2: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>>,
        [u32, u32]
      >;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<
        ApiType,
        (
          arg: u32 | AnyNumber | Uint8Array
        ) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>,
        [u32]
      >;
    };
    multiSig: {
      /**
       * The multisig's admin identity.  The primary key of this identity
       * has admin control over the multisig.
       *
       * multisig -> Option<IdentityId>.
       **/
      adminDid: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [AccountId32]
      >;
      /**
       * Pending join identity authorization proposals.
       *
       * multisig -> auth id => Option<proposal id>.
       **/
      authToProposalId: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<u64>>,
        [AccountId32, u64]
      >;
      /**
       * Proposal execution reentry guard.
       **/
      executionReentry: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The last proposal id before the multisig changed signers or signatures required.
       *
       * multisig => Option<proposal id>
       **/
      lastInvalidProposal: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<Option<u64>>,
        [AccountId32]
      >;
      /**
       * Nonce to ensure unique MultiSig addresses are generated; starts from 1.
       **/
      multiSigNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Signers of a multisig. (multisig, signer) => bool.
       **/
      multiSigSigners: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<bool>,
        [AccountId32, AccountId32]
      >;
      /**
       * Confirmations required before processing a multisig tx.
       **/
      multiSigSignsRequired: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
      /**
       * Next proposal id for a multisig.  Starts from 0.
       *
       * multisig => next proposal id
       **/
      nextProposalId: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
      /**
       * Number of approved/accepted signers of a multisig.
       **/
      numberOfSigners: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
      /**
       * The multisig's paying identity.  The primary key of this identity
       * pays the transaction/protocal fees of the multisig proposals.
       *
       * multisig -> Option<IdentityId>.
       **/
      payingDid: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [AccountId32]
      >;
      /**
       * Proposals presented for voting to a multisig.
       *
       * multisig -> proposal id => Option<Proposal>.
       **/
      proposals: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<Call>>,
        [AccountId32, u64]
      >;
      /**
       * The state of a multisig proposal
       *
       * multisig -> proposal id => Option<ProposalState>.
       **/
      proposalStates: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesMultisigProposalState>>,
        [AccountId32, u64]
      >;
      /**
       * The count of approvals/rejections of a multisig proposal.
       *
       * multisig -> proposal id => Option<ProposalVoteCount>.
       **/
      proposalVoteCounts: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesMultisigProposalVoteCount>>,
        [AccountId32, u64]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * The last transaction version, used for `on_runtime_upgrade`.
       **/
      transactionVersion: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Individual multisig signer votes.
       *
       * (multisig, proposal_id) -> signer => vote.
       **/
      votes: AugmentedQuery<
        ApiType,
        (
          arg1:
            | ITuple<[AccountId32, u64]>
            | [AccountId32 | string | Uint8Array, u64 | AnyNumber | Uint8Array],
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<bool>,
        [ITuple<[AccountId32, u64]>, AccountId32]
      >;
    };
    nft: {
      /**
       * All collection details for a given collection id.
       **/
      collection: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesNftNftCollection>,
        [u64]
      >;
      /**
       * The collection id corresponding to each asset.
       **/
      collectionAsset: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All mandatory metadata keys for a given collection.
       **/
      collectionKeys: AugmentedQuery<
        ApiType,
        (
          arg: u64 | AnyNumber | Uint8Array
        ) => Observable<BTreeSet<PolymeshPrimitivesAssetMetadataAssetMetadataKey>>,
        [u64]
      >;
      /**
       * The last `NFTCollectionId` used for a collection.
       **/
      currentCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * The last `NFTId` used for an NFT.
       **/
      currentNFTId: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u64>>,
        [u64]
      >;
      /**
       * The metadata value of an nft given its collection id, token id and metadata key.
       **/
      metadataValue: AugmentedQuery<
        ApiType,
        (
          arg1: ITuple<[u64, u64]> | [u64 | AnyNumber | Uint8Array, u64 | AnyNumber | Uint8Array],
          arg2:
            | PolymeshPrimitivesAssetMetadataAssetMetadataKey
            | { Global: any }
            | { Local: any }
            | string
            | Uint8Array
        ) => Observable<Bytes>,
        [ITuple<[u64, u64]>, PolymeshPrimitivesAssetMetadataAssetMetadataKey]
      >;
      /**
       * Tracks the owner of an NFT
       **/
      nftOwner: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityIdPortfolioId>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * The total number of NFTs in a collection
       **/
      nfTsInCollection: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * The total number of NFTs per identity.
       **/
      numberOfNFTs: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQuery<
        ApiType,
        (
          arg1: U8aFixed | string | Uint8Array,
          arg2: Bytes | string | Uint8Array
        ) => Observable<Vec<H256>>,
        [U8aFixed, Bytes]
      >;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<SpStakingOffenceOffenceDetails>>,
        [H256]
      >;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       *
       * All reports are sorted by the time of offence.
       *
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<
        ApiType,
        (arg: U8aFixed | string | Uint8Array) => Observable<Bytes>,
        [U8aFixed]
      >;
    };
    pips: {
      /**
       * Total count of current pending or scheduled PIPs.
       **/
      activePipCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The maximum allowed number for `ActivePipCount`.
       * Once reached, new PIPs cannot be proposed by community members.
       **/
      activePipLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * All existing PIPs where the proposer is a committee.
       * This list is a cache of all ids in `Proposals` with `Proposer::Committee(_)`.
       **/
      committeePips: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Default enactment period that will be use after a proposal is accepted by GC.
       **/
      defaultEnactmentPeriod: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Those who have locked a deposit.
       * proposal (id, proposer) -> deposit
       **/
      deposits: AugmentedQuery<
        ApiType,
        (
          arg1: u32 | AnyNumber | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<Option<PalletPipsDepositInfo>>,
        [u32, AccountId32]
      >;
      /**
       * A live priority queue (lowest priority at index 0)
       * of pending PIPs up to the active limit.
       * Priority is defined by the `weight` in the `SnapshottedPip`.
       *
       * Unlike `SnapshotQueue`, this queue is live, getting updated with each vote cast.
       * The snapshot is therefore essentially a point-in-time clone of this queue.
       **/
      liveQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletPipsSnapshottedPip>>, []>;
      /**
       * Maximum times a PIP can be skipped before triggering `CannotSkipPip` in `enact_snapshot_results`.
       **/
      maxPipSkipCount: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * The minimum amount to be used as a deposit for community PIP creation.
       **/
      minimumProposalDeposit: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * How many blocks will it take, after a `Pending` PIP expires,
       * assuming it has not transitioned to another `ProposalState`?
       **/
      pendingPipExpiry: AugmentedQuery<
        ApiType,
        () => Observable<PolymeshCommonUtilitiesMaybeBlock>,
        []
      >;
      /**
       * Proposals so far. id can be used to keep track of PIPs off-chain.
       **/
      pipIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The number of times a certain PIP has been skipped.
       * Once a (configurable) threshhold is exceeded, a PIP cannot be skipped again.
       **/
      pipSkipCount: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<u8>,
        [u32]
      >;
      /**
       * Maps PIPs to the block at which they will be executed, if any.
       **/
      pipToSchedule: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
        [u32]
      >;
      /**
       * The metadata of the active proposals.
       **/
      proposalMetadata: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsPipsMetadata>>,
        [u32]
      >;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       * proposal id -> vote count
       **/
      proposalResult: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletPipsVotingResult>,
        [u32]
      >;
      /**
       * Actual proposal for a given id, if it's current.
       * proposal id -> proposal
       **/
      proposals: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsPip>>,
        [u32]
      >;
      /**
       * Proposal state for a given id.
       * proposal id -> proposalState
       **/
      proposalStates: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletPipsProposalState>>,
        [u32]
      >;
      /**
       * Votes per Proposal and account. Used to avoid double vote issue.
       * (proposal id, account) -> Vote
       **/
      proposalVotes: AugmentedQuery<
        ApiType,
        (
          arg1: u32 | AnyNumber | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<Option<PalletPipsVote>>,
        [u32, AccountId32]
      >;
      /**
       * Determines whether historical PIP data is persisted or removed
       **/
      pruneHistoricalPips: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Snapshots so far. id can be used to keep track of snapshots off-chain.
       **/
      snapshotIdSequence: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The metadata of the snapshot, if there is one.
       **/
      snapshotMeta: AugmentedQuery<
        ApiType,
        () => Observable<Option<PalletPipsSnapshotMetadata>>,
        []
      >;
      /**
       * The priority queue (lowest priority at index 0) of PIPs at the point of snapshotting.
       * Priority is defined by the `weight` in the `SnapshottedPip`.
       *
       * A queued PIP can be skipped. Doing so bumps the `pip_skip_count`.
       * Once a (configurable) threshhold is exceeded, a PIP cannot be skipped again.
       **/
      snapshotQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletPipsSnapshottedPip>>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    polymeshCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<
        ApiType,
        () => Observable<PolymeshCommonUtilitiesMaybeBlock>,
        []
      >;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<Call>>,
        [H256]
      >;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release coordinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>,
        [H256]
      >;
    };
    polymeshContracts: {
      /**
       * Stores the chain version and code hash for the next chain upgrade.
       **/
      apiNextUpgrade: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshContractsApi | { desc?: any; major?: any } | string | Uint8Array
        ) => Observable<Option<PolymeshContractsNextUpgrade>>,
        [PolymeshContractsApi]
      >;
      /**
       * Whitelist of extrinsics allowed to be called from contracts.
       **/
      callRuntimeWhitelist: AugmentedQuery<
        ApiType,
        (arg: PolymeshContractsChainExtensionExtrinsicId) => Observable<bool>,
        [PolymeshContractsChainExtensionExtrinsicId]
      >;
      /**
       * Stores the code hash for the current api.
       **/
      currentApiHash: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshContractsApi | { desc?: any; major?: any } | string | Uint8Array
        ) => Observable<Option<PolymeshContractsApiCodeHash>>,
        [PolymeshContractsApi]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    portfolio: {
      /**
       * Custodians allowed to create and take custody of portfolios on an id's behalf.
       **/
      allowedCustodians: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Inverse map of `Portfolios` used to ensure bijectivitiy,
       * and uniqueness of names in `Portfolios`.
       **/
      nameToNumber: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: Bytes | string | Uint8Array
        ) => Observable<Option<u64>>,
        [PolymeshPrimitivesIdentityId, Bytes]
      >;
      /**
       * The next portfolio sequence number of an identity.
       **/
      nextPortfolioNumber: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesIdentityId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesIdentityId]
      >;
      /**
       * The asset balances of portfolios.
       **/
      portfolioAssetBalances: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<u128>,
        [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * How many assets with non-zero balance this portfolio contains.
       **/
      portfolioAssetCount: AugmentedQuery<
        ApiType,
        (
          arg:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array
        ) => Observable<u64>,
        [PolymeshPrimitivesIdentityIdPortfolioId]
      >;
      /**
       * The custodian of a particular portfolio. None implies that the identity owner is the custodian.
       **/
      portfolioCustodian: AugmentedQuery<
        ApiType,
        (
          arg:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesIdentityId>>,
        [PolymeshPrimitivesIdentityIdPortfolioId]
      >;
      /**
       * Amount of assets locked in a portfolio.
       * These assets show up in portfolio balance but can not be transferred away.
       **/
      portfolioLockedAssets: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<u128>,
        [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * All locked nft for a given portfolio.
       **/
      portfolioLockedNFT: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2:
            | ITuple<[PolymeshPrimitivesAssetAssetId, u64]>
            | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array]
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityIdPortfolioId, ITuple<[PolymeshPrimitivesAssetAssetId, u64]>]
      >;
      /**
       * The nft associated to the portfolio.
       **/
      portfolioNFT: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2:
            | ITuple<[PolymeshPrimitivesAssetAssetId, u64]>
            | [PolymeshPrimitivesAssetAssetId | string | Uint8Array, u64 | AnyNumber | Uint8Array]
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityIdPortfolioId, ITuple<[PolymeshPrimitivesAssetAssetId, u64]>]
      >;
      /**
       * The set of existing portfolios with their names. If a certain pair of a DID and
       * portfolio number maps to `None` then such a portfolio doesn't exist. Conversely, if a
       * pair maps to `Some(name)` then such a portfolio exists and is called `name`.
       **/
      portfolios: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<Bytes>>,
        [PolymeshPrimitivesIdentityId, u64]
      >;
      /**
       * Tracks all the portfolios in custody of a particular identity. Only used by the UIs.
       * When `true` is stored as the value for a given `(did, pid)`, it means that `pid` is in custody of `did`.
       * `false` values are never explicitly stored in the map, and are instead inferred by the absence of a key.
       **/
      portfoliosInCustody: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId]
      >;
      /**
       * All portfolios that don't need to affirm the receivement of a given [`AssetId`].
       **/
      preApprovedPortfolios: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesIdentityIdPortfolioId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    preimage: {
      preimageFor: AugmentedQuery<
        ApiType,
        (
          arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]
        ) => Observable<Option<Bytes>>,
        [ITuple<[H256, u32]>]
      >;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>,
        [H256]
      >;
    };
    protocolFee: {
      /**
       * The mapping of operation names to the base fees of those operations.
       **/
      baseFees: AugmentedQuery<
        ApiType,
        (
          arg:
            | PolymeshCommonUtilitiesProtocolFeeProtocolOp
            | 'AssetRegisterTicker'
            | 'AssetIssue'
            | 'AssetAddDocuments'
            | 'AssetCreateAsset'
            | 'CheckpointCreateSchedule'
            | 'ComplianceManagerAddComplianceRequirement'
            | 'IdentityCddRegisterDid'
            | 'IdentityAddClaim'
            | 'IdentityAddSecondaryKeysWithAuthorization'
            | 'PipsPropose'
            | 'ContractsPutCode'
            | 'CorporateBallotAttachBallot'
            | 'CapitalDistributionDistribute'
            | 'NFTCreateCollection'
            | 'NFTMint'
            | 'IdentityCreateChildIdentity'
            | number
            | Uint8Array
        ) => Observable<u128>,
        [PolymeshCommonUtilitiesProtocolFeeProtocolOp]
      >;
      /**
       * The fee coefficient as a positive rational (numerator, denominator).
       **/
      coefficient: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    relayer: {
      /**
       * The subsidy for a `user_key` if they are being subsidised,
       * as a map `user_key` => `Subsidy`.
       *
       * A key can only have one subsidy at a time.  To change subsidisers
       * a key needs to call `remove_paying_key` to remove the current subsidy,
       * before they can accept a new subsidiser.
       **/
      subsidies: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletRelayerSubsidy>>,
        [AccountId32]
      >;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>,
        [u32]
      >;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       *
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<
        ApiType,
        (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>,
        [U8aFixed]
      >;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Indices of disabled validators.
       *
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<
        ApiType,
        (
          arg:
            | ITuple<[SpCoreCryptoKeyTypeId, Bytes]>
            | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]
        ) => Observable<Option<AccountId32>>,
        [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]
      >;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<
        ApiType,
        (
          arg: AccountId32 | string | Uint8Array
        ) => Observable<Option<PolymeshPrivateRuntimeDevelopRuntimeSessionKeys>>,
        [AccountId32]
      >;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<
        ApiType,
        () => Observable<
          Vec<ITuple<[AccountId32, PolymeshPrivateRuntimeDevelopRuntimeSessionKeys]>>
        >,
        []
      >;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
    };
    settlement: {
      /**
       * Tracks affirmations received for an instruction. (instruction_id, counter_party) -> AffirmationStatus
       **/
      affirmsReceived: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>,
        [u64, PolymeshPrimitivesIdentityIdPortfolioId]
      >;
      /**
       * Free-form text about a venue. venue_id -> `VenueDetails`
       * Only needed for the UI.
       **/
      details: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Bytes>,
        [u64]
      >;
      /**
       * Number of affirmations pending before instruction is executed. instruction_id -> affirm_pending
       **/
      instructionAffirmsPending: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>,
        [u64]
      >;
      /**
       * Number of instructions in the system (It's one more than the actual number)
       **/
      instructionCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Details about an instruction. instruction_id -> instruction_details
       **/
      instructionDetails: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<PolymeshPrimitivesSettlementInstruction>,
        [u64]
      >;
      /**
       * Legs under an instruction. (instruction_id, leg_id) -> Leg
       **/
      instructionLegs: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSettlementLeg>>,
        [u64, u64]
      >;
      /**
       * Status of a leg under an instruction. (instruction_id, leg_id) -> LegStatus
       **/
      instructionLegStatus: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementLegStatus>,
        [u64, u64]
      >;
      /**
       * The status for the mediators affirmation.
       **/
      instructionMediatorsAffirmations: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementMediatorAffirmationStatus>,
        [u64, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Instruction memo
       **/
      instructionMemos: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PolymeshPrimitivesMemo>>,
        [u64]
      >;
      /**
       * Instruction statuses. instruction_id -> InstructionStatus
       **/
      instructionStatuses: AugmentedQuery<
        ApiType,
        (
          arg: u64 | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementInstructionStatus>,
        [u64]
      >;
      /**
       * Tracks the number of signers each venue has.
       **/
      numberOfVenueSigners: AugmentedQuery<
        ApiType,
        (arg: u64 | AnyNumber | Uint8Array) => Observable<u32>,
        [u64]
      >;
      /**
       * Tracks the affirmation status for offchain legs in a instruction. [`(InstructionId, LegId)`] -> [`AffirmationStatus`]
       **/
      offChainAffirmations: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>,
        [u64, u64]
      >;
      /**
       * Tracks redemption of receipts. (signer, receipt_uid) -> receipt_used
       **/
      receiptsUsed: AugmentedQuery<
        ApiType,
        (
          arg1: AccountId32 | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<bool>,
        [AccountId32, u64]
      >;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Helps a user track their pending instructions and affirmations (only needed for UI).
       * (counter_party, instruction_id) -> AffirmationStatus
       **/
      userAffirmations: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementAffirmationStatus>,
        [PolymeshPrimitivesIdentityIdPortfolioId, u64]
      >;
      /**
       * Venues create by an identity.
       * Only needed for the UI.
       *
       * identity -> venue_id -> ()
       **/
      userVenues: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesIdentityId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Null>,
        [PolymeshPrimitivesIdentityId, u64]
      >;
      /**
       * Venues that are allowed to create instructions involving a particular asset. Only used if filtering is enabled.
       * ([`AssetId`], venue_id) -> allowed
       **/
      venueAllowList: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<bool>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Number of venues in the system (It's one more than the actual number)
       **/
      venueCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Tracks if a token has enabled filtering venues that can create instructions involving their token. AssetId -> filtering_enabled
       **/
      venueFiltering: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<bool>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Info about a venue. venue_id -> venue
       **/
      venueInfo: AugmentedQuery<
        ApiType,
        (
          arg: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSettlementVenue>>,
        [u64]
      >;
      /**
       * Instructions under a venue.
       * Only needed for the UI.
       *
       * venue_id -> instruction_id -> ()
       **/
      venueInstructions: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Null>,
        [u64, u64]
      >;
      /**
       * Signers allowed by the venue. (venue_id, signer) -> bool
       **/
      venueSigners: AugmentedQuery<
        ApiType,
        (
          arg1: u64 | AnyNumber | Uint8Array,
          arg2: AccountId32 | string | Uint8Array
        ) => Observable<bool>,
        [u64, AccountId32]
      >;
    };
    statistics: {
      /**
       * Maps a set of [`StatType`] for each [`AssetId`].
       **/
      activeAssetStats: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<BTreeSet<PolymeshPrimitivesStatisticsStatType>>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Asset stats.
       **/
      assetStats: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesStatisticsStat1stKey
            | { assetId?: any; statType?: any }
            | string
            | Uint8Array,
          arg2:
            | PolymeshPrimitivesStatisticsStat2ndKey
            | { NoClaimStat: any }
            | { Claim: any }
            | string
            | Uint8Array
        ) => Observable<u128>,
        [PolymeshPrimitivesStatisticsStat1stKey, PolymeshPrimitivesStatisticsStat2ndKey]
      >;
      /**
       * The [`AssetTransferCompliance`] for each [`AssetId`].
       **/
      assetTransferCompliances: AugmentedQuery<
        ApiType,
        (
          arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array
        ) => Observable<PolymeshPrimitivesTransferComplianceAssetTransferCompliance>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Storage migration version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Entities exempt from a Transfer Compliance rule.
       **/
      transferConditionExemptEntities: AugmentedQuery<
        ApiType,
        (
          arg1:
            | PolymeshPrimitivesTransferComplianceTransferConditionExemptKey
            | { assetId?: any; op?: any; claimType?: any }
            | string
            | Uint8Array,
          arg2: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<bool>,
        [
          PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
          PolymeshPrimitivesIdentityId
        ]
      >;
    };
    sto: {
      /**
       * Total fundraisers created for a token.
       **/
      fundraiserCount: AugmentedQuery<
        ApiType,
        (arg: PolymeshPrimitivesAssetAssetId | string | Uint8Array) => Observable<u64>,
        [PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Name for the Fundraiser. Only used offchain.
       * (AssetId, fundraiser_id) -> Fundraiser name
       **/
      fundraiserNames: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<Bytes>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * All fundraisers that are currently running.
       * (AssetId, fundraiser_id) -> Fundraiser
       **/
      fundraisers: AugmentedQuery<
        ApiType,
        (
          arg1: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          arg2: u64 | AnyNumber | Uint8Array
        ) => Observable<Option<PalletStoFundraiser>>,
        [PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Storage migration version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>,
        [AccountId32]
      >;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>,
        [u32]
      >;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<
        ApiType,
        () => Observable<FrameSupportDispatchPerDispatchClassWeight>,
        []
      >;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       *
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       *
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       *
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       *
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>,
        [H256]
      >;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
        [u32]
      >;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<
        ApiType,
        () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>,
        []
      >;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<
        ApiType,
        () => Observable<PolymeshCommonUtilitiesMaybeBlock>,
        []
      >;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<Call>>,
        [H256]
      >;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release coordinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>,
        [H256]
      >;
    };
    technicalCommitteeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshPrimitivesIdentityId>>,
        []
      >;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshCommonUtilitiesGroupInactiveMember>>,
        []
      >;
    };
    testUtils: {};
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<
        ApiType,
        () => Observable<PalletTransactionPaymentReleases>,
        []
      >;
    };
    upgradeCommittee: {
      /**
       * Time after which a proposal will expire.
       **/
      expiresAfter: AugmentedQuery<
        ApiType,
        () => Observable<PolymeshCommonUtilitiesMaybeBlock>,
        []
      >;
      /**
       * The current members of the committee.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<PolymeshPrimitivesIdentityId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash.
       **/
      proposalOf: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<Call>>,
        [H256]
      >;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Release coordinator.
       **/
      releaseCoordinator: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []>;
      /**
       * Storage version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Vote threshold for an approval.
       **/
      voteThreshold: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []>;
      /**
       * PolymeshVotes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<PalletCommitteePolymeshVotes>>,
        [H256]
      >;
    };
    upgradeCommitteeMembership: {
      /**
       * The current "active" membership, stored as an ordered Vec.
       **/
      activeMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshPrimitivesIdentityId>>,
        []
      >;
      /**
       * Limit of how many "active" members there can be.
       **/
      activeMembersLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current "inactive" membership, stored as an ordered Vec.
       **/
      inactiveMembers: AugmentedQuery<
        ApiType,
        () => Observable<Vec<PolymeshCommonUtilitiesGroupInactiveMember>>,
        []
      >;
    };
    utility: {
      /**
       * Nonce for `relay_tx`.
       * POLYMESH: added.
       **/
      nonces: AugmentedQuery<
        ApiType,
        (arg: AccountId32 | string | Uint8Array) => Observable<u64>,
        [AccountId32]
      >;
    };
    validatorSet: {
      offlineValidators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
    };
  } // AugmentedQueries
} // declare module
