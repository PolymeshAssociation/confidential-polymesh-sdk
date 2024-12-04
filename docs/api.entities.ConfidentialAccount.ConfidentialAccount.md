# Class: ConfidentialAccount

[api/entities/ConfidentialAccount](../wiki/api.entities.ConfidentialAccount).ConfidentialAccount

Represents an confidential Account in the Polymesh blockchain

## Hierarchy

- `Entity`<`UniqueIdentifiers`, `string`\>

  ↳ **`ConfidentialAccount`**

## Table of contents

### Properties

- [publicKey](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#publickey)

### Methods

- [exists](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#exists)
- [getBalance](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getbalance)
- [getBalances](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getbalances)
- [getHeldAssets](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getheldassets)
- [getIdentity](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getidentity)
- [getIncomingBalance](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getincomingbalance)
- [getIncomingBalances](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#getincomingbalances)
- [getTransactionHistory](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#gettransactionhistory)
- [getTransactions](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#gettransactions)
- [toHuman](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount#tohuman)

## Properties

### publicKey

• **publicKey**: `string`

Public key of the confidential Account. Serves as an identifier

#### Defined in

[src/api/entities/ConfidentialAccount/index.ts:65](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAccount/index.ts#L65)

## Methods

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

Entity.exists

___

### getBalance

▸ **getBalance**(`args`): `Promise`<`string`\>

Retrieves incoming balance for a specific Confidential Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset) |

#### Returns

`Promise`<`string`\>

___

### getBalances

▸ **getBalances**(): `Promise`<[`ConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.ConfidentialAssetBalance)[]\>

Retrieves current balances of all Confidential Assets for this Confidential Account

#### Returns

`Promise`<[`ConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.ConfidentialAssetBalance)[]\>

___

### getHeldAssets

▸ **getHeldAssets**(`filters?`): `Promise`<`ResultSet`<[`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>\>

Retrieve the ConfidentialAssets associated to this Account

**`Note`**

 uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<`ResultSet`<[`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>\>

___

### getIdentity

▸ **getIdentity**(): `Promise`<``null`` \| [`Identity`](../wiki/api.entities.Identity.Identity)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`<``null`` \| [`Identity`](../wiki/api.entities.Identity.Identity)\>

___

### getIncomingBalance

▸ **getIncomingBalance**(`args`): `Promise`<`string`\>

Retrieves incoming balance for a specific Confidential Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset) |

#### Returns

`Promise`<`string`\>

___

### getIncomingBalances

▸ **getIncomingBalances**(): `Promise`<[`ConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.ConfidentialAssetBalance)[]\>

Retrieves all incoming balances for this Confidential Account

#### Returns

`Promise`<[`ConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.ConfidentialAssetBalance)[]\>

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`<`ResultSet`<[`ConfidentialAssetHistoryEntry`](../wiki/api.entities.ConfidentialAccount.types#confidentialassethistoryentry)\>\>

Retrieve the ConfidentialTransactionHistory associated to this Account

**`Note`**

 uses the middlewareV2

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | `Omit`<[`ConfidentialAssetHistoryByConfidentialAccountArgs`](../wiki/types#confidentialassethistorybyconfidentialaccountargs), ``"accountId"``\> & { `size?`: `BigNumber` ; `start?`: `BigNumber`  } |

#### Returns

`Promise`<`ResultSet`<[`ConfidentialAssetHistoryEntry`](../wiki/api.entities.ConfidentialAccount.types#confidentialassethistoryentry)\>\>

___

### getTransactions

▸ **getTransactions**(`filters`): `Promise`<`ResultSet`<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>\>

Retrieve the ConfidentialTransactions associated to this Account

**`Note`**

 uses the middlewareV2

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | `Omit`<[`ConfidentialTransactionsByConfidentialAccountArgs`](../wiki/types#confidentialtransactionsbyconfidentialaccountargs), ``"accountId"``\> & { `size?`: `BigNumber` ; `start?`: `BigNumber`  } |

#### Returns

`Promise`<`ResultSet`<[`ConfidentialTransaction`](../wiki/api.entities.ConfidentialTransaction.ConfidentialTransaction)\>\>

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Overrides

Entity.toHuman
