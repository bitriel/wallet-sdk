import { AddressLike, Addressable, Contract, ethers } from "ethers";
import { Wallet } from "./wallet/wallet";
import { NativeToken } from "./tokens/native";
import { CONTRACT } from "./tokens/contract";

export type ContractInfo = {
	abi: ethers.Interface | ethers.InterfaceAbi;
	address: string;
	decimal?: number;
	name: string;
	symbol: string;
	type: string;
	chain: string;
};

export const WalletSDK = (
	mnemonic: string,
	chain: string,
	contracts: ContractInfo[] = []
) => {
	const provider = new ethers.JsonRpcProvider(chain);
	const wallet = Wallet(mnemonic);

	// const _contracts: Contract[] = [];

	// contracts
	// 	.filter((c) => c.chain === chain)
	// 	.forEach((token: ContractInfo) => {
	// 		// if (token.type === "ERC20") {
	// 		// 	_contracts[token.symbol] = () =>
	// 		// 		CONTRACT(wallet, provider, token.address, token.symbol, token.abi);
	// 		// }
	// 		_contracts[token.symbol] = () =>
	// 			CONTRACT(wallet, provider, token.address, token.symbol, token.abi);
	// 	});

	return {
		provider,
		wallet,
		contracts: new Map(
			contracts.map((token) => [
				token.symbol,
				CONTRACT(wallet, provider, token.address, token.symbol, token.abi),
			])
		),
		...NativeToken(wallet, provider),
	};
};
