import { ChainProperties } from "@polkadot/types/interfaces";

export interface NetworkConfig {
    name: string;
    chainId: string | number;
    rpcUrl: string;
    explorerUrl: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    tokens?: TokenConfig[];
}

export interface TokenConfig {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
}

export interface SubstrateNetworkConfig extends NetworkConfig {
    type: "substrate";
    properties?: ChainProperties;
    // Additional Substrate-specific configurations
    ss58Format?: number;
    genesisHash?: string;
}

export interface EVMNetworkConfig extends NetworkConfig {
    type: "evm";
}

export const SUBSTRATE_NETWORKS: SubstrateNetworkConfig[] = [
    {
        type: "substrate",
        name: "Polkadot",
        chainId:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
        rpcUrl: "wss://rpc.polkadot.io",
        explorerUrl: "https://polkadot.subscan.io",
        nativeCurrency: {
            name: "Polkadot",
            symbol: "DOT",
            decimals: 10,
        },
        ss58Format: 0,
        genesisHash:
            "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
    },
    {
        type: "substrate",
        name: "Kusama",
        chainId:
            "0x0000000000000000000000000000000000000000000000000000000000000002",
        rpcUrl: "wss://kusama-rpc.polkadot.io",
        explorerUrl: "https://kusama.subscan.io",
        nativeCurrency: {
            name: "Kusama",
            symbol: "KSM",
            decimals: 12,
        },
        ss58Format: 2,
        genesisHash:
            "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
    },
    {
        type: "substrate",
        name: "Selendra",
        chainId:
            "0x0000000000000000000000000000000000000000000000000000000000000003",
        rpcUrl: "wss://rpc.selendra.org",
        explorerUrl: "https://selendra.subscan.io",
        nativeCurrency: {
            name: "Selendra",
            symbol: "SEL",
            decimals: 18,
        },
        ss58Format: 42,
        genesisHash:
            "0x0000000000000000000000000000000000000000000000000000000000000003", // Replace with actual genesis hash
    },
];

export const EVM_NETWORKS: EVMNetworkConfig[] = [
    {
        type: "evm",
        name: "Selendra Mainnet",
        chainId: 1961,
        rpcUrl: "https://rpc.selendra.org",
        explorerUrl: "http://explorer.selendra.org/",
        nativeCurrency: {
            name: "Selendra",
            symbol: "SEL",
            decimals: 18,
        },
        tokens: [
            {
                address: "0xB2214719304573561Ad8c432b2faFFCd44287190", // Updated SAM token address
                name: "SAM Token",
                symbol: "SAM",
                decimals: 18,
                logoURI: "https://selendra.org/tokens/sam.png", // Optional: Add logo URL
            },
            // Add other known tokens here
        ],
    },
    // {
    //     type: "evm",
    //     name: "Ethereum Mainnet",
    //     chainId: 1,
    //     rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/YOUR-API-KEY",
    //     explorerUrl: "https://etherscan.io",
    //     nativeCurrency: {
    //         name: "Ethereum",
    //         symbol: "ETH",
    //         decimals: 18,
    //     },
    //     tokens: [
    //         {
    //             address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
    //             name: "Tether USD",
    //             symbol: "USDT",
    //             decimals: 6,
    //         },
    //         {
    //             address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    //             name: "USD Coin",
    //             symbol: "USDC",
    //             decimals: 6,
    //         },
    //     ],
    // },
    // {
    //     type: "evm",
    //     name: "Polygon Mainnet",
    //     chainId: 137,
    //     rpcUrl: "https://polygon-rpc.com",
    //     explorerUrl: "https://polygonscan.com",
    //     nativeCurrency: {
    //         name: "MATIC",
    //         symbol: "MATIC",
    //         decimals: 18,
    //     },
    //     tokens: [
    //         {
    //             address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT
    //             name: "Tether USD",
    //             symbol: "USDT",
    //             decimals: 6,
    //         },
    //     ],
    // },
];

export const SUPPORTED_NETWORKS = [...SUBSTRATE_NETWORKS, ...EVM_NETWORKS];
