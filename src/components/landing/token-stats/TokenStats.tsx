import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Container } from "components/container";

const TokenStats = () => {
  return (
    <Box py={20} w="100vw">
      <Container>
        <Flex flexWrap="wrap" flexDir="column" gap={6}>
          <Flex gap={6} flexDir={{ sm: "column", lg: "row" }}>
            <Box
              w={{ sm: "100%", lg: "50%" }}
              p={8}
              h="35vh"
              border="1px solid"
              borderColor="brand.red"
              pos="relative"
            >
              <Text fontSize="3xl">Total PDN</Text>
              <Text fontSize="5xl" fontWeight="bold">
                200,000.00 PDN
              </Text>

              <Box pos="absolute" bottom={8}>
                <Button size="xl" w="160px">
                  BURN
                </Button>
              </Box>
            </Box>

            <Box
              w={{ sm: "100%", lg: "50%" }}
              p={8}
              h="35vh"
              border="1px solid"
              borderColor="brand.red"
            >
              <Text fontSize="3xl">Total Vested PDN</Text>
              <Text fontSize="5xl" fontWeight="bold">
                100,000,000.00 PDN
              </Text>
            </Box>
          </Flex>

          <Flex gap={6} flexDir={{ sm: "column", lg: "row" }}>
            <Box
              w={{ sm: "100%", lg: "50%" }}
              p={8}
              h="35vh"
              border="1px solid"
              borderColor="brand.red"
              pos="relative"
            >
              <Text fontSize="3xl">Available PDN</Text>
              <Text fontSize="5xl" fontWeight="bold">
                10,000.00 PDN
              </Text>

              <Box pos="absolute" bottom={8}>
                <Button size="xl" w="160px">
                  CLAIM
                </Button>
              </Box>
            </Box>

            <Box
              w={{ sm: "100%", lg: "50%" }}
              p={8}
              h="35vh"
              border="1px solid"
              borderColor="brand.red"
              pos="relative"
            >
              <Text fontSize="3xl">Next PDN available in</Text>
              <Text fontSize="5xl" fontWeight="bold">
                32 days
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export { TokenStats };
