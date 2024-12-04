# Interface: ConfidentialSimplePermissions

[types](../wiki/types).ConfidentialSimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Table of contents

### Properties

- [assets](../wiki/types.ConfidentialSimplePermissions#assets)
- [portfolios](../wiki/types.ConfidentialSimplePermissions#portfolios)
- [transactions](../wiki/types.ConfidentialSimplePermissions#transactions)

## Properties

### assets

• `Optional` **assets**: ``null`` \| `BaseAsset`[]

list of required Asset permissions

#### Defined in

[src/types/index.ts:132](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L132)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| (`DefaultPortfolio` \| `NumberedPortfolio`)[]

#### Defined in

[src/types/index.ts:138](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L138)

___

### transactions

• `Optional` **transactions**: ``null`` \| [`TxTag`](../wiki/generated.types#txtag)[]

list of required Transaction permissions

#### Defined in

[src/types/index.ts:136](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L136)
