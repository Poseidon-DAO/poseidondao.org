import { ENDPOINTS } from "../endpoints";

interface IGetNftsArgs {
  owner: string;
}

async function getNfts(
  { owner }: IGetNftsArgs,
  { json }: { json?: boolean } = { json: true }
) {
  const response = await fetch(
    `${ENDPOINTS.nfts}?` + new URLSearchParams({ owner })
  );

  if (json) {
    return response.json();
  }

  return response;
}

export { getNfts };
