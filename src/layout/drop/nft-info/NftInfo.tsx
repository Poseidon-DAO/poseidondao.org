import { type FC } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiInformationCircle } from "react-icons/hi";

import { type NftMetadata } from "lib/types/NftMetadata";

import {
  MintButton,
  NftAccountInfo,
  NftTitle,
  NftPriceInfo,
  NftMintInfo,
} from "./components";

interface INftInfoProps extends NftMetadata {}

const NftInfo: FC<INftInfoProps> = ({
  metadata,
  contract,
  contractMetadata,
}) => {
  return (
    <Box py={{ sm: 10, lg: 0 }}>
      <Box mb={4}>
        <NftTitle title={metadata.name} />
      </Box>

      <NftAccountInfo />

      <Box my={8}>
        <Text fontSize={{ sm: "4xl", lg: "lg" }}>{metadata.description}</Text>
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

        <NftMintInfo
          contractAddress={contract.address}
          contractEtherscanLink=""
          tokenType={contractMetadata.tokenType}
          startDate="22.05.2023"
          endDate="22.05.2023"
        />

        <Box>
          <MintButton />
        </Box>
      </Box>
    </Box>
  );
};

export { NftInfo };
