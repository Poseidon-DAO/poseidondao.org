import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

interface IUseVestWithdraw extends ICustomHookBaseProps {
  args: { vestIndex?: number };
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

const useVestWithdraw = ({ args, onSuccess, onError }: IUseVestWithdraw) => {
  const configForWritePrepare = getBasicContractConfig("withdrawVest");

  const { config } = usePrepareContractWrite({
    ...configForWritePrepare,
    args: [`${args.vestIndex}`],
    enabled: !!args?.vestIndex && args?.vestIndex >= 0,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, status, error } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess,
    onError,
  });

  return {
    withdraw: write,
    withdrawData: data,
    withdrawError: error,
    withdrawStatus: status,
    isWithdrawing: isLoading,
  };
};

export { useVestWithdraw };
