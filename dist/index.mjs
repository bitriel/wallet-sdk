// src/amount.ts
import { formatUnits, parseUnits } from "ethers";
var SEL = (amount) => {
  return parseUnits(amount.toString(), "ether");
};
var prettyBalance = (amount) => {
  return parseFloat(formatUnits(amount, 18)).toFixed(4);
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
import { ethers as ethers2 } from "ethers";

// src/wallet/wallet.ts
import { Mnemonic, ethers, randomBytes } from "ethers";
var createMnemonic = () => {
  return Mnemonic.entropyToPhrase(randomBytes(32));
};
var Wallet = (mnemonic) => {
  return ethers.Wallet.fromPhrase(mnemonic);
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
import {
  Contract
} from "ethers";
var CONTRACT = (wallet, provider, address, symbol, abi) => {
  const _wallet = wallet.connect(provider);
  const contract = new Contract(address, abi, _wallet);
  return contract;
};

// src/sdk.ts
var WalletSDK = (mnemonic, chain, contracts = []) => {
  const provider = new ethers2.JsonRpcProvider(chain);
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

// src/address.ts
function shortenEthAddress(address) {
  if (address.length !== 42) {
    throw new Error("Invalid Ethereum address length");
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
export {
  GENERIC_ABI,
  SEL,
  Wallet,
  WalletSDK,
  chainList,
  chains,
  createMnemonic,
  prettyBalance,
  shortenEthAddress
};
