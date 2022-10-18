import { useAccount, useQuery } from "wagmi";

import { KEYS } from "lib/api/queryKeys";
import { getNfts } from "lib/api/queryFunctions";

interface IUseNfts {
  owner?: string;
}

const useNfts = (props: IUseNfts = {}) => {
  const { address } = useAccount();

  const query = useQuery([KEYS.nfts], {
    queryFn: () => getNfts({ owner: props?.owner || address! }),
  });

  return {
    ...query,
    nfts: query.data ? query.data.ownedNfts : query.data,
    areNftsLoading: query.isLoading,
    areNftsFetching: query.isFetching,
  };
};

export { useNfts };
