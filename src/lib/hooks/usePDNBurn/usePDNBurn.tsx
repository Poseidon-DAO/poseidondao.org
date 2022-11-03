import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

interface IUsePDNBurn extends ICustomHookBaseProps {
  args: any;
  onSuccess?: (data: any) => void;
}

const usePDNBurn = ({ args, onSuccess, onError }: IUsePDNBurn) => {
  const configForWritePrepare = getBasicContractConfig("burnAndReceiveNFT");

  const { config } = usePrepareContractWrite({
    ...configForWritePrepare,
    args,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess,
    onError,
  });

  return {
    burn: write,
    burnData: data,
    isBurning: isLoading,
    isBurnSuccess: isSuccess,
  };
};

export { usePDNBurn };
