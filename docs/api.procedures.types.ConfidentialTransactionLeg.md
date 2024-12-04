# Interface: ConfidentialTransactionLeg

[api/procedures/types](../wiki/api.procedures.types).ConfidentialTransactionLeg

## Table of contents

### Properties

- [assets](../wiki/api.procedures.types.ConfidentialTransactionLeg#assets)
- [auditors](../wiki/api.procedures.types.ConfidentialTransactionLeg#auditors)
- [mediators](../wiki/api.procedures.types.ConfidentialTransactionLeg#mediators)
- [receiver](../wiki/api.procedures.types.ConfidentialTransactionLeg#receiver)
- [sender](../wiki/api.procedures.types.ConfidentialTransactionLeg#sender)

## Properties

### assets

• **assets**: (`string` \| [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset))[]

The assets (or their IDs) for this leg of the transaction. Amounts are specified in the later proof generation steps

#### Defined in

[src/api/procedures/types.ts:9](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/procedures/types.ts#L9)

___

### auditors

• **auditors**: (`string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount))[]

Auditors for the transaction leg

#### Defined in

[src/api/procedures/types.ts:21](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/procedures/types.ts#L21)

___

### mediators

• **mediators**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

Mediators for the transaction leg

#### Defined in

[src/api/procedures/types.ts:25](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/procedures/types.ts#L25)

___

### receiver

• **receiver**: `string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)

The account to which the assets will be deposited in

#### Defined in

[src/api/procedures/types.ts:17](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/procedures/types.ts#L17)

___

### sender

• **sender**: `string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)

The account from which the assets will be withdrawn from

#### Defined in

[src/api/procedures/types.ts:13](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/procedures/types.ts#L13)
