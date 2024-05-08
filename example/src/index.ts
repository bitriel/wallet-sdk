// import { initBitriel, sendTransaction } from "bitriel-react-sdk";
import {
	fetchSelEvmBalance,
	initBitriel,
	initializeEthersApi,
	selEvmNativeTransaction,
	sendTransaction,
} from "./../../src/index";

const rpc_endpoint = "wss://rpc1.selendra.org";
const mnemonic = "your mnemonic";
const receiver = "recipient address";

const amount = 1;

let privateKey;

initBitriel({ mnemonic: mnemonic, rpc_endpoint: rpc_endpoint })
	.then((result) => {
		// Handle successful response
		console.log("Bitriel initialized successfully:", result);
		privateKey = result.privateKeyHex;
	})
	.catch((error) => {
		// Handle error
		console.error("Error initializing Bitriel:", error);
	})
	.finally(() => {
		sendTransaction({
			rpc_endpoint: rpc_endpoint,
			privateKey: privateKey!,
			recipientAddress: receiver,
			amount: amount,
		})
			.then((hash) => {
				// Transaction successful, handle the transaction hash
				console.log("Transaction hash:", hash.toString());
			})
			.catch((error) => {
				// Transaction failed, handle the error
				console.error("Transaction failed:", error);
			});
	});

const dataNetwork = {
	networkName: "Selendra EVM",
	networkUrl: "https://rpc1.selendra.org",
	imageUrl: "https://www.selendra.org/images/sel-logo-thin.png",
	chainId: 1961,
};

initializeEthersApi({ mnemonic, dataNetwork })
	.then((result) => {
		console.log("Ethers API initialized successfully:", result);

		fetchSelEvmBalance({
			selendraRpc: dataNetwork.networkUrl,
			selendraChainId: dataNetwork.chainId,
			contractAddress: "0xB2214719304573561Ad8c432b2faFFCd44287190",
			accountAddress: result.address,
		}).then((balance) => {
			console.log("Token balance:", balance);
		});
	})
	.catch((error) => {
		console.error("Error initializing Ethers API:", error);
	});
