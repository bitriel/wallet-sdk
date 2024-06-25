import {
	AddressLike,
	BigNumberish,
	HDNodeWallet,
	JsonRpcProvider,
	Wallet,
} from "ethers";

const transfer = (wallet: Wallet | HDNodeWallet, provider: JsonRpcProvider) => {
	return {
		transfer: async (to: AddressLike, amount: BigNumberish) => {
			const _wallet = wallet.connect(provider);
			const tx = await _wallet.sendTransaction({
				to: to,
				value: amount,
			});

			const receipt = await tx.wait();
			return receipt;
		},
	};
};

const balance = (wallet: Wallet | HDNodeWallet, provider: JsonRpcProvider) => {
	return {
		balance: async () => {
			return await provider.getBalance(wallet.address);
		},
	};
};

const balanceOf = (provider: JsonRpcProvider) => {
	return {
		balanceOf: async (address: AddressLike) => {
			return await provider.getBalance(address);
		},
	};
};

export const NativeToken = (
	wallet: Wallet | HDNodeWallet,
	provider: JsonRpcProvider
) => {
	return {
		...transfer(wallet, provider),
		...balanceOf(provider),
		...balance(wallet, provider),
	};
};
