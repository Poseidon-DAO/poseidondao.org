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
  SYMBOL: "symbol",
  VEST_LENGTH: "getVestLength",
  VEST_METADATA: "getVestMetaData",
  WITHDRAW_VEST: "withdrawVest",
  GET_IS_ALLOWED_TO_BURN: "isAllowedToBurn",
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
