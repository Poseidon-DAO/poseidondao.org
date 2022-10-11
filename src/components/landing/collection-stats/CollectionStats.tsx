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
          <Box w="100%" py="100px" textAlign={{ sm: "center", lg: "start" }}>
            <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>
              DAO Collection
            </Heading>

            <br />

            <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
              The DAO is built on top of a massive treasury <br />
              made up of historical NFTs, 1-of-1 and <br />
              collectibles
            </Text>

            <br />

            <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
              Poseidon valued art and artists investing in the <br />
              long term vision of digital art
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
                <Box
                  pos="absolute"
                  w="50px"
                  h="90px"
                  zIndex={10}
                  border="1px solid"
                  borderColor="brand.text"
                  borderRadius="calc(90px / 2)"
                ></Box>
              </Flex>
            </Box>
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap={4} w="100%" py="100px">
            <GridItem w="100%" h="20" mb={{ sm: 10, lg: "initial" }}>
              <Flex justifyContent={{ sm: "center", lg: "flex-end" }}>
                <Box mr={6}>
                  <AiOutlineTrophy size={80} />
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
                  <Heading size="2xl">+50</Heading>
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
