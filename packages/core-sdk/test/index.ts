import { SEL } from "../src/amount";
import { WalletSDK } from "../src";
import { createMnemonic } from "../src/wallet/wallet";
import { chains } from "../src/chains";
import { ethers, parseUnits } from "ethers";

async function main() {
	let mnemonic =
		"medal document little mosquito fiber metal toast vault nose dog minor acid laugh verify scan solve saddle talk rich cargo episode income depth vendor";
	console.log(mnemonic);

	let sdk = WalletSDK(mnemonic, chains["selendra-testnet"]);

	console.log(
		"Balance before transfer",
		parseFloat(ethers.formatEther(await sdk.balance())).toFixed(4)
	);

	let rec = await sdk.transfer(
		"0xa5915AAAF9ABCE06764eBa224A3A3F208fCD91f5",
		SEL(0.1)
	);

	console.log("Transaction hash", rec?.hash);

	console.log(
		"Balance after transfer",
		parseFloat(ethers.formatEther(await sdk.balance())).toFixed(4)
	);
}

main();
