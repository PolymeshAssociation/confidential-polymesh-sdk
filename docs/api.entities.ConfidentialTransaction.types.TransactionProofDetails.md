# Interface: TransactionProofDetails

[api/entities/ConfidentialTransaction/types](../wiki/api.entities.ConfidentialTransaction.types).TransactionProofDetails

## Table of contents

### Properties

- [pending](../wiki/api.entities.ConfidentialTransaction.types.TransactionProofDetails#pending)
- [proved](../wiki/api.entities.ConfidentialTransaction.types.TransactionProofDetails#proved)

## Properties

### pending

• **pending**: [`PendingProof`](../wiki/api.entities.ConfidentialTransaction.types#pendingproof)[]

The legs in `pending` have not yet received a proof from the sender. For these the sender has yet to commit amounts on chain, so there is no proof to decrypt

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:159](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L159)

___

### proved

• **proved**: [`SenderProofs`](../wiki/api.entities.ConfidentialTransaction.types#senderproofs)[]

The legs referenced in `proved` will contain a proof for each asset. The receiver is able to decrypt all amounts with their private key. Auditors are able to decrypt the proof for the associated asset.

#### Defined in

[src/api/entities/ConfidentialTransaction/types.ts:154](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/api/entities/ConfidentialTransaction/types.ts#L154)
