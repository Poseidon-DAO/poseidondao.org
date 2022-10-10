import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const GenesisCollection = () => {
  return (
    <Flex
      backgroundImage="url(/img/genesis/banner.jpg)"
      backgroundSize="cover"
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      flexDir={{ sm: "column", lg: "row" }}
      textAlign={{ sm: "center", lg: "start" }}
    >
      <Box pos="relative" w={{ sm: "100%", lg: "50%" }} minH="28vh" />

      <Box
        w={{ sm: "100%", lg: "50%" }}
        p={{ sm: 20, lg: 40 }}
        pl="5vw"
        bg="rgba(0,0,0,0.7)"
      >
        <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>
          Genesis Collection
        </Heading>
        <br />
        <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
          The purpose of the derivatives collection is to combine different
          atristic styles with unique pieces of high commercial value but like
          artistic content, valuing both the starting work thanks to the
          collaboration of excellent artists as well as the DAO itself and
          future token holders. Niro Perrone, Gio' Roman and Bert One are just
          some of the artists the DAO partnered with for the derrivatives
          project
        </Text>

        <br />

        <Link
          href="https://foundation.app/@Poseidonnftfund"
          isExternal
          color="brand.red"
        >
          <Text
            fontSize={{ sm: "4xl", lg: "xl" }}
            textAlign={{ sm: "center", lg: "start" }}
            color="brand.red"
          >
            On Foundation &gt;
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export { GenesisCollection };
