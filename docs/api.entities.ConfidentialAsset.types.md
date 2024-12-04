# Module: api/entities/ConfidentialAsset/types

## Table of contents

### Interfaces

- [BurnConfidentialAssetParams](../wiki/api.entities.ConfidentialAsset.types.BurnConfidentialAssetParams)
- [ConfidentialAssetDetails](../wiki/api.entities.ConfidentialAsset.types.ConfidentialAssetDetails)
- [CreateConfidentialAssetParams](../wiki/api.entities.ConfidentialAsset.types.CreateConfidentialAssetParams)
- [GroupedAuditors](../wiki/api.entities.ConfidentialAsset.types.GroupedAuditors)
- [IssueConfidentialAssetParams](../wiki/api.entities.ConfidentialAsset.types.IssueConfidentialAssetParams)

### Type Aliases

- [ConfidentialAssetTransactionHistory](../wiki/api.entities.ConfidentialAsset.types#confidentialassettransactionhistory)
- [ConfidentialVenueFilteringDetails](../wiki/api.entities.ConfidentialAsset.types#confidentialvenuefilteringdetails)

## Type Aliases

### ConfidentialAssetTransactionHistory

Ƭ **ConfidentialAssetTransactionHistory**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `assetId` | `string` |
| `createdBlockId` | `BigNumber` |
| `datetime` | `Date` |
| `eventId` | `EventIdEnum` |
| `fromId?` | `string` |
| `id` | `string` |
| `memo?` | `string` |
| `toId?` | `string` |

#### Defined in

[src/api/entities/ConfidentialAsset/types.ts:67](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/types.ts#L67)

___

### ConfidentialVenueFilteringDetails

Ƭ **ConfidentialVenueFilteringDetails**: { `enabled`: ``false``  } \| { `allowedConfidentialVenues`: [`ConfidentialVenue`](../wiki/api.entities.ConfidentialVenue.ConfidentialVenue)[] ; `enabled`: ``true``  }

#### Defined in

[src/api/entities/ConfidentialAsset/types.ts:58](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/types.ts#L58)
