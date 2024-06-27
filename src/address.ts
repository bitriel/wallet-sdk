export function shortenEthAddress(address: string): string {
	// Validate the Ethereum address length (should be 42 characters with '0x' prefix)
	if (address.length !== 42) {
		throw new Error("Invalid Ethereum address length");
	}

	// Return the shortened address
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
