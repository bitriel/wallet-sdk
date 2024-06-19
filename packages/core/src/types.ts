import { Chain } from "@covalenthq/client-sdk";

export interface NetworkItem {
	networkName: string;
	networkUrl?: string;
	imageUrl: string;
	networkChain?: Chain;
	chainId?: number;
}
