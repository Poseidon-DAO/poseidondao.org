import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "components/container";
import { GiAbstract024, GiGlassHeart } from "react-icons/gi";

const CollectionStats = () => {
  return (
    <Box
      pos="relative"
      mt={{ base: 0, sm: 0, lg: "70px" }}
      border="1px solid red"
    >
      <Container>
        <Flex
          flexDir={{ base: "column", sm: "column", lg: "row" }}
          alignItems={{ base: "column", sm: "center", lg: "normal" }}
        >
          <Box
            w="100%"
            py="100px"
            pr={{ base: 0, sm: 0, lg: "2rem" }}
            textAlign={{ base: "center", sm: "center", lg: "start" }}
          >
            <Heading fontSize={{ base: "6xl", sm: "6xl", lg: "2xl" }}>
              Collection
            </Heading>

            <br />

            <Text
              fontSize={{ base: "4xl", sm: "4xl", lg: "xl" }}
              lineHeight={1.2}
            >
              We invested and supported this space since its infancy, collecting
              NFTs since 2015 when they were only known by the name
              collectibles.
            </Text>

            <br />

            <Text
              fontSize={{ base: "4xl", sm: "4xl", lg: "xl" }}
              lineHeight={1.2}
            >
              Poseidon DAO identified NFTs as the blockchain killer app. Indeed,
              NFTs have proven to be the technology able to unlock blockchain
              mainstream adoption. Since 2020, Poseidon DAO focused on crypto
              art, collecting and never selling 1-of-1 NFT artworks.
            </Text>
          </Box>

          <Box
            w="1px"
            h={{ base: "150px", sm: "150px", lg: "initial" }}
            position="relative"
            bg="brand.text"
            order={{ base: -1, sm: -1, lg: "initial" }}
          >
            <Box pos="absolute" top="-580px" left="-200px">
              <Flex
                border="1px solid white"
                w="400px"
                h="580px"
                borderRadius="calc(600px / 2)"
                alignItems="center"
                justifyContent="center"
                pos="relative"
              />
            </Box>
          </Box>

          <Flex
            flexDir={{ base: "row", sm: "row", lg: "column" }}
            alignItems="center"
            justifyContent="center"
            w="100%"
            pt={{ base: 0, sm: 0, l: "100px" }}
          >
            <Flex justifyContent="center">
              <Box mr={6}>
                <GiAbstract024 size={80} />
              </Box>
              <Flex flexDir="column" mt={4}>
                <Heading size="3xl">+3000</Heading>
                <Text fontSize="2xl" fontWeight="bold" mt="8px">
                  NFTs collected
                </Text>
              </Flex>
            </Flex>

            <Flex justifyContent="center">
              <Box mr={6}>
                <GiGlassHeart size={80} />
              </Box>
              <Flex flexDir="column" mt={4}>
                <Heading size="3xl">~300</Heading>
                <Text fontSize="2xl" fontWeight="bold" mt="8px">
                  Artists collected
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export { CollectionStats };
