import { ENDPOINTS } from "../endpoints";

interface IGetNftsArgs {
  owner: string;
}

async function getNfts({ owner }: IGetNftsArgs) {
  const repsonse = await fetch(
    `${ENDPOINTS.nfts}?` + new URLSearchParams({ owner })
  );

  return repsonse.json();
}

export { getNfts };
