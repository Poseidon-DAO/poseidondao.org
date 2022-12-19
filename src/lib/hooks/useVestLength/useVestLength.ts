import { useAccount, useContractRead } from "wagmi";
import { getBasicContractConfig } from "contracts/utils";

function useVestLength({ enabled = true } = {}) {
  const { address } = useAccount();

  const config = getBasicContractConfig("getVestLength");

  const query = useContractRead({
    ...config,
    args: [address],
    enabled: !!address && enabled,
    watch: true,
  });

  return {
    vestLength: !!query.data ? Number(query.data) : null,
    vestLengthStatus: query.status,
  };
}

export { useVestLength };
