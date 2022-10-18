import { keccak256 } from "@ethersproject/keccak256";
import { toUtf8Bytes } from "@ethersproject/strings";

import ERC20Abi from "contracts/abi/ERC20.json";

export const ERC20Address = process.env.NEXT_PUBLIC_ERC20PDN;
export const MultiSigAddress = process.env.NEXT_PUBLIC_MULTI_SIG_ADDRESS;

export const SMART_CONTRACT_FUNCTIONS_NAMES = {
  TOTAL_SUPPLY: "totalSupply",
  RATIO: "ratio",
  GET_REWARDS: "getAmountRewarding",
  GET_BALANCE: "balanceOf",
  BURN: "burnAndReceiveNFT",
  TRANSFER: "transfer",
} as const;

export type SmartContractFunctionName =
  typeof SMART_CONTRACT_FUNCTIONS_NAMES[keyof typeof SMART_CONTRACT_FUNCTIONS_NAMES];

export const getBasicContractConfig = (
  functionName: SmartContractFunctionName
) => {
  return {
    addressOrName: ERC20Address as string,
    contractInterface: ERC20Abi,
    functionName,
  };
};

// =============================================== MORALIS 👇🏻 TO BE REMOVED
interface ExecuteFunctionOptions {
  contractAddress: string;
  abi: object;
  functionName: string;
  msgValue?: string;
  params?: Record<string, any>;
}

const getTopicHash = (string: string) => keccak256(toUtf8Bytes(string));

export const ERC20Options = (
  address: string | null,
  functionName: SmartContractFunctionName,
  args?: any
): ExecuteFunctionOptions => {
  const params = { ...args, _address: address };
  return {
    // chain: process.env.NEXT_PUBLIC_CHAIN,
    contractAddress: ERC20Address ?? "",
    functionName: functionName,
    abi: ERC20Abi,
    params,
  };
};

export const ERC20OptionsEventsOptions = (name: string) => {
  const abi = ERC20Abi.filter((abi) => abi.name === name)[0];
  const inputs = abi.inputs.map((a) => a.internalType).join(",");
  const topic = getTopicHash(`${name}(${inputs})`);
  return {
    chain: process.env.NEXT_PUBLIC_CHAIN,
    address: ERC20Address,
    abi,
    topic,
    limit: "3",
  };
};

export const ERC20VariableOptions = (
  address: string,
  functionName: SmartContractFunctionName,
  args?: any
) => {
  const params = { ...args, _address: address };
  return {
    chain: process.env.NEXT_PUBLIC_CHAIN,
    contractAddress: ERC20Address,
    functionName: functionName,
    abi: [
      {
        name: "ratio",
        outputs: [
          {
            internalType: "uint256",
            name: functionName,
            type: "uint256",
          },
        ],
      },
    ],
  };
};
