import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, useBreakpointValue, useTheme } from "@chakra-ui/react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { WALLET_ENABLED } from "constants/env";
import { Container, SocialIcons } from "components";
import { makeAnimatedElement } from "utils/makeAnimatedElement";

import logo from "../../../public/img/logo-transparent.png";
import Image from "next/image";

const headerColorForRoute: Record<string, string> = {
  "/": "transparent",
  "/drop": "blue",
};

function Header() {
  const theme = useTheme();
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: 150, sm: 200, lg: 120 });
  const iconsSize = useBreakpointValue({ sm: 80, lg: 50, base: 50 });

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

  const logoHeight = useTransform(scrollY, [0, 20], ["60%", "45%"]);

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

  const AnimatedBox = makeAnimatedElement(motion.div);
  const AnimatedImageWrapper = makeAnimatedElement(motion.div);

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
          <AnimatedImageWrapper
            cursor="pointer"
            onClick={handleReload}
            pos="relative"
            style={{ width: logoWidth, height: logoHeight, padding: "0.5rem" }}
          >
            <Image src={logo.src} layout="fill" alt="logo" priority={true} />
          </AnimatedImageWrapper>

          {WALLET_ENABLED ? (
            <ConnectButton />
          ) : (
            <Box>
              <SocialIcons size={iconsSize} />
            </Box>
          )}
        </Flex>
      </Container>
    </AnimatedBox>
  );
}

export { Header };
