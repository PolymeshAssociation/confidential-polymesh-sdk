# Class: Identity

[api/entities/Identity](../wiki/api.entities.Identity).Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

- `Identity`

  ↳ **`Identity`**

## Table of contents

### Methods

- [getConfidentialVenues](../wiki/api.entities.Identity.Identity#getconfidentialvenues)
- [getInvolvedConfidentialTransactions](../wiki/api.entities.Identity.Identity#getinvolvedconfidentialtransactions)

## Methods

### getConfidentialVenues

▸ **getConfidentialVenues**(): `Promise`<[`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)[]\>

Retrieve all Confidential Venues created by this Identity

#### Returns

`Promise`<[`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)[]\>

___

### getInvolvedConfidentialTransactions

▸ **getInvolvedConfidentialTransactions**(`paginationOpts?`): `Promise`<`ResultSet`<[`ConfidentialAffirmation`](../wiki/api.entities.ConfidentialTransaction.types#confidentialaffirmation)\>\>

Get Confidential Transactions affirmations involving this identity

**`Note`**

 supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | `PaginationOptions` |

#### Returns

`Promise`<`ResultSet`<[`ConfidentialAffirmation`](../wiki/api.entities.ConfidentialTransaction.types#confidentialaffirmation)\>\>
