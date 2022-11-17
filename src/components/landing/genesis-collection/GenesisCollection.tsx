import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const GenesisCollection = () => {
  return (
    <Flex borderWidth="1px 0 0 0" borderColor="brand.text" pos="relative">
      <Box pos="absolute" zIndex={1} w="100%" h="100%">
        <Image src="/img/genesis/banner.jpg" layout="fill" loading="lazy" />
      </Box>

      <Flex
        zIndex={2}
        flexDir={{ sm: "column", lg: "row" }}
        textAlign={{ sm: "center", lg: "start" }}
      >
        <Box pos="relative" w={{ sm: "100%", lg: "50%" }} minH="28vh" />

        <Box
          w={{ sm: "100%", lg: "50%" }}
          p={{ sm: 20, lg: 24 }}
          pl="5vw"
          bg="rgba(0,0,0,0.7)"
        >
          <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>
            SuperRare Space & Genesis
          </Heading>
          <br />
          <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
            Poseidon DAO Space gallery will primarily aim to bring known and
            established artists from the traditional art sector to the NFT
            market. From our point of view, it is important to create synergies
            and connect the two sides of art that we see advancing in parallel
            today, with few intersections. By helping already established
            artists adopt NFTs, we are convinced to bring benefits to the entire
            ecosystem, allowing them, to work after work, to gain greater
            visibility.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { GenesisCollection };
