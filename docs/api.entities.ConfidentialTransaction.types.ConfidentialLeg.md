# Interface: ConfidentialLeg

[api/entities/ConfidentialTransaction/types](../wiki/api.entities.ConfidentialTransaction.types).ConfidentialLeg

## Table of contents

### Properties

- [assetAuditors](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg#assetauditors)
- [id](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg#id)
- [mediators](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg#mediators)
- [receiver](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg#receiver)
- [sender](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg#sender)

## Properties

### assetAuditors

• **assetAuditors**: { `asset`: [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset) ; `auditors`: [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)[]  }[]

The auditors for the leg, grouped by asset they are auditors for. Note: the same auditor may appear for multiple assets

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:26](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L26)

___

### id

• **id**: `BigNumber`

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:14](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L14)

___

### mediators

• **mediators**: `Identity`[]

List of mediator Identities

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:30](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L30)

___

### receiver

• **receiver**: [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)

the receiver Confidential Account

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:22](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L22)

___

### sender

• **sender**: [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)

the sender Confidential Account

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:18](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L18)
