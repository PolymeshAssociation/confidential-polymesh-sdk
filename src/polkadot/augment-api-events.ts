// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type {
  BTreeMap,
  BTreeSet,
  Bytes,
  Null,
  Option,
  Result,
  U8aFixed,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, Permill } from '@polkadot/types/interfaces/runtime';
import type {
  FrameSupportDispatchDispatchInfo,
  FrameSupportTokensMiscBalanceStatus,
  PalletConfidentialAssetAffirmParty,
  PalletConfidentialAssetConfidentialAccount,
  PalletConfidentialAssetConfidentialAuditors,
  PalletConfidentialAssetTransactionId,
  PalletConfidentialAssetTransactionLegDetails,
  PalletConfidentialAssetTransactionLegId,
  PalletCorporateActionsBallotBallotMeta,
  PalletCorporateActionsBallotBallotTimeRange,
  PalletCorporateActionsBallotBallotVote,
  PalletCorporateActionsCaId,
  PalletCorporateActionsCorporateAction,
  PalletCorporateActionsDistribution,
  PalletCorporateActionsTargetIdentities,
  PalletImOnlineSr25519AppSr25519Public,
  PalletPipsProposalData,
  PalletPipsProposalState,
  PalletPipsProposer,
  PalletPipsSnapshottedPip,
  PalletStoFundraiser,
  PolymeshCommonUtilitiesCheckpointScheduleCheckpoints,
  PolymeshCommonUtilitiesMaybeBlock,
  PolymeshContractsApi,
  PolymeshContractsChainExtensionExtrinsicId,
  PolymeshContractsChainVersion,
  PolymeshHostFunctionsElgamalHostCipherText,
  PolymeshPrimitivesAgentAgentGroup,
  PolymeshPrimitivesAssetAssetId,
  PolymeshPrimitivesAssetAssetType,
  PolymeshPrimitivesAssetIdentifier,
  PolymeshPrimitivesAssetMetadataAssetMetadataKey,
  PolymeshPrimitivesAssetMetadataAssetMetadataSpec,
  PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail,
  PolymeshPrimitivesAuthorizationAuthorizationData,
  PolymeshPrimitivesComplianceManagerComplianceRequirement,
  PolymeshPrimitivesConditionTrustedIssuer,
  PolymeshPrimitivesDocument,
  PolymeshPrimitivesEventOnly,
  PolymeshPrimitivesIdentityClaim,
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesIdentityIdPortfolioId,
  PolymeshPrimitivesMemo,
  PolymeshPrimitivesNftNfTs,
  PolymeshPrimitivesPortfolioFundDescription,
  PolymeshPrimitivesPortfolioPortfolioUpdateReason,
  PolymeshPrimitivesPosRatio,
  PolymeshPrimitivesSecondaryKey,
  PolymeshPrimitivesSecondaryKeyExtrinsicPermissions,
  PolymeshPrimitivesSecondaryKeyPermissions,
  PolymeshPrimitivesSettlementLeg,
  PolymeshPrimitivesSettlementReceiptMetadata,
  PolymeshPrimitivesSettlementSettlementType,
  PolymeshPrimitivesSettlementVenueType,
  PolymeshPrimitivesStatisticsStatType,
  PolymeshPrimitivesStatisticsStatUpdate,
  PolymeshPrimitivesTicker,
  PolymeshPrimitivesTransferComplianceTransferCondition,
  PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
  SpConsensusGrandpaAppPublic,
  SpRuntimeDispatchError,
} from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    asset: {
      /**
       * An asset has been added to the list of pre aprroved receivement (valid for all identities).
       * Parameters: [`AssetId`] of the pre approved asset.
       **/
      AssetAffirmationExemption: AugmentedEvent<ApiType, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * Emitted when Tokens were issued, redeemed or transferred.
       * Contains the [`IdentityId`] of the receiver/issuer/redeemer, the [`AssetId`] for the token, the balance that was issued/transferred/redeemed,
       * the [`PortfolioId`] of the source, the [`PortfolioId`] of the destination and the [`PortfolioUpdateReason`].
       **/
      AssetBalanceUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          u128,
          Option<PolymeshPrimitivesIdentityIdPortfolioId>,
          Option<PolymeshPrimitivesIdentityIdPortfolioId>,
          PolymeshPrimitivesPortfolioPortfolioUpdateReason
        ]
      >;
      /**
       * Event for creation of the asset.
       * caller DID/ owner DID, AssetId, divisibility, asset type, beneficiary DID, asset name, identifiers, funding round
       **/
      AssetCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          bool,
          PolymeshPrimitivesAssetAssetType,
          PolymeshPrimitivesIdentityId,
          Bytes,
          Vec<PolymeshPrimitivesAssetIdentifier>,
          Option<Bytes>
        ]
      >;
      /**
       * An event emitted when an asset is frozen.
       * Parameter: caller DID, AssetId.
       **/
      AssetFrozen: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * An identity has added mandatory mediators to an asset.
       * Parameters: [`IdentityId`] of caller, [`AssetId`] of the asset, the identity of all mediators added.
       **/
      AssetMediatorsAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          BTreeSet<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * An identity has removed mediators from an asset.
       * Parameters: [`IdentityId`] of caller, [`AssetId`] of the asset, the identity of all mediators removed.
       **/
      AssetMediatorsRemoved: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          BTreeSet<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * Emit when token ownership is transferred.
       * caller DID / token ownership transferred to DID, AssetId, from
       **/
      AssetOwnershipTransferred: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * An event emitted when a token is renamed.
       * Parameters: caller DID, AssetId, new token name.
       **/
      AssetRenamed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, Bytes]
      >;
      /**
       * An event emitted when the type of an asset changed.
       * Parameters: caller DID, AssetId, new token type.
       **/
      AssetTypeChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesAssetAssetType
        ]
      >;
      /**
       * An event emitted when an asset is unfrozen.
       * Parameter: caller DID, AssetId.
       **/
      AssetUnfrozen: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Event for when a forced transfer takes place.
       * caller DID/ controller DID, ExtensionRemoved, Portfolio of token holder, value.
       **/
      ControllerTransfer: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          u128
        ]
      >;
      /**
       * A custom asset type already exists on-chain.
       * caller DID, the ID of the custom asset type, the string contents registered.
       **/
      CustomAssetTypeExists: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, Bytes]>;
      /**
       * A custom asset type was registered on-chain.
       * caller DID, the ID of the custom asset type, the string contents registered.
       **/
      CustomAssetTypeRegistered: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, Bytes]
      >;
      /**
       * Event for change in divisibility.
       * caller DID, AssetId, divisibility
       **/
      DivisibilityChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, bool]
      >;
      /**
       * A new document attached to an asset
       **/
      DocumentAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          u32,
          PolymeshPrimitivesDocument
        ]
      >;
      /**
       * A document removed from an asset
       **/
      DocumentRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, u32]
      >;
      /**
       * An event carrying the name of the current funding round of an asset.
       * Parameters: caller DID, AssetId, funding round name.
       **/
      FundingRoundSet: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, Bytes]
      >;
      /**
       * Event emitted when any token identifiers are updated.
       * caller DID, AssetId, a vector of (identifier type, identifier value)
       **/
      IdentifiersUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Vec<PolymeshPrimitivesAssetIdentifier>
        ]
      >;
      /**
       * An event emitted when a local metadata key has been removed.
       * Parameters: caller AssetId, Local type name
       **/
      LocalMetadataKeyDeleted: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * An event emitted when a local metadata value has been removed.
       * Parameters: caller AssetId, Local type name
       **/
      MetadataValueDeleted: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesAssetMetadataAssetMetadataKey
        ]
      >;
      /**
       * An identity has added an asset to the list of pre aprroved receivement.
       * Parameters: [`IdentityId`] of caller, [`AssetId`] of the pre approved asset.
       **/
      PreApprovedAsset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Register asset metadata global type.
       * (Global type name, Global type key, type specs)
       **/
      RegisterAssetMetadataGlobalType: AugmentedEvent<
        ApiType,
        [Bytes, u64, PolymeshPrimitivesAssetMetadataAssetMetadataSpec]
      >;
      /**
       * Register asset metadata local type.
       * (Caller DID, AssetId, Local type name, Local type key, type specs)
       **/
      RegisterAssetMetadataLocalType: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Bytes,
          u64,
          PolymeshPrimitivesAssetMetadataAssetMetadataSpec
        ]
      >;
      /**
       * An asset has been removed from the list of pre aprroved receivement (valid for all identities).
       * Parameters: [`AssetId`] of the asset.
       **/
      RemoveAssetAffirmationExemption: AugmentedEvent<ApiType, [PolymeshPrimitivesAssetAssetId]>;
      /**
       * An identity has removed an asset to the list of pre aprroved receivement.
       * Parameters: [`IdentityId`] of caller, [`AssetId`] of the asset.
       **/
      RemovePreApprovedAsset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Set asset metadata value.
       * (Caller DID, AssetId, metadata value, optional value details)
       **/
      SetAssetMetadataValue: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Bytes,
          Option<PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail>
        ]
      >;
      /**
       * Set asset metadata value details (expire, lock status).
       * (Caller DID, AssetId, value details)
       **/
      SetAssetMetadataValueDetails: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesAssetMetadataAssetMetadataValueDetail
        ]
      >;
      /**
       * An identity has linked a ticker to an asset.
       * Parameters: [`IdentityId`] of caller, [`Ticker`] of the asset, the asset identifier [`AssetId`].
       **/
      TickerLinkedToAsset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Emit when ticker is registered.
       * caller DID / ticker owner did, ticker, ticker owner, expiry
       **/
      TickerRegistered: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker, Option<u64>]
      >;
      /**
       * Emit when ticker is transferred.
       * caller DID / ticker transferred to DID, ticker, from
       **/
      TickerTransferred: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker, PolymeshPrimitivesIdentityId]
      >;
      /**
       * An identity has unlinked a ticker from an asset.
       * Parameters: [`IdentityId`] of caller, unlinked [`Ticker`], the asset identifier [`AssetId`].
       **/
      TickerUnlinkedFromAsset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker, PolymeshPrimitivesAssetAssetId]
      >;
    };
    balances: {
      /**
       * The account and the amount of unlocked balance of that account that was burned.
       * (caller Id, caller account, amount)
       **/
      AccountBalanceBurned: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, AccountId32, u128]
      >;
      /**
       * A balance was set by root (did, who, free, reserved).
       **/
      BalanceSet: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, AccountId32, u128, u128]>;
      /**
       * An account was created with some free balance. \[did, account, free_balance]
       **/
      Endowed: AugmentedEvent<ApiType, [Option<PolymeshPrimitivesIdentityId>, AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status]
       **/
      ReserveRepatriated: AugmentedEvent<
        ApiType,
        [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]
      >;
      /**
       * Transfer succeeded (from_did, from, to_did, to, value, memo).
       **/
      Transfer: AugmentedEvent<
        ApiType,
        [
          Option<PolymeshPrimitivesIdentityId>,
          AccountId32,
          Option<PolymeshPrimitivesIdentityId>,
          AccountId32,
          u128,
          Option<PolymeshPrimitivesMemo>
        ]
      >;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
    };
    base: {
      /**
       * An unexpected error happened that should be investigated.
       **/
      UnexpectedError: AugmentedEvent<ApiType, [Option<SpRuntimeDispatchError>]>;
    };
    capitalDistribution: {
      /**
       * A token holder's benefit of a capital distribution for the given `CAId` was claimed.
       *
       * (Caller DID, Holder/Claimant DID, CA's ID, updated distribution details, DID's benefit, DID's tax %)
       **/
      BenefitClaimed: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PolymeshPrimitivesEventOnly,
          PalletCorporateActionsCaId,
          PalletCorporateActionsDistribution,
          u128,
          Permill
        ]
      >;
      /**
       * A capital distribution, with details included,
       * was created by the DID (permissioned agent) for the CA identified by `CAId`.
       *
       * (Agent DID, CA's ID, distribution details)
       **/
      Created: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PalletCorporateActionsCaId,
          PalletCorporateActionsDistribution
        ]
      >;
      /**
       * Stats from `push_benefit` was emitted.
       *
       * (Agent DID, CA's ID, max requested DIDs, processed DIDs, failed DIDs)
       **/
      Reclaimed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, PalletCorporateActionsCaId, u128]
      >;
      /**
       * A capital distribution was removed.
       *
       * (Agent DID, CA's ID)
       **/
      Removed: AugmentedEvent<ApiType, [PolymeshPrimitivesEventOnly, PalletCorporateActionsCaId]>;
    };
    cddServiceProviders: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<PolymeshPrimitivesIdentityId>]
      >;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
    };
    checkpoint: {
      /**
       * A checkpoint was created.
       *
       * (caller DID, AssetId, checkpoint ID, total supply, checkpoint timestamp)
       **/
      CheckpointCreated: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, PolymeshPrimitivesAssetAssetId, u64, u128, u64]
      >;
      /**
       * The maximum complexity for an arbitrary asset's schedule set was changed.
       *
       * (GC DID, the new maximum)
       **/
      MaximumSchedulesComplexityChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64]
      >;
      /**
       * A checkpoint schedule was created.
       *
       * (caller DID, AssetId, schedule id, schedule)
       **/
      ScheduleCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          u64,
          PolymeshCommonUtilitiesCheckpointScheduleCheckpoints
        ]
      >;
      /**
       * A checkpoint schedule was removed.
       *
       * (caller DID, AssetId, schedule id, schedule)
       **/
      ScheduleRemoved: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          u64,
          PolymeshCommonUtilitiesCheckpointScheduleCheckpoints
        ]
      >;
    };
    committeeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<PolymeshPrimitivesIdentityId>]
      >;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
    };
    complianceManager: {
      /**
       * Emitted when an asset compliance for a given asset_id gets paused.
       * (caller DID, AssetId).
       **/
      AssetCompliancePaused: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Emitted when an asset compliance is replaced.
       * Parameters: caller DID, AssetId, new asset compliance.
       **/
      AssetComplianceReplaced: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Vec<PolymeshPrimitivesComplianceManagerComplianceRequirement>
        ]
      >;
      /**
       * Emitted when an asset compliance of a asset_id is reset.
       * (caller DID, AssetId).
       **/
      AssetComplianceReset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Emitted when an asset compliance for a given asset_id gets resume.
       * (caller DID, AssetId).
       **/
      AssetComplianceResumed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId]
      >;
      /**
       * Emitted when compliance requirement get modified/change.
       * (caller DID, AssetId, ComplianceRequirement).
       **/
      ComplianceRequirementChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesComplianceManagerComplianceRequirement
        ]
      >;
      /**
       * Emitted when new compliance requirement is created.
       * (caller DID, AssetId, ComplianceRequirement).
       **/
      ComplianceRequirementCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesComplianceManagerComplianceRequirement
        ]
      >;
      /**
       * Emitted when a compliance requirement is removed.
       * (caller DID, AssetId, requirement_id).
       **/
      ComplianceRequirementRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, u32]
      >;
      /**
       * Emitted when default claim issuer list for a given asset_id gets added.
       * (caller DID, AssetId, Added TrustedIssuer).
       **/
      TrustedDefaultClaimIssuerAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesConditionTrustedIssuer
        ]
      >;
      /**
       * Emitted when default claim issuer list for a given asset_id get removed.
       * (caller DID, AssetId, Removed TrustedIssuer).
       **/
      TrustedDefaultClaimIssuerRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
    };
    confidentialAsset: {
      /**
       * Confidential account asset frozen.
       **/
      AccountAssetFrozen: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          account: PalletConfidentialAssetConfidentialAccount,
          assetId: U8aFixed
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          account: PalletConfidentialAssetConfidentialAccount;
          assetId: U8aFixed;
        }
      >;
      /**
       * Confidential account asset unfrozen.
       **/
      AccountAssetUnfrozen: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          account: PalletConfidentialAssetConfidentialAccount,
          assetId: U8aFixed
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          account: PalletConfidentialAssetConfidentialAccount;
          assetId: U8aFixed;
        }
      >;
      /**
       * Event for creation of a Confidential account.
       **/
      AccountCreated: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          account: PalletConfidentialAssetConfidentialAccount
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          account: PalletConfidentialAssetConfidentialAccount;
        }
      >;
      /**
       * Confidential account balance increased.
       * This happens when the receiver calls `apply_incoming_balance`.
       **/
      AccountDeposit: AugmentedEvent<
        ApiType,
        [
          account: PalletConfidentialAssetConfidentialAccount,
          assetId: U8aFixed,
          amount: PolymeshHostFunctionsElgamalHostCipherText,
          balance: PolymeshHostFunctionsElgamalHostCipherText
        ],
        {
          account: PalletConfidentialAssetConfidentialAccount;
          assetId: U8aFixed;
          amount: PolymeshHostFunctionsElgamalHostCipherText;
          balance: PolymeshHostFunctionsElgamalHostCipherText;
        }
      >;
      /**
       * Confidential account has an incoming amount.
       * This happens when a transaction executes.
       **/
      AccountDepositIncoming: AugmentedEvent<
        ApiType,
        [
          account: PalletConfidentialAssetConfidentialAccount,
          assetId: U8aFixed,
          amount: PolymeshHostFunctionsElgamalHostCipherText,
          incomingBalance: PolymeshHostFunctionsElgamalHostCipherText
        ],
        {
          account: PalletConfidentialAssetConfidentialAccount;
          assetId: U8aFixed;
          amount: PolymeshHostFunctionsElgamalHostCipherText;
          incomingBalance: PolymeshHostFunctionsElgamalHostCipherText;
        }
      >;
      /**
       * Confidential account balance decreased.
       * This happens when the sender affirms the transaction.
       **/
      AccountWithdraw: AugmentedEvent<
        ApiType,
        [
          account: PalletConfidentialAssetConfidentialAccount,
          assetId: U8aFixed,
          amount: PolymeshHostFunctionsElgamalHostCipherText,
          balance: PolymeshHostFunctionsElgamalHostCipherText
        ],
        {
          account: PalletConfidentialAssetConfidentialAccount;
          assetId: U8aFixed;
          amount: PolymeshHostFunctionsElgamalHostCipherText;
          balance: PolymeshHostFunctionsElgamalHostCipherText;
        }
      >;
      /**
       * Event for creation of a confidential asset.
       **/
      AssetCreated: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          assetId: U8aFixed,
          data: Bytes,
          auditors: PalletConfidentialAssetConfidentialAuditors
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          assetId: U8aFixed;
          data: Bytes;
          auditors: PalletConfidentialAssetConfidentialAuditors;
        }
      >;
      /**
       * Confidential asset frozen.
       **/
      AssetFrozen: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, assetId: U8aFixed],
        { callerDid: PolymeshPrimitivesIdentityId; assetId: U8aFixed }
      >;
      /**
       * Confidential asset unfrozen.
       **/
      AssetUnfrozen: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, assetId: U8aFixed],
        { callerDid: PolymeshPrimitivesIdentityId; assetId: U8aFixed }
      >;
      /**
       * Burned confidential assets.
       **/
      Burned: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          assetId: U8aFixed,
          amount: u128,
          totalSupply: u128
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          assetId: U8aFixed;
          amount: u128;
          totalSupply: u128;
        }
      >;
      /**
       * Confidential asset moved between accounts.
       **/
      FundsMoved: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          from: PalletConfidentialAssetConfidentialAccount,
          to: PalletConfidentialAssetConfidentialAccount,
          proofs: BTreeMap<U8aFixed, Bytes>
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          from: PalletConfidentialAssetConfidentialAccount;
          to: PalletConfidentialAssetConfidentialAccount;
          proofs: BTreeMap<U8aFixed, Bytes>;
        }
      >;
      /**
       * Issued confidential assets.
       **/
      Issued: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          assetId: U8aFixed,
          amount: u128,
          totalSupply: u128
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          assetId: U8aFixed;
          amount: u128;
          totalSupply: u128;
        }
      >;
      /**
       * Confidential transaction leg affirmed.
       **/
      TransactionAffirmed: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          transactionId: PalletConfidentialAssetTransactionId,
          legId: PalletConfidentialAssetTransactionLegId,
          party: PalletConfidentialAssetAffirmParty,
          pendingAffirms: u32
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          transactionId: PalletConfidentialAssetTransactionId;
          legId: PalletConfidentialAssetTransactionLegId;
          party: PalletConfidentialAssetAffirmParty;
          pendingAffirms: u32;
        }
      >;
      /**
       * A new transaction has been created
       **/
      TransactionCreated: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          venueId: u64,
          transactionId: PalletConfidentialAssetTransactionId,
          legs: Vec<PalletConfidentialAssetTransactionLegDetails>,
          memo: Option<PolymeshPrimitivesMemo>
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          venueId: u64;
          transactionId: PalletConfidentialAssetTransactionId;
          legs: Vec<PalletConfidentialAssetTransactionLegDetails>;
          memo: Option<PolymeshPrimitivesMemo>;
        }
      >;
      /**
       * Confidential transaction executed.
       **/
      TransactionExecuted: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          transactionId: PalletConfidentialAssetTransactionId,
          memo: Option<PolymeshPrimitivesMemo>
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          transactionId: PalletConfidentialAssetTransactionId;
          memo: Option<PolymeshPrimitivesMemo>;
        }
      >;
      /**
       * Confidential transaction rejected.
       **/
      TransactionRejected: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          transactionId: PalletConfidentialAssetTransactionId,
          memo: Option<PolymeshPrimitivesMemo>
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          transactionId: PalletConfidentialAssetTransactionId;
          memo: Option<PolymeshPrimitivesMemo>;
        }
      >;
      /**
       * A new venue has been created.
       **/
      VenueCreated: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, venueId: u64],
        { callerDid: PolymeshPrimitivesIdentityId; venueId: u64 }
      >;
      /**
       * Venue filtering changed for an asset.
       **/
      VenueFiltering: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, assetId: U8aFixed, enabled: bool],
        { callerDid: PolymeshPrimitivesIdentityId; assetId: U8aFixed; enabled: bool }
      >;
      /**
       * Venues added to allow list.
       **/
      VenuesAllowed: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, assetId: U8aFixed, venues: Vec<u64>],
        { callerDid: PolymeshPrimitivesIdentityId; assetId: U8aFixed; venues: Vec<u64> }
      >;
      /**
       * Venues removed from the allow list.
       **/
      VenuesBlocked: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, assetId: U8aFixed, venues: Vec<u64>],
        { callerDid: PolymeshPrimitivesIdentityId; assetId: U8aFixed; venues: Vec<u64> }
      >;
    };
    contracts: {
      /**
       * A contract was called either by a plain account or another contract.
       *
       * # Note
       *
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      Called: AugmentedEvent<
        ApiType,
        [caller: AccountId32, contract: AccountId32],
        { caller: AccountId32; contract: AccountId32 }
      >;
      /**
       * A code with the specified hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * A contract's code was updated.
       **/
      ContractCodeUpdated: AugmentedEvent<
        ApiType,
        [contract: AccountId32, newCodeHash: H256, oldCodeHash: H256],
        { contract: AccountId32; newCodeHash: H256; oldCodeHash: H256 }
      >;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<
        ApiType,
        [contract: AccountId32, data: Bytes],
        { contract: AccountId32; data: Bytes }
      >;
      /**
       * A contract delegate called a code hash.
       *
       * # Note
       *
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      DelegateCalled: AugmentedEvent<
        ApiType,
        [contract: AccountId32, codeHash: H256],
        { contract: AccountId32; codeHash: H256 }
      >;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<
        ApiType,
        [deployer: AccountId32, contract: AccountId32],
        { deployer: AccountId32; contract: AccountId32 }
      >;
      /**
       * Contract has been removed.
       *
       * # Note
       *
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<
        ApiType,
        [contract: AccountId32, beneficiary: AccountId32],
        { contract: AccountId32; beneficiary: AccountId32 }
      >;
    };
    corporateAction: {
      /**
       * A CA was initiated.
       * (Agent DID, CA id, the CA, the CA details)
       **/
      CAInitiated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PalletCorporateActionsCaId,
          PalletCorporateActionsCorporateAction,
          Bytes
        ]
      >;
      /**
       * A CA was linked to a set of docs.
       * (Agent DID, CA Id, List of doc identifiers)
       **/
      CALinkedToDoc: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PalletCorporateActionsCaId, Vec<u32>]
      >;
      /**
       * A CA was removed.
       * (Agent DID, CA Id)
       **/
      CARemoved: AugmentedEvent<ApiType, [PolymeshPrimitivesEventOnly, PalletCorporateActionsCaId]>;
      /**
       * The set of default `TargetIdentities` for the asset changed.
       * (Agent DID, AssetId, New TargetIdentities)
       **/
      DefaultTargetIdentitiesChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PalletCorporateActionsTargetIdentities
        ]
      >;
      /**
       * The default withholding tax for the asset changed.
       * (Agent DID, AssetId, New Tax).
       **/
      DefaultWithholdingTaxChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, Permill]
      >;
      /**
       * The withholding tax specific to a DID for the asset changed.
       * (Agent DID, AssetId, Taxed DID, New Tax).
       **/
      DidWithholdingTaxChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesIdentityId,
          Option<Permill>
        ]
      >;
      /**
       * The maximum length of `details` in bytes was changed.
       * (GC DID, new length)
       **/
      MaxDetailsLengthChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32]>;
      /**
       * A CA's record date changed.
       **/
      RecordDateChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PalletCorporateActionsCaId,
          PalletCorporateActionsCorporateAction
        ]
      >;
    };
    corporateBallot: {
      /**
       * A corporate ballot was created.
       *
       * (Agent DID, CA's ID, Voting start/end, Ballot metadata, RCV enabled?)
       **/
      Created: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PalletCorporateActionsCaId,
          PalletCorporateActionsBallotBallotTimeRange,
          PalletCorporateActionsBallotBallotMeta,
          bool
        ]
      >;
      /**
       * A corporate ballot changed its metadata.
       *
       * (Agent DID, CA's ID, New metadata)
       **/
      MetaChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PalletCorporateActionsCaId,
          PalletCorporateActionsBallotBallotMeta
        ]
      >;
      /**
       * A corporate ballot changed its start/end date range.
       *
       * (Agent DID, CA's ID, Voting start/end)
       **/
      RangeChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PalletCorporateActionsCaId,
          PalletCorporateActionsBallotBallotTimeRange
        ]
      >;
      /**
       * A corporate ballot changed its RCV support.
       *
       * (Agent DID, CA's ID, New support)
       **/
      RCVChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PalletCorporateActionsCaId, bool]
      >;
      /**
       * A corporate ballot was removed.
       *
       * (Agent DID, CA's ID)
       **/
      Removed: AugmentedEvent<ApiType, [PolymeshPrimitivesEventOnly, PalletCorporateActionsCaId]>;
      /**
       * A vote was cast in a corporate ballot.
       *
       * (voter DID, CAId, Votes)
       **/
      VoteCast: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PalletCorporateActionsCaId,
          Vec<PalletCorporateActionsBallotBallotVote>
        ]
      >;
    };
    externalAgents: {
      /**
       * An agent was added.
       *
       * (Caller/Agent DID, Agent's AssetId, Agent's group)
       **/
      AgentAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesAgentAgentGroup
        ]
      >;
      /**
       * An agent was removed.
       *
       * (Caller DID, Agent's AssetId, Agent's DID)
       **/
      AgentRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, PolymeshPrimitivesAssetAssetId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * An agent's group was changed.
       *
       * (Caller DID, Agent's AssetId, Agent's DID, The new group of the agent)
       **/
      GroupChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAgentAgentGroup
        ]
      >;
      /**
       * An Agent Group was created.
       *
       * (Caller DID, AG's AssetId, AG's ID, AG's permissions)
       **/
      GroupCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PolymeshPrimitivesAssetAssetId,
          u32,
          PolymeshPrimitivesSecondaryKeyExtrinsicPermissions
        ]
      >;
      /**
       * An Agent Group's permissions was updated.
       *
       * (Caller DID, AG's AssetId, AG's ID, AG's new permissions)
       **/
      GroupPermissionsUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesEventOnly,
          PolymeshPrimitivesAssetAssetId,
          u32,
          PolymeshPrimitivesSecondaryKeyExtrinsicPermissions
        ]
      >;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<
        ApiType,
        [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>],
        { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }
      >;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    identity: {
      /**
       * Asset's identity registered.
       *
       * (Asset DID, ticker)
       **/
      AssetDidRegistered: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesTicker]
      >;
      /**
       * New authorization added.
       *
       * (authorised_by, target_did, target_key, auth_id, authorization_data, expiry)
       **/
      AuthorizationAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          Option<PolymeshPrimitivesIdentityId>,
          Option<AccountId32>,
          u64,
          PolymeshPrimitivesAuthorizationAuthorizationData,
          Option<u64>
        ]
      >;
      /**
       * Authorization consumed.
       *
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationConsumed: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, Option<AccountId32>, u64]
      >;
      /**
       * Authorization rejected by the user who was authorized.
       *
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationRejected: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, Option<AccountId32>, u64]
      >;
      /**
       * Accepting Authorization retry limit reached.
       *
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationRetryLimitReached: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, Option<AccountId32>, u64]
      >;
      /**
       * Authorization revoked by the authorizer.
       *
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationRevoked: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, Option<AccountId32>, u64]
      >;
      /**
       * CDD claims generated by `IdentityId` (a CDD Provider) have been invalidated from
       * `Moment`.
       *
       * (CDD provider DID, disable from date)
       **/
      CddClaimsInvalidated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * CDD requirement for updating primary key changed.
       *
       * (new_requirement)
       **/
      CddRequirementForPrimaryKeyUpdated: AugmentedEvent<ApiType, [bool]>;
      /**
       * Child identity created.
       *
       * (Parent DID, Child DID, primary key)
       **/
      ChildDidCreated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, AccountId32]
      >;
      /**
       * Child identity unlinked from parent identity.
       *
       * (Caller DID, Parent DID, Child DID)
       **/
      ChildDidUnlinked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * Claim added to identity.
       *
       * (DID, claim)
       **/
      ClaimAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityClaim]
      >;
      /**
       * Claim revoked from identity.
       *
       * (DID, claim)
       **/
      ClaimRevoked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityClaim]
      >;
      /**
       * A new CustomClaimType was added.
       *
       * (DID, id, Type)
       **/
      CustomClaimTypeAdded: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, Bytes]>;
      /**
       * Identity created.
       *
       * (DID, primary key, secondary keys)
       **/
      DidCreated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, AccountId32, Vec<PolymeshPrimitivesSecondaryKey>]
      >;
      /**
       * Primary key of identity changed.
       *
       * (DID, old primary key account ID, new ID)
       **/
      PrimaryKeyUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, AccountId32, AccountId32]
      >;
      /**
       * A secondary key left their identity.
       *
       * (DID, secondary key)
       **/
      SecondaryKeyLeftIdentity: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, AccountId32]
      >;
      /**
       * Secondary key permissions updated.
       *
       * (DID, updated secondary key, previous permissions, new permissions)
       **/
      SecondaryKeyPermissionsUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          AccountId32,
          PolymeshPrimitivesSecondaryKeyPermissions,
          PolymeshPrimitivesSecondaryKeyPermissions
        ]
      >;
      /**
       * Secondary keys added to identity.
       *
       * (DID, new keys)
       **/
      SecondaryKeysAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<PolymeshPrimitivesSecondaryKey>]
      >;
      /**
       * All Secondary keys of the identity ID are frozen.
       *
       * (DID)
       **/
      SecondaryKeysFrozen: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId]>;
      /**
       * Secondary keys removed from identity.
       *
       * (DID, the keys that got removed)
       **/
      SecondaryKeysRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<AccountId32>]
      >;
      /**
       * All Secondary keys of the identity ID are unfrozen.
       *
       * (DID)
       **/
      SecondaryKeysUnfrozen: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId]>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<
        ApiType,
        [authorityId: PalletImOnlineSr25519AppSr25519Public],
        { authorityId: PalletImOnlineSr25519AppSr25519Public }
      >;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<
        ApiType,
        [offline: Vec<ITuple<[AccountId32, Null]>>],
        { offline: Vec<ITuple<[AccountId32, Null]>> }
      >;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<
        ApiType,
        [who: AccountId32, index: u32],
        { who: AccountId32; index: u32 }
      >;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<
        ApiType,
        [index: u32, who: AccountId32],
        { index: u32; who: AccountId32 }
      >;
    };
    multiSig: {
      /**
       * A Multisig has added an admin DID.
       **/
      MultiSigAddedAdmin: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          multisig: AccountId32,
          adminDid: PolymeshPrimitivesIdentityId
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          adminDid: PolymeshPrimitivesIdentityId;
        }
      >;
      /**
       * A Multisig has been created.
       **/
      MultiSigCreated: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          multisig: AccountId32,
          caller: AccountId32,
          signers: Vec<AccountId32>,
          sigsRequired: u64
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          caller: AccountId32;
          signers: Vec<AccountId32>;
          sigsRequired: u64;
        }
      >;
      /**
       * A Multisig has removed it's admin DID.
       **/
      MultiSigRemovedAdmin: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          multisig: AccountId32,
          adminDid: PolymeshPrimitivesIdentityId
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          adminDid: PolymeshPrimitivesIdentityId;
        }
      >;
      /**
       * A Multisig has removed it's paying DID.
       **/
      MultiSigRemovedPayingDid: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          multisig: AccountId32,
          payingDid: PolymeshPrimitivesIdentityId
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          payingDid: PolymeshPrimitivesIdentityId;
        }
      >;
      /**
       * A new signer has been added to a Multisig.
       **/
      MultiSigSignerAdded: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, multisig: AccountId32, signer: AccountId32],
        { callerDid: PolymeshPrimitivesIdentityId; multisig: AccountId32; signer: AccountId32 }
      >;
      /**
       * New keys have been authorized to be signers on a Multisig.
       **/
      MultiSigSignersAuthorized: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, multisig: AccountId32, signers: Vec<AccountId32>],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          signers: Vec<AccountId32>;
        }
      >;
      /**
       * Signers have been removed from a Multisig.
       **/
      MultiSigSignersRemoved: AugmentedEvent<
        ApiType,
        [callerDid: PolymeshPrimitivesIdentityId, multisig: AccountId32, signers: Vec<AccountId32>],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          multisig: AccountId32;
          signers: Vec<AccountId32>;
        }
      >;
      /**
       * A Multisig has changed its required number of approvals.
       **/
      MultiSigSignersRequiredChanged: AugmentedEvent<
        ApiType,
        [callerDid: Option<PolymeshPrimitivesIdentityId>, multisig: AccountId32, sigsRequired: u64],
        {
          callerDid: Option<PolymeshPrimitivesIdentityId>;
          multisig: AccountId32;
          sigsRequired: u64;
        }
      >;
      /**
       * A Multisig proposal has been created.
       **/
      ProposalAdded: AugmentedEvent<
        ApiType,
        [callerDid: Option<PolymeshPrimitivesIdentityId>, multisig: AccountId32, proposalId: u64],
        { callerDid: Option<PolymeshPrimitivesIdentityId>; multisig: AccountId32; proposalId: u64 }
      >;
      /**
       * A signer has voted to approve a Multisig proposal.
       **/
      ProposalApprovalVote: AugmentedEvent<
        ApiType,
        [
          callerDid: Option<PolymeshPrimitivesIdentityId>,
          multisig: AccountId32,
          signer: AccountId32,
          proposalId: u64
        ],
        {
          callerDid: Option<PolymeshPrimitivesIdentityId>;
          multisig: AccountId32;
          signer: AccountId32;
          proposalId: u64;
        }
      >;
      /**
       * A Multisig proposal has been approved.
       **/
      ProposalApproved: AugmentedEvent<
        ApiType,
        [callerDid: Option<PolymeshPrimitivesIdentityId>, multisig: AccountId32, proposalId: u64],
        { callerDid: Option<PolymeshPrimitivesIdentityId>; multisig: AccountId32; proposalId: u64 }
      >;
      /**
       * A Multisig proposal has been executed.
       **/
      ProposalExecuted: AugmentedEvent<
        ApiType,
        [
          callerDid: Option<PolymeshPrimitivesIdentityId>,
          multisig: AccountId32,
          proposalId: u64,
          result: Result<Null, SpRuntimeDispatchError>
        ],
        {
          callerDid: Option<PolymeshPrimitivesIdentityId>;
          multisig: AccountId32;
          proposalId: u64;
          result: Result<Null, SpRuntimeDispatchError>;
        }
      >;
      /**
       * A Multisig proposal has been rejected.
       **/
      ProposalRejected: AugmentedEvent<
        ApiType,
        [callerDid: Option<PolymeshPrimitivesIdentityId>, multisig: AccountId32, proposalId: u64],
        { callerDid: Option<PolymeshPrimitivesIdentityId>; multisig: AccountId32; proposalId: u64 }
      >;
      /**
       * A signer has voted to reject a Multisig proposal.
       **/
      ProposalRejectionVote: AugmentedEvent<
        ApiType,
        [
          callerDid: Option<PolymeshPrimitivesIdentityId>,
          multisig: AccountId32,
          signer: AccountId32,
          proposalId: u64
        ],
        {
          callerDid: Option<PolymeshPrimitivesIdentityId>;
          multisig: AccountId32;
          signer: AccountId32;
          proposalId: u64;
        }
      >;
    };
    nft: {
      /**
       * Emitted when a new nft collection is created.
       **/
      NftCollectionCreated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, u64]
      >;
      /**
       * Emitted when NFTs were issued, redeemed or transferred.
       * Contains the [`IdentityId`] of the receiver/issuer/redeemer, the [`NFTs`], the [`PortfolioId`] of the source, the [`PortfolioId`]
       * of the destination and the [`PortfolioUpdateReason`].
       **/
      NFTPortfolioUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesNftNfTs,
          Option<PolymeshPrimitivesIdentityIdPortfolioId>,
          Option<PolymeshPrimitivesIdentityIdPortfolioId>,
          PolymeshPrimitivesPortfolioPortfolioUpdateReason
        ]
      >;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<
        ApiType,
        [kind: U8aFixed, timeslot: Bytes],
        { kind: U8aFixed; timeslot: Bytes }
      >;
    };
    pips: {
      /**
       * The maximum number of active PIPs was changed.
       * (caller DID, old value, new value)
       **/
      ActivePipLimitChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Default enactment period (in blocks) has been changed.
       * (caller DID, old period, new period)
       **/
      DefaultEnactmentPeriodChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, u32]
      >;
      /**
       * Cancelling the PIP execution failed in the scheduler pallet.
       **/
      ExecutionCancellingFailed: AugmentedEvent<ApiType, [u32]>;
      /**
       * Execution of a PIP has been scheduled at specific block.
       **/
      ExecutionScheduled: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Scheduling of the PIP for execution failed in the scheduler pallet.
       **/
      ExecutionSchedulingFailed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * The PIP has been scheduled for expiry.
       **/
      ExpiryScheduled: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Scheduling of the PIP for expiry failed in the scheduler pallet.
       **/
      ExpirySchedulingFailed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Pruning Historical PIPs is enabled or disabled (caller DID, old value, new value)
       **/
      HistoricalPipsPruned: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, bool, bool]>;
      /**
       * The maximum times a PIP can be skipped was changed.
       * (caller DID, old value, new value)
       **/
      MaxPipSkipCountChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u8, u8]>;
      /**
       * Minimum deposit amount modified
       * (caller DID, old amount, new amount)
       **/
      MinimumProposalDepositChanged: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u128, u128]
      >;
      /**
       * Amount of blocks after which a pending PIP expires.
       * (caller DID, old expiry, new expiry)
       **/
      PendingPipExpiryChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshCommonUtilitiesMaybeBlock,
          PolymeshCommonUtilitiesMaybeBlock
        ]
      >;
      /**
       * Pip has been closed, bool indicates whether data is pruned
       **/
      PipClosed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, bool]>;
      /**
       * A PIP in the snapshot queue was skipped.
       * (gc_did, pip_id, new_skip_count)
       **/
      PipSkipped: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u8]>;
      /**
       * A PIP was made with a `Balance` stake.
       *
       * # Parameters:
       *
       * Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
       **/
      ProposalCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PalletPipsProposer,
          u32,
          u128,
          Option<Bytes>,
          Option<Bytes>,
          PolymeshCommonUtilitiesMaybeBlock,
          PalletPipsProposalData
        ]
      >;
      /**
       * Refund proposal
       * (id, total amount)
       **/
      ProposalRefund: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u128]>;
      /**
       * Triggered each time the state of a proposal is amended
       **/
      ProposalStateUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, PalletPipsProposalState]
      >;
      /**
       * The snapshot was cleared.
       **/
      SnapshotCleared: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32]>;
      /**
       * Results (e.g., approved, rejected, and skipped), were enacted for some PIPs.
       * (gc_did, snapshot_id_opt, skipped_pips_with_new_count, rejected_pips, approved_pips)
       **/
      SnapshotResultsEnacted: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Option<u32>, Vec<ITuple<[u32, u8]>>, Vec<u32>, Vec<u32>]
      >;
      /**
       * A new snapshot was taken.
       **/
      SnapshotTaken: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, Vec<PalletPipsSnapshottedPip>]
      >;
      /**
       * `AccountId` voted `bool` on the proposal referenced by `PipId`
       **/
      Voted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, AccountId32, u32, bool, u128]>;
    };
    polymeshCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, Result<Null, SpRuntimeDispatchError>]
      >;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshCommonUtilitiesMaybeBlock]
      >;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [
          Option<PolymeshPrimitivesIdentityId>,
          u32,
          H256,
          Vec<PolymeshPrimitivesIdentityId>,
          Vec<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * Release coordinator has been updated.
       * Parameters: DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [Option<PolymeshPrimitivesIdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, H256, bool, u32, u32, u32]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
    };
    polymeshContracts: {
      /**
       * Emitted when a contract starts supporting a new API upgrade.
       * Contains the [`Api`], [`ChainVersion`], and the bytes for the code hash.
       **/
      ApiHashUpdated: AugmentedEvent<
        ApiType,
        [PolymeshContractsApi, PolymeshContractsChainVersion, H256]
      >;
      /**
       * Emitted when a contract calls into the runtime.
       * Contains the account id set by the contract owner and the [`ExtrinsicId`].
       **/
      SCRuntimeCall: AugmentedEvent<
        ApiType,
        [AccountId32, PolymeshContractsChainExtensionExtrinsicId]
      >;
    };
    portfolio: {
      /**
       * Funds have moved between portfolios
       *
       * # Parameters
       * * Origin DID.
       * * Source portfolio.
       * * Destination portfolio.
       * * The type of fund that was moved.
       * * Optional memo for the move.
       **/
      FundsMovedBetweenPortfolios: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          PolymeshPrimitivesPortfolioFundDescription,
          Option<PolymeshPrimitivesMemo>
        ]
      >;
      /**
       * The portfolio has been successfully created.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       * * portfolio name
       **/
      PortfolioCreated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64, Bytes]>;
      /**
       * Custody of a portfolio has been given to a different identity
       *
       * # Parameters
       * * origin DID
       * * portfolio id
       * * portfolio custodian did
       **/
      PortfolioCustodianChanged: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          PolymeshPrimitivesIdentityId
        ]
      >;
      /**
       * The portfolio has been successfully removed.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       **/
      PortfolioDeleted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * The portfolio identified with `num` has been renamed to `name`.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       * * portfolio name
       **/
      PortfolioRenamed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64, Bytes]>;
      /**
       * A portfolio has pre approved the receivement of an asset.
       *
       * # Parameters
       * * [`IdentityId`] of the caller.
       * * [`PortfolioId`] that will receive assets without explicit affirmation.
       * * [`AssetId`] of the asset that has been exempt from explicit affirmation.
       **/
      PreApprovedPortfolio: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          PolymeshPrimitivesAssetAssetId
        ]
      >;
      /**
       * A portfolio has removed the approval of an asset.
       *
       * # Parameters
       * * [`IdentityId`] of the caller.
       * * [`PortfolioId`] that had its pre approval revoked.
       * * [`AssetId`] of the asset that had its pre approval revoked.
       **/
      RevokePreApprovedPortfolio: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesIdentityIdPortfolioId,
          PolymeshPrimitivesAssetAssetId
        ]
      >;
      /**
       * All non-default portfolio numbers and names of a DID.
       *
       * # Parameters
       * * origin DID
       * * vector of number-name pairs
       **/
      UserPortfolios: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<ITuple<[u64, Bytes]>>]
      >;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
    };
    protocolFee: {
      /**
       * The fee coefficient.
       **/
      CoefficientSet: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesPosRatio]
      >;
      /**
       * Fee charged.
       **/
      FeeCharged: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The protocol fee of an operation.
       **/
      FeeSet: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u128]>;
    };
    relayer: {
      /**
       * Accepted paying key.
       *
       * (Caller DID, User Key, Paying Key)
       **/
      AcceptedPayingKey: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, AccountId32, AccountId32]
      >;
      /**
       * Authorization given for `paying_key` to `user_key`.
       *
       * (Caller DID, User Key, Paying Key, Initial POLYX limit, Auth ID)
       **/
      AuthorizedPayingKey: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, AccountId32, AccountId32, u128, u64]
      >;
      /**
       * Removed paying key.
       *
       * (Caller DID, User Key, Paying Key)
       **/
      RemovedPayingKey: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, AccountId32, AccountId32]
      >;
      /**
       * Updated polyx limit.
       *
       * (Caller DID, User Key, Paying Key, POLYX limit, old remaining POLYX)
       **/
      UpdatedPolyxLimit: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, AccountId32, AccountId32, u128, u128]
      >;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<
        ApiType,
        [
          task: ITuple<[u32, u32]>,
          id: Option<U8aFixed>,
          result: Result<Null, SpRuntimeDispatchError>
        ],
        {
          task: ITuple<[u32, u32]>;
          id: Option<U8aFixed>;
          result: Result<Null, SpRuntimeDispatchError>;
        }
      >;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
    };
    settlement: {
      /**
       * An affirmation has been withdrawn (did, portfolio, instruction_id)
       **/
      AffirmationWithdrawn: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId, u64]
      >;
      /**
       * Failed to execute instruction.
       **/
      FailedToExecuteInstruction: AugmentedEvent<ApiType, [u64, SpRuntimeDispatchError]>;
      /**
       * An instruction has been affirmed (did, portfolio, instruction_id)
       **/
      InstructionAffirmed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId, u64]
      >;
      /**
       * An instruction has been automatically affirmed.
       * Parameters: [`IdentityId`] of the caller, [`PortfolioId`] of the receiver, and [`InstructionId`] of the instruction.
       **/
      InstructionAutomaticallyAffirmed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityIdPortfolioId, u64]
      >;
      /**
       * A new instruction has been created
       * (did, venue_id, instruction_id, settlement_type, trade_date, value_date, legs, memo)
       **/
      InstructionCreated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          Option<u64>,
          u64,
          PolymeshPrimitivesSettlementSettlementType,
          Option<u64>,
          Option<u64>,
          Vec<PolymeshPrimitivesSettlementLeg>,
          Option<PolymeshPrimitivesMemo>
        ]
      >;
      /**
       * Instruction executed successfully(did, instruction_id)
       **/
      InstructionExecuted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * An instruction with mediators has been created.
       * Parameters: [`InstructionId`] of the instruction and the [`IdentityId`] of all mediators.
       **/
      InstructionMediators: AugmentedEvent<ApiType, [u64, BTreeSet<PolymeshPrimitivesIdentityId>]>;
      /**
       * An instruction has been rejected (did, instruction_id)
       **/
      InstructionRejected: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * Instruction is rescheduled.
       * (caller DID, instruction_id)
       **/
      InstructionRescheduled: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * Execution of a leg failed (did, instruction_id, leg_id)
       **/
      LegFailedExecution: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64, u64]>;
      /**
       * An instruction has affirmed by a mediator.
       * Parameters: [`IdentityId`] of the mediator and [`InstructionId`] of the instruction.
       **/
      MediatorAffirmationReceived: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64, Option<u64>]
      >;
      /**
       * An instruction affirmation has been withdrawn by a mediator.
       * Parameters: [`IdentityId`] of the mediator and [`InstructionId`] of the instruction.
       **/
      MediatorAffirmationWithdrawn: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A receipt has been claimed (did, instruction_id, leg_id, receipt_uid, signer, receipt metadata)
       **/
      ReceiptClaimed: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          u64,
          u64,
          u64,
          AccountId32,
          Option<PolymeshPrimitivesSettlementReceiptMetadata>
        ]
      >;
      /**
       * Scheduling of instruction fails.
       **/
      SchedulingFailed: AugmentedEvent<ApiType, [u64, SpRuntimeDispatchError]>;
      /**
       * Settlement manually executed (did, id)
       **/
      SettlementManuallyExecuted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A new venue has been created (did, venue_id, details, type)
       **/
      VenueCreated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64, Bytes, PolymeshPrimitivesSettlementVenueType]
      >;
      /**
       * An existing venue's details has been updated (did, venue_id, details)
       **/
      VenueDetailsUpdated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64, Bytes]>;
      /**
       * Venue filtering has been enabled or disabled for an asset (did, AssetId, filtering_enabled)
       **/
      VenueFiltering: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, bool]
      >;
      /**
       * Venues added to allow list (did, AssetId, vec<venue_id>)
       **/
      VenuesAllowed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, Vec<u64>]
      >;
      /**
       * Venues added to block list (did, AssetId, vec<venue_id>)
       **/
      VenuesBlocked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, Vec<u64>]
      >;
      /**
       * An existing venue's signers has been updated (did, venue_id, signers, update_type)
       **/
      VenueSignersUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64, Vec<AccountId32>, bool]
      >;
      /**
       * An existing venue's type has been updated (did, venue_id, type)
       **/
      VenueTypeUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64, PolymeshPrimitivesSettlementVenueType]
      >;
      /**
       * Venue not part of the token's allow list (did, AssetId, venue_id)
       **/
      VenueUnauthorized: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesAssetAssetId, u64]
      >;
    };
    statistics: {
      /**
       * Asset stats updated.
       *
       * (Caller DID, AssetId, Stat type, Updates)
       **/
      AssetStatsUpdated: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesStatisticsStatType,
          Vec<PolymeshPrimitivesStatisticsStatUpdate>
        ]
      >;
      /**
       * Set Transfer compliance rules for asset.
       *
       * (Caller DID, AssetId, Transfer conditions)
       **/
      SetAssetTransferCompliance: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Vec<PolymeshPrimitivesTransferComplianceTransferCondition>
        ]
      >;
      /**
       * Stat types added to asset.
       *
       * (Caller DID, AssetId, Stat types)
       **/
      StatTypesAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Vec<PolymeshPrimitivesStatisticsStatType>
        ]
      >;
      /**
       * Stat types removed from asset.
       *
       * (Caller DID, AssetId, Stat types)
       **/
      StatTypesRemoved: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesAssetAssetId,
          Vec<PolymeshPrimitivesStatisticsStatType>
        ]
      >;
      /**
       * Add `IdentityId`s exempt for transfer conditions matching exempt key.
       *
       * (Caller DID, Exempt key, Entities)
       **/
      TransferConditionExemptionsAdded: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
          Vec<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * Remove `IdentityId`s exempt for transfer conditions matching exempt key.
       *
       * (Caller DID, Exempt key, Entities)
       **/
      TransferConditionExemptionsRemoved: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          PolymeshPrimitivesTransferComplianceTransferConditionExemptKey,
          Vec<PolymeshPrimitivesIdentityId>
        ]
      >;
    };
    sto: {
      /**
       * A fundraiser has been stopped.
       * (Agent DID, fundraiser id)
       **/
      FundraiserClosed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A new fundraiser has been created.
       * (Agent DID, fundraiser id, fundraiser name, fundraiser details)
       **/
      FundraiserCreated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u64, Bytes, PalletStoFundraiser]
      >;
      /**
       * A fundraiser has been frozen.
       * (Agent DID, fundraiser id)
       **/
      FundraiserFrozen: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A fundraiser has been unfrozen.
       * (Agent DID, fundraiser id)
       **/
      FundraiserUnfrozen: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u64]>;
      /**
       * A fundraiser window has been modified.
       * (Agent DID, fundraiser id, old_start, old_end, new_start, new_end)
       **/
      FundraiserWindowModified: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesEventOnly, u64, u64, Option<u64>, u64, Option<u64>]
      >;
      /**
       * An investor invested in the fundraiser.
       * (Investor, fundraiser_id, offering token, raise token, offering_token_amount, raise_token_amount)
       **/
      Invested: AugmentedEvent<
        ApiType,
        [
          PolymeshPrimitivesIdentityId,
          u64,
          PolymeshPrimitivesAssetAssetId,
          PolymeshPrimitivesAssetAssetId,
          u128,
          u128
        ]
      >;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [Option<AccountId32>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<
        ApiType,
        [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo],
        { dispatchError: SpRuntimeDispatchError; dispatchInfo: FrameSupportDispatchDispatchInfo }
      >;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<
        ApiType,
        [dispatchInfo: FrameSupportDispatchDispatchInfo],
        { dispatchInfo: FrameSupportDispatchDispatchInfo }
      >;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<
        ApiType,
        [sender: AccountId32, hash_: H256],
        { sender: AccountId32; hash_: H256 }
      >;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, Result<Null, SpRuntimeDispatchError>]
      >;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshCommonUtilitiesMaybeBlock]
      >;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [
          Option<PolymeshPrimitivesIdentityId>,
          u32,
          H256,
          Vec<PolymeshPrimitivesIdentityId>,
          Vec<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * Release coordinator has been updated.
       * Parameters: DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [Option<PolymeshPrimitivesIdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, H256, bool, u32, u32, u32]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
    };
    technicalCommitteeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<PolymeshPrimitivesIdentityId>]
      >;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
    };
    testUtils: {
      /**
       * Shows the `DID` associated to the `AccountId`, and a flag indicates if that DID has a
       * valid CDD claim.
       * (Target DID, Target Account, a valid CDD claim exists)
       **/
      CddStatus: AugmentedEvent<ApiType, [Option<PolymeshPrimitivesIdentityId>, AccountId32, bool]>;
      /**
       * Emits the `IdentityId` and the `AccountId` of the caller.
       * (Caller DID, Caller account)
       **/
      DidStatus: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, AccountId32]>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<
        ApiType,
        [who: AccountId32, actualFee: u128, tip: u128],
        { who: AccountId32; actualFee: u128; tip: u128 }
      >;
    };
    treasury: {
      /**
       * Disbursement to a target Identity.
       *
       * (treasury identity, target identity, target primary key, amount)
       **/
      TreasuryDisbursement: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, AccountId32, u128]
      >;
      /**
       * Disbursement to a target Identity failed.
       *
       * (treasury identity, target identity, target primary key, amount)
       **/
      TreasuryDisbursementFailed: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, AccountId32, u128]
      >;
      /**
       * Treasury reimbursement.
       *
       * (source identity, amount)
       **/
      TreasuryReimbursement: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u128]>;
    };
    upgradeCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, Result<Null, SpRuntimeDispatchError>]
      >;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshCommonUtilitiesMaybeBlock]
      >;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [
          Option<PolymeshPrimitivesIdentityId>,
          u32,
          H256,
          Vec<PolymeshPrimitivesIdentityId>,
          Vec<PolymeshPrimitivesIdentityId>
        ]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<
        ApiType,
        [Option<PolymeshPrimitivesIdentityId>, H256, u32, u32, u32]
      >;
      /**
       * Release coordinator has been updated.
       * Parameters: DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [Option<PolymeshPrimitivesIdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, u32, H256, bool, u32, u32, u32]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, H256, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
    };
    upgradeCommitteeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [PolymeshPrimitivesIdentityId, u32, u32]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, Vec<PolymeshPrimitivesIdentityId>]
      >;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<
        ApiType,
        [PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId, PolymeshPrimitivesIdentityId]
      >;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<
        ApiType,
        [index: u32, error: SpRuntimeDispatchError],
        { index: u32; error: SpRuntimeDispatchError }
      >;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<
        ApiType,
        [result: Result<Null, SpRuntimeDispatchError>],
        { result: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<
        ApiType,
        [error: SpRuntimeDispatchError],
        { error: SpRuntimeDispatchError }
      >;
      /**
       * Relayed transaction.
       * POLYMESH: event.
       **/
      RelayedTx: AugmentedEvent<
        ApiType,
        [
          callerDid: PolymeshPrimitivesIdentityId,
          target: AccountId32,
          result: Result<Null, SpRuntimeDispatchError>
        ],
        {
          callerDid: PolymeshPrimitivesIdentityId;
          target: AccountId32;
          result: Result<Null, SpRuntimeDispatchError>;
        }
      >;
    };
    validatorSet: {
      /**
       * New validator addition initiated. Effective in ~2 sessions.
       **/
      ValidatorAdditionInitiated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Validator removal initiated. Effective in ~2 sessions.
       **/
      ValidatorRemovalInitiated: AugmentedEvent<ApiType, [AccountId32]>;
    };
  } // AugmentedEvents
} // declare module
