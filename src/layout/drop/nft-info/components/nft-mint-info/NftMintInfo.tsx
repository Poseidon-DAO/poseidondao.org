import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import OpenSeaIconBW from "assets/images/opensea-bw.png";
import FoundationIconBW from "assets/images/foundation-bw.webp";

import { makeNftData } from "../../data";
import { NftInput } from "../nft-input";

const NftMintInfo = () => {
  const nftData = makeNftData();

  return (
    <Box>
      <Grid
        gridTemplateRows="repeat(3, 1fr)"
        gridTemplateColumns="1fr 1fr"
        gap={2}
      >
        {nftData.map(({ id, ...itemProps }) => (
          <GridItem>
            <NftInput key={id} {...itemProps} />
          </GridItem>
        ))}
      </Grid>

      <Box mb={8}>
        <Flex mt={2}>
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

        <Box mt={2}>
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
