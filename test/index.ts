import { SEL } from "../src/amount";
import { initSelendra, selendraTransaction } from "../src/wallet/selendra";
import { WalletSDK } from "../src";
import { createMnemonic } from "../src/wallet/wallet";
import { chains } from "../src/chains";
import { ethers, parseUnits } from "ethers";

async function main() {
    let mnemonic = "mnemonic";
    console.log(mnemonic);

    try {
        // Initialize Selendra wallet
        let sdk = await initSelendra({
            rpc_endpoint: "wss://rpc.selendra.org",
            mnemonic,
        });
        console.log("Wallet Initialized:", {
            address: sdk.address,
            balance: sdk.balanceSEL,
        });

        // Recipient address (ensure this is a valid Selendra address)
        const recipientAddress =
            "5EkFVKkrvyVhhCWXs6sfri22zXkP5BgenDEHyuL9vaHt78XW";

        // Perform transaction
        const transactionAmount = 1; // SEL amount
        const hash = await selendraTransaction({
            rpc_endpoint: "wss://rpc.selendra.org",
            privateKey: sdk.privateKeyHex,
            recipientAddress,
            amount: transactionAmount,
        });

        console.log("Transaction Details:", {
            hash,
            amount: transactionAmount,
            recipient: recipientAddress,
        });

        // Optional: Fetch and log updated balance
        // Note: You might want to create a separate function to fetch current balance
        // as the balance in the SDK might not immediately reflect the recent transaction
    } catch (error) {
        console.error("Selendra Transaction Error:", error);

        // More detailed error logging
        if (error instanceof Error) {
            console.error("Error Name:", error.name);
            console.error("Error Message:", error.message);
            console.error("Error Stack:", error.stack);
        }
    }
}

main().catch(console.error);
