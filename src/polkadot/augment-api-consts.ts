// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type {
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  PalletContractsSchedule,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightToFeeCoefficient,
  SpWeightsWeightV2Weight,
} from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    asset: {
      assetMetadataNameMaxLength: u32 & AugmentedConst<ApiType>;
      assetMetadataTypeDefMaxLength: u32 & AugmentedConst<ApiType>;
      assetMetadataValueMaxLength: u32 & AugmentedConst<ApiType>;
      assetNameMaxLength: u32 & AugmentedConst<ApiType>;
      fundingRoundNameMaxLength: u32 & AugmentedConst<ApiType>;
      maxAssetMediators: u32 & AugmentedConst<ApiType>;
    };
    babe: {
      /**
       * The amount of time, in slots, that each epoch should last.
       * NOTE: Currently it is not possible to change the epoch duration after
       * the chain has started. Attempting to do so will brick block production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: u64 & AugmentedConst<ApiType>;
      /**
       * Max number of authorities allowed
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
    };
    base: {
      maxLen: u32 & AugmentedConst<ApiType>;
    };
    complianceManager: {
      maxConditionComplexity: u32 & AugmentedConst<ApiType>;
    };
    contracts: {
      /**
       * The maximum number of contracts that can be pending for deletion.
       *
       * When a contract is deleted by calling `seal_terminate` it becomes inaccessible
       * immediately, but the deletion of the storage items it has accumulated is performed
       * later. The contract is put into the deletion queue. This defines how many
       * contracts can be queued up at the same time. If that limit is reached `seal_terminate`
       * will fail. The action must be retried in a later block in that case.
       *
       * The reasons for limiting the queue depth are:
       *
       * 1. The queue is in storage in order to be persistent between blocks. We want to limit
       * the amount of storage that can be consumed.
       * 2. The queue is stored in a vector and needs to be decoded as a whole when reading
       * it at the end of each block. Longer queues take more weight to decode and hence
       * limit the amount of items that can be deleted per block.
       **/
      deletionQueueDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight that can be consumed per block for lazy trie removal.
       *
       * The amount of weight that is dedicated per block to work on the deletion queue. Larger
       * values allow more trie keys to be deleted in each block but reduce the amount of
       * weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
       * information about the deletion queue.
       **/
      deletionWeightLimit: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each byte of storage.
       *
       * # Note
       *
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each storage item.
       *
       * # Note
       *
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerItem: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a contract code in bytes. This limit applies to the instrumented
       * version of the code. Therefore `instantiate_with_code` can fail even when supplying
       * a wasm binary below this maximum size.
       *
       * The value should be chosen carefully taking into the account the overall memory limit
       * your runtime has, as well as the [maximum allowed callstack
       * depth](#associatedtype.CallStack). Look into the `integrity_test()` for some insights.
       **/
      maxCodeLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of the debug buffer in bytes.
       **/
      maxDebugBufferLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum allowable length in bytes for storage keys.
       **/
      maxStorageKeyLen: u32 & AugmentedConst<ApiType>;
      /**
       * Cost schedule and limits.
       **/
      schedule: PalletContractsSchedule & AugmentedConst<ApiType>;
      /**
       * Make contract callable functions marked as `#[unstable]` available.
       *
       * Contracts that use `#[unstable]` functions won't be able to be uploaded unless
       * this is set to `true`. This is only meant for testnets and dev nodes in order to
       * experiment with new features.
       *
       * # Warning
       *
       * Do **not** set to `true` on productions chains.
       **/
      unsafeUnstableInterface: bool & AugmentedConst<ApiType>;
    };
    corporateAction: {
      maxDidWhts: u32 & AugmentedConst<ApiType>;
      maxTargetIds: u32 & AugmentedConst<ApiType>;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to keep in the set id to session index mapping.
       *
       * Since the `SetIdSession` map is only used for validating equivocations this
       * value should relate to the bonding duration of whatever staking system is
       * being used (if any). If equivocation handling is not enabled then this value
       * can be zero.
       **/
      maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
    };
    identity: {
      initialPOLYX: u128 & AugmentedConst<ApiType>;
      maxGivenAuths: u32 & AugmentedConst<ApiType>;
    };
    imOnline: {
      /**
       * A configuration for base priority of unsigned transactions.
       *
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple pallets send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
    };
    multiSig: {
      /**
       * Maximum number of signers that can be added/removed in one call.
       **/
      maxSigners: u32 & AugmentedConst<ApiType>;
    };
    nft: {
      maxNumberOfCollectionKeys: u8 & AugmentedConst<ApiType>;
      maxNumberOfNFTsCount: u32 & AugmentedConst<ApiType>;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
    };
    settlement: {
      maxNumberOfFungibleAssets: u32 & AugmentedConst<ApiType>;
      maxNumberOfNFTs: u32 & AugmentedConst<ApiType>;
      maxNumberOfNFTsPerLeg: u32 & AugmentedConst<ApiType>;
      maxNumberOfOffChainAssets: u32 & AugmentedConst<ApiType>;
      maxNumberOfPortfolios: u32 & AugmentedConst<ApiType>;
      maxNumberOfVenueSigners: u32 & AugmentedConst<ApiType>;
    };
    statistics: {
      maxStatsPerAsset: u32 & AugmentedConst<ApiType>;
      maxTransferConditionsPerAsset: u32 & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       *
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<SpWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
    };
  } // AugmentedConsts
} // declare module
