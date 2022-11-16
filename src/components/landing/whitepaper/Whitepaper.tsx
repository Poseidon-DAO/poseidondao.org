import Image from "next/image";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Container } from "components/container";
import Tilt from "react-parallax-tilt";

import background from "assets/images/background-tunnel.png";
import image from "../../../../public/img/wp/wp-cover-draft.jpg";

const Whitepaper = () => {
  return (
    <Flex
      as="section"
      id="whitepaper"
      pos="relative"
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      flexDir={{ sm: "column", lg: "row" }}
      textAlign={{ sm: "center", lg: "start" }}
      h={{ sm: "60vh", lg: "90vh" }}
    >
      <Box position="absolute" w="100vw" h="100%">
        <Image src={background.src} layout="fill" />
      </Box>

      <Box position="absolute" w="100vw" bg="rgba(0,0,0,0.7)">
        <Container>
          <Flex
            w={{ sm: "100%", lg: "100%" }}
            h={{ sm: "60vh", lg: "90vh" }}
            flexDir={{ sm: "column", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w={{ sm: "80%", lg: "30%" }} h="80%" pos="relative">
              <Tilt
                style={{ width: "100%", height: "100%" }}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.01}
                transitionEasing={"cubic-bezier(0.2,.98,.52,.99)"}
              >
                <Box w="100%" h="100%" boxShadow="0 0 10px darkmagenta">
                  <Image src={image.src} layout="fill" />
                </Box>
              </Tilt>
            </Box>

            <Box textAlign="center" w={{ sm: "100%", lg: "60%" }}>
              <Text
                fontWeight="bold"
                fontSize={{ sm: "5xl", lg: "xxl" }}
                textAlign={{ sm: "center", lg: "center" }}
                m={{ sm: 10 }}
              >
                Download the latest whitepaper version to learn more
              </Text>
              <Link
                href={"/Whitepaper_Poseidon_DAO.pdf"}
                target="_blank"
                bg={"brand.red"}
                p={{ sm: "2rem 4rem", lg: "1rem 2rem" }}
                fontSize={{ sm: "4xl", lg: "xl" }}
                textDecor="none"
                _hover={{
                  textDecoration: "none",
                  boxShadow: "inset 0 0 5px darkmagenta",
                }}
              >
                DOWNLOAD NOW
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export { Whitepaper };
