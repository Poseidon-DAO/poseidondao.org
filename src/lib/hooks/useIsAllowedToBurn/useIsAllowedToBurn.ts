import { useContractRead } from "wagmi";

import { getBasicContractConfig } from "contracts/utils";

import { ICustomHookBaseProps } from "../types";

const useIsAllowedToBurn = (props: ICustomHookBaseProps = {}) => {
  const config = getBasicContractConfig("isAllowedToBurn");

  const query = useContractRead({
    ...config,
    ...props,
  });

  return {
    ...query,
    isAllowedToBurn: query.data,
    isAllowedToBurnStatus: query.status,
  };
};

export { useIsAllowedToBurn };
