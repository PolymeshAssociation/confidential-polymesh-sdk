[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)
[![Types](https://img.shields.io/npm/types/@polymeshassociation/polymesh-sdk)](https://)
[![npm](https://img.shields.io/npm/v/@polymeshassociation/polymesh-sdk)](https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=coverage)](https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk)
[![Github Actions Workflow](https://github.com/PolymeshAssociation/polymesh-sdk/actions/workflows/main.yml/badge.svg)](https://github.com/PolymeshAssociation/polymesh-sdk/actions)
[![Sonar Status](https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk)
[![Issues](https://img.shields.io/github/issues/PolymeshAssociation/polymesh-sdk)](https://github.com/PolymeshAssociation/polymesh-sdk/issues)

## \@polymeshassociation/polymesh-sdk

<!--- This section is autogenerated, do not modify --->

## Polymesh version

This release is compatible with Polymesh v6.x.x

<!--- End of section --->

## Getting Started

### Purpose

The Polymesh SDK's main goal is to provide external developers with a set of tools that will allow them to build powerful applications that interact with the Polymesh protocol. It focuses on abstracting away all the complexities of the Polymesh blockchain and expose a simple but complete interface. The result is a feature-rich, user-friendly node.js library.

### Before moving on

This document assumes you are already familiar with [Security Tokens](https://thesecuritytokenstandard.org/) in general and [Polymath](https://www.polymath.network/) as well as [Polymesh](https://polymath.network/polymesh) in particular.

### Technical Pre-requisites

In order to use the Polymath SDK, you must install [node](https://nodejs.org/) \(version 16\) and [npm](https://www.npmjs.com/). The library is written in [typescript](https://www.typescriptlang.org/), but can also be used in plain javascript. This document will assume you are using typescript, but the translation to javascript is very simple.

### Documentation

Token Studio SDK Walkthrough:

https://developers.polymath.network/token-studio-api-walkthrough/

Polymesh SDK API Reference:

https://github.com/PolymeshAssociation/polymesh-sdk/wiki

### How to use

#### Installation

`npm i @polymeshassociation/polymesh-sdk --save`

Or, if you're using yarn

`yarn add @polymeshassociation/polymesh-sdk`

Or, if using pnpm

`pnpm add @polymeshassociation/polymesh-sdk`

**NOTE** it is _highly_ recommended that you use one of these three package managers. This project uses package resolutions/overrides to pin certain problematic dependencies, and these are only supported by the aforementioned package managers. Using a different package manager may result in unexpected behavior

**NOTE** if using TypeScript the compiler option "skipLibCheck" should be set to true in your tsconfig.json file

#### Initializing the client

Before you can start registering Tickers and creating Assets, you have to connect the Polymesh SDK client to a Polymesh node. This is a pretty straightforward process:

```typescript
import { Polymesh } from '@polymeshassociation/polymesh-sdk';
import { LocalSigningManager } from '@polymeshassociation/local-signing-manager';

async function run() {
  const signingManager = await LocalSigningManager.create({
    accounts: [
      {
        mnemonic: '//Alice', //A "well known" mnemonic, often with sudo privileges on development chains, most mnemonics are 12 words
      },
    ],
  });
  const polyClient = await Polymesh.connect({
    nodeUrl: 'wss://some-node-url.com',
    signingManager,
  });

  // do stuff with the client
}
```

Here is an overview of the parameters passed to the `connect` function:

- `nodeUrl` is a URL that points to a running Polymesh node
- `signingManager` is an object that complies with the `SigningManager` interface. It holds the Accounts capable of signing transactions, and the signing logic itself. In this example, `LocalSigningManager` is a simple signing manager that holds private keys in memory and signs with them

**NOTE:** if using the SDK on a browser environment \(i.e. with the Polymesh wallet browser extension\), you would use the `BrowserExtensionSigningManager` provided by `@polymeshassociation/browser-extension-signing-manager`

```typescript
import { Polymesh } from '@polymeshassociation/polymesh-sdk';
import { BrowserExtensionSigningManager } from '@polymeshassociation/browser-extension-signing-manager';

async function run() {
  const signingManager = await BrowserExtensionSigningManager.create('MY_APP_NAME'); // The Polymesh wallet extension will ask the user to authorize MY_APP_NAME for access

  const polyClient = await Polymesh.connect({
    nodeUrl: 'wss://some-node-url.com',
    signingManager,
  });

  // do stuff with the client
}
```

#### Creating transactions

Creating transactions is a two step process. First a procedure is created, which validates the chain is likely to accept the transaction and returns a `Procedure` object. This procedure is then ran

```typescript
  /**
   * This step performs validations, and will throw if the transaction isn't expected to proceed, e.g. `ticker` is already used
   */
  const createAssetProc = await polyClient.assets.createAsset({
    name: 'My new asset'
    ticker: 'TICKER',
    // ... (args omitted for brevity)
  })

  /**
   * The promise will resolve when the transaction is in a finalized block which takes on average 15 seconds. It will throw if the transaction fails to finalize
   * For example `ticker` was claimed after the procedure was created, but before it was ran, or the signing manager didn't generate a correct signature.
   */
  const newAsset = await createAssetProc.run()
```

#### Reading data

The sdk exposes getters functions that will return entities, that may have their own functions exposed:

```typescript
  const assetsPage = await polyClient.assets.get({ size: new BigNumber(20) })
  const asset = assetsPage.data[0]

  const assetDetails = await asset.details()
  console.log('asset details:', assetDetails)
```

Note: some getters require "middleware" to be configured, which is chain indexer that aids for historical queries. All such methods will have a comment indicating as such.

### Terminology

The SDK uses the class `Account` as an abstraction for a public/private key pair that is used to sign transactions. Although consistent with [Substrate](https://substrate.io/vision/substrate-and-polkadot/) (the chain's framework) naming conventions, it serves as a frequent source of confusion given the domain. What the SDK calls an account is often referred to as a key. Public keys are often represented in ss58 which is a special encoding that incorporated the intended network the key is supposed to be used on. In this form it is referred to as an address and looks like: `5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY` (mainnet accounts start with `2`, testnet and dev chains start with `5`).

The only thing the `Account` holds in the POLYX utility token. Ownership of any asset on the Polymesh chain requires an `Identity`. This process involves a trusted provider to write a claim to the chain that this person has completed a "customer due diligence" (CDD) procedure. For development chains the mnemonic `//Alice` is able to create CDD claims by default.

Polymesh uses an `Identity` to provide flexibility in managing permissions. Portfolios can be created and secondary keys permissioned in order to control what assets a particular private key can move.