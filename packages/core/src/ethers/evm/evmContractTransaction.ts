import { ethers } from "ethers";
import contractABI from "./../contractABI.json";

export async function evmContractTransaction({
	rpc_endpoint,
	networkChainId,
	privateKey,
	contractAddress,
	to,
	amount,
	decimal,
}: {
	rpc_endpoint: string;
	networkChainId: number;
	privateKey: string;
	contractAddress: string;
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

		// Instantiate the contract
		const contract = new ethers.Contract(
			contractAddress,
			contractABI,
			signer
		);

		const value = ethers.parseUnits(amount, decimal);

		// Call the transfer function
		const tx = await contract.transfer(to, value);

		// Wait for the transaction to be mined
		await tx.wait();

		return tx.hash;
	} catch (error) {
		throw error; // Rethrow the error to be caught by the caller
	}
}
