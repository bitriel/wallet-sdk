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
var src_exports = {};
__export(src_exports, {
  GENERIC_ABI: () => GENERIC_ABI,
  SEL: () => SEL,
  Wallet: () => Wallet,
  WalletSDK: () => WalletSDK,
  chainList: () => chainList,
  chains: () => chains,
  createMnemonic: () => createMnemonic,
  createMnemonicSelendra: () => createMnemonicSelendra,
  initSelendra: () => initSelendra,
  prettyBalance: () => prettyBalance,
  selendraTransaction: () => selendraTransaction,
  shortenEthAddress: () => shortenEthAddress
});
module.exports = __toCommonJS(src_exports);

// src/amount.ts
var import_ethers = require("ethers");
var SEL = (amount) => {
  return (0, import_ethers.parseUnits)(amount.toString(), "ether");
};
var prettyBalance = (amount) => {
  return parseFloat((0, import_ethers.formatUnits)(amount, 18)).toFixed(4);
};

// src/chains/index.ts
var chains = {
  "selendra-mainnet": "https://rpc.selendra.org",
  "selendra-testnet": "https://rpc-testnet.selendra.org"
};

// src/data/chains.ts
var chainList = [
  {
    name: "Selendra Mainnet",
    url: "https://rpc.selendra.org",
    logo: "https://www.selendra.org/logo/sel-logo-blue-notext.png",
    symbol: "SEL"
  },
  {
    name: "Selendra Testnet",
    url: "https://rpc-testnet.selendra.org",
    logo: "https://www.selendra.org/logo/sel-logo-blue-notext.png",
    symbol: "tSEL"
  },
  {
    name: "Ethereum Mainnet",
    url: "https://cloudflare-eth.com",
    logo: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
    symbol: "ETH"
  }
];

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

// src/sdk.ts
var import_ethers4 = require("ethers");

// src/wallet/wallet.ts
var import_ethers2 = require("ethers");
var createMnemonic = () => {
  return import_ethers2.Mnemonic.entropyToPhrase((0, import_ethers2.randomBytes)(32));
};
var Wallet = (mnemonic) => {
  return import_ethers2.ethers.Wallet.fromPhrase(mnemonic);
};

// src/tokens/native.ts
var transfer = (wallet, provider) => {
  return {
    transfer: async (to, amount) => {
      const _wallet = wallet.connect(provider);
      const tx = await _wallet.sendTransaction({
        to,
        value: amount
      });
      const receipt = await tx.wait();
      return receipt;
    }
  };
};
var balance = (wallet, provider) => {
  return {
    balance: async () => {
      return await provider.getBalance(wallet.address);
    }
  };
};
var balanceOf = (provider) => {
  return {
    balanceOf: async (address) => {
      return await provider.getBalance(address);
    }
  };
};
var NativeToken = (wallet, provider) => {
  return {
    ...transfer(wallet, provider),
    ...balanceOf(provider),
    ...balance(wallet, provider)
  };
};

// src/tokens/contract.ts
var import_ethers3 = require("ethers");
var CONTRACT = (wallet, provider, address, symbol, abi) => {
  const _wallet = wallet.connect(provider);
  const contract = new import_ethers3.Contract(address, abi, _wallet);
  return contract;
};

// src/sdk.ts
var WalletSDK = (mnemonic, chain, contracts = []) => {
  const provider = new import_ethers4.ethers.JsonRpcProvider(chain);
  const wallet = Wallet(mnemonic);
  return {
    provider,
    wallet,
    contracts: new Map(
      contracts.map((token) => [
        token.symbol,
        CONTRACT(wallet, provider, token.address, token.symbol, token.abi)
      ])
    ),
    ...NativeToken(wallet, provider)
  };
};

// src/wallet/selendra.ts
var import_util_crypto2 = require("@polkadot/util-crypto");
var import_util2 = require("@polkadot/util");
var import_keyring = require("@polkadot/keyring");

// src/helper/selendraHelper.ts
var import_api_augment = require("@polkadot/api-augment");
var import_api = require("@polkadot/api");
var import_util_crypto = require("@polkadot/util-crypto");
var import_util = require("@polkadot/util");
async function connectToSelendra(rpc_endpoint) {
  const wsProvider = new import_api.WsProvider(rpc_endpoint);
  const api = new import_api.ApiPromise({ provider: wsProvider });
  await api.isReady;
  return api;
}
function createKeyPair(mnemonic) {
  const keyring = new import_api.Keyring({
    type: "sr25519",
    ss58Format: 42
    // Changed from 204 to 42
  });
  const pair = keyring.createFromUri(mnemonic);
  const miniSecret = (0, import_util_crypto.mnemonicToMiniSecret)(mnemonic);
  return { pair, miniSecret };
}
async function fetchBalance(api, address) {
  const accountInfo = await api.query.system.account(
    address
  );
  return accountInfo.data.free;
}
function parseAmount(amount, decimals = 18) {
  return new import_util.BN(amount).mul(new import_util.BN(10).pow(new import_util.BN(decimals)));
}
function handleTransactionError(api, dispatchError, reject) {
  if (dispatchError.isModule) {
    const decoded = api.registry.findMetaError(dispatchError.asModule);
    const { docs, name, section } = decoded;
    reject(new Error(`${section}.${name}: ${docs.join(" ")}`));
  } else {
    reject(new Error(dispatchError.toString()));
  }
}

// src/wallet/selendra.ts
var createMnemonicSelendra = () => {
  try {
    return (0, import_util_crypto2.mnemonicGenerate)();
  } catch (error) {
    console.error("Error creating mnemonic", error);
    throw error;
  }
};
async function initSelendra({
  rpc_endpoint,
  mnemonic
}) {
  try {
    await (0, import_util_crypto2.cryptoWaitReady)();
    const api = await connectToSelendra(rpc_endpoint);
    const { pair, miniSecret } = createKeyPair(mnemonic);
    const address = (0, import_util_crypto2.encodeAddress)(pair.publicKey, 42);
    const balance2 = await fetchBalance(api, address);
    import_util2.formatBalance.setDefaults({ unit: "SEL" });
    const balanceSEL = (0, import_util2.formatBalance)(balance2, {
      decimals: 18,
      forceUnit: "-"
    });
    const privateKeyHex = (0, import_util2.u8aToHex)(miniSecret);
    return {
      address,
      balanceSEL,
      privateKeyHex
    };
  } catch (error) {
    console.error("Error initializing Selendra wallet:", error);
    throw error;
  }
}
async function selendraTransaction({
  rpc_endpoint,
  privateKey,
  recipientAddress,
  amount
}) {
  try {
    await (0, import_util_crypto2.cryptoWaitReady)();
    const api = await connectToSelendra(rpc_endpoint);
    const keyring = new import_keyring.Keyring({ type: "sr25519" });
    const sender = keyring.addFromUri(privateKey);
    const parsedAmount = parseAmount(amount);
    const transfer2 = api.tx.balances.transferKeepAlive(
      recipientAddress,
      parsedAmount
    );
    return new Promise((resolve, reject) => {
      transfer2.signAndSend(
        sender,
        { nonce: -1 },
        // Allow automatic nonce handling
        ({ status, dispatchError }) => {
          if (dispatchError) {
            return handleTransactionError(
              api,
              dispatchError,
              reject
            );
          }
          if (status.isInBlock) {
            console.log(
              `Transaction included in block: ${status.asInBlock}`
            );
            resolve(status.asInBlock.toString());
          } else if (status.isFinalized) {
            console.log(
              `Transaction finalized in block: ${status.asFinalized}`
            );
            resolve(status.asFinalized.toString());
          }
        }
      );
    });
  } catch (error) {
    console.error("Error sending Selendra transaction:", error);
    throw error;
  }
}

// src/address.ts
function shortenEthAddress(address) {
  if (address.length !== 42) {
    throw new Error("Invalid Ethereum address length");
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GENERIC_ABI,
  SEL,
  Wallet,
  WalletSDK,
  chainList,
  chains,
  createMnemonic,
  createMnemonicSelendra,
  initSelendra,
  prettyBalance,
  selendraTransaction,
  shortenEthAddress
});
