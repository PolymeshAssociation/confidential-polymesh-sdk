# Interface: TransactionPermissions

[types](../wiki/types).TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

- `SectionPermissions`<[`TxTag`](../wiki/generated.types#txtag) \| [`ModuleName`](../wiki/generated.types.ModuleName)\>

  ↳ **`TransactionPermissions`**

## Table of contents

### Properties

- [exceptions](../wiki/types.TransactionPermissions#exceptions)

## Properties

### exceptions

• `Optional` **exceptions**: [`TxTag`](../wiki/generated.types#txtag)[]

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

#### Defined in

[src/types/index.ts:230](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L230)
