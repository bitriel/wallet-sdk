# Multi-Chain Wallet SDK

A TypeScript SDK for interacting with both Polkadot and Ethereum EVM chains, providing a unified interface for wallet operations, token management, and transaction handling.

## Features

-   Support for both Polkadot and Ethereum EVM chains
-   Unified interface for wallet operations
-   Token management for ERC-20 tokens
-   Account management and transaction signing
-   Balance queries for native and token balances
-   Easy network and chain configuration

## Installation

```bash
npm install bitriel-wallet-sdk
# or
yarn add bitriel-wallet-sdk
# or
pnpm add bitriel-wallet-sdk
```

## Usage

```typescript
import { MultiChainWalletSDK } from "bitriel-wallet-sdk";

// Initialize the SDK
const sdk = new MultiChainWalletSDK();

// Get supported networks
const networks = sdk.getSupportedNetworks();

// Connect to a network (e.g., Ethereum Mainnet)
await sdk.connect("1");

// Get wallet state (address, balances, etc.)
const walletState = await sdk.getWalletState();

// Send a transaction
const txHash = await sdk.sendTransaction({
    to: "0x...",
    value: "1000000000000000000", // 1 ETH
});

// Sign a message
const signature = await sdk.signMessage("Hello, World!");

// Disconnect
await sdk.disconnect();
```

## Supported Networks

### Polkadot Ecosystem

-   Polkadot Mainnet
-   Kusama

### Ethereum EVM Ecosystem

-   Ethereum Mainnet
-   Polygon Mainnet

## Token Support

The SDK supports both native tokens and ERC-20 tokens on EVM chains. For Polkadot chains, token support is implemented through the respective chain's token pallet.

## API Reference

### MultiChainWalletSDK

#### Constructor

```typescript
new MultiChainWalletSDK();
```

#### Methods

-   `connect(networkId: string): Promise<void>`

    -   Connects to the specified network
    -   Throws an error if the network is not supported

-   `disconnect(): Promise<void>`

    -   Disconnects from the current network

-   `getWalletState(): Promise<WalletState>`

    -   Returns the current wallet state including address, balances, and network

-   `sendTransaction(tx: TransactionRequest): Promise<string>`

    -   Sends a transaction and returns the transaction hash
    -   Transaction format depends on the network type (EVM or Polkadot)

-   `signMessage(message: string): Promise<string>`

    -   Signs a message and returns the signature

-   `getSupportedNetworks(): NetworkConfig[]`

    -   Returns a list of supported networks

-   `getCurrentNetwork(): NetworkConfig | null`
    -   Returns the currently connected network

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
