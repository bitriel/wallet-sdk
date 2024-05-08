import { encodeAddress } from "@polkadot/util-crypto";
import { formatBalance, u8aToHex } from "@polkadot/util";
import {
	connectToSelendra,
	createKeyPair,
	fetchBalance,
} from "./selendraHelper";

export async function initBitriel({
	rpc_endpoint,
	mnemonic,
}: {
	rpc_endpoint: string;
	mnemonic: string;
}) {
	try {
		const api = await connectToSelendra(rpc_endpoint);

		const { pair, miniSecret } = createKeyPair(mnemonic);

		const address = encodeAddress(pair.publicKey, 204);

		const balance = await fetchBalance(api, address);

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
		console.error("Error fetching data from Bitriel:", error);
		throw error;
	}
}
