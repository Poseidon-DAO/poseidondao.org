import { Box, Flex, Image, Text } from "@chakra-ui/react";

import image from "../../../../public/img/wp/architecture.png";

const Architecture = () => {
  return (
    <Flex
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      flexDir={{ sm: "column", lg: "row" }}
      textAlign={{ sm: "center", lg: "start" }}
      bg="brand.background"
    >
      <Flex
        w={{ sm: "100%", lg: "50%" }}
        pl={{ sm: 0, lg: 16 }}
        flexDir="column"
        justify="space-evenly"
        align="center"
      >
        <Text
          fontWeight="bold"
          fontSize={{ sm: "2xl", lg: "medium" }}
          textAlign={{ sm: "center", lg: "center" }}
          m={{ sm: 10 }}
        >
          Composed of two souls: DAO Governance and Founder Collection. The PDN
          Token is the glue between them. The token holders have access to DAO
          Governance using PDN Token. The DAO Governance is led by DAO Boards,
          which are composed of thematic committees. Token holders can burn a
          certain amount of tokens, defined as Burn Ratio, to become Guardians.
          Guardians receive a Guardian NFT, that grants them ownership over the
          Founder Collection. The Founder Collection is the vault where the
          whole Poseidon DAO collection is held.
        </Text>
      </Flex>

      <Box w={{ sm: "100%", lg: "50%" }}>
        <Image
          w="100%"
          src={image.src}
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Flex>
  );
};

export { Architecture };
