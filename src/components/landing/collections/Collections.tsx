import Image from "next/image";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
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
        <Box w="100%" py={6} textAlign="center" pl={8}>
          <Container>
            <Link href="https://opensea.io/PoseidonNftFund" isExternal>
              <Text fontWeight="bold" fontSize="xl">
                OpenSea Collection
              </Text>
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
            <Text fontWeight="bold" fontSize="xl">
              Superrare Collection
            </Text>
          </Link>
        </Box>

        <Box w="100%" py={6} textAlign="center" pr={8}>
          <Container>
            <Link href="https://foundation.app/@Poseidonnftfund" isExternal>
              <Text fontWeight="bold" fontSize="xl">
                {" "}
                Foundation Collection
              </Text>
            </Link>
          </Container>
        </Box>
      </Flex>

      <Box
        maxW="100vw"
        overflowX={{ sm: "auto", lg: "hidden" }}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex wrap="wrap" ml="5%" w="120%" py={20}>
          {[...IMAGE_ARRAY.slice(0, 14)].map((imageName, i) => {
            return (
              <Box
                key={imageName.src}
                w={{ sm: 120, lg: 200 }}
                h={{ sm: 120, lg: 200 }}
                m="2px"
                objectFit="cover"
                pos="relative"
              >
                <Image
                  src={imageName.src}
                  layout="fill"
                  objectFit="cover"
                  alt={imageName.blurDataURL}
                />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export { Collections };
