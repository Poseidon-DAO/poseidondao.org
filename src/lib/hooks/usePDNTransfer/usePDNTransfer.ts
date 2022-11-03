import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import web3 from "web3";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

interface IUsePDNTransfer extends ICustomHookBaseProps {
  args: {
    to: string;
    amount: string;
  };
  onSuccess?: (data: any) => void;
}

const usePDNTransfer = ({ args, onSuccess, onError }: IUsePDNTransfer) => {
  const configForWritePrepare = getBasicContractConfig("transfer");

  const { config } = usePrepareContractWrite({
    ...configForWritePrepare,
    args: [args.to, web3.utils.toWei(args.amount || "0", "ether")],
    enabled: !!args.amount && !!args.to,
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess,
    onError,
  });

  return {
    transfer: write,
    transferData: data,
    isTransfering: isLoading,
    isTransferSuccess: isSuccess,
  };
};

export { usePDNTransfer };
