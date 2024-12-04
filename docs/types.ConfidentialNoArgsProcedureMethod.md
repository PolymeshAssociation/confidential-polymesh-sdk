# Interface: ConfidentialNoArgsProcedureMethod<ProcedureReturnValue, ReturnValue\>

[types](../wiki/types).ConfidentialNoArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### ConfidentialNoArgsProcedureMethod

▸ **ConfidentialNoArgsProcedureMethod**(`opts?`): `Promise`<`GenericPolymeshTransaction`<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ProcedureOpts` |

#### Returns

`Promise`<`GenericPolymeshTransaction`<`ProcedureReturnValue`, `ReturnValue`\>\>

## Table of contents

### Properties

- [checkAuthorization](../wiki/types.ConfidentialNoArgsProcedureMethod#checkauthorization)

## Properties

### checkAuthorization

• **checkAuthorization**: (`opts?`: `ProcedureOpts`) => `Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

#### Type declaration

▸ (`opts?`): `Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ProcedureOpts` |

##### Returns

`Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

#### Defined in

[src/types/index.ts:202](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L202)
