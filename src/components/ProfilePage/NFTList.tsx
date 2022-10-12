import NFTCard from "components/NftCard/nftCard.view";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { Colors } from "components/UI_KIT/colors";
import { Flex } from "@chakra-ui/react";

export default function NFTList() {
  const list = useSelector((state: RootState) => state.wallet.nfts);
  const emptySpaces = list.length % 3;

  return (
    <Flex w="100%" wrap="wrap" gap="2rem" mb="1rem">
      {list.length === 0 ? (
        <p style={{ alignSelf: "flex-end", color: Colors.white.primary }}>
          You have no items.
        </p>
      ) : (
        list.map((nft, i) => (
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
      {[...Array(emptySpaces)].map((i) => (
        <div key={i} style={{ width: "16rem", height: "24rem" }} />
      ))}
    </Flex>
  );
}
