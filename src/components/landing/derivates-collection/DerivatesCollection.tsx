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
        p={{ sm: 20, lg: 24 }}
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
            Open Editions & Derivatives
          </Heading>
          <br />
          <Text fontSize={{ sm: "4xl", lg: "xl" }} lineHeight={1.2}>
            Monthly drops with a limited supply and a limited amount of time, in
            collaboration with valuable artists. The artists will have their
            floor price guaranteed and additionally 10% of the Open Edition
            sale. The participants are incentivized to buy during the open
            edition because they will automatically receive a certain amount of
            PDN tokens back in airdrop.
          </Text>
        </Box>
      </Box>

      <Box w={{ sm: "100%", lg: "50%" }}>
        <Image src="/img/derivatives/twitter-teaser.png" w="100%" />
      </Box>
    </Flex>
  );
};

export { DerivatesCollection };
