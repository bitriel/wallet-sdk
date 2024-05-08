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

initBitriel(mnemonic)
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

const privateKey = "your-private-key-here";
const recipientAddress = "recipient-address";
const amount = 100; // Amount to transfer

sendTransaction(privateKey, recipientAddress, amount)
	.then((hash) => {
		console.log("Transaction sent successfully. Hash:", hash);
	})
	.catch((error) => {
		console.error("Error sending transaction:", error);
	});
```
