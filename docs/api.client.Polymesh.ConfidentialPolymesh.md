# Class: ConfidentialPolymesh

[api/client/Polymesh](../wiki/api.client.Polymesh).ConfidentialPolymesh

Main entry point of the Polymesh SDK

## Hierarchy

- `Polymesh`

  ↳ **`ConfidentialPolymesh`**

## Table of contents

### Properties

- [confidentialAccounts](../wiki/api.client.Polymesh.ConfidentialPolymesh#confidentialaccounts)
- [confidentialAssets](../wiki/api.client.Polymesh.ConfidentialPolymesh#confidentialassets)
- [confidentialSettlements](../wiki/api.client.Polymesh.ConfidentialPolymesh#confidentialsettlements)
- [identities](../wiki/api.client.Polymesh.ConfidentialPolymesh#identities)

### Methods

- [connect](../wiki/api.client.Polymesh.ConfidentialPolymesh#connect)

## Properties

### confidentialAccounts

• **confidentialAccounts**: [`ConfidentialAccounts`](../wiki/api.client.ConfidentialAccounts.ConfidentialAccounts)

A set of methods for managing confidential Accounts

#### Defined in

[src/api/client/Polymesh.ts:95](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L95)

___

### confidentialAssets

• **confidentialAssets**: [`ConfidentialAssets`](../wiki/api.client.ConfidentialAssets.ConfidentialAssets)

A set of methods for interacting with Confidential Assets

#### Defined in

[src/api/client/Polymesh.ts:85](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L85)

___

### confidentialSettlements

• **confidentialSettlements**: [`ConfidentialSettlements`](../wiki/api.client.ConfidentialSettlements.ConfidentialSettlements)

A set of methods for exchanging confidential Assets

#### Defined in

[src/api/client/Polymesh.ts:90](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L90)

___

### identities

• **identities**: [`ExtendedIdentities`](../wiki/api.client.ExtendedIdentities.ExtendedIdentities)

A set of methods for interacting with Polymesh Identities, with confidential extensions

#### Overrides

PublicPolymesh.identities

#### Defined in

[src/api/client/Polymesh.ts:100](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L100)

## Methods

### connect

▸ `Static` **connect**(`params`): `Promise`<[`ConfidentialPolymesh`](../wiki/api.client.Polymesh.ConfidentialPolymesh)\>

Create an SDK instance and connect to a Polymesh node

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ConnectParams`](../wiki/api.client.Polymesh.ConnectParams) |

#### Returns

`Promise`<[`ConfidentialPolymesh`](../wiki/api.client.Polymesh.ConfidentialPolymesh)\>

#### Overrides

PublicPolymesh.connect
