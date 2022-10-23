import { ENDPOINTS } from "../endpoints";

interface IGetNftMetadataArgs {
  contractAddress: string;
  tokenId: string;
}

async function getNftMetadata(
  { contractAddress, tokenId }: IGetNftMetadataArgs,
  { json }: { json?: boolean } = { json: true }
) {
  const response = await fetch(
    `${ENDPOINTS.nftMetadata}?` +
      new URLSearchParams({ contractAddress, tokenId })
  );

  if (json) {
    return response.json();
  }

  return response;
}

export { getNftMetadata };
