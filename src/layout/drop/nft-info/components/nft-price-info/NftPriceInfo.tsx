import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const NftPriceInfo = () => {
  return (
    <>
      <Box w="100%" h="0.5px" bg="brand.line" my={4}></Box>

      <Flex>
        <Box mr={12}>
          <Text fontSize={{ sm: "3xl", lg: "xs" }} color="brand.line">
            PRICE
          </Text>
          <Heading fontSize={{ sm: "4xl", lg: "lg" }}>0.001 ETH</Heading>
        </Box>
        <Box>
          <Text fontSize={{ sm: "3xl", lg: "xs" }} color="brand.line">
            TOTAL MINTED
          </Text>
          <Heading fontSize={{ sm: "4xl", lg: "lg" }}>3403</Heading>
        </Box>
      </Flex>

      <Box w="100%" h="0.5px" bg="brand.line" my={4}></Box>
    </>
  );
};

export { NftPriceInfo };
