import { ethers, Wallet } from "ethers";

export async function initializeEvmApi({
	mnemonic,
	rpc_endpoint,
	networkChainId,
}: {
	mnemonic: string;
	rpc_endpoint: string;
	networkChainId: number;
}) {
	try {
		const provider = new ethers.JsonRpcProvider(
			rpc_endpoint,
			networkChainId
		);
		const wallet = Wallet.fromPhrase(mnemonic).connect(provider);

		const [address, balance] = await Promise.all([
			wallet.getAddress(),
			provider.getBalance(wallet.address),
		]);

		return {
			address,
			balance: ethers.formatEther(balance),
			privateKey: wallet.privateKey,
		};
	} catch (error) {
		throw error;
	}
}
