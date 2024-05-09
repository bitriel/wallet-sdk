# Bitriel SDK

A Typescript SDK for interacting with the Selendra blockchain network and Multi-Chain EVM based on Bitriel Wallet.

## Installation

To use the Selendra SDK in your project, you can install it via npm:

`npm i bitriel-react-sdk`

## Usage

### Initialize Selendra

To initialize Selendra and retrieve account information such as address, balance, and private key:

```typescript
import { initSelendra } from "bitriel-react-sdk";

const mnemonic = "your-mnemonic-here";
const rpc_endpoint = "wss://rpc1.selendra.org";

initSelendra({ mnemonic: mnemonic, rpc_endpoint: rpc_endpoint })
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
import { selendraTransaction } from "bitriel-react-sdk";

const rpc_endpoint = "wss://rpc1.selendra.org";
const privateKey = "your-private-key-here";
const recipientAddress = "recipient-address";
const amount = 1; // Amount to transfer

selendraTransaction({
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

#### Create data list network

```typescript
export interface DataNetworkItem {
	id: number;
	networkName: string;
	networkUrl?: string;
	imageUrl: string;
	networkChain?: Chain;
	chainId?: number;
}

export const dataNetwork: DataNetworkItem[] = [
	{
		id: 1,
		networkName: "Selendra EVM",
		networkUrl: "https://rpc1.selendra.org",
		imageUrl: "https://www.selendra.org/images/sel-logo-thin.png",
		chainId: 1961,
	},
	{
		id: 2,
		networkName: "Ethereum",
		networkUrl: "rpc-network of Ethereum",
		networkChain: "eth-sepolia",
		chainId: 11155111,
	},

	// Create more list as needed
];
```

```typescript
import { initEvm } from "bitriel-react-sdk";

const mnemonic = "your-mnemonic-here";

initEvm({
	mnemonic: mnemonic,
	dataNetwork: dataNetwork,
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

evmNativeTransaction({
	rpc_endpoint: rpc_endpoint,
	networkChainId: chainId,
	privateKey: privateKey,
	to: recipientAddress,
	amount: amount,
	decimal: decimalToken,
})
	.then((tx) => {
		console.log("Transaction Native EVM sent successfully.", tx.hash);
	})
	.catch((error) => {
		console.error("Error Transaction Native Evm:", error);
	});
```

### Send Transaction Selendra EVM & Multi-Chain Native Contract Token

To send a transaction from one account to another on Selendra EVM & Multi-Chain Support:

```typescript
import { evmContractTransaction } from "bitriel-react-sdk";

const rpc_endpoint = "https://rpc1.selendra.org";
const chainId = 1961;
const privateKey = "your private key";
const contractAddress = "usdt contract address";
const recipientAddress = "recipient-address";
const amount = 1; // Amount to transfer
const decimalToken = 18;

evmContractTransaction({
	rpc_endpoint: rpc_endpoint,
	networkChainId: chainId,
	privateKey: privateKey,
	contractAddress: contractAddress,
	to: recipientAddress,
	amount: amount,
	decimal: decimalToken,
})
	.then((tx) => {
		console.log("Transaction Native EVM sent successfully.", tx.hash);
	})
	.catch((error) => {
		console.error("Error Transaction Native Evm:", error);
	});
```

## Feature Development

-   [x] Initialize Selendra Network
-   [x] Send Transaction Selendra Network
-   [x] Fetch Balance Selendra EVM Contract
-   [x] Initialize Selendra EVM & Multi-Chain Support
-   [x] Send Transaction Selendra EVM & Multi-Chain Native EVM
-   [x] Send Transaction Selendra EVM & Multi-Chain Native Contract Token
-   [ ] Add Smart Contract Selendra EVM Contract
