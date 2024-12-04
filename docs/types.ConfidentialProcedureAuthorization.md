# Interface: ConfidentialProcedureAuthorization

[types](../wiki/types).ConfidentialProcedureAuthorization

Represents the permissions that a signer must have in order to run a Procedure. In some cases, this must be determined
  in a special way for the specific Procedure. In those cases, the resulting value will either be `true` if the signer can
  run the procedure, or a string message indicating why the signer *CAN'T* run the Procedure

## Table of contents

### Properties

- [agentPermissions](../wiki/types.ConfidentialProcedureAuthorization#agentpermissions)
- [permissions](../wiki/types.ConfidentialProcedureAuthorization#permissions)
- [roles](../wiki/types.ConfidentialProcedureAuthorization#roles)
- [signerPermissions](../wiki/types.ConfidentialProcedureAuthorization#signerpermissions)

## Properties

### agentPermissions

• `Optional` **agentPermissions**: `string` \| ``true`` \| `Omit`<[`ConfidentialSimplePermissions`](../wiki/types.ConfidentialSimplePermissions), ``"portfolios"``\>

permissions specific to External Agent Identities. This value takes precedence over `permissions` for
  External Agents

#### Defined in

[src/types/index.ts:119](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L119)

___

### permissions

• `Optional` **permissions**: `string` \| ``true`` \| [`ConfidentialSimplePermissions`](../wiki/types.ConfidentialSimplePermissions)

general permissions that apply to both Secondary Key Accounts and External
  Agent Identities. Overridden by `signerPermissions` and `agentPermissions` respectively

#### Defined in

[src/types/index.ts:109](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L109)

___

### roles

• `Optional` **roles**: `string` \| ``true`` \| [`Role`](../wiki/types#role)[]

#### Defined in

[src/types/index.ts:120](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L120)

___

### signerPermissions

• `Optional` **signerPermissions**: `string` \| ``true`` \| [`ConfidentialSimplePermissions`](../wiki/types.ConfidentialSimplePermissions)

permissions specific to secondary Accounts. This value takes precedence over `permissions` for
  secondary Accounts

#### Defined in

[src/types/index.ts:114](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L114)
