import Image from "next/image";
import NextLink from "next/link";
import { Box, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";

import { Container, SocialIcons } from "components";
import footer from "assets/images/footer.png";

import logo from "../../../public/img/logo-transparent.png";

const Footer = () => {
  const iconsSize = useBreakpointValue({ sm: 60, lg: 30, base: 30 });

  return (
    <Box borderTop="1px solid" borderColor="brand.text" pos="relative">
      <Box pos="absolute" bottom={0} top={0} zIndex={-1} minH="20vh" w="100vw">
        <Image
          src={footer}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          sizes="100vw"
        />
      </Box>

      <Container>
        <Flex py={8} alignItems="center" justifyContent="space-between">
          <Box color="brand.red">
            <Link href="mailto:info@poseidondao.org" isExternal>
              <Text
                fontSize={{ sm: "4xl", lg: "xl" }}
                fontWeight="bold"
                textAlign={{ sm: "center", lg: "start" }}
                color="brand.red"
              >
                Contact Us &gt;
              </Text>
            </Link>
          </Box>
          <Box>
            <SocialIcons size={iconsSize} />
          </Box>
        </Flex>
      </Container>

      <Box borderTop="1px solid" borderColor="brand.text">
        <Container>
          <Flex
            h={{ sm: "25vh", lg: "20vh" }}
            alignItems="center"
            flexDir={{ sm: "column-reverse", lg: "row" }}
            justifyContent={{ sm: "center", lg: "space-between" }}
          >
            <Box
              as={Flex}
              alignItems="center"
              justifyContent={{ sm: "center", lg: "initial" }}
              h="100%"
              w={{ sm: "100%", lg: "50%" }}
              p={{ sm: 20, lg: "initial" }}
            >
              <Box pr={{ sm: 0, lg: "2rem" }} w="50%" cursor="pointer">
                <Image alt="logo" src={logo} />
              </Box>
            </Box>

            <Box
              h="100%"
              w="100%"
              as={Flex}
              alignItems="center"
              justifyContent="center"
              borderWidth={{ sm: "0", lg: "0px 1px" }}
              borderColor="brand.text"
            >
              <Text
                fontSize={{ sm: "4xl", lg: "xl" }}
                textAlign={{ sm: "center", lg: "start" }}
              >
                {" "}
                <Link
                  href="https://opensea.io/PoseidonNftFund"
                  fontWeight="bold"
                  isExternal
                >
                  OpenSea
                </Link>{" "}
                |{" "}
                <Link
                  href="https://superrare.com/poseidonnftfund"
                  fontWeight="bold"
                  isExternal
                >
                  SuperRare
                </Link>{" "}
                |{" "}
                <Link
                  href="https://foundation.app/@Poseidonnftfund"
                  fontWeight="bold"
                  isExternal
                >
                  Foundation
                </Link>
              </Text>
            </Box>

            <Box
              h="100%"
              w={{ sm: "100%", lg: "50%" }}
              as={Flex}
              alignItems="center"
              justifyContent={{ sm: "center", lg: "flex-end" }}
              color="brand.red"
              p={{ sm: 8, lg: "initial" }}
            >
              <Text
                fontSize={{ sm: "4xl", lg: "xl" }}
                textAlign={{ sm: "center", lg: "start" }}
              >
                <Link
                  href="https://mirror.xyz/0x4Ac0eaC004c87e43a8D52CAC8B431FEaFBb9B62b"
                  fontWeight="bold"
                  isExternal
                >
                  Blog
                </Link>{" "}
                |{" "}
                <Link
                  href="https://forum.poseidondao.org/"
                  fontWeight="bold"
                  isExternal
                >
                  Forum
                </Link>{" "}
                |{" "}
                <NextLink href="/artists" passHref prefetch={false}>
                  <Link fontWeight="bold">Artists</Link>
                </NextLink>
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export { Footer };
