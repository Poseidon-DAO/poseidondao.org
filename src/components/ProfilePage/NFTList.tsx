import NFTCard from "components/NftCard/nftCard.view";
import { INft } from "types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { Colors } from "components/UI_KIT/colors";

export default function NFTList() {
  const list = useSelector((state: RootState) => state.wallet.nfts);
  const emptySpaces = list.length % 3;

  return (
    <Container>
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
      {[...Array(emptySpaces)].map(() => (
        <div style={{ width: "16rem", height: "24rem" }} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  flex-grow: 1;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }
`;
const NftContainer = styled.div`
  display: flex;
  width: 16rem;
  height: 24rem;
  @media (max-width: 768px) {
    margin-right: 1rem;
    width: 60%;
  }
`;
