import * as ethers from 'ethers';
import { BigNumberish, ethers as ethers$1, AddressLike, Contract } from 'ethers';

declare const SEL: (amount: number) => bigint;
declare const prettyBalance: (amount: BigNumberish) => string;

declare const chains: Record<string, string>;

declare const chainList: {
    name: string;
    url: string;
    logo: string;
    symbol: string;
}[];

declare const GENERIC_ABI: {
    ERC20: ethers.InterfaceAbi;
    ERC721: ethers.InterfaceAbi;
    ERC1155: ethers.InterfaceAbi;
};

type ContractInfo = {
    abi: ethers$1.Interface | ethers$1.InterfaceAbi;
    address: string;
    decimal?: number;
    name: string;
    symbol: string;
    type: string;
    chain: string;
};
declare const WalletSDK: (mnemonic: string, chain: string, contracts?: ContractInfo[]) => {
    balance: () => Promise<bigint>;
    balanceOf: (address: AddressLike) => Promise<bigint>;
    transfer: (to: AddressLike, amount: ethers$1.BigNumberish) => Promise<ethers$1.TransactionReceipt | null>;
    provider: ethers$1.JsonRpcProvider;
    wallet: ethers$1.HDNodeWallet;
    contracts: Map<string, Contract>;
};

declare const createMnemonic: () => string;
declare const Wallet: (mnemonic: string) => ethers$1.HDNodeWallet;

declare function shortenEthAddress(address: string): string;

export { type ContractInfo, GENERIC_ABI, SEL, Wallet, WalletSDK, chainList, chains, createMnemonic, prettyBalance, shortenEthAddress };
