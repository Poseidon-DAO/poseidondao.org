import { type FC } from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import OpenSeaIconBW from "assets/images/opensea-bw.png";
import FoundationIconBW from "assets/images/foundation-bw.webp";

import { makeNftData } from "../../data";
import { NftInput } from "../nft-input";

interface INftMintInfo {
  contractAddress: string;
  contractEtherscanLink: string;
  tokenType: "ERC721" | "ERC1155";
  startDate: string;
  endDate: string;
}

const NftMintInfo: FC<INftMintInfo> = (props) => {
  const nftData = makeNftData(props);

  return (
    <Box>
      <Grid
        gridTemplateRows="repeat(3, 1fr)"
        gridTemplateColumns="1fr 1fr"
        gap={{ sm: 4, lg: 2 }}
      >
        {nftData.map(({ id, ...itemProps }) => (
          <GridItem key={id}>
            <NftInput {...itemProps} />
          </GridItem>
        ))}
      </Grid>

      <Box mb={8}>
        <Flex mt={{ sm: 4, lg: 2 }}>
          <Box w="70%">
            <NftInput text="VIEW ON PLATFORMS" />
          </Box>

          <Flex w="30%">
            <NftInput
              text={
                <Flex alignItems="center" justifyContent="center">
                  <Image src={OpenSeaIconBW.src} w={4} h={4} />
                </Flex>
              }
              link="https://www.opensea.com"
            />
            <NftInput
              text={
                <Flex alignItems="center" justifyContent="center">
                  <Image src={FoundationIconBW.src} h={2} />
                </Flex>
              }
              link="https://www.opensea.com"
            />
            <NftInput
              text={
                <Flex alignItems="center" justifyContent="center">
                  <Image src={OpenSeaIconBW.src} w={4} h={4} />
                </Flex>
              }
              link="https://www.opensea.com"
            />
          </Flex>
        </Flex>

        <Box mt={{ sm: 4, lg: 2 }}>
          <NftInput
            text={
              <Flex alignItems="center">
                <Image src="/img/logo-transparent.png" h={6} mx={8} />
                <Text fontSize="sm" textAlign="left" color="brand.text">
                  MINTED WITH POSEIDON DAO
                </Text>
              </Flex>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export { NftMintInfo };
