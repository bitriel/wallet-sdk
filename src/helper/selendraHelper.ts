import "@polkadot/api-augment";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { mnemonicToMiniSecret } from "@polkadot/util-crypto";
import type { AccountInfo } from "@polkadot/types/interfaces";
import { BN } from "@polkadot/util";
import { KeyringPair } from "@polkadot/keyring/types";

// Connect to Selendra network
export async function connectToSelendra(
    rpc_endpoint: string
): Promise<ApiPromise> {
    const wsProvider = new WsProvider(rpc_endpoint);
    const api = new ApiPromise({ provider: wsProvider });
    await api.isReady;
    return api;
}

// Create key pair from mnemonic
export function createKeyPair(mnemonic: string): {
    pair: KeyringPair;
    miniSecret: Uint8Array;
} {
    const keyring = new Keyring({
        type: "sr25519",
        ss58Format: 42, // Changed from 204 to 42
    });
    const pair = keyring.createFromUri(mnemonic);
    const miniSecret = mnemonicToMiniSecret(mnemonic);
    return { pair, miniSecret };
}

// Fetch account balance
export async function fetchBalance(
    api: ApiPromise,
    address: string
): Promise<BN> {
    const accountInfo = (await api.query.system.account(
        address
    )) as AccountInfo;
    return accountInfo.data.free;
}

// Get sender account from private key
export function getSenderAccount(privateKey: string): KeyringPair {
    const keyring = new Keyring({
        type: "sr25519",
        ss58Format: 42, // Changed from 204 to 42
    });
    return keyring.addFromMnemonic(privateKey);
}

// Parse amount consistently
export function parseAmount(amount: number, decimals: number = 18): BN {
    return new BN(amount).mul(new BN(10).pow(new BN(decimals)));
}

// Handle transaction errors
export function handleTransactionError(
    api: ApiPromise,
    dispatchError: any,
    reject: (reason?: any) => void
): void {
    if (dispatchError.isModule) {
        const decoded = api.registry.findMetaError(dispatchError.asModule);
        const { docs, name, section } = decoded;
        reject(new Error(`${section}.${name}: ${docs.join(" ")}`));
    } else {
        reject(new Error(dispatchError.toString()));
    }
}
