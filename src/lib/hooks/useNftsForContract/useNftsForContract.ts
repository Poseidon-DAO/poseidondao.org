import { useQuery } from "wagmi";

import { KEYS } from "lib/api/queryKeys";
import { getNftsForContract } from "lib/api/queryFunctions";

export const ERC20Address = process.env.NEXT_PUBLIC_ERC20PDN;

interface IUseNftsForContract {
  contractAddress?: string;
}

const useNftsForContract = (props: IUseNftsForContract = {}) => {
  const query = useQuery([KEYS.nftsForContract], {
    queryFn: () =>
      getNftsForContract({
        contractAddress: props?.contractAddress || ERC20Address!,
      }),
  });

  return {
    ...query,
    contractNfts: query.data,
    areContractNftsLoading: query.isLoading,
    areContractNftsFetching: query.isFetching,
  };
};

export { useNftsForContract };
