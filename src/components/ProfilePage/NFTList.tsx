import NFTCard from "components/NftCard/nftCard.view";
import { INft } from "types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import LoadingModal from "components/LoadingModal";

export default function NFTList({
  loading,
  handleNFTModal,
}: {
  loading: boolean;
  handleNFTModal: (nft: INft) => void;
}) {
  const list = useSelector((state: RootState) => state.wallet.nfts);
  const emptySpaces = list.length % 3;

  return (
    <Container>
      {!loading ? (
        list.map((nft, i) => (
          <div
            key={i}
            style={{
              width: "16rem",
              marginBottom: "1rem",
            }}
          >
            <NFTCard nft={nft} onClick={() => handleNFTModal(nft)} />
          </div>
        ))
      ) : (
        <LoadingModal />
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
