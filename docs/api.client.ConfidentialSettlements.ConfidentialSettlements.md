# Class: ConfidentialSettlements

[api/client/ConfidentialSettlements](../wiki/api.client.ConfidentialSettlements).ConfidentialSettlements

Handles all functionalities for venues and transactions of confidential Assets

## Table of contents

### Properties

- [createVenue](../wiki/api.client.ConfidentialSettlements.ConfidentialSettlements#createvenue)

### Methods

- [getTransaction](../wiki/api.client.ConfidentialSettlements.ConfidentialSettlements#gettransaction)
- [getVenue](../wiki/api.client.ConfidentialSettlements.ConfidentialSettlements#getvenue)

## Properties

### createVenue

• **createVenue**: [`ConfidentialNoArgsProcedureMethod`](../wiki/types.ConfidentialNoArgsProcedureMethod)<[`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue), [`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)\>

Create a Confidential Venue under the ownership of the signing Identity

#### Defined in

[src/api/client/ConfidentialSettlements.ts:30](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialSettlements.ts#L30)

## Methods

### getTransaction

▸ **getTransaction**(`args`): `Promise`<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

Retrieve a settlement Transaction by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the ConfidentialTransaction |

#### Returns

`Promise`<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

___

### getVenue

▸ **getVenue**(`args`): `Promise`<[`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)\>

Retrieve a confidential Venue by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the confidential Venue |

#### Returns

`Promise`<[`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)\>
