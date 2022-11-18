import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import banner from "../../../../public/img/genesis/banner.jpg";

const GenesisCollection = () => {
  return (
    <Box
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      textAlign={{ sm: "center", lg: "start" }}
      pos="relative"
    >
      <Flex flexDir={{ sm: "column", lg: "row" }} pos="relative" zIndex={1}>
        <Box w={{ sm: "100%", lg: "50%" }} minH="28vh" />

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

      <Box pos="absolute" zIndex={0} minH="40vh" w="100vw" bottom={0} top={0}>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          sizes="100vw"
          alt="banner"
        />
      </Box>
    </Box>
  );
};

export { GenesisCollection };
