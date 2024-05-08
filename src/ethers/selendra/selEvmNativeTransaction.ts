import { ethers } from "ethers";

export async function selEvmNativeTransaction({
	selendraRpc,
	selendraChainId,
	privateKey,
	to,
	amount,
}: {
	selendraRpc: string;
	selendraChainId: number;
	privateKey: string;
	to: string;
	amount: string;
}) {
	try {
		// Initialize provider with default Selendra EVM settings
		const provider = new ethers.JsonRpcProvider(
			selendraRpc,
			selendraChainId
		);

		// Initialize signer with provided private key
		const signer = new ethers.Wallet(privateKey, provider);

		const value = ethers.parseEther(amount);

		// Send transaction
		const tx = await signer.sendTransaction({
			to: to,
			value: value,
		});

		console.log("Transaction:", tx);

		// Return transaction data if successful
		return tx;
	} catch (error) {
		throw error; // Rethrow the error to be caught by the caller
	}
}
