import { ENDPOINTS } from "../endpoints";

interface IGetNftsForContractArgs {
  contractAddress: string;
}

async function getNftsForContract({
  contractAddress,
}: IGetNftsForContractArgs) {
  const repsonse = await fetch(
    `${ENDPOINTS.nftsForContract}?` + new URLSearchParams({ contractAddress })
  );

  return repsonse.json();
}

export { getNftsForContract };
