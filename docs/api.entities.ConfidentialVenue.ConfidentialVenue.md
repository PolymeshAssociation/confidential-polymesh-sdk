# Class: ConfidentialVenue

[api/entities/ConfidentialVenue](../wiki/api.entities.ConfidentialVenue).ConfidentialVenue

Represents a Venue through which confidential transactions are handled

## Hierarchy

- `Entity`<[`UniqueIdentifiers`](../wiki/api.entities.ConfidentialVenue.UniqueIdentifiers), `string`\>

  ↳ **`ConfidentialVenue`**

## Table of contents

### Properties

- [addTransaction](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#addtransaction)
- [addTransactions](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#addtransactions)
- [id](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#id)

### Methods

- [creator](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#creator)
- [exists](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#exists)
- [getTransactions](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#gettransactions)
- [toHuman](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue#tohuman)

## Properties

### addTransaction

• **addTransaction**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`AddConfidentialTransactionParams`](../wiki/api.procedures.types.AddConfidentialTransactionParams), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)[], [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>

Creates a Confidential Transaction in this Venue

**`Note`**

 required role:
  - Venue Owner

#### Defined in

[src/api/entities/ConfidentialVenue/index.ts:195](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialVenue/index.ts#L195)

___

### addTransactions

• **addTransactions**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`AddConfidentialTransactionsParams`](../wiki/api.procedures.types.AddConfidentialTransactionsParams), [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)[], [`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)[]\>

Creates a batch of Confidential Transactions in this Venue

**`Note`**

 required role:
  - Venue Owner

#### Defined in

[src/api/entities/ConfidentialVenue/index.ts:207](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialVenue/index.ts#L207)

___

### id

• **id**: `BigNumber`

identifier number of the confidential Venue

#### Defined in

[src/api/entities/ConfidentialVenue/index.ts:46](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialVenue/index.ts#L46)

## Methods

### creator

▸ **creator**(): `Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

Retrieve the creator of this confidential Venue

#### Returns

`Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this confidential Venue exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

Entity.exists

___

### getTransactions

▸ **getTransactions**(): `Promise`<[`GroupedTransactions`](../wiki/api.entities.ConfidentialTransaction.types.GroupedTransactions)\>

Retrieve all transactions in this Confidential Venue.
This groups the transactions based on their status as pending, executed or rejected

#### Returns

`Promise`<[`GroupedTransactions`](../wiki/api.entities.ConfidentialTransaction.types.GroupedTransactions)\>

___

### toHuman

▸ **toHuman**(): `string`

Return the confidential Venue's ID

#### Returns

`string`

#### Overrides

Entity.toHuman
