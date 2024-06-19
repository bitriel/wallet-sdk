import { ethers } from "ethers";

export async function evmNativeTransaction({
	rpc_endpoint,
	networkChainId,
	privateKey,
	to,
	amount,
	decimal,
}: {
	rpc_endpoint: string;
	networkChainId: number;
	privateKey: string;
	to: string;
	amount: string;
	decimal?: number;
}) {
	try {
		// Initialize provider with default Selendra EVM settings
		const provider = new ethers.JsonRpcProvider(
			rpc_endpoint,
			networkChainId
		);

		// Initialize signer with provided private key
		const signer = new ethers.Wallet(privateKey, provider);

		const value = ethers.parseUnits(amount, decimal);

		// Send transaction
		const tx = await signer.sendTransaction({
			to: to,
			value: value,
		});

		// Return transaction data if successful
		return tx;
	} catch (error) {
		throw error; // Rethrow the error to be caught by the caller
	}
}
