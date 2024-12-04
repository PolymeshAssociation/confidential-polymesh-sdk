# Interface: ConnectParams

[api/client/Polymesh](../wiki/api.client.Polymesh).ConnectParams

## Table of contents

### Properties

- [middlewareV2](../wiki/api.client.Polymesh.ConnectParams#middlewarev2)
- [nodeUrl](../wiki/api.client.Polymesh.ConnectParams#nodeurl)
- [polkadot](../wiki/api.client.Polymesh.ConnectParams#polkadot)
- [signingManager](../wiki/api.client.Polymesh.ConnectParams#signingmanager)

## Properties

### middlewareV2

• `Optional` **middlewareV2**: `MiddlewareConfig`

Allows for historical data to be queried. Required for some methods to work

#### Defined in

[src/api/client/Polymesh.ts:42](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L42)

___

### nodeUrl

• **nodeUrl**: `string`

The websocket URL for the Polymesh node to connect to

#### Defined in

[src/api/client/Polymesh.ts:34](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L34)

___

### polkadot

• `Optional` **polkadot**: `PolkadotConfig`

Advanced options that will be used with the underling polkadot.js instance

#### Defined in

[src/api/client/Polymesh.ts:46](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L46)

___

### signingManager

• `Optional` **signingManager**: `SigningManager`

Handles signing of transactions. Required to be set before submitting transactions

#### Defined in

[src/api/client/Polymesh.ts:38](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/client/Polymesh.ts#L38)
