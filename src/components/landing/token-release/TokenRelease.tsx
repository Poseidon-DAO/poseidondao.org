import Image from "next/image";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

const TokenRelease = () => {
  return (
    <Box
      as="section"
      id="whitepaper"
      borderWidth="1px 0"
      borderColor="brand.text"
      pos="relative"
      height={{ sm: "30vh", lg: "70vh" }}
    >
      <Box pos="absolute" bottom={0} top={0} zIndex={1} w="100%" opacity={0.5}>
        <Image
          src="/img/hero/pdn_banner.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="100vw"
          alt="token release background"
          quality={100}
        />
      </Box>

      <Flex
        w="100%"
        h="inherit"
        alignItems="center"
        p={{ sm: 20, lg: 24 }}
        pl="5vw"
        pos="relative"
        zIndex={2}
      >
        <Box w={{ sm: "100%", lg: "40%" }}>
          <Text
            fontSize={{ sm: "4xl", lg: "xl" }}
            textAlign={{ sm: "center", lg: "initial" }}
            lineHeight={1.2}
          >
            The PDN token implements the community-driven Governance and acts as
            an incentive for active participation in the DAO. The token is a key
            factor in the DAO economics, beyond the value of the token itself.
            Indeed, it both grants voting rights to the token holders and
            unlocks access to the Founder Collection.
          </Text>

          <br />

          <Box textAlign={{ sm: "center", lg: "initial" }} mt="6">
            <Link
              // href="/Whitepaper_Poseidon_DAO.pdf"
              opacity={0.4}
              target="_blank"
              bg={"brand.red"}
              p={{ sm: "1rem 4rem", lg: "1rem 2rem" }}
              fontSize={{ sm: "4xl", lg: "xl" }}
              textDecor="none"
              _hover={{
                textDecoration: "none",
                boxShadow: "inset 0 0 5px darkmagenta",
              }}
            >
              GET PDN
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export { TokenRelease };
