# Interface: ConfidentialProcedureAuthorizationStatus

[types](../wiki/types).ConfidentialProcedureAuthorizationStatus

## Table of contents

### Properties

- [accountFrozen](../wiki/types.ConfidentialProcedureAuthorizationStatus#accountfrozen)
- [agentPermissions](../wiki/types.ConfidentialProcedureAuthorizationStatus#agentpermissions)
- [noIdentity](../wiki/types.ConfidentialProcedureAuthorizationStatus#noidentity)
- [roles](../wiki/types.ConfidentialProcedureAuthorizationStatus#roles)
- [signerPermissions](../wiki/types.ConfidentialProcedureAuthorizationStatus#signerpermissions)

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[src/types/index.ts:175](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L175)

___

### agentPermissions

• **agentPermissions**: `CheckPermissionsResult`<`Identity`\>

whether the Identity complies with all required Agent permissions

#### Defined in

[src/types/index.ts:163](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L163)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[src/types/index.ts:180](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L180)

___

### roles

• **roles**: [`ConfidentialCheckRolesResult`](../wiki/types.ConfidentialCheckRolesResult)

whether the Identity complies with all required Roles

#### Defined in

[src/types/index.ts:171](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L171)

___

### signerPermissions

• **signerPermissions**: `CheckPermissionsResult`<`Account`\>

whether the Account complies with all required Signer permissions

#### Defined in

[src/types/index.ts:167](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L167)
