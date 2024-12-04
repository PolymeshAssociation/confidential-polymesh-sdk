# Interface: ApplyIncomingConfidentialAssetBalancesParams

[api/entities/ConfidentialAccount/types](../wiki/api.entities.ConfidentialAccount.types).ApplyIncomingConfidentialAssetBalancesParams

## Table of contents

### Properties

- [confidentialAccount](../wiki/api.entities.ConfidentialAccount.types.ApplyIncomingConfidentialAssetBalancesParams#confidentialaccount)
- [maxUpdates](../wiki/api.entities.ConfidentialAccount.types.ApplyIncomingConfidentialAssetBalancesParams#maxupdates)

## Properties

### confidentialAccount

• **confidentialAccount**: `string` \| [`ConfidentialAccount`](../wiki/api.entities.ConfidentialAccount.ConfidentialAccount)

Confidential Account (or the public key of the ElGamal key pair) to which any incoming balance is to be applied

#### Defined in

[src/api/entities/ConfidentialAccount/types.ts:44](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAccount/types.ts#L44)

___

### maxUpdates

• `Optional` **maxUpdates**: `BigNumber`

The maximum number of incoming balances to apply. Applies all incoming balances if no value is passed

#### Defined in

[src/api/entities/ConfidentialAccount/types.ts:49](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialAccount/types.ts#L49)
