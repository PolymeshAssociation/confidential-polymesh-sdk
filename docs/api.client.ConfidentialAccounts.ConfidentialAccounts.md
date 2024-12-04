# Class: ConfidentialAccounts

[api/client/ConfidentialAccounts](../wiki/api.client.ConfidentialAccounts).ConfidentialAccounts

Handles all Confidential Account related functionality

## Table of contents

### Properties

- [applyIncomingBalance](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts#applyincomingbalance)
- [applyIncomingBalances](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts#applyincomingbalances)
- [createConfidentialAccount](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts#createconfidentialaccount)
- [moveFunds](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts#movefunds)

### Methods

- [getConfidentialAccount](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts#getconfidentialaccount)

## Properties

### applyIncomingBalance

• **applyIncomingBalance**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`ApplyIncomingBalanceParams`](../wiki/api.entities.ConfidentialAccount.types.ApplyIncomingBalanceParams), [`IncomingConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.IncomingConfidentialAssetBalance), [`IncomingConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.IncomingConfidentialAssetBalance)\>

Applies incoming balance to a Confidential Account

#### Defined in

[src/api/client/ConfidentialAccounts.ts:93](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialAccounts.ts#L93)

___

### applyIncomingBalances

• **applyIncomingBalances**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`ApplyIncomingConfidentialAssetBalancesParams`](../wiki/api.entities.ConfidentialAccount.types.ApplyIncomingConfidentialAssetBalancesParams), [`IncomingConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.IncomingConfidentialAssetBalance)[], [`IncomingConfidentialAssetBalance`](../wiki/api.entities.ConfidentialAccount.types.IncomingConfidentialAssetBalance)[]\>

Applies any incoming balance to a Confidential Account

#### Defined in

[src/api/client/ConfidentialAccounts.ts:101](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialAccounts.ts#L101)

___

### createConfidentialAccount

• **createConfidentialAccount**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`CreateConfidentialAccountParams`](../wiki/api.entities.ConfidentialAccount.types.CreateConfidentialAccountParams), [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount), [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)\>

Create a confidential Account

#### Defined in

[src/api/client/ConfidentialAccounts.ts:85](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialAccounts.ts#L85)

___

### moveFunds

• **moveFunds**: [`ConfidentialProcedureMethod`](../wiki/types.ConfidentialProcedureMethod)<[`MoveFundsArgs`](../wiki/api.procedures.types.MoveFundsArgs), `void`, `void`\>

Moves funds from one Confidential Account to another Confidential Account belonging to the same signing Identity

#### Defined in

[src/api/client/ConfidentialAccounts.ts:109](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/ConfidentialAccounts.ts#L109)

## Methods

### getConfidentialAccount

▸ **getConfidentialAccount**(`args`): `Promise`<[`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)\>

Retrieve a ConfidentialAccount

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.publicKey` | `string` |

#### Returns

`Promise`<[`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)\>
