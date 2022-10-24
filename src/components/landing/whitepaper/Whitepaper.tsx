import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";

import background from "assets/images/background-tunnel.png";
import image from "../../../../public/img/wp/wp-cover-draft.jpg";

const Whitepaper = () => {
  return (
    <Flex
      as="section"
      id="whitepaper"
      backgroundImage={background.src}
      backgroundSize="cover"
      borderWidth="1px 0 0 0"
      borderColor="brand.text"
      flexDir={{ sm: "column", lg: "row" }}
      textAlign={{ sm: "center", lg: "start" }}
    >
      <Flex
        w={{ sm: "100%", lg: "100%" }}
        p={{ sm: 20, lg: 24 }}
        pl="5vw"
        bg="rgba(0,0,0,0.7)"
        flexDir={{ sm: "column", lg: "row" }}
        alignItems="center"
      >
        <Box w={{ sm: "80%", lg: "30%" }} pl={{ sm: 0, lg: 16 }}>
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.01}
            transitionEasing={"cubic-bezier(0.2,.98,.52,.99)"}
          >
            <Image
              w="100%"
              src={image.src}
              objectFit="cover"
              objectPosition="center"
              boxShadow="0 0 10px darkmagenta"
            />
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Whitepaper };
