import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { HiInformationCircle } from "react-icons/hi";

import {
  MintButton,
  NftAccountInfo,
  NftTitle,
  NftPriceInfo,
  NftMintInfo,
} from "./components";

const NftInfo = () => {
  return (
    <Box py={{ sm: 10, lg: 0 }}>
      <Box mb={4}>
        <NftTitle />
      </Box>

      <NftAccountInfo />

      <Box my={8}>
        <Text fontSize={{ sm: "4xl", lg: "lg" }}>oh the agony</Text>
      </Box>

      <Box>
        <Heading fontSize={{ sm: "4xl", lg: "lg" }}>OPEN EDITION</Heading>

        <NftPriceInfo />

        <Flex my={4} ml={36} alignItems="center">
          <HiInformationCircle />
          <Text fontSize={{ sm: "4xl", lg: "md" }} ml={1}>
            This claim ended a month ago
          </Text>
        </Flex>

        <NftMintInfo />

        <Box>
          <MintButton />
        </Box>
      </Box>
    </Box>
  );
};

export { NftInfo };
