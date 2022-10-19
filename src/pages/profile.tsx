import AvatarDisplay from "components/UI_KIT/Avatar";
import { FlexView } from "components/UI_KIT/Display";

import { useState } from "react";
import { INft } from "types";
import NFTList from "components/ProfilePage/NFTList";
import Transfer from "components/ProfilePage/Transfer";
import Burn from "components/ProfilePage/Burn";
import { useRouter } from "next/router";
import { Heading, Text } from "evergreen-ui";
import { Colors } from "components/UI_KIT/colors";
import { WALLET_ENABLED } from "constants/env";
import { AiFillCopy } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { useAccount } from "wagmi";
import { Flex } from "@chakra-ui/react";
import { LoadingIndicator } from "components";

interface ITab {
  name: string;
  id: number;
}

const tabs: ITab[] = [
  { name: "NFTs", id: 0 },
  { name: "Burn", id: 1 },
  { name: "Transfer Tokens", id: 2 },
];

const ProfilePage = () => {
  const router = useRouter();
  const { address } = useAccount();

  // TODO getRationHook

  // const copyAdress = useCopyAddress();

  const [nftModalOpen, setNftModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);
  const [selectedNft, setSelectedNft] = useState<INft>();
  const [ratioConversion, setRatioConversion] = useState(0);

  if (!WALLET_ENABLED) {
    router.push("/");
  }

  if (typeof window !== "undefined") {
    router.replace("/404");
  }

  return <LoadingIndicator />;

  const TabContent = () => {
    switch (selectedTab.id) {
      case 0:
        return <NFTList />;
      case 1:
        return <Burn ratio={ratioConversion} />;
      case 2:
        return <Transfer />;
      default:
        return null;
    }
  };
  return (
    <FlexView>
      <Flex flexDir="column" minH="100vh" w="90vw">
        <Flex alignItems="center">
          <AvatarDisplay size={"6vw"} />
          <Flex flexDir="column" ml="1rem">
            <div style={{ height: "50%" }}>
              <Heading
                size={600}
                style={{
                  fontWeight: 700,
                  color: Colors.white.primary,
                }}
              >
                Your Account
              </Heading>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50%",
                marginTop: "0.8rem",
              }}
            >
              {address && (
                <Flex alignItems="center" h="20%">
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
                  <Flex ml="1rem">
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      ml="1rem"
                      _hover={{
                        opacity: "0.8",
                      }}
                    >
                      <AiFillCopy size={18} color="white" />
                    </Flex>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      ml="1rem"
                      _hover={{
                        opacity: "0.8",
                      }}
                      onClick={() =>
                        window.open(
                          `https://etherscan.io/address/${address}`,
                          "_blank"
                        )
                      }
                    >
                      <FaShareSquare size={18} color="white" />
                    </Flex>
                  </Flex>
                </Flex>
              )}
            </div>
          </Flex>
        </Flex>
        <Flex w="100%" mt="2rem" minH="40vh">
          <Flex
            __css={{
              minHeight: "60vh",
              width: "20%",
              borderRight: "solid 0.2px white",
              paddingRight: "1rem",
            }}
          >
            {tabs.map((el) => (
              <Flex
                key={el.id}
                __css={{
                  height: "3rem",
                  marginTop: "1rem",
                  display: "flex",
                  width: "100%",
                  padding: "0.5rem",
                  alignItems: "center",
                  borderRadius: "1px",
                }}
                _hover={{
                  backgroundColor: "#4824fa",
                  cursor: "pointer",
                }}
                _active={{
                  backgroundColor: "black",
                }}
                bg={selectedTab.name === el.name ? Colors.blue.ocean : ""}
                onClick={() => setSelectedTab(el)}
              >
                <h4 style={{ margin: 0, color: Colors.white.primary }}>
                  {el.name}
                </h4>
              </Flex>
            ))}
          </Flex>

          <Flex
            wrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            w="80%"
            ml="1rem"
            mt="1rem"
          >
            {TabContent()}
          </Flex>
        </Flex>
      </Flex>
    </FlexView>
  );
};

export default ProfilePage;
