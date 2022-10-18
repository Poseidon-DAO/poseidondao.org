export const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID;

export const ENDPOINTS = {
  nfts: `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`,
  nftsForContract: `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection`,
};
