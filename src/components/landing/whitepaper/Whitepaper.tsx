import Image from "next/image";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";

import background from "assets/images/background-tunnel.png";
import image from "../../../../public/img/wp/wp-cover-draft.jpg";

const Whitepaper = () => {
  return (
    <Box
      as="section"
      id="whitepaper"
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      pos="relative"
    >
      <Box pos="absolute" bottom={0} top={0} zIndex={1} minH="20vh" w="100%">
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          sizes="100vw"
          alt="whitepaper background"
        />
      </Box>

      <Flex
        w={{ sm: "100%", lg: "100%" }}
        p={{ sm: 20, lg: 24 }}
        pl="5vw"
        bg="rgba(0,0,0,0.7)"
        flexDir={{ sm: "column", lg: "row" }}
        alignItems="center"
        pos="relative"
        zIndex={2}
      >
        <Box w={{ sm: "80%", lg: "30%" }} pl={{ sm: 0, lg: 16 }}>
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.01}
            transitionEasing={"cubic-bezier(0.2,.98,.52,.99)"}
          >
            <Box w="100%" boxShadow="0 0 10px darkmagenta">
              <Image src={image} layout="responsive" alt="whitepaper" />
            </Box>
          </Tilt>
        </Box>
        <Flex
          w={{ sm: "100%", lg: "70%" }}
          pl={{ sm: 0, lg: 16 }}
          flexDir="column"
          justify="space-evenly"
          align="center"
        >
          <Text
            fontWeight="bold"
            fontSize={{ sm: "5xl", lg: "xxl" }}
            textAlign={{ sm: "center", lg: "center" }}
            m={{ sm: 10 }}
          >
            Download the latest whitepaper version to learn more
          </Text>
          <Link
            href="/Whitepaper_Poseidon_DAO.pdf"
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
        </Flex>
      </Flex>
    </Box>
  );
};

export { Whitepaper };
