# Interface: ConfidentialCheckRolesResult

[types](../wiki/types).ConfidentialCheckRolesResult

Result of a `checkRoles` call

## Table of contents

### Properties

- [message](../wiki/types.ConfidentialCheckRolesResult#message)
- [missingRoles](../wiki/types.ConfidentialCheckRolesResult#missingroles)
- [result](../wiki/types.ConfidentialCheckRolesResult#result)

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[src/types/index.ts:156](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L156)

___

### missingRoles

• `Optional` **missingRoles**: [`Role`](../wiki/types#role)[]

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[src/types/index.ts:148](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L148)

___

### result

• **result**: `boolean`

whether the signer possesses all the required roles or not

#### Defined in

[src/types/index.ts:152](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/index.ts#L152)
