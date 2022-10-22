import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const NftPriceInfo = () => {
  return (
    <>
      <Box w="100%" h="0.5px" bg="brand.line" my={4}></Box>

      <Flex>
        <Box mr={12}>
          <Text fontSize="xs" color="brand.line">
            PRICE
          </Text>
          <Heading size="md">0.001 ETH</Heading>
        </Box>
        <Box>
          <Text fontSize="xs" color="brand.line">
            TOTAL MINTED
          </Text>
          <Heading size="md">3403</Heading>
        </Box>
      </Flex>

      <Box w="100%" h="0.5px" bg="brand.line" my={4}></Box>
    </>
  );
};

export { NftPriceInfo };
