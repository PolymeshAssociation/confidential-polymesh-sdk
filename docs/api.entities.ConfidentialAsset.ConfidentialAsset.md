# Class: ConfidentialAsset

[api/entities/ConfidentialAsset](../wiki/api.entities.ConfidentialAsset).ConfidentialAsset

Represents a ConfidentialAsset in the Polymesh blockchain

## Hierarchy

- `Entity`<[`UniqueIdentifiers`](../wiki/api.entities.ConfidentialAsset.UniqueIdentifiers), `string`\>

  ↳ **`ConfidentialAsset`**

## Table of contents

### Properties

- [burn](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#burn)
- [freeze](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#freeze)
- [freezeAccount](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#freezeaccount)
- [id](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#id)
- [issue](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#issue)
- [setVenueFiltering](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#setvenuefiltering)
- [unfreeze](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#unfreeze)
- [unfreezeAccount](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#unfreezeaccount)

### Methods

- [createdAt](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#createdat)
- [details](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#details)
- [exists](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#exists)
- [getAuditors](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#getauditors)
- [getTransactionHistory](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#gettransactionhistory)
- [getVenueFilteringDetails](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#getvenuefilteringdetails)
- [isAccountFrozen](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#isaccountfrozen)
- [isFrozen](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#isfrozen)
- [toHuman](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset#tohuman)

## Properties

### burn

• **burn**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`BurnConfidentialAssetParams`](../wiki/api.entities.ConfidentialAsset.types.BurnConfidentialAssetParams), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>

Burn a certain amount of this Confidential Asset in the given `account`

**`Note`**

 - Only the owner can burn a Confidential Asset
 - Confidential Assets can only be burned in accounts owned by the signer

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:183](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L183)

___

### freeze

• **freeze**: [`ConfidentialNoArgsProcedureMethod`](../wiki/types.ConfidentialNoArgsProcedureMethod)<`void`, `void`\>

Freezes all trading for the asset

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:193](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L193)

___

### freezeAccount

• **freezeAccount**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`FreezeConfidentialAccountAssetParams`](../wiki/api.procedures.types.FreezeConfidentialAccountAssetParams), `void`, `void`\>

Freezes all trading for the asset for the specified account

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:203](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L203)

___

### id

• **id**: `string`

ID of the Confidential Asset

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:80](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L80)

___

### issue

• **issue**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`IssueConfidentialAssetParams`](../wiki/api.entities.ConfidentialAsset.types.IssueConfidentialAssetParams), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>

Issue a certain amount of this Confidential Asset in the given `account`

**`Note`**

 - Only the owner can issue a Confidential Asset
 - Confidential Assets can only be issued in accounts owned by the signer

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:174](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L174)

___

### setVenueFiltering

• **setVenueFiltering**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<`SetVenueFilteringParams`, `void`, `void`\>

Enable/disable confidential venue filtering for this Confidential Asset and/or set allowed/disallowed Confidential Venues

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:188](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L188)

___

### unfreeze

• **unfreeze**: [`ConfidentialNoArgsProcedureMethod`](../wiki/types.ConfidentialNoArgsProcedureMethod)<`void`, `void`\>

Allows trading to resume for the asset

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:198](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L198)

___

### unfreezeAccount

• **unfreezeAccount**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`FreezeConfidentialAccountAssetParams`](../wiki/api.procedures.types.FreezeConfidentialAccountAssetParams), `void`, `void`\>

Allows trading to resume for the asset for the specified account

#### Defined in

[src/api/entities/ConfidentialAsset/index.ts:208](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAsset/index.ts#L208)

## Methods

### createdAt

▸ **createdAt**(): `Promise`<``null`` \| `EventIdentifier`\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the ConfidentialAsset was created

**`Note`**

 uses the middlewareV2

**`Note`**

 there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| `EventIdentifier`\>

___

### details

▸ **details**(): `Promise`<[`ConfidentialAssetDetails`](../wiki/api.entities.ConfidentialAsset.types.ConfidentialAssetDetails)\>

Retrieve the confidential Asset's details

#### Returns

`Promise`<[`ConfidentialAssetDetails`](../wiki/api.entities.ConfidentialAsset.types.ConfidentialAssetDetails)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this confidential Asset exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

Entity.exists

___

### getAuditors

▸ **getAuditors**(): `Promise`<[`GroupedAuditors`](../wiki/api.entities.ConfidentialAsset.types.GroupedAuditors)\>

Retrieve all the auditors for this confidential Asset grouped by their type

#### Returns

`Promise`<[`GroupedAuditors`](../wiki/api.entities.ConfidentialAsset.types.GroupedAuditors)\>

___

### getTransactionHistory

▸ **getTransactionHistory**(`opts?`): `Promise`<`ResultSet`<[`ConfidentialAssetTransactionHistory`](../wiki/api.entities.ConfidentialAsset.types#confidentialassettransactionhistory)\>\>

Return transaction history for thee Asset

**`Note`**

 uses the middleware V2

**`Note`**

 supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<`ResultSet`<[`ConfidentialAssetTransactionHistory`](../wiki/api.entities.ConfidentialAsset.types#confidentialassettransactionhistory)\>\>

___

### getVenueFilteringDetails

▸ **getVenueFilteringDetails**(): `Promise`<[`ConfidentialVenueFilteringDetails`](../wiki/api.entities.ConfidentialAsset.types#confidentialvenuefilteringdetails)\>

Retrieve venue filtering details for this Confidential Asset

#### Returns

`Promise`<[`ConfidentialVenueFilteringDetails`](../wiki/api.entities.ConfidentialAsset.types#confidentialvenuefilteringdetails)\>

___

### isAccountFrozen

▸ **isAccountFrozen**(`confidentialAccount`): `Promise`<`boolean`\>

Returns whether the confidential account has been suspended from trading the asset or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `confidentialAccount` | `string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount) |

#### Returns

`Promise`<`boolean`\>

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Returns whether the asset has suspended all trading or not

#### Returns

`Promise`<`boolean`\>

___

### toHuman

▸ **toHuman**(): `string`

Return the confidential Asset's ID

#### Returns

`string`

#### Overrides

Entity.toHuman
