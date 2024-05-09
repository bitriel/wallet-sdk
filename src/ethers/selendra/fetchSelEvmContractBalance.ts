import { ethers } from "ethers";

export async function fetchSelEvmBalance({
	rpc_endpoint,
	networkChainId,
	contractAddress,
	accountAddress,
}: {
	rpc_endpoint: string;
	networkChainId: number;
	contractAddress: string;
	accountAddress: string;
}): Promise<string> {
	const provider = new ethers.JsonRpcProvider(rpc_endpoint, networkChainId);

	const contract = new ethers.Contract(
		contractAddress,
		["function balanceOf(address) view returns (uint256)"],
		provider
	);
	const balance = await contract.balanceOf(accountAddress);
	const tokenBalance = ethers.formatEther(balance);

	return tokenBalance.toString();
}
