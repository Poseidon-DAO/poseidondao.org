export interface NftMetadata {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  title: string;
  description: string;
  tokenUri: {
    raw: string;
    gateway: string;
  };
  media: [
    {
      raw: string;
      gateway: string;
    }
  ];
  metadata: {
    name: string;
    description: string;
    image: string;
    external_url: string;
    dna: string;
  };
  timeLastUpdated: string;
  contractMetadata: {
    name: string;
    symbol: string;
    tokenType: "ERC721" | "ERC1155";
  };
  spamInfo: {
    isSpam: "true" | "false";
    classifications: string[];
  };
}

// export interface NftMetadata {
//     contract: {
//       address: "0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3";
//     };
//     id: {
//       tokenId: "0x0000000000000000000000000000000000000000000000000000000000000001";
//       tokenMetadata: {
//         tokenType: "ERC721";
//       };
//     };
//     title: "BoredApeNikeClub #1";
//     description: "COUNTDOWN OVER. MINTING LIVE.  [https://nikeape.xyz](https://nikeape.xyz)";
//     tokenUri: {
//       raw: "http://api.nikeape.xyz/ipfs/1";
//       gateway: "http://api.nikeape.xyz/ipfs/1";
//     };
//     media: [
//       {
//         raw: "http://api.nikeape.xyz/ipfs/nickbanc/1.jpg";
//         gateway: "http://api.nikeape.xyz/ipfs/nickbanc/1.jpg";
//       }
//     ];
//     metadata: {
//       name: "BoredApeNikeClub #1";
//       description: "COUNTDOWN OVER. MINTING LIVE.  [https://nikeape.xyz](https://nikeape.xyz)";
//       image: "http://api.nikeape.xyz/ipfs/nickbanc/1.jpg";
//       external_url: "https://nikeape.xyz";
//       dna: "1";
//     };
//     timeLastUpdated: "2022-03-07T22:31:14.469Z";
//     contractMetadata: {
//       name: "Bored Ape Nike Club";
//       symbol: "BANC";
//       tokenType: "ERC721";
//     };
//     spamInfo: {
//       isSpam: "true";
//       classifications: [
//         "OwnedByMostHoneyPots",
//         "Erc721TooManyOwners",
//         "Erc721TooManyTokens"
//       ];
//     };
//   }
