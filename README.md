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
		console.log("Bitriel initialized successfully:", result);
	})
	.catch((error) => {
		console.error("Error initializing Bitriel:", error);
	});
```

### Send Transaction

To send a transaction from one account to another:

```typescript
import { sendTransaction } from "bitriel-react-sdk";

const rpc_endpoint = "wss://rpc1.selendra.org";
const privateKey = "your-private-key-here";
const recipientAddress = "recipient-address";
const amount = 1; // Amount to transfer

sendTransaction({
	rpc_endpoint: rpc_endpoint,
	privateKey: privateKey!,
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
