import {
	AddressLike,
	Addressable,
	Contract,
	HDNodeWallet,
	Interface,
	InterfaceAbi,
	JsonRpcProvider,
	Wallet,
} from "ethers";

export const CONTRACT = (
	wallet: Wallet | HDNodeWallet,
	provider: JsonRpcProvider,
	address: string,
	symbol: string,
	abi: Interface | InterfaceAbi
) => {
	const _wallet = wallet.connect(provider);
	const contract = new Contract(address, abi, _wallet);

	return contract;
};
