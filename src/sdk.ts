import {
    WalletProvider,
    WalletState,
    TokenBalance,
    TokenInfo,
    TransactionRequest,
    FeeEstimate,
} from "./wallet/types";
import { NetworkConfig, SUPPORTED_NETWORKS } from "./config/networks";
import { SubstrateWalletProvider } from "./wallet/substrate";
import { EVMWalletProvider } from "./wallet/evm";
import { generateMnemonic, MnemonicOptions } from "./utils/mnemonic";
import {
    formatTokenBalance,
    formatTokenAmount,
    parseTokenBalance,
    TokenBalanceFormatOptions,
} from "./utils/tokenFormatters";

export class BitrielWalletSDK {
    private providers: Map<string, WalletProvider> = new Map();
    private currentNetwork:
        | (NetworkConfig & { type: "substrate" | "evm" })
        | null = null;

    constructor(mnemonic: string) {
        // Initialize providers for all supported networks
        [...SUPPORTED_NETWORKS].forEach((network) => {
            const provider =
                network.type === "substrate"
                    ? new SubstrateWalletProvider(network, mnemonic)
                    : new EVMWalletProvider(network, mnemonic);
            this.providers.set(network.chainId.toString(), provider);
        });
    }

    static createMnemonic(options: MnemonicOptions = {}): string {
        return generateMnemonic(options);
    }

    async connect(chainId: string): Promise<void> {
        const network = [...SUPPORTED_NETWORKS].find(
            (n) => n.chainId.toString() === chainId
        );

        if (!network) {
            throw new Error(`Network with chain ID ${chainId} not supported`);
        }

        const provider = this.providers.get(chainId);
        if (!provider) {
            throw new Error(`Provider not found for chain ID ${chainId}`);
        }

        await provider.connect();
        this.currentNetwork = network as NetworkConfig & {
            type: "substrate" | "evm";
        };
    }

    async disconnect(): Promise<void> {
        if (this.currentNetwork) {
            const provider = this.providers.get(
                this.currentNetwork.chainId.toString()
            );
            if (provider) {
                await provider.disconnect();
            }
            this.currentNetwork = null;
        }
    }

    async getWalletState(): Promise<WalletState> {
        if (!this.currentNetwork) {
            throw new Error("No network connected");
        }

        const provider = this.providers.get(
            this.currentNetwork.chainId.toString()
        );
        if (!provider) {
            throw new Error("Provider not found");
        }

        const address = await provider.getAddress();
        const nativeBalance = await provider.getBalance();

        const tokenBalances: TokenBalance[] = [];
        if (this.currentNetwork.tokens) {
            for (const token of this.currentNetwork.tokens) {
                const balance = await provider.getTokenBalance(token.address);
                const formatted = this.formatTokenBalance(
                    balance,
                    token.decimals
                );
                tokenBalances.push({
                    token,
                    balance,
                    formatted,
                });
            }
        }

        return {
            address,
            balances: {
                native: nativeBalance,
                tokens: tokenBalances,
            },
            network: this.currentNetwork,
        };
    }

    async sendTransaction(tx: TransactionRequest): Promise<string> {
        if (!this.currentNetwork) {
            throw new Error("No network connected");
        }

        const provider = this.providers.get(
            this.currentNetwork.chainId.toString()
        );
        if (!provider) {
            throw new Error("Provider not found");
        }

        return provider.sendTransaction(tx);
    }

    async signMessage(message: string): Promise<string> {
        if (!this.currentNetwork) {
            throw new Error("No network connected");
        }

        const provider = this.providers.get(
            this.currentNetwork.chainId.toString()
        );
        if (!provider) {
            throw new Error("Provider not found");
        }

        return provider.signMessage(message);
    }

    getSupportedNetworks(): NetworkConfig[] {
        return [...SUPPORTED_NETWORKS];
    }

    getCurrentNetwork():
        | (NetworkConfig & { type: "substrate" | "evm" })
        | null {
        return this.currentNetwork;
    }

    async listTokens(): Promise<TokenInfo[]> {
        if (!this.currentNetwork) {
            throw new Error("No network connected");
        }

        const provider = this.providers.get(
            this.currentNetwork.chainId.toString()
        );
        if (!provider) {
            throw new Error("Provider not found");
        }

        return provider.listTokens();
    }

    async estimateFee(tx: TransactionRequest): Promise<FeeEstimate> {
        if (!this.currentNetwork) {
            throw new Error("No network connected");
        }

        const provider = this.providers.get(
            this.currentNetwork.chainId.toString()
        );
        if (!provider) {
            throw new Error("Provider not found");
        }

        return provider.estimateFee(tx);
    }

    /**
     * Format a token balance with the specified options
     * @param balance - The token balance as a string
     * @param decimals - The number of decimals for the token
     * @param options - Formatting options
     */
    formatTokenBalance(
        balance: string,
        decimals: number,
        options?: TokenBalanceFormatOptions
    ): string {
        return formatTokenBalance(balance, decimals, options);
    }

    /**
     * Format a token amount with its symbol
     * @param amount - The token amount as a string
     * @param decimals - The number of decimals for the token
     * @param symbol - The token symbol
     * @param options - Formatting options
     */
    formatTokenAmount(
        amount: string,
        decimals: number,
        symbol: string,
        options?: TokenBalanceFormatOptions
    ): string {
        return formatTokenAmount(amount, decimals, symbol, options);
    }

    /**
     * Parse a formatted token balance back to its raw form
     * @param formattedBalance - The formatted balance string
     * @param decimals - The number of decimals for the token
     */
    parseTokenBalance(formattedBalance: string, decimals: number): string {
        return parseTokenBalance(formattedBalance, decimals);
    }
}

// Export utility types and functions for direct use
export type { TokenBalanceFormatOptions } from "./utils/tokenFormatters";
export {
    formatTokenBalance,
    formatTokenAmount,
    parseTokenBalance,
} from "./utils/tokenFormatters";
