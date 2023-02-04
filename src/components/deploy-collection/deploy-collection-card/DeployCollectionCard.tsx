import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface IDeplyCollectionCardProps {
  artist: string;
  collectionName: string;
  collectionUrl: { opensea: string; looksrare: string; rarible: string };
  collectionImageUrl: string;
}

export const DeployCollectionCard = ({
  artist,
  collectionName,
  collectionUrl: { opensea, looksrare, rarible },
  collectionImageUrl,
}: IDeplyCollectionCardProps) => {
  return (
    <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
      <Box w="100%" h="400px" pos="relative">
        <Image
          priority={true}
          objectFit="contain"
          src={collectionImageUrl}
          layout="fill"
        />
      </Box>

      <Box my="6">
        <Text fontSize="lg">{artist}</Text>
        <Text fontSize="lg" noOfLines={1}>
          {collectionName}
        </Text>
      </Box>

      <Flex justifyContent="center">
        <Flex
          justifyContent="center"
          alignItems="center"
          borderWidth="1px"
          w="50px"
          h="50px"
          cursor="pointer"
        >
          <a target="_blank" href={opensea}>
            <Image width={16} height={16} src="/img/marketplace/open-sea.svg" />
          </a>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          borderWidth="1px 0"
          w="50px"
          h="50px"
          cursor="pointer"
        >
          <a target="_blank" href={looksrare}>
            <Image
              width={16}
              height={16}
              src="/img/marketplace/looksrare.svg"
            />
          </a>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          borderWidth="1px"
          w="50px"
          h="50px"
          cursor="pointer"
        >
          <a target="_blank" href={rarible}>
            <Image width={16} height={16} src="/img/marketplace/rarible.svg" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};
