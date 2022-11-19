import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Container } from "components/container";

import background from "assets/images/background-tunnel.png";

const Hero = () => {
  return (
    <Box>
      <Box
        minH="20vh"
        w="100%"
        h={["60vh", "100vh"]}
        pos="absolute"
        zIndex={-1}
        clipPath="polygon(0 0, 100% 0, 100% 55%, 0 100%)"
      >
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          alt="hero"
          priority
        />
      </Box>

      <Container>
        <Flex h={["60vh", "100vh"]} alignItems="center">
          <Heading
            fontSize={{ base: "3xl", lg: "7xl" }}
            lineHeight={1}
            mt="-150px"
          >
            Making Crypto Art <br /> the 21st Century Art
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export { Hero };
