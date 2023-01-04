import { useContractRead } from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

const usePDNSymbol = (props: ICustomHookBaseProps = {}) => {
  const config = getBasicContractConfig("symbol");

  const query = useContractRead({
    ...config,
    ...props,
  });

  return {
    symbol: query.data,
  };
};

export { usePDNSymbol };
