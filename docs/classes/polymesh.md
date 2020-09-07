# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [governance](polymesh.md#governance)

### Accessors

* [_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [addClaims](polymesh.md#addclaims)
* [editClaims](polymesh.md#editclaims)
* [getAccountBalance](polymesh.md#getaccountbalance)
* [getIdentitiesWithClaims](polymesh.md#getidentitieswithclaims)
* [getIdentity](polymesh.md#getidentity)
* [getIssuedClaims](polymesh.md#getissuedclaims)
* [getLatestBlock](polymesh.md#getlatestblock)
* [getMySigningKeys](polymesh.md#getmysigningkeys)
* [getNetworkProperties](polymesh.md#getnetworkproperties)
* [getSecurityToken](polymesh.md#getsecuritytoken)
* [getSecurityTokens](polymesh.md#getsecuritytokens)
* [getTickerReservation](polymesh.md#gettickerreservation)
* [getTickerReservations](polymesh.md#gettickerreservations)
* [getTransactionFees](polymesh.md#gettransactionfees)
* [getTransactionHistory](polymesh.md#gettransactionhistory)
* [getTreasuryAddress](polymesh.md#gettreasuryaddress)
* [getTreasuryBalance](polymesh.md#gettreasurybalance)
* [isIdentityValid](polymesh.md#isidentityvalid)
* [isTickerAvailable](polymesh.md#istickeravailable)
* [onConnectionError](polymesh.md#onconnectionerror)
* [onDisconnect](polymesh.md#ondisconnect)
* [registerIdentity](polymesh.md#registeridentity)
* [removeMySigningKeys](polymesh.md#removemysigningkeys)
* [reserveTicker](polymesh.md#reserveticker)
* [revokeClaims](polymesh.md#revokeclaims)
* [transferPolyX](polymesh.md#transferpolyx)
* [connect](polymesh.md#static-connect)

## Properties

###  governance

• **governance**: *[Governance](governance.md)*

*Defined in [src/Polymesh.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L87)*

## Accessors

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:815](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L815)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  addClaims

▸ **addClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:426](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L426)*

Add claims to identities

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  editClaims

▸ **editClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:435](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L435)*

Edit claims associated to identities (only the expiry date can be modified)

* @param args.claims - array of claims to be edited

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/Polymesh.ts:243](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L243)*

Get the free/locked POLYX balance of an account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:244](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:245](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L245)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`accountId` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Polymesh.ts:582](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L582)*

Retrieve a list of identities with claims associated to them. Can be filtered using parameters

**Parameters:**

▪`Default value`  **opts**: *object*= { includeExpired: true }

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [ClaimType](../enums/claimtype.md)[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`scope?` | undefined &#124; string | scope of the claims to fetch. Defaults to any scope |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getIdentity

▸ **getIdentity**(`args?`: undefined | object): *Promise‹[Identity](identity.md)›*

*Defined in [src/Polymesh.ts:389](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L389)*

Create an identity instance from a DID. If no DID is passed, the current identity is returned

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getIssuedClaims

▸ **getIssuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Polymesh.ts:551](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L551)*

Retrieve all claims issued by the current identity

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |
`start?` | undefined &#124; number |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:806](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L806)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getMySigningKeys

▸ **getMySigningKeys**(): *Promise‹[Signer](../interfaces/signer.md)[]›*

*Defined in [src/Polymesh.ts:771](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L771)*

Get the list of signing keys related to the current identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Signer](../interfaces/signer.md)[]›*

▸ **getMySigningKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[Signer](../interfaces/signer.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:772](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L772)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Signer](../interfaces/signer.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:631](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L631)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:525](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L525)*

Retrieve a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)›*

___

###  getSecurityTokens

▸ **getSecurityTokens**(`args?`: undefined | object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Defined in [src/Polymesh.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L489)*

Retrieve all the Security Tokens owned by an identity

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getTickerReservation

▸ **getTickerReservation**(`args`: object): *Promise‹[TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:363](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L363)*

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)›*

___

###  getTickerReservations

▸ **getTickerReservations**(`args?`: undefined | object): *Promise‹[TickerReservation](tickerreservation.md)[]›*

*Defined in [src/Polymesh.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L325)*

Retrieve all the ticker reservations currently owned by an identity. This doesn't include tokens that
  have already been launched

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  getTransactionFees

▸ **getTransactionFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:410](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L410)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Defined in [src/Polymesh.ts:659](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L659)*

Retrieve a list of transactions. Can be filtered using parameters

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`address?` | undefined &#124; string | account that signed the transaction |
`blockId?` | undefined &#124; number | - |
`orderBy?` | TransactionOrderByInput | - |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

###  getTreasuryAddress

▸ **getTreasuryAddress**(): *string*

*Defined in [src/Polymesh.ts:417](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L417)*

Get the treasury wallet address

**Returns:** *string*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:747](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L747)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:748](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L748)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:399](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L399)*

Return whether the supplied identity/DID exists

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`identity` | [Identity](identity.md) &#124; string |

**Returns:** *Promise‹boolean›*

___

###  isTickerAvailable

▸ **isTickerAvailable**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:295](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L295)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:296](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L296)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹boolean›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  onConnectionError

▸ **onConnectionError**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:455](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L455)*

Handle connection errors

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  onDisconnect

▸ **onDisconnect**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:472](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L472)*

Handle disconnection

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  registerIdentity

▸ **registerIdentity**(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

*Defined in [src/Polymesh.ts:799](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L799)*

Register an Identity

**`note`** must be a CDD provider

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

___

###  removeMySigningKeys

▸ **removeMySigningKeys**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:790](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L790)*

Remove a list of signing keys associated with the current identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`signers` | [Signer](../interfaces/signer.md)[] |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  reserveTicker

▸ **reserveTicker**(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Polymesh.ts:286](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L286)*

Reserve a ticker symbol to later use in the creation of a Security Token.
The ticker will expire after a set amount of time, after which other users can reserve it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  revokeClaims

▸ **revokeClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:444](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L444)*

Revoke claims from identities

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  transferPolyX

▸ **transferPolyX**(`args`: [TransferPolyXParams](../interfaces/transferpolyxparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:232](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L232)*

Transfer an amount of POLYX to a specified account

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyXParams](../interfaces/transferpolyxparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L101)*

Create the instance and connect to the Polymesh node

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/395653d/src/Polymesh.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*