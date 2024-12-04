# Class: ExtendedIdentities

[api/client/ExtendedIdentities](../wiki/api.client.ExtendedIdentities).ExtendedIdentities

Handles all Identity related functionality

## Hierarchy

- `Identities`

  ↳ **`ExtendedIdentities`**

## Table of contents

### Methods

- [getIdentity](../wiki/api.client.ExtendedIdentities.ExtendedIdentities#getidentity)

## Methods

### getIdentity

▸ **getIdentity**(`args`): `Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

Create an Identity instance from a DID (with confidential methods)

**`Throws`**

 if there is no Identity with the passed DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

#### Overrides

Identities.getIdentity
