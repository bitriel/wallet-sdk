"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BitrielWalletSDK: () => BitrielWalletSDK,
  EVMWalletProvider: () => EVMWalletProvider,
  EVM_NETWORKS: () => EVM_NETWORKS,
  GENERIC_ABI: () => GENERIC_ABI,
  SUBSTRATE_NETWORKS: () => SUBSTRATE_NETWORKS,
  SUPPORTED_NETWORKS: () => SUPPORTED_NETWORKS,
  SubstrateWalletProvider: () => SubstrateWalletProvider,
  formatTokenAmount: () => formatTokenAmount,
  formatTokenBalance: () => formatTokenBalance,
  formatTransactionAmount: () => formatTransactionAmount,
  parseTokenBalance: () => parseTokenBalance,
  parseTransactionAmount: () => parseTransactionAmount
});
module.exports = __toCommonJS(index_exports);

// src/data/genericAbi/ERC20.ts
var ERC20_JSON_ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  }
];

// src/data/genericAbi/ERC721.ts
var ERC721_JSON_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  }
];

// src/data/genericAbi/ERC1155.ts
var ERC1155_JSON_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "accounts",
        type: "address[]"
      },
      {
        name: "ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        name: "",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "id",
        type: "uint256"
      },
      {
        name: "amount",
        type: "uint256"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "ids",
        type: "uint256[]"
      },
      {
        name: "amounts",
        type: "uint256[]"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "value",
        type: "string"
      },
      {
        indexed: true,
        name: "id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  }
];

// src/data/genericAbi/index.ts
var GENERIC_ABI = {
  ERC20: ERC20_JSON_ABI,
  ERC721: ERC721_JSON_ABI,
  ERC1155: ERC1155_JSON_ABI
};

// src/config/networks.ts
var SUBSTRATE_NETWORKS = [
  {
    type: "substrate",
    name: "Selendra",
    chainId: "0x0000000000000000000000000000000000000000000000000000000000000003",
    rpcUrl: "wss://rpc.selendra.org",
    explorerUrl: "https://selendra.subscan.io",
    logo: "https://www.selendra.org/logo/sel-logo-blue-notext.png",
    nativeCurrency: {
      name: "Selendra",
      symbol: "SEL",
      decimals: 18,
      logoURI: "https://www.selendra.org/logo/sel-logo-blue-notext.png"
    },
    ss58Format: 42,
    genesisHash: "0x9e17c622381c36351de3ff9dc662282bf89ea2f420a9c55e23ff4fd815d2886a"
    // Replace with actual genesis hash
  }
  // {
  //     type: "substrate",
  //     name: "Polkadot",
  //     chainId:
  //         "0x0000000000000000000000000000000000000000000000000000000000000000",
  //     rpcUrl: "wss://rpc.polkadot.io",
  //     explorerUrl: "https://polkadot.subscan.io",
  //     logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040",
  //     nativeCurrency: {
  //         name: "Polkadot",
  //         symbol: "DOT",
  //         decimals: 10,
  //     },
  //     ss58Format: 0,
  //     genesisHash:
  //         "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
  // },
  // {
  //     type: "substrate",
  //     name: "Kusama",
  //     chainId:
  //         "0x0000000000000000000000000000000000000000000000000000000000000002",
  //     rpcUrl: "wss://kusama-rpc.polkadot.io",
  //     explorerUrl: "https://kusama.subscan.io",
  //     logo: "https://raw.githubusercontent.com/polkadot-js/apps/master/packages/apps/public/kusama_circle.svg",
  //     nativeCurrency: {
  //         name: "Kusama",
  //         symbol: "KSM",
  //         decimals: 12,
  //     },
  //     ss58Format: 2,
  //     genesisHash:
  //         "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
  // },
];
var EVM_NETWORKS = [
  {
    type: "evm",
    name: "Selendra Mainnet",
    chainId: 1961,
    rpcUrl: "https://rpc.selendra.org",
    explorerUrl: "http://explorer.selendra.org/",
    logo: "https://www.selendra.org/logo/sel-logo-blue-notext.png",
    nativeCurrency: {
      name: "Selendra",
      symbol: "SEL",
      decimals: 18,
      logoURI: "https://www.selendra.org/logo/sel-logo-blue-notext.png"
    },
    tokens: [
      {
        address: "0xB2214719304573561Ad8c432b2faFFCd44287190",
        name: "SAM Token",
        symbol: "SAM",
        decimals: 18,
        logoURI: "https://selendra.org/tokens/sam.png"
      }
    ]
  },
  {
    type: "evm",
    name: "Ethereum Mainnet",
    chainId: 1,
    rpcUrl: "https://eth.public-rpc.com",
    explorerUrl: "https://etherscan.io",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      logoURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040"
    },
    tokens: [
      {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logoURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040"
      },
      {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=040"
      }
    ]
  },
  {
    type: "evm",
    name: "Polygon Mainnet",
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com",
    explorerUrl: "https://polygonscan.com",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=040",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
      logoURI: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=040"
    },
    tokens: [
      {
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        logoURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040"
      },
      {
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=040"
      }
    ]
  }
];
var SUPPORTED_NETWORKS = [...SUBSTRATE_NETWORKS, ...EVM_NETWORKS];

// src/wallet/substrate.ts
var import_api = require("@polkadot/api");
var import_keyring = require("@polkadot/keyring");

// src/utils/tokenFormatters.ts
var DEFAULT_FORMAT_OPTIONS = {
  precision: 5,
  useThousandSeparator: true,
  thousandSeparator: ",",
  trimTrailingZeros: true
};
function formatTokenBalance(balance, decimals, options = {}) {
  const {
    precision,
    useThousandSeparator,
    thousandSeparator,
    trimTrailingZeros
  } = { ...DEFAULT_FORMAT_OPTIONS, ...options };
  try {
    const balanceBigInt = BigInt(balance);
    const divisor = BigInt(10) ** BigInt(decimals);
    let wholePart = (balanceBigInt / divisor).toString();
    let fractionalPart = (balanceBigInt % divisor).toString().padStart(decimals, "0");
    if (useThousandSeparator) {
      wholePart = wholePart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandSeparator || ","
      );
    }
    if (precision !== void 0 && precision >= 0) {
      fractionalPart = fractionalPart.slice(0, precision);
    }
    if (trimTrailingZeros) {
      fractionalPart = fractionalPart.replace(/0+$/, "");
    }
    return fractionalPart ? `${wholePart}.${fractionalPart}` : wholePart;
  } catch (error) {
    console.warn("Failed to format token balance:", error);
    return balance;
  }
}
function parseTokenBalance(formattedBalance, decimals) {
  try {
    const cleanedBalance = formattedBalance.replace(/,/g, "");
    const [wholePart, fractionalPart = ""] = cleanedBalance.split(/[.,]/);
    const paddedFractional = fractionalPart.padEnd(decimals, "0");
    const finalFractional = paddedFractional.slice(0, decimals);
    return wholePart + finalFractional;
  } catch (error) {
    console.warn("Failed to parse token balance:", error);
    return formattedBalance;
  }
}
function formatTokenAmount(amount, decimals, symbol, options = {}) {
  const formattedAmount = formatTokenBalance(amount, decimals, options);
  return `${formattedAmount} ${symbol}`;
}

// src/wallet/substrate.ts
var SubstrateWalletProvider = class {
  api = null;
  keyring = null;
  pair = null;
  network;
  mnemonic;
  constructor(network, mnemonic) {
    this.network = network;
    this.mnemonic = mnemonic;
  }
  async connect() {
    try {
      const provider = new import_api.WsProvider(this.network.rpcUrl);
      const api = await import_api.ApiPromise.create({
        provider,
        types: {
          // Add any custom types needed for Selendra
          // This is where you would add Selendra-specific types
        }
      });
      this.api = api;
      this.keyring = new import_keyring.Keyring({
        type: "sr25519",
        ss58Format: this.network.ss58Format || 42
        // Default to 42 for Selendra
      });
      this.pair = this.keyring.addFromMnemonic(this.mnemonic);
    } catch (error) {
      throw new Error(`Failed to connect to Substrate network: ${error}`);
    }
  }
  async disconnect() {
    if (this.api) {
      await this.api.disconnect();
      this.api = null;
    }
    this.keyring = null;
    this.pair = null;
  }
  async getAddress() {
    if (!this.pair) {
      throw new Error("Wallet not connected");
    }
    return this.pair.address;
  }
  async signMessage(message) {
    if (!this.pair) {
      throw new Error("Wallet not connected");
    }
    const signature = this.pair.sign(message);
    return Buffer.from(signature).toString("hex");
  }
  async getBalance() {
    if (!this.api || !this.pair) {
      throw new Error("Wallet not connected");
    }
    const accountInfo = await this.api.query.system.account(
      this.pair.address
    );
    return accountInfo.data.free.toString();
  }
  async sendTransaction(tx) {
    if (!this.api || !this.pair) {
      throw new Error("Wallet not connected");
    }
    const { method, params } = tx;
    let extrinsic;
    if (this.network.name === "Selendra") {
      if (method === "balances") {
        const [action, recipient, amount] = params;
        if (action === "transfer") {
          extrinsic = this.api.tx.balances.transferAllowDeath(
            recipient,
            amount
          );
        } else {
          throw new Error(`Unsupported balances action: ${action}`);
        }
      } else {
        throw new Error(
          `Unsupported transaction method for Selendra: ${method}`
        );
      }
    } else {
      const txModule = this.api.tx[method];
      if (!txModule) {
        throw new Error(`Transaction method ${method} not found`);
      }
      const txMethod = txModule[params[0]];
      if (!txMethod) {
        throw new Error(
          `Transaction method ${params[0]} not found in module ${method}`
        );
      }
      extrinsic = txMethod(...params.slice(1));
    }
    return new Promise((resolve, reject) => {
      extrinsic.signAndSend(
        this.pair,
        (result) => {
          if (result.isFinalized) {
            resolve(result.txHash.toString());
          }
        }
      ).catch(reject);
    });
  }
  async getTokenBalance(tokenAddress) {
    if (!this.api || !this.pair) {
      throw new Error("Wallet not connected");
    }
    if (this.network.name === "Selendra") {
      throw new Error(
        "Token balance not supported for this implementation"
      );
    } else {
      throw new Error(
        "Token balance not supported for this implementation"
      );
    }
  }
  async listTokens() {
    if (!this.api || !this.pair) {
      throw new Error("Wallet not connected");
    }
    const tokens = [];
    const nativeBalance = await this.getBalance();
    tokens.push({
      address: "0x0000000000000000000000000000000000000000",
      // Placeholder for native token
      name: this.network.nativeCurrency.name,
      symbol: this.network.nativeCurrency.symbol,
      decimals: this.network.nativeCurrency.decimals,
      balance: nativeBalance,
      formatted: this.formatTokenBalance(
        nativeBalance,
        this.network.nativeCurrency.decimals
      )
    });
    if (this.network.tokens) {
      for (const token of this.network.tokens) {
        try {
          tokens.push({
            ...token,
            balance: "0",
            formatted: "0.0"
          });
        } catch (error) {
          console.warn(
            `Failed to get balance for token ${token.symbol}:`,
            error
          );
          tokens.push({
            ...token,
            balance: "0",
            formatted: "0.0"
          });
        }
      }
    }
    return tokens;
  }
  formatTokenBalance(balance, decimals, precision = 5) {
    return formatTokenBalance(balance, decimals, { precision });
  }
  async estimateFee(tx) {
    if (!this.api || !this.pair) {
      throw new Error("Wallet not connected");
    }
    try {
      const { method, params } = tx;
      let extrinsic;
      if (this.network.name === "Selendra") {
        if (method === "balances") {
          const [action, recipient, amount] = params;
          if (action === "transfer") {
            extrinsic = this.api.tx.balances.transferAllowDeath(
              recipient,
              amount
            );
          } else {
            throw new Error(
              `Unsupported balances action: ${action}`
            );
          }
        } else {
          throw new Error(
            `Unsupported transaction method for Selendra: ${method}`
          );
        }
      } else {
        const txModule = this.api.tx[method];
        if (!txModule) {
          throw new Error(`Transaction method ${method} not found`);
        }
        const txMethod = txModule[params[0]];
        if (!txMethod) {
          throw new Error(
            `Transaction method ${params[0]} not found in module ${method}`
          );
        }
        extrinsic = txMethod(...params.slice(1));
      }
      const paymentInfo = await extrinsic.paymentInfo(this.pair);
      const fee = paymentInfo.partialFee.toString();
      const formatted = this.formatTokenBalance(
        fee,
        this.network.nativeCurrency.decimals
      );
      return {
        fee,
        formatted,
        currency: this.network.nativeCurrency.symbol
      };
    } catch (error) {
      console.error("Failed to estimate fee:", error);
      throw new Error(`Failed to estimate fee: ${error}`);
    }
  }
  isConnected() {
    return this.api !== null && this.pair !== null;
  }
};

// src/wallet/evm.ts
var import_ethers = require("ethers");
var EVMWalletProvider = class {
  provider = null;
  signer = null;
  network;
  mnemonic;
  constructor(network, mnemonic) {
    this.network = network;
    this.mnemonic = mnemonic;
  }
  async connect() {
    try {
      this.provider = new import_ethers.ethers.JsonRpcProvider(
        this.network.rpcUrl
      );
      this.signer = import_ethers.ethers.Wallet.fromPhrase(
        this.mnemonic,
        this.provider
      );
    } catch (error) {
      throw new Error(`Failed to connect to EVM network: ${error}`);
    }
  }
  async disconnect() {
    this.provider = null;
    this.signer = null;
  }
  async getAddress() {
    if (!this.signer) {
      throw new Error("Wallet not connected");
    }
    return await this.signer.getAddress();
  }
  async signMessage(message) {
    if (!this.signer) {
      throw new Error("Wallet not connected");
    }
    return await this.signer.signMessage(message);
  }
  async getBalance() {
    if (!this.provider || !this.signer) {
      throw new Error("Wallet not connected");
    }
    const address = await this.signer.getAddress();
    const balance = await this.provider.getBalance(address);
    return balance.toString();
  }
  async sendTransaction(tx) {
    if (!this.signer) {
      throw new Error("Wallet not connected");
    }
    if (!this.isEVMTransaction(tx)) {
      throw new Error("Invalid transaction type for EVM network");
    }
    const transaction = await this.signer.sendTransaction(tx);
    return transaction.hash;
  }
  async getTokenBalance(tokenAddress) {
    if (!this.provider || !this.signer) {
      throw new Error("Wallet not connected");
    }
    const address = await this.signer.getAddress();
    if (tokenAddress.toLowerCase() === "0x0000000000000000000000000000000000000000") {
      const balance = await this.provider.getBalance(address);
      return balance.toString();
    }
    try {
      console.log(
        `Checking contract at address ${tokenAddress} on network ${this.network.name} (chainId: ${this.network.chainId})`
      );
      const code = await this.provider.getCode(tokenAddress);
      console.log(`Contract code length: ${code.length}`);
      if (code === "0x") {
        console.warn(
          `No contract found at address ${tokenAddress} on network ${this.network.name}`
        );
        return "0";
      }
      const tokenContract = new import_ethers.ethers.Contract(
        tokenAddress,
        [
          "function balanceOf(address) view returns (uint256)",
          "function decimals() view returns (uint8)",
          "function symbol() view returns (string)"
        ],
        this.provider
      );
      try {
        const symbol = await tokenContract.symbol();
        const decimals = await tokenContract.decimals();
        console.log(
          `Contract implements ERC20 interface. Symbol: ${symbol}, Decimals: ${decimals}`
        );
      } catch (error) {
        console.warn(
          `Contract at ${tokenAddress} does not implement ERC20 interface: ${error}`
        );
        return "0";
      }
      const balance = await tokenContract.balanceOf(address);
      return balance.toString();
    } catch (error) {
      console.warn(
        `Failed to get balance for token ${tokenAddress}:`,
        error
      );
      return "0";
    }
  }
  async listTokens() {
    if (!this.provider || !this.signer) {
      throw new Error("Wallet not connected");
    }
    const address = await this.signer.getAddress();
    const tokens = [];
    const nativeBalance = await this.provider.getBalance(address);
    tokens.push({
      address: "0x0000000000000000000000000000000000000000",
      name: this.network.nativeCurrency.name,
      symbol: this.network.nativeCurrency.symbol,
      decimals: this.network.nativeCurrency.decimals,
      balance: nativeBalance.toString(),
      formatted: this.formatTokenBalance(
        nativeBalance.toString(),
        this.network.nativeCurrency.decimals
      )
    });
    if (this.network.tokens) {
      for (const token of this.network.tokens) {
        try {
          console.log(
            `Checking token contract at address ${token.address} on network ${this.network.name} (chainId: ${this.network.chainId})`
          );
          const code = await this.provider.getCode(token.address);
          console.log(`Token contract code length: ${code.length}`);
          if (code === "0x") {
            console.warn(
              `No contract found at address ${token.address} on network ${this.network.name}`
            );
            tokens.push({
              ...token,
              balance: "0",
              formatted: "0.0"
            });
            continue;
          }
          const tokenContract = new import_ethers.ethers.Contract(
            token.address,
            [
              "function balanceOf(address) view returns (uint256)",
              "function decimals() view returns (uint8)",
              "function symbol() view returns (string)"
            ],
            this.provider
          );
          try {
            const symbol = await tokenContract.symbol();
            const decimals = await tokenContract.decimals();
            console.log(
              `Token contract implements ERC20 interface. Symbol: ${symbol}, Decimals: ${decimals}`
            );
          } catch (error) {
            console.warn(
              `Contract at ${token.address} does not implement ERC20 interface: ${error}`
            );
            tokens.push({
              ...token,
              balance: "0",
              formatted: "0.0"
            });
            continue;
          }
          const balance = await tokenContract.balanceOf(address);
          tokens.push({
            ...token,
            balance: balance.toString(),
            formatted: this.formatTokenBalance(
              balance.toString(),
              token.decimals
            )
          });
        } catch (error) {
          console.warn(
            `Failed to get balance for token ${token.symbol}:`,
            error
          );
          tokens.push({
            ...token,
            balance: "0",
            formatted: "0.0"
          });
        }
      }
    }
    return tokens;
  }
  formatTokenBalance(balance, decimals, precision = 5) {
    return formatTokenBalance(balance, decimals, { precision });
  }
  isConnected() {
    return this.provider !== null && this.signer !== null;
  }
  isEVMTransaction(tx) {
    return "to" in tx && "value" in tx && typeof tx.value === "string";
  }
  async estimateFee(tx) {
    if (!this.provider || !this.signer) {
      throw new Error("Wallet not connected");
    }
    if (!this.isEVMTransaction(tx)) {
      throw new Error("Invalid transaction type for EVM network");
    }
    try {
      const gasPrice = await this.provider.getFeeData();
      if (!gasPrice.gasPrice) {
        throw new Error("Failed to get gas price");
      }
      const gasLimit = await this.provider.estimateGas({
        from: await this.signer.getAddress(),
        ...tx
      });
      const fee = gasLimit * gasPrice.gasPrice;
      const formatted = this.formatTokenBalance(
        fee.toString(),
        this.network.nativeCurrency.decimals
      );
      return {
        fee: fee.toString(),
        formatted,
        currency: this.network.nativeCurrency.symbol
      };
    } catch (error) {
      console.error("Failed to estimate fee:", error);
      throw new Error(`Failed to estimate fee: ${error}`);
    }
  }
};

// src/utils/mnemonic.ts
var import_util_crypto = require("@polkadot/util-crypto");
function generateMnemonic(options = {}) {
  const {
    wordCount = 12,
    strength = 128
    // 12 words = 128 bits of entropy
  } = options;
  if (![12, 15, 18, 21, 24].includes(wordCount)) {
    throw new Error("Invalid word count. Must be 12, 15, 18, 21, or 24");
  }
  if (![128, 160, 192, 224, 256].includes(strength)) {
    throw new Error("Invalid strength. Must be 128, 160, 192, 224, or 256");
  }
  const expectedStrength = wordCount / 3 * 32;
  if (strength !== expectedStrength) {
    throw new Error(
      `Strength ${strength} does not match word count ${wordCount}. Expected strength: ${expectedStrength}`
    );
  }
  return (0, import_util_crypto.mnemonicGenerate)(wordCount);
}

// src/sdk.ts
var BitrielWalletSDK = class {
  providers = /* @__PURE__ */ new Map();
  currentNetwork = null;
  constructor(mnemonic) {
    [...SUPPORTED_NETWORKS].forEach((network) => {
      const provider = network.type === "substrate" ? new SubstrateWalletProvider(network, mnemonic) : new EVMWalletProvider(network, mnemonic);
      this.providers.set(network.chainId.toString(), provider);
    });
  }
  static createMnemonic(options = {}) {
    return generateMnemonic(options);
  }
  async connect(chainId) {
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
    this.currentNetwork = network;
  }
  async disconnect() {
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
  async getWalletState() {
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
    const tokenBalances = [];
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
          formatted
        });
      }
    }
    return {
      address,
      balances: {
        native: nativeBalance,
        tokens: tokenBalances
      },
      network: this.currentNetwork
    };
  }
  async sendTransaction(tx) {
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
  async signMessage(message) {
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
  getSupportedNetworks() {
    return [...SUPPORTED_NETWORKS];
  }
  getCurrentNetwork() {
    return this.currentNetwork;
  }
  async listTokens() {
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
  async estimateFee(tx) {
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
  formatTokenBalance(balance, decimals, options) {
    return formatTokenBalance(balance, decimals, options);
  }
  /**
   * Format a token amount with its symbol
   * @param amount - The token amount as a string
   * @param decimals - The number of decimals for the token
   * @param symbol - The token symbol
   * @param options - Formatting options
   */
  formatTokenAmount(amount, decimals, symbol, options) {
    return formatTokenAmount(amount, decimals, symbol, options);
  }
  /**
   * Parse a formatted token balance back to its raw form
   * @param formattedBalance - The formatted balance string
   * @param decimals - The number of decimals for the token
   */
  parseTokenBalance(formattedBalance, decimals) {
    return parseTokenBalance(formattedBalance, decimals);
  }
};

// src/utils/amount.ts
var import_util = require("@polkadot/util");
var import_ethers2 = require("ethers");
function parseTransactionAmount(amount, chainType, decimals = 18) {
  if (amount === null || amount === void 0) {
    throw new Error("Amount cannot be null or undefined");
  }
  if (chainType === "evm") {
    return import_ethers2.ethers.parseEther(amount.toString()).toString();
  } else {
    return new import_util.BN(amount.toString()).mul(new import_util.BN(10).pow(new import_util.BN(decimals))).toString();
  }
}
function formatTransactionAmount(amount, chainType, decimals = 18) {
  if (chainType === "evm") {
    return import_ethers2.ethers.formatEther(amount);
  } else {
    const bn = new import_util.BN(amount);
    const divisor = new import_util.BN(10).pow(new import_util.BN(decimals));
    const whole = bn.div(divisor).toString();
    const fraction = bn.mod(divisor).toString().padStart(decimals, "0");
    return `${whole}.${fraction}`;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BitrielWalletSDK,
  EVMWalletProvider,
  EVM_NETWORKS,
  GENERIC_ABI,
  SUBSTRATE_NETWORKS,
  SUPPORTED_NETWORKS,
  SubstrateWalletProvider,
  formatTokenAmount,
  formatTokenBalance,
  formatTransactionAmount,
  parseTokenBalance,
  parseTransactionAmount
});
