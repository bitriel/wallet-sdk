import {
	connectToSelendra,
	getSenderAccount,
	parseAmount,
} from "./selendraHelper";

export async function sendTransaction({
	rpc_endpoint,
	privateKey,
	recipientAddress,
	amount,
}: {
	rpc_endpoint: string;
	privateKey: string;
	recipientAddress: string;
	amount: number;
}) {
	try {
		const api = await connectToSelendra(rpc_endpoint);

		const sender = getSenderAccount(privateKey);

		const parsedAmount = parseAmount(amount, api);

		const transfer = api.tx.balances.transfer(
			recipientAddress,
			parsedAmount
		);

		const hash = await transfer.signAndSend(sender);

		return hash;
	} catch (error) {
		console.error("Error sending transaction:", error);
		throw error;
	}
}
