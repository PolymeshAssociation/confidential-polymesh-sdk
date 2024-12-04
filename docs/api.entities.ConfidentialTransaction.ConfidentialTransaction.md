# Class: ConfidentialTransaction

[api/entities/ConfidentialTransaction](../wiki/api.entities.ConfidentialTransaction).ConfidentialTransaction

Represents a confidential Asset Transaction to be executed on a certain Venue

## Hierarchy

- `Entity`<[`UniqueIdentifiers`](../wiki/api.entities.ConfidentialTransaction.UniqueIdentifiers), `string`\>

  ↳ **`ConfidentialTransaction`**

## Table of contents

### Properties

- [affirmLeg](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#affirmleg)
- [execute](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#execute)
- [id](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#id)
- [reject](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#reject)

### Methods

- [createdAt](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#createdat)
- [details](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#details)
- [exists](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#exists)
- [getInvolvedParties](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getinvolvedparties)
- [getLegState](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getlegstate)
- [getLegStates](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getlegstates)
- [getLegs](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getlegs)
- [getPendingAffirmsCount](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getpendingaffirmscount)
- [getProofDetails](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getproofdetails)
- [getSenderProofs](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#getsenderproofs)
- [onStatusChange](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#onstatuschange)
- [toHuman](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction#tohuman)

## Properties

### affirmLeg

• **affirmLeg**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`AffirmConfidentialTransactionParams`](../wiki/api.entities.ConfidentialTransaction.types#affirmconfidentialtransactionparams), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

Affirms a leg of this transaction

**`Note`**

 - The sender must provide their affirmation before anyone else can. (Sender affirmation is where amounts are specified)

#### Defined in

[src/api/entities/ConfidentialTransaction/index.ts:524](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/index.ts#L524)

___

### execute

• **execute**: [`ConfidentialNoArgsProcedureMethod`](../wiki/types.ConfidentialNoArgsProcedureMethod)<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

Executes this transaction

**`Note`**

 - The transaction can only be executed if all the involved parties have already affirmed the transaction

#### Defined in

[src/api/entities/ConfidentialTransaction/index.ts:517](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/index.ts#L517)

___

### id

• **id**: `BigNumber`

Unique identifier number of the settlement transaction

#### Defined in

[src/api/entities/ConfidentialTransaction/index.ts:84](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/index.ts#L84)

___

### reject

• **reject**: [`ConfidentialNoArgsProcedureMethod`](../wiki/types.ConfidentialNoArgsProcedureMethod)<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

Rejects this transaction

#### Defined in

[src/api/entities/ConfidentialTransaction/index.ts:532](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/index.ts#L532)

## Methods

### createdAt

▸ **createdAt**(): `Promise`<``null`` \| `EventIdentifier`\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the Confidential Transaction was created

**`Note`**

 uses the middlewareV2

**`Note`**

 there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| `EventIdentifier`\>

___

### details

▸ **details**(): `Promise`<[`ConfidentialTransactionDetails`](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialTransactionDetails)\>

Fetch details about this transaction

#### Returns

`Promise`<[`ConfidentialTransactionDetails`](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialTransactionDetails)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this settlement Transaction exists on chain (or existed and was pruned)

#### Returns

`Promise`<`boolean`\>

#### Overrides

Entity.exists

___

### getInvolvedParties

▸ **getInvolvedParties**(): `Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)[]\>

Returns the identities involved in this transaction

**`Throws`**

 if the transaction has been completed

#### Returns

`Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)[]\>

___

### getLegState

▸ **getLegState**(`legId`): `Promise`<[`ConfidentialLegState`](../wiki/api.entities.ConfidentialTransaction.types#confidentiallegstate)\>

Get the leg state for the given legId

#### Parameters

| Name | Type |
| :------ | :------ |
| `legId` | `BigNumber` |

#### Returns

`Promise`<[`ConfidentialLegState`](../wiki/api.entities.ConfidentialTransaction.types#confidentiallegstate)\>

___

### getLegStates

▸ **getLegStates**(): `Promise`<[`ConfidentialLegStateWithId`](../wiki/api.entities.ConfidentialTransaction.types#confidentiallegstatewithid)[]\>

Get the leg states for the transaction

#### Returns

`Promise`<[`ConfidentialLegStateWithId`](../wiki/api.entities.ConfidentialTransaction.types#confidentiallegstatewithid)[]\>

___

### getLegs

▸ **getLegs**(): `Promise`<[`ConfidentialLeg`](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg)[]\>

Get the legs of this Confidential Transaction

#### Returns

`Promise`<[`ConfidentialLeg`](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialLeg)[]\>

___

### getPendingAffirmsCount

▸ **getPendingAffirmsCount**(): `Promise`<`BigNumber`\>

Get number of pending affirmations for this transaction

#### Returns

`Promise`<`BigNumber`\>

___

### getProofDetails

▸ **getProofDetails**(): `Promise`<[`TransactionProofDetails`](../wiki/api.entities.ConfidentialTransaction.types.TransactionProofDetails)\>

Get information for the each of the legs proof status

The results are divided between `proved` and `pending`, depending if the sender has already submitted a proof or not. Proved results contain a proof for each asset involved in the leg which can be verified by the receiver or specified auditors.

**`Note`**

 uses the middlewareV2

#### Returns

`Promise`<[`TransactionProofDetails`](../wiki/api.entities.ConfidentialTransaction.types.TransactionProofDetails)\>

___

### getSenderProofs

▸ **getSenderProofs**(): `Promise`<[`SenderProofs`](../wiki/api.entities.ConfidentialTransaction.types#senderproofs)[]\>

Get all submitted sender proofs for this transaction

**`Note`**

 uses the middlewareV2

#### Returns

`Promise`<[`SenderProofs`](../wiki/api.entities.ConfidentialTransaction.types#senderproofs)[]\>

___

### onStatusChange

▸ **onStatusChange**(`callback`): `Promise`<`UnsubCallback`\>

Retrieve current status of the ConfidentialTransaction. This can be subscribed to know if transaction fails

**`Note`**

 can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `SubCallback`<[`ConfidentialTransactionStatus`](../wiki/api.entities.ConfidentialTransaction.types.ConfidentialTransactionStatus)\> |

#### Returns

`Promise`<`UnsubCallback`\>

___

### toHuman

▸ **toHuman**(): `string`

Return the settlement Transaction's ID

#### Returns

`string`

#### Overrides

Entity.toHuman
