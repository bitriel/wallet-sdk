import { Mnemonic, ethers, randomBytes } from "ethers";

export const createMnemonic = () => {
	return Mnemonic.entropyToPhrase(randomBytes(32));
};

export const Wallet = (mnemonic: string) => {
	return ethers.Wallet.fromPhrase(mnemonic);
};
