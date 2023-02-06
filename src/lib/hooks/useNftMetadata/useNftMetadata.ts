import { useQuery } from "wagmi";

import { KEYS } from "lib/api/queryKeys";
import { getNftMetadata } from "lib/api/queryFunctions";

interface IUseNftMetadata {
  contractAddress: string;
  tokenId: string;
}

const useNftMetadata = ({ tokenId, contractAddress }: IUseNftMetadata) => {
  const query = useQuery([KEYS.nftMetadata], {
    queryFn: () => getNftMetadata({ contractAddress, tokenId }),
    enabled: !!tokenId && !!contractAddress,
  });

  return {
    ...query,
    nftMetadata: query.data ? query.data : query.data,
    isNftMetadataLoading: query.isLoading,
    isNftMetadataFetching: query.isFetching,
  };
};

export { useNftMetadata };
