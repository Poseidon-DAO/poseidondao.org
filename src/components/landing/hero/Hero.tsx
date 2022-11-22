import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Container } from "components/container";

import background from "assets/images/background-tunnel.png";

const Hero = () => {
  return (
    <Box pos="relative" h={{ sm: "60vh", lg: "100vh" }}>
      <Box
        w="100%"
        h="100%"
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

      <Container takeFullHeight>
        <Flex h="100%" alignItems={{ sm: "flex-start", lg: "center" }}>
          <Heading size="4xl" mt={{ sm: "350px", lg: "-150px" }}>
            Making Crypto Art <br /> the 21st Century Art
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export { Hero };
