import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "components/container";

import image from "../../../../public/img/derivatives/foundation.jpeg";

const PoseidonDAO = () => {
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
            <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>Poseidon DAO</Heading>
            <br />
            <Text
              fontSize={{ sm: "4xl", lg: "xl" }}
              lineHeight={1.2}
              textAlign={{ sm: "center", lg: "start" }}
            >
              Our goal is to make crypto art the artistic movement of the 21st
              century, creating a decentralized curator based on strong artistic
              knowledge, investing, and innovating in the NFT technology
            </Text>
          </Flex>

          <Box
            w={{ sm: "100%", lg: "60%" }}
            h="320px"
            ml={{ sm: 0, lg: 16 }}
            pos="relative"
          >
            <Image layout="fill" src={image.src} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export { PoseidonDAO };
