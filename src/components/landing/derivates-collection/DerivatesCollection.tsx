import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const DerivatesCollection = () => {
  return (
    <Flex
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      flexDir={{ sm: "column-reverse", lg: "row" }}
      alignItems={{ sm: "center", lg: "normal" }}
      textAlign={{ sm: "center", lg: "start" }}
    >
      <Box
        pos="relative"
        w={{ sm: "100%", lg: "50%" }}
        borderRight={{ sm: "none", lg: "1px solid" }}
        borderBottom={{ sm: "1px solid", lg: "none" }}
        borderColor="brand.text"
        p={{ sm: 20, lg: 40 }}
        pl="5vw"
      >
        <Image
          src="/img/derivatives/twitter-teaser.png"
          w="100%"
          transform="scaleX(-1)"
          opacity={0.3}
          zIndex={1}
          pos="absolute"
          top={0}
          left={0}
        />

        <Box position="relative" zIndex={5}>
          <Heading fontSize={{ sm: "6xl", lg: "2xl" }}>
            Derivatives Collection
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

          <Text
            fontSize={{ sm: "4xl", lg: "xl" }}
            lineHeight={1.2}
            textAlign={{ sm: "center", lg: "start" }}
          >
            To make collection and art lovers of all budgets participate as much
            as possible in the project, to all those who make bids during the
            auction, for each bid, they will be given in airdrop the governance
            tokens od the DAO
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
      </Box>

      <Box w={{ sm: "100%", lg: "50%" }}>
        <Image src="/img/derivatives/twitter-teaser.png" w="100%" />
      </Box>
    </Flex>
  );
};

export { DerivatesCollection };
