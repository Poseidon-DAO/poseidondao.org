import { ENDPOINTS } from "../endpoints";

interface IGetNftsForContractArgs {
  contractAddress: string;
}

async function getNftsForContract(
  { contractAddress }: IGetNftsForContractArgs,
  { json }: { json?: boolean } = { json: true }
) {
  const response = await fetch(
    `${ENDPOINTS.nftsForContract}?` + new URLSearchParams({ contractAddress })
  );

  if (json) {
    return response.json();
  }

  return response;
}

export { getNftsForContract };
