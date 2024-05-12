import { mnemonicGenerate } from "@polkadot/util-crypto";

export function createMnemonic() {
	try {
		const mnemonic = mnemonicGenerate();

		return mnemonic;
	} catch (error) {
		console.error("Error create mnemonic", error);
		throw error;
	}
}
