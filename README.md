# WalletSDK Library

## Overview

The WalletSDK library provides a streamlined interface for interacting with Ethereum-based blockchain networks. It simplifies the management of wallets, contracts, and native tokens, allowing developers to easily integrate blockchain functionality into their applications.

## Installation

To use the WalletSDK library, install the necessary dependencies:

```sh
npm install bitriel/wallet-sdk#v2
```

# Example Usage

Here's an example of how to use the WalletSDK to interact with the Ethereum blockchain:

```js
import { WalletSDK } from "./path/to/walletsdk";

const mnemonic = process.env.mnemonic ?? "your mnemonic phrase";
const chain = "https://rpc0-testnet.selendra.org";
const contracts = [
	{
		abi: yourContractAbi,
		address: "0xYourContractAddress",
		name: "YourContractName",
		symbol: "YCN",
		type: "ERC20",
		chain: "mainnet",
	},
];

const sdk = WalletSDK(mnemonic, chain, contracts);

// Access the provider, wallet, and contracts
const { provider, wallet, contracts: sdkContracts } = sdk;

// Interact with a contract
const yourContract = sdkContracts.get("YCN");
yourContract.balanceOf("0xYourContractAddress");
```
