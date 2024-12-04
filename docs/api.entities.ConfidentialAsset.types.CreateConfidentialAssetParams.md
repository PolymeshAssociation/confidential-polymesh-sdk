# Interface: CreateConfidentialAssetParams

[api/entities/ConfidentialAsset/types](../wiki/api.entities.ConfidentialAsset.types).CreateConfidentialAssetParams

## Table of contents

### Properties

- [auditors](../wiki/api.entities.ConfidentialAsset.types.CreateConfidentialAssetParams#auditors)
- [data](../wiki/api.entities.ConfidentialAsset.types.CreateConfidentialAssetParams#data)
- [mediators](../wiki/api.entities.ConfidentialAsset.types.CreateConfidentialAssetParams#mediators)

## Properties

### auditors

• **auditors**: (`string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount))[]

list of auditors for the Confidential Asset. This is a list of Confidential Accounts (or the public key of the ElGamal key pairs) of the auditors

#### Defined in

[src/api/entities/ConfidentialAsset/types.ts:25](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/types.ts#L25)

___

### data

• **data**: `string`

custom data to be associated with the Confidential Asset

#### Defined in

[src/api/entities/ConfidentialAsset/types.ts:21](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/types.ts#L21)

___

### mediators

• `Optional` **mediators**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

optional list of mediators for the Confidential Asset. This is a list of Identities or DIDs of the mediators

#### Defined in

[src/api/entities/ConfidentialAsset/types.ts:29](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/types.ts#L29)
