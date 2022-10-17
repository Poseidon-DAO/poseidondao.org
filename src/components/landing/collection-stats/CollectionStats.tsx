import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineTrophy } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";

import { Container } from "components/container";

const CollectionStats = () => {
  return (
    <Box pos="relative" mt={{ sm: 0, lg: "70px" }}>
      <Container>
        <Flex
          flexDir={{ sm: "column", lg: "row" }}
          alignItems={{ sm: "center", lg: "normal" }}
        >
          <Box
            w="100%"
            py="100px"
            pr={{ sm: "0", lg: "2rem" }}
            textAlign={{ sm: "center", lg: "start" }}
          >
            <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>Collection</Heading>

            <br />

            <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
              We invested and supported this space since its infancy, collecting
              NFTs since 2015 when they were only known by the name
              collectibles.
            </Text>

            <br />

            <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
              Poseidon DAO identified NFTs as the blockchain killer app. Indeed,
              NFTs have proven to be the technology able to unlock blockchain
              mainstream adoption. Since 2020, Poseidon DAO focused on crypto
              art, collecting and never selling 1-of-1 NFT artworks.
            </Text>
          </Box>

          <Box
            w="1px"
            h={{ sm: "150px", lg: "initial" }}
            position="relative"
            bg="brand.text"
            order={{ sm: -1, lg: "initial" }}
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
              >
                {/* 
                // internal ellipsis overlapping with background 
                // banner and hiding the tunnerl sight, hidden 
                <Box
                  pos="absolute"
                  w="50px"
                  h="90px"
                  zIndex={10}
                  border="1px solid"
                  borderColor="brand.text"
                  borderRadius="calc(90px / 2)"
                ></Box> */}
              </Flex>
            </Box>
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap={4} w="100%" py="100px">
            <GridItem w="100%" h="20" mb={{ sm: 10, lg: "initial" }}>
              <Flex justifyContent={{ sm: "center", lg: "flex-end" }}>
                <Box mr={6}>
                  <AiOutlineTrophy
                    size={80}
                    style={{
                      fill: "background: linear-gradient(0deg, rgba(73,35,252,1) 0%, rgba(242,10,112,1) 50%, rgba(243,133,205,1) 100%)",
                    }}
                  />
                </Box>
                <Flex flexDir="column" mt={4} w="160px">
                  <Heading size="2xl">4</Heading>
                  <Text fontSize="xl" mt="8px">
                    Collections
                  </Text>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem w="100%" h="20" mb={{ sm: 10, lg: "initial" }}>
              <Flex justifyContent={{ sm: "center", lg: "flex-end" }}>
                <Box mr={6}>
                  <BiRocket size={80} />
                </Box>
                <Flex flexDir="column" mt={4} w="160px">
                  <Heading size="2xl">+3000</Heading>
                  <Text fontSize="xl" mt="8px">
                    NFTs
                  </Text>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem w="100%" h="20" mb={{ sm: 10, lg: "initial" }}>
              <Flex justifyContent={{ sm: "center", lg: "flex-end" }}>
                <Box mr={6}>
                  <AiOutlineHeart size={80} />
                </Box>
                <Flex flexDir="column" mt={4} w="160px">
                  <Heading size="2xl">~300</Heading>
                  <Text fontSize="xl" mt="8px">
                    Artists
                  </Text>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem w="100%" h="20" mb={{ sm: 10, lg: "initial" }}>
              <Flex justifyContent={{ sm: "center", lg: "flex-end" }}>
                <Box mr={6}>
                  <BsCoin size={80} />
                </Box>
                <Flex flexDir="column" mt={4} w="160px">
                  <Heading size="2xl">+$10M</Heading>
                  <Text fontSize="xl" mt="8px">
                    Value
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export { CollectionStats };
