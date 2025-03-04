import {
    cryptoWaitReady,
    encodeAddress,
    mnemonicGenerate,
} from "@polkadot/util-crypto";
import { BN, formatBalance, u8aToHex } from "@polkadot/util";
import { Keyring } from "@polkadot/keyring";
import {
    connectToSelendra,
    createKeyPair,
    fetchBalance,
    handleTransactionError,
    parseAmount,
} from "../helper/selendraHelper";

// Create a mnemonic with improved error handling
export const createMnemonicSelendra = (): string => {
    try {
        return mnemonicGenerate();
    } catch (error) {
        console.error("Error creating mnemonic", error);
        throw error;
    }
};

// Initialize Selendra wallet with detailed type annotations
export async function initSelendra({
    rpc_endpoint,
    mnemonic,
}: {
    rpc_endpoint: string;
    mnemonic: string;
}): Promise<{
    address: string;
    balanceSEL: string;
    privateKeyHex: string;
}> {
    try {
        // Ensure crypto utilities are ready
        await cryptoWaitReady();

        // Establish API connection
        const api = await connectToSelendra(rpc_endpoint);

        const { pair, miniSecret } = createKeyPair(mnemonic);
        const address = encodeAddress(pair.publicKey, 42);

        const balance = await fetchBalance(api, address);

        // Set balance formatting defaults
        formatBalance.setDefaults({ unit: "SEL" });

        const balanceSEL = formatBalance(balance, {
            decimals: 18,
            forceUnit: "-",
        });

        const privateKeyHex = u8aToHex(miniSecret);

        return {
            address,
            balanceSEL,
            privateKeyHex,
        };
    } catch (error) {
        console.error("Error initializing Selendra wallet:", error);
        throw error;
    }
}

// Perform Selendra transaction with improved type safety
export async function selendraTransaction({
    rpc_endpoint,
    privateKey,
    recipientAddress,
    amount,
}: {
    rpc_endpoint: string;
    privateKey: string;
    recipientAddress: string;
    amount: number;
}): Promise<string> {
    try {
        // Ensure crypto is ready
        await cryptoWaitReady();

        // Connect to Selendra network
        const api = await connectToSelendra(rpc_endpoint);

        // Create a keyring instance
        const keyring = new Keyring({ type: "sr25519" });

        // Add account using private key
        const sender = keyring.addFromUri(privateKey);

        // Parse amount (assuming 18 decimals for Selendra)
        const parsedAmount = parseAmount(amount);

        // Prepare the transfer
        const transfer = api.tx.balances.transferKeepAlive(
            recipientAddress,
            parsedAmount
        );

        // Sign and send the transaction
        return new Promise((resolve, reject) => {
            transfer.signAndSend(
                sender,
                { nonce: -1 }, // Allow automatic nonce handling
                ({ status, dispatchError }) => {
                    if (dispatchError) {
                        return handleTransactionError(
                            api,
                            dispatchError,
                            reject
                        );
                    }

                    if (status.isInBlock) {
                        console.log(
                            `Transaction included in block: ${status.asInBlock}`
                        );
                        resolve(status.asInBlock.toString());
                    } else if (status.isFinalized) {
                        console.log(
                            `Transaction finalized in block: ${status.asFinalized}`
                        );
                        resolve(status.asFinalized.toString());
                    }
                }
            );
        });
    } catch (error) {
        console.error("Error sending Selendra transaction:", error);
        throw error;
    }
}
