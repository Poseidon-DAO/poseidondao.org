import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Container } from "components/container";

import { IMAGE_ARRAY } from "../../../../public/img/collection";

const ArtistsAndCollectors = () => {
  return (
    <Box py={20} borderWidth="1px 0 0 0" borderColor="brand.text">
      <Container>
        <Flex flexDir={{ sm: "column", lg: "initial" }}>
          <Flex
            flexDir="column"
            justifyContent="center"
            w={{ sm: "100%", lg: "40%" }}
            alignItems={{ sm: "center", lg: "normal" }}
          >
            <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>
              Artists & Collectors DAO
            </Heading>
            <br />
            <Text
              fontSize={{ sm: "4xl", lg: "xl" }}
              lineHeight={1.2}
              textAlign={{ sm: "center", lg: "start" }}
            >
              Poseidon DAO brings NFTs to the next step enabling their
              evolution. The DAO is built on top of the knowledge of a huge
              collective of artists and collectors, in order to create a
              decentralized entity that can lead NFTs and crypto art to another
              level
            </Text>
          </Flex>

          <Box w={{ sm: "100%", lg: "60%" }} pl={{ sm: 0, lg: 16 }}>
            <Grid
              templateColumns="repeat(3, 1fr)"
              mt={{ sm: 12, lg: "initial" }}
            >
              {IMAGE_ARRAY.slice(1, 10).map((image) => (
                <GridItem key={image.src}>
                  <Image
                    w="100%"
                    h="80px"
                    src={image.src}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export { ArtistsAndCollectors };
