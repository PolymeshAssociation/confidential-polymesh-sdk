# Class: ConfidentialAssets

[api/client/ConfidentialAssets](../wiki/api.client.ConfidentialAssets).ConfidentialAssets

Handles all Confidential Asset related functionality

## Table of contents

### Properties

- [createConfidentialAsset](../wiki/api.client.ConfidentialAssets.ConfidentialAssets#createconfidentialasset)

### Methods

- [getConfidentialAsset](../wiki/api.client.ConfidentialAssets.ConfidentialAssets#getconfidentialasset)

## Properties

### createConfidentialAsset

• **createConfidentialAsset**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`CreateConfidentialAssetParams`](../wiki/api.entities.ConfidentialAsset.types.CreateConfidentialAssetParams), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset), [`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>

Create a confidential Asset

#### Defined in

[src/api/client/ConfidentialAssets.ts:53](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialAssets.ts#L53)

## Methods

### getConfidentialAsset

▸ **getConfidentialAsset**(`args`): `Promise`<[`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>

Retrieve a ConfidentialAsset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `string` |

#### Returns

`Promise`<[`ConfidentialAsset`](../wiki/api.entities.ConfidentialAsset.ConfidentialAsset)\>
