import "@polkadot/api-augment";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { mnemonicToMiniSecret } from "@polkadot/util-crypto";

export async function connectToSelendra(rpc_endpoint: string) {
	const wsProvider = new WsProvider(rpc_endpoint);
	const api = new ApiPromise({ provider: wsProvider });
	await api.isReady;
	return api;
}

export function createKeyPair(mnemonic: string) {
	const keyring = new Keyring({
		type: "sr25519",
		ss58Format: 204,
	});
	const pair = keyring.createFromUri(mnemonic);
	const miniSecret = mnemonicToMiniSecret(mnemonic);
	return { pair, miniSecret };
}

export async function fetchBalance(api: ApiPromise, address: string) {
	const { data: balance } = await api.query.system.account(address);
	return balance.free;
}

export function parseAmount(amount: number, api: ApiPromise): bigint {
	const chainDecimals = api.registry.chainDecimals[0];
	return BigInt(amount * Math.pow(10, chainDecimals));
}

export function getSenderAccount(privateKey: string) {
	const keyring = new Keyring({
		type: "sr25519",
		ss58Format: 204,
	});
	return keyring.addFromMnemonic(privateKey);
}
