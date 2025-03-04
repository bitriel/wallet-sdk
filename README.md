# **WalletSDK Library**

## **Overview**

The WalletSDK library provides a streamlined interface for interacting with blockchain networks, supporting both Ethereum and Selendra ecosystems.

## **Installation**

To use the WalletSDK library, install the necessary dependencies:

```sh
npm install @bitriel/wallet-sdk
```

## **Ethereum Example Usage**

Here's an example of how to use the WalletSDK to interact with the Ethereum blockchain:

```js
import { WalletSDK } from "./path/to/walletsdk";
const mnemonic = process.env.mnemonic ?? "your mnemonic phrase";
const chain = "https://rpc-testnet.selendra.org";
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

## **Selendra Example Usage**

Interact with the Selendra blockchain using these comprehensive functions:

```typescript
import {
    createMnemonicSelendra,
    initSelendra,
    selendraTransaction,
} from "@bitriel/wallet-sdk";

async function selendraWalletOperations() {
    // Generate a new mnemonic
    const mnemonic = createMnemonicSelendra();

    try {
        // Initialize Selendra wallet
        const sdk = await initSelendra({
            rpc_endpoint: "wss://rpc.selendra.org",
            mnemonic,
        });

        // Display wallet information
        console.log("Wallet Details:", {
            address: sdk.address,
            balance: sdk.balanceSEL,
        });

        // Prepare transaction
        const recipientAddress =
            "5EkFVKkrvyVhhCWXs6sfri22zXkP5BgenDEHyuL9vaHt78XW";
        const transactionAmount = 1; // SEL amount

        // Send transaction
        const transactionHash = await selendraTransaction({
            rpc_endpoint: "wss://rpc.selendra.org",
            privateKey: sdk.privateKeyHex,
            recipientAddress,
            amount: transactionAmount,
        });

        // Log transaction details
        console.log("Transaction Details:", {
            hash: transactionHash,
            amount: transactionAmount,
            recipient: recipientAddress,
        });
    } catch (error) {
        console.error("Selendra Wallet Operation Error:", error);
    }
}

// Execute the wallet operations
selendraWalletOperations();
```

### **Selendra Network Features**

-   Native token: SEL
-   Substrate-based blockchain
-   Support for complex transactions
-   Interoperable cross-chain capabilities

## **Additional Resources**

-   [Selendra Documentation](https://docs.selendra.org)
-   [Blockchain SDK GitHub](https://github.com/bitriel/wallet-sdk)
-   Support: allencode.dev@icloud.com
