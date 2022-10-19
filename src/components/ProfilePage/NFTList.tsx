import NFTCard from "components/NftCard/nftCard.view";
import { Colors } from "components/UI_KIT/colors";
import { useNfts } from "lib/hooks";
import { Flex } from "@chakra-ui/react";

export default function NFTList() {
  const { nfts } = useNfts();

  const emptySpaces = nfts?.length % 3;

  return (
    <Flex w="100%" wrap="wrap" gap="2rem" mb="1rem">
      {nfts?.length === 0 ? (
        <p style={{ alignSelf: "flex-end", color: Colors.white.primary }}>
          You have no items.
        </p>
      ) : (
        nfts?.map((nft: any, i: number) => (
          <div
            key={i}
            style={{
              width: "16rem",
              marginBottom: "1rem",
            }}
          >
            <NFTCard nft={nft} />
          </div>
        ))
      )}
      {[...Array(emptySpaces || 0)].map((_, i) => (
        <div key={i} style={{ width: "16rem", height: "24rem" }} />
      ))}
    </Flex>
  );
}
