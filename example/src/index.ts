import { initBitriel, sendTransaction } from "bitriel-react-sdk";

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
