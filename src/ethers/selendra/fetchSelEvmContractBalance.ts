import { ethers } from "ethers";

export async function fetchSelEvmBalance({
	selendraRpc,
	selendraChainId,
	contractAddress,
	accountAddress,
}: {
	selendraRpc: string;
	selendraChainId: number;
	contractAddress: string;
	accountAddress: string;
}): Promise<string> {
	const provider = new ethers.JsonRpcProvider(selendraRpc, selendraChainId);

	const contract = new ethers.Contract(
		contractAddress,
		["function balanceOf(address) view returns (uint256)"],
		provider
	);
	const balance = await contract.balanceOf(accountAddress);
	const tokenBalance = ethers.formatEther(balance);

	return tokenBalance.toString();
}
