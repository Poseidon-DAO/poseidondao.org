import { useAccount, useContractRead } from "wagmi";
import { utils } from "ethers";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

const usePDNBalance = (props: ICustomHookBaseProps = {}) => {
  const config = getBasicContractConfig("balanceOf");
  const { address } = useAccount();

  const query = useContractRead({
    ...config,
    ...props,
    args: props?.args || address,
    enabled: !!props?.args || !!address,
  });

  return {
    ...query,
    hexBalance: query.data,
    balance: query.data ? utils.formatEther(query.data) : query.data,
    isBalanceLoading: query.isLoading,
    isBalanceFetching: query.isFetching,
  };
};

export { usePDNBalance };
