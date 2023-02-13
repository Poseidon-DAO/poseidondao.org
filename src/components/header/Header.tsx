import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useTranslation from "next-translate/useTranslation";
import { useAccount } from "wagmi";

import { WALLET_ENABLED } from "constants/env";
import { Container, LanguagePicker } from "components";
import { makeAnimatedElement } from "utils/makeAnimatedElement";

import logo from "../../../public/img/logo-transparent.png";

const headerColorForRoute: Record<string, string> = {
  "/": "transparent",
  "/drop": "blue",
  "/deploy-collection-drop": "black",
  "/deploy-collection": "black",
};

const i18nEnabled = process.env.NEXT_PUBLIC_ENABLE_I18N;
const dropAvailable = process.env.NEXT_PUBLIC_OPEN_EDITION_URL;

function Header() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const router = useRouter();
  const { isConnected } = useAccount();
  const buttonSize = useBreakpointValue({ base: 150, sm: 200, lg: 120 });

  const headerColor = headerColorForRoute[router.pathname as string];
  const headerThemeColor = theme.colors.brand[headerColor];

  const { scrollY } = useScroll();

  const headerBackgroundColor = useMotionValue(headerThemeColor);

  useEffect(() => {
    headerBackgroundColor.set(headerThemeColor);
  }, [router.pathname]);

  const logoWidth = useTransform(
    scrollY,
    [0, 20],
    [buttonSize, (buttonSize as number) - 30]
  );

  useEffect(() => {
    return scrollY.onChange((y) => {
      if (router.pathname !== "/") return;

      if (y > 20) {
        headerBackgroundColor.set(theme.colors.brand.blue);
      } else {
        headerBackgroundColor.set(theme.colors.transparent);
      }
    });
  }, []);

  function handleReload() {
    router.push("/");
  }

  function handleDropClick() {
    router.push("/deploy-collection-drop");
  }

  const AnimatedBox = makeAnimatedElement(motion.div);
  const AnimatedImage = makeAnimatedElement(motion.div);

  const showConnectButton =
    WALLET_ENABLED &&
    router.pathname !== "/deploy-collection-drop" &&
    router.pathname !== "/deploy-collection";
  const showDropButton = !!dropAvailable && router.pathname === "/";

  return (
    <AnimatedBox
      pos="fixed"
      w="100vw"
      zIndex={6}
      style={{ backgroundColor: headerBackgroundColor }}
    >
      <Container>
        <Flex
          h={{ sm: "8vh", lg: "10vh" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <AnimatedImage
            cursor="pointer"
            onClick={handleReload}
            style={{ width: logoWidth, padding: "0.5rem" }}
          >
            <Image src={logo} alt="logo" priority />
          </AnimatedImage>

          <Flex alignItems="center">
            <Flex
              display="inline-flex"
              alignItems="center"
              justifyContent={{ sm: "center", lg: "flex-end" }}
              p={{ sm: 8, lg: "initial" }}
              mr={showConnectButton ? 8 : showDropButton ? 4 : -4}
            >
              <Text
                fontSize={{ sm: "4xl", lg: "xl" }}
                textAlign={{ sm: "center", lg: "start" }}
              >
                <Link
                  href="https://poseidondao.blog/"
                  fontWeight="bold"
                  isExternal
                  mx={4}
                  _hover={{ color: "brand.red", textDecoration: "underline" }}
                >
                  Blog
                </Link>{" "}
                <Link
                  href="https://forum.poseidondao.org/"
                  fontWeight="bold"
                  isExternal
                  mx={4}
                  _hover={{ color: "brand.red", textDecoration: "underline" }}
                >
                  Forum
                </Link>{" "}
                <NextLink href="/artists" passHref prefetch={false}>
                  <Link
                    mx={4}
                    fontWeight="bold"
                    _hover={{ color: "brand.red", textDecoration: "underline" }}
                  >
                    Artists
                  </Link>
                </NextLink>
              </Text>
            </Flex>

            {showDropButton && (
              <Button
                variant="solid"
                bg={isConnected ? "white" : "brand.red"}
                color={isConnected ? "brand.black" : "white"}
                borderRadius="none"
                fontWeight="bolder"
                mr={showConnectButton ? 2 : 0}
                onClick={handleDropClick}
              >
                Drop
              </Button>
            )}

            {showConnectButton && <ConnectButton label={t("connect")} />}

            {i18nEnabled === "true" && (
              <Box ml={4}>
                <LanguagePicker />
              </Box>
            )}
          </Flex>
        </Flex>
      </Container>
    </AnimatedBox>
  );
}

export { Header };
