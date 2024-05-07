import { initBitriel, sendTransaction } from "bitriel-react-sdk";

const mnemonic = "your mnemonic";
const receiver = "your receiver address on Selendra Network";
const amount = 10;

let privateKey;

initBitriel({
	mnemonic: mnemonic,
})
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
		sendTransaction(privateKey!, receiver, amount)
			.then((hash) => {
				// Transaction successful, handle the transaction hash
				console.log("Transaction hash:", hash);
			})
			.catch((error) => {
				// Transaction failed, handle the error
				console.error("Transaction failed:", error);
			});
	});
