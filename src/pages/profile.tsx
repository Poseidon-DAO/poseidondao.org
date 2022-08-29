import AvatarDisplay from "components/UI_KIT/Avatar";
import { FlexView } from "components/UI_KIT/Display";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import styled from "styled-components";
import { INft } from "types";
import useCopyAddress from "utils/useCopyAddress";
import CustomModal from "components/UI_KIT/CustomModal";
import NFTList from "components/ProfilePage/NFTList";
import Transfer from "components/ProfilePage/Transfer";
import { useMoralis } from "react-moralis";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";
import Burn from "components/ProfilePage/Burn";
import Actions from "redux/actions";
import { useRouter } from "next/router";
import { Heading, Text, Badge } from "evergreen-ui";
import { Colors } from "components/UI_KIT/colors";
import { WALLET_ENABLED } from "config";

interface ITab {
  name: string;
  id: number;
}

const tabs: ITab[] = [
  { name: "Collectibles", id: 0 },
  { name: "Burn", id: 1 },
  { name: "Transfer Tokens", id: 2 },
];

const ProfilePage = () => {
  const address = useSelector(
    (state: RootState) => state.wallet.wallet.address
  );
  const copyAdress = useCopyAddress();
  const dispatch = useDispatch();
  const router = useRouter();
  const transactionSuccessful =
    useSelector((state: RootState) => state.wallet.transaction_success) ===
    true;
  const userBalance = useSelector(
    (state: RootState) => state.wallet.wallet.balance
  );

  const [nftModalOpen, setNftModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);
  const [selectedNft, setSelectedNft] = useState<INft>();
  const [ratioConversion, setRatioConversion] = useState(0);
  const { account, Moralis } = useMoralis();

  const newToast = useCallback(
    (payload: any) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  // If we don't have the wallet enabled, we have to send them back to the landing
  useEffect(() => {
    if (!WALLET_ENABLED) router.push("/");
  }, []);

  // Get the user balance, total tokens, nft list and ratio of nft conversion
  useEffect(() => {
    const getRatio = async () => {
      const options = ERC20Options(account!!, SMART_CONTRACT_FUNCTIONS.RATIO);
      const ratio = (await Moralis.executeFunction(
        options
      )) as unknown as string;
      setRatioConversion(parseInt(ratio));
    };

    if (account != null) {
      try {
        getRatio();
      } catch (e) {
        newToast({
          text: "Something went wrong...",
          type: "warning",
        });
      }
    }
  }, [account, Moralis]);

  useEffect(() => {
    if (!account) router.push("/");
  }, [account, router]);

  const handleNFTModal = (nft: INft) => {
    setNftModalOpen(true);
    setSelectedNft(nft);
  };

  const TabContent = () => {
    switch (selectedTab.id) {
      case 0:
        return <NFTList handleNFTModal={handleNFTModal} />;
      case 1:
        return <Burn ratio={ratioConversion} />;
      case 2:
        return <Transfer availableBalance={userBalance} />;
      default:
        return null;
    }
  };

  return (
    <FlexView>
      <Container>
        <Header>
          <AvatarDisplay size={"6vw"} />
          <HeaderData>
            <div style={{ height: "50%" }}>
              <Heading
                size="xxl"
                style={{
                  marginBottom: 1,
                  fontWeight: 700,
                  color: Colors.white.primary,
                }}
              >
                Your Account
              </Heading>
            </div>
            {address && (
              <AddressInfo>
                <Text
                  style={{
                    fontSize: "1.2rem",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "80vw",
                    color: Colors.white.primary,
                  }}
                >
                  {address?.slice(0, 6) + "..." + address?.slice(-6)}
                </Text>
                <Badges style={{ marginTop: 5 }}>
                  <Badge
                    style={{ cursor: "pointer" }}
                    onClick={copyAdress}
                    color="green"
                  >
                    Copy
                  </Badge>
                  <Badge
                    color="neutral"
                    style={{ cursor: "pointer", marginLeft: "1rem" }}
                    onClick={() =>
                      window.open(
                        `https://etherscan.io/address/${address}`,
                        "_blank"
                      )
                    }
                  >
                    View on Etherscan
                  </Badge>
                </Badges>
              </AddressInfo>
            )}
          </HeaderData>
        </Header>
        <ContentContainer>
          <Tabs>
            {tabs.map((el) => (
              <Tab
                key={el.id}
                isSelected={selectedTab.name === el.name}
                onClick={() => setSelectedTab(el)}
              >
                <h4 style={{ margin: 0, color: Colors.white.primary }}>
                  {el.name}
                </h4>
              </Tab>
            ))}
          </Tabs>
          <Content>{TabContent()}</Content>
        </ContentContainer>
      </Container>
      <CustomModal
        isOpen={nftModalOpen}
        onClose={() => setNftModalOpen(false)}
        header={selectedNft?.name}
        body={<Modal></Modal>}
      />
    </FlexView>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90vw;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const Badges = styled.div`
  display: flex;
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  min-height: 40vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 1rem;
  margin-top: 1rem;
  width: 80%;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const AddressInfo = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Tab = styled.div<{ isSelected: boolean }>`
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  border-radius: 1px;
  background-color: ${(props) => (props.isSelected ? Colors.blue.ocean : "")};
  border-bottom: ${(props) =>
    props.isSelected ? "0.5px solid #4824fa" : "none"};
  &:hover {
    background-color: #4824fa;
    cursor: pointer;
  }
  &:active {
    background-color: black;
  }
  @media (max-width: 768px) {
    width: 25%;
    height: 3rem;
    justify-content: center;
    align-items: center;
  }
`;

const Tabs = styled.div`
  min-height: 60vh;
  width: 20%;
  border-right: solid 0.2px white;
  padding-right: 1rem;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    min-height: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-right: 0px;
    border-bottom: solid 0.2px white;
    padding-right: 0px;
    padding-bottom: 1rem;
    margin-top: 0;
  }
`;

const Modal = styled.div`
  width: 40%;
  height: 40%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;
export default ProfilePage;
