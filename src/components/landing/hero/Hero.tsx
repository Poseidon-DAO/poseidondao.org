import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Container } from "components/container";

import background from "assets/images/background-tunnel.png";

const Hero = () => {
  return (
    <Box pos="relative" minH={{ sm: "60vh", lg: "100vh" }} overflowX="hidden">
      <Box
        pos="absolute"
        top={0}
        left={0}
        zIndex={1}
        w="100vw"
        h={{ sm: "60vh", lg: "100vh" }}
        bgImage={background.src}
        backgroundPosition="center"
        backgroundSize="cover"
        clipPath="polygon(
          0 0,
          100% 0,
          100% 55%,
          0 100%
        )"
      >
        <Container>
          <Flex
            h={{ sm: "60vh", lg: "100vh" }}
            alignItems={{ sm: "flex-start", lg: "center" }}
          >
            <Heading size="4xl" mt={{ sm: "350px", lg: "-150px" }}>
              We collect NFTs <br /> to pass on a legacy!
            </Heading>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export { Hero };
