# Interface: ConfidentialProcedureMethod<MethodArgs, ProcedureReturnValue, ReturnValue\>

[types](../wiki/types).ConfidentialProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `MethodArgs` | `MethodArgs` |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### ConfidentialProcedureMethod

▸ **ConfidentialProcedureMethod**(`args`, `opts?`): `Promise`<`GenericPolymeshTransaction`<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | `ProcedureOpts` |

#### Returns

`Promise`<`GenericPolymeshTransaction`<`ProcedureReturnValue`, `ReturnValue`\>\>

## Table of contents

### Properties

- [checkAuthorization](../wiki/types.ConfidentialProcedureMethod#checkauthorization)

## Properties

### checkAuthorization

• **checkAuthorization**: (`args`: `MethodArgs`, `opts?`: `ProcedureOpts`) => `Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

#### Type declaration

▸ (`args`, `opts?`): `Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | `ProcedureOpts` |

##### Returns

`Promise`<[`ConfidentialProcedureAuthorizationStatus`](../wiki/types.ConfidentialProcedureAuthorizationStatus)\>

#### Defined in

[src/types/index.ts:191](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L191)
