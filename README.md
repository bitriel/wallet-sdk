# Bitriel SDK

A Typescript SDK for interacting with the Selendra blockchain network based on Bitriel Wallet.

## Installation

To use the Selendra SDK in your project, you can install it via npm:

`npm i bitriel-react-sdk`

## Usage

### Initialize Bitriel

To initialize Bitriel and retrieve account information such as address, balance, and private key:

```typescript
import { initBitriel } from "bitriel-react-sdk";

const mnemonic = "your-mnemonic-here";
const rpc_endpoint = "wss://rpc1.selendra.org";

initBitriel({ mnemonic: mnemonic, rpc_endpoint: rpc_endpoint })
	.then((result) => {
		console.log("Selendar network initialized successfully:", result);
	})
	.catch((error) => {
		console.error("Error initializing Selendar network:", error);
	});
```

### Send Transaction on Selendra Network

To send a transaction from one account to another on Selendra Network:

```typescript
import { sendTransaction } from "bitriel-react-sdk";

const rpc_endpoint = "wss://rpc1.selendra.org";
const privateKey = "your-private-key-here";
const recipientAddress = "recipient-address";
const amount = 1; // Amount to transfer

sendTransaction({
	rpc_endpoint: rpc_endpoint,
	privateKey: privateKey,
	recipientAddress: receiver,
	amount: amount,
})
	.then((hash) => {
		console.log("Transaction sent successfully. Hash:", hash.toString());
	})
	.catch((error) => {
		console.error("Error sending transaction:", error);
	});
```

### Initialize Bitriel EVM Chain

To initialize Bitriel and retrieve account information such as address, balance, and private key with Native EVM chain:

```typescript
import { initializeEvmApi } from "bitriel-react-sdk";

const mnemonic = "your-mnemonic-here";
const rpc_endpoint = "https://rpc1.selendra.org";
const chainId = 1961;

initializeEthersApi({
	mnemonic: mnemonic,
	rpc_endpoint: rpc_endpoint,
	networkChainId: chainId,
})
	.then((result) => {
		console.log("Evm chain initialized successfully:", result);

		console.log("Wallet Address:", result.address);
		console.log("Wallet Balance:", result.balance);
		console.log("Wallet Private Key:", result.privateKey);
	})
	.catch((error) => {
		console.error("Error initializing Evm:", error);
	});
```

### Fetch Balance Selendra EVM Contract

To retrieve balance with Selendra EVM Contract Token:

```typescript
import { fetchSelEvmBalance } from "bitriel-react-sdk";

const rpc_endpoint = "https://rpc1.selendra.org";
const chainId = 1961;
const contractAddress = "your contract address token";
const accountAddress = "your account address";

fetchSelEvmBalance({
	rpc_endpoint: rpc_endpoint,
	networkChainId: chainId,
	contractAddress: contractAddress,
	accountAddress: accountAddress,
})
	.then((balance) => {
		console.log(
			"Selendra EVM fetchSelEvmBalance successfully:",
			balance.toString()
		);
	})
	.catch((error) => {
		console.error("Error fetchSelEvmBalance:", error);
	});
```

### Send Transaction on Selendra Network & Multi-Chian Network EVM

To send a transaction from one account to another on Selendra EVM & Multi-Chain Support:

```typescript
import { evmNativeTransaction } from "bitriel-react-sdk";

const rpc_endpoint = "https://rpc1.selendra.org";
const chainId = 1961;
const privateKey = "your private key";
const recipientAddress = "recipient-address";
const amount = 1; // Amount to transfer
const decimalToken = 18;

initializeEthersApi({
	rpc_endpoint: rpc_endpoint,
	networkChainId: chainId,
	privateKey: privateKey,
	to: recipientAddress,
	amount: amount,
	decimal: decimalToken,
})
	.then((tx) => {
		console.log("Transaction sent successfully.", tx.hash);
	})
	.catch((error) => {
		console.error("Error initializing Evm:", error);
	});
```

## Feature Development

-   [x] Initialize Selendra Network
-   [x] Send Transaction Selendra Network
-   [x] Fetch Balance Selendra EVM Contract
-   [x] Initialize Selendra EVM & Multi-Chain Support
-   [x] Send Transaction Selendra EVM & Multi-Chain Native EVM
-   [ ] Send Transaction Selendra EVM & Multi-Chain Native Contract Token
-   [ ] Add Smart Contract Selendra EVM Contract
