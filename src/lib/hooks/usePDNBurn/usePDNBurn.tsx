import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

interface IUsePDNBurn extends ICustomHookBaseProps {
  args: { amount: string };
  onSuccess?: (data: any) => void;
}

const usePDNBurn = ({ args, onSuccess, onError, enabled }: IUsePDNBurn) => {
  const configForWritePrepare = getBasicContractConfig("burnAndReceiveNFT");

  const { config } = usePrepareContractWrite({
    ...configForWritePrepare,
    args: [args.amount],
    enabled: enabled && !!args.amount,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess,
    onError,
  });

  return {
    burn: write,
    burnData: data,
    isBurning: isLoading,
    isBurnFetching: isFetching,
    isBurnSuccess: isSuccess,
  };
};

export { usePDNBurn };
