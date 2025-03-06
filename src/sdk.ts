import { AddressLike, Addressable, Contract, ethers } from "ethers";
import { Wallet } from "./wallet/wallet";
import { NativeToken } from "./tokens/native";
import { CONTRACT } from "./tokens/contract";
import {
    WalletProvider,
    WalletState,
    TokenBalance,
    PolkadotTransactionRequest,
    EVMTransactionRequest,
    TokenInfo,
    TransactionRequest,
    FeeEstimate,
} from "./wallet/types";
import {
    NetworkConfig,
    SUBSTRATE_NETWORKS,
    EVM_NETWORKS,
    SUPPORTED_NETWORKS,
} from "./config/networks";
import { SubstrateWalletProvider } from "./wallet/substrate";
import { EVMWalletProvider } from "./wallet/evm";

export type ContractInfo = {
    abi: ethers.Interface | ethers.InterfaceAbi;
    address: string;
    decimal?: number;
    name: string;
    symbol: string;
    type: string;
    chain: string;
};

export const WalletSDK = (
    mnemonic: string,
    chain: string,
    contracts: ContractInfo[] = []
) => {
    const provider = new ethers.JsonRpcProvider(chain);
    const wallet = Wallet(mnemonic);

    return {
        provider,
        wallet,
        contracts: new Map(
            contracts.map((token) => [
                token.symbol,
                CONTRACT(
                    wallet,
                    provider,
                    token.address,
                    token.symbol,
                    token.abi
                ),
            ])
        ),
        ...NativeToken(wallet, provider),
    };
};

export class MultiChainWalletSDK {
    private providers: Map<string, WalletProvider> = new Map();
    private currentNetwork:
        | (NetworkConfig & { type: "substrate" | "evm" })
        | null = null;
    private mnemonic: string;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
        // Initialize providers for all supported networks
        [...SUBSTRATE_NETWORKS, ...EVM_NETWORKS].forEach((network) => {
            const provider =
                network.type === "substrate"
                    ? new SubstrateWalletProvider(network, mnemonic)
                    : new EVMWalletProvider(network, mnemonic);
            this.providers.set(network.chainId.toString(), provider);
        });
    }

    async connect(chainId: string): Promise<void> {
        const network = [...SUBSTRATE_NETWORKS, ...EVM_NETWORKS].find(
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
        return [...SUBSTRATE_NETWORKS, ...EVM_NETWORKS];
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

    private formatTokenBalance(balance: string, decimals: number): string {
        try {
            const balanceBigInt = BigInt(balance);
            const divisor = BigInt(10 ** decimals);
            const wholePart = (balanceBigInt / divisor).toString();
            const fractionalPart = (balanceBigInt % divisor)
                .toString()
                .padStart(decimals, "0");
            return `${wholePart}.${fractionalPart}`;
        } catch (error) {
            console.warn("Failed to format token balance:", error);
            return balance;
        }
    }
}
