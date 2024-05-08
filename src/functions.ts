import "@polkadot/api-augment";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { encodeAddress, mnemonicToMiniSecret } from "@polkadot/util-crypto";
import { formatBalance, u8aToHex } from "@polkadot/util";
import { RPC_ENDPOINT, SEL_SS58_FORMAT } from "./constants";

export async function initBitriel(mnemonic: string) {
	try {
		// Connect to the Polkadot network
		const api = await connectToSelendra();

		// Create keyring and pair
		const { pair, miniSecret } = createKeyPair(mnemonic);

		// Get address
		const address = encodeAddress(pair.publicKey, SEL_SS58_FORMAT);

		// Fetch account balance
		const balance = await fetchBalance(api, address);

		// Format balance
		formatBalance.setDefaults({ unit: "SEL" });
		const balanceSEL = formatBalance(balance, {
			decimals: 18,
			forceUnit: "-",
		});

		// Convert private key to hex
		const privateKeyHex = u8aToHex(miniSecret);

		return {
			address,
			balanceSEL,
			privateKeyHex,
		};
	} catch (error) {
		console.error("Error fetching data from Bitriel:", error);
		throw error;
	}
}

export async function sendTransaction(
	privateKey: string,
	recipientAddress: string,
	amount: number
) {
	try {
		const api = await connectToSelendra(); // Connect to Selendra network

		const sender = getSenderAccount(privateKey); // Get sender's account

		const parsedAmount = parseAmount(amount, api); // Parse amount

		// Create a transfer transaction
		const transfer = api.tx.balances.transfer(
			recipientAddress,
			parsedAmount
		);

		// Sign and send the transaction
		const hash = await transfer.signAndSend(sender);

		return { hash };
	} catch (error) {
		console.error("Error sending transaction:", error);
		throw error;
	}
}

async function connectToSelendra() {
	const wsProvider = new WsProvider(RPC_ENDPOINT);
	const api = new ApiPromise({ provider: wsProvider });
	await api.isReady;
	return api;
}

function createKeyPair(mnemonic: string) {
	const keyring = new Keyring({
		type: "sr25519",
		ss58Format: SEL_SS58_FORMAT,
	});
	const pair = keyring.createFromUri(mnemonic);
	const miniSecret = mnemonicToMiniSecret(mnemonic);
	return { pair, miniSecret };
}

async function fetchBalance(api: ApiPromise, address: string) {
	const { data: balance } = await api.query.system.account(address);
	return balance.free;
}

function getSenderAccount(privateKey: string) {
	const keyring = new Keyring({
		type: "sr25519",
		ss58Format: SEL_SS58_FORMAT,
	});
	return keyring.addFromMnemonic(privateKey);
}

function parseAmount(amount: number, api: ApiPromise): bigint {
	const chainDecimals = api.registry.chainDecimals[0];
	return BigInt(amount * Math.pow(10, chainDecimals));
}
