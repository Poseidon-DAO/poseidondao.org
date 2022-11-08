import { useContractRead } from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

const usePDNRatio = (props: ICustomHookBaseProps = {}) => {
  const config = getBasicContractConfig("ratio");

  const query = useContractRead({
    ...config,
    ...props,
  });

  return {
    ...query,
    hexRatio: query.data,
    ratio: query.data ? Number(query.data) : query.data,
    isRatioLoading: query.isLoading,
    isRatioFetching: query.isFetching,
  };
};

export { usePDNRatio };
