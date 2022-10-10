import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Container } from "components/container";

import { IMAGE_ARRAY } from "../../../../public/img/collection";

const Collections = () => {
  return (
    <Box fontWeight="bold">
      <Flex
        borderWidth="1px 0 1px 0"
        borderColor="brand.text"
        color="brand.red"
      >
        <Box w="100%" py={6} pl={8}>
          <Container>
            <Link href="https://opensea.io/PoseidonNftFund" isExternal>
              <Text fontSize="xl">OpenSea Collection &gt;</Text>
            </Link>
          </Container>
        </Box>

        <Box
          w="100%"
          py={6}
          textAlign="center"
          borderWidth="0 1px 0 1px"
          borderColor="brand.text"
          boxSizing="border-box"
        >
          <Link href="https://superrare.com/poseidonnftfund" isExternal>
            <Text fontSize="xl">Superrare Collection &gt;</Text>
          </Link>
        </Box>

        <Box w="100%" py={6} textAlign="right" pr={8}>
          <Container>
            <Link href="https://foundation.app/@Poseidonnftfund" isExternal>
              <Text fontSize="xl"> Foundation Collection &gt;</Text>
            </Link>
          </Container>
        </Box>
      </Flex>

      <Box
        maxW="100vw"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex wrap="wrap" ml="5%" w="120%" py={20}>
          {[...IMAGE_ARRAY].reverse().map((imageName) => {
            return (
              <Box
                key={imageName.src}
                w={{ sm: 120, lg: 200 }}
                h={{ sm: 120, lg: 200 }}
                m="2px"
                objectFit="cover"
              >
                <Image src={imageName.src} />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export { Collections };
