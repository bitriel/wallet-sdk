import * as ethers from 'ethers';
import { ChainProperties } from '@polkadot/types/interfaces';
import { SubmittableExtrinsic } from '@polkadot/api/types';

declare const GENERIC_ABI: {
    ERC20: ethers.InterfaceAbi;
    ERC721: ethers.InterfaceAbi;
    ERC1155: ethers.InterfaceAbi;
};

interface RpcProviderApiKeys {
    infura?: string;
    alchemy?: string;
    custom?: string;
}
interface NetworkConfig {
    name: string;
    chainId: string | number;
    rpcUrl: string | ((apiKeys?: RpcProviderApiKeys) => string);
    explorerUrl: string;
    logo?: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    tokens?: TokenConfig[];
}
interface TokenConfig {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
}
interface SubstrateNetworkConfig extends NetworkConfig {
    type: "substrate";
    properties?: ChainProperties;
    ss58Format?: number;
    genesisHash?: string;
}
interface EVMNetworkConfig extends NetworkConfig {
    type: "evm";
}
declare const SUBSTRATE_NETWORKS: SubstrateNetworkConfig[];
declare const EVM_NETWORKS: EVMNetworkConfig[];
declare function getRpcUrl(network: NetworkConfig, apiKeys?: RpcProviderApiKeys): string;
declare const SUPPORTED_NETWORKS: (SubstrateNetworkConfig | EVMNetworkConfig)[];

interface TokenInfo {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
    balance?: string;
    formatted?: string;
}
interface FeeEstimate {
    fee: string;
    formatted: string;
    currency: string;
}
interface WalletProvider {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    signMessage(message: string): Promise<string>;
    getBalance(): Promise<string>;
    sendTransaction(tx: TransactionRequest): Promise<string>;
    getTokenBalance(tokenAddress: string): Promise<string>;
    isConnected(): boolean;
    listTokens(): Promise<TokenInfo[]>;
    estimateFee(tx: TransactionRequest): Promise<FeeEstimate>;
}
interface TokenBalance {
    token: {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        logoURI?: string;
    };
    balance: string;
    formatted: string;
}
interface WalletBalances {
    native: string;
    tokens: TokenBalance[];
}
interface WalletState {
    address: string;
    balances: WalletBalances;
    network: (NetworkConfig & {
        type: "substrate" | "evm";
    }) | null;
}
interface PolkadotTransactionRequest {
    method: string;
    params: (string | number | boolean | Uint8Array | null)[];
}
interface EVMTransactionRequest {
    to: string;
    value: string;
    data?: string;
    gasLimit?: string;
    gasPrice?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
    nonce?: number;
}
type TransactionRequest = PolkadotTransactionRequest | EVMTransactionRequest;
interface SubstrateTransactionResult {
    isFinalized: boolean;
    txHash: {
        toString: () => string;
    };
}
interface SubstrateAccountInfo {
    data: {
        free: {
            toString: () => string;
        };
    };
}
interface SubstrateExtrinsic {
    signAndSend(signer: unknown, callback: (result: SubstrateTransactionResult) => void): Promise<() => void>;
}
interface SubstrateTxModule {
    [key: string]: (...args: (string | number | boolean | Uint8Array | null)[]) => SubmittableExtrinsic<"promise">;
}
interface SubstrateApi {
    tx: {
        [key: string]: SubstrateTxModule;
    };
    query: {
        system: {
            account: (address: string) => Promise<SubstrateAccountInfo>;
        };
    };
    disconnect(): Promise<void>;
}

interface MnemonicOptions {
    wordCount?: 12 | 15 | 18 | 21 | 24;
    strength?: 128 | 160 | 192 | 224 | 256;
}

declare class BitrielWalletSDK {
    private providers;
    private currentNetwork;
    constructor(mnemonic: string);
    static createMnemonic(options?: MnemonicOptions): string;
    connect(chainId: string): Promise<void>;
    disconnect(): Promise<void>;
    getWalletState(): Promise<WalletState>;
    sendTransaction(tx: TransactionRequest): Promise<string>;
    signMessage(message: string): Promise<string>;
    getSupportedNetworks(): NetworkConfig[];
    getCurrentNetwork(): (NetworkConfig & {
        type: "substrate" | "evm";
    }) | null;
    listTokens(): Promise<TokenInfo[]>;
    estimateFee(tx: TransactionRequest): Promise<FeeEstimate>;
    private formatTokenBalance;
}

declare class SubstrateWalletProvider implements WalletProvider {
    private api;
    private keyring;
    private pair;
    private network;
    private mnemonic;
    constructor(network: SubstrateNetworkConfig, mnemonic: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    signMessage(message: string): Promise<string>;
    getBalance(): Promise<string>;
    sendTransaction(tx: PolkadotTransactionRequest): Promise<string>;
    getTokenBalance(tokenAddress: string): Promise<string>;
    listTokens(): Promise<TokenInfo[]>;
    private formatTokenBalance;
    estimateFee(tx: PolkadotTransactionRequest): Promise<FeeEstimate>;
    isConnected(): boolean;
}

declare class EVMWalletProvider implements WalletProvider {
    private provider;
    private signer;
    private network;
    private mnemonic;
    constructor(network: EVMNetworkConfig, mnemonic: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    signMessage(message: string): Promise<string>;
    getBalance(): Promise<string>;
    sendTransaction(tx: TransactionRequest): Promise<string>;
    getTokenBalance(tokenAddress: string): Promise<string>;
    listTokens(): Promise<TokenInfo[]>;
    private formatTokenBalance;
    isConnected(): boolean;
    private isEVMTransaction;
    estimateFee(tx: TransactionRequest): Promise<FeeEstimate>;
}

export { BitrielWalletSDK, type EVMNetworkConfig, type EVMTransactionRequest, EVMWalletProvider, EVM_NETWORKS, type FeeEstimate, GENERIC_ABI, type NetworkConfig, type PolkadotTransactionRequest, type RpcProviderApiKeys, SUBSTRATE_NETWORKS, SUPPORTED_NETWORKS, type SubstrateAccountInfo, type SubstrateApi, type SubstrateExtrinsic, type SubstrateNetworkConfig, type SubstrateTransactionResult, type SubstrateTxModule, SubstrateWalletProvider, type TokenBalance, type TokenConfig, type TokenInfo, type TransactionRequest, type WalletBalances, type WalletProvider, type WalletState, getRpcUrl };
