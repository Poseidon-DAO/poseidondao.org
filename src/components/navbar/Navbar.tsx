import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, useBreakpointValue, useTheme } from "@chakra-ui/react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

import { WALLET_ENABLED } from "config";
import ConnectWallet from "components/Wallet";
import { Container } from "components/container";
import { makeAnimatedElement } from "framer/utils";

import logo from "../../../public/img/logo-transparent.png";

function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: 150, sm: 200, lg: 120 });

  const { scrollY } = useScroll();

  const headerBackgroundColor = useMotionValue(theme.colors.transparent);
  const logoWidth = useTransform(
    scrollY,
    [0, 20],
    [buttonSize, (buttonSize as number) - 30]
  );

  useEffect(() => {
    return scrollY.onChange((y) => {
      if (y > 20) {
        headerBackgroundColor.set(theme.colors.brand.blue);
      } else {
        headerBackgroundColor.set(theme.colors.transparent);
      }
    });
  }, []);

  function handleReload() {
    router.replace("/");
  }

  const AnimatedBox = makeAnimatedElement(motion.div);
  const AnimatedImage = makeAnimatedElement(motion.img);

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
            alt="logo"
            src={logo.src}
            onClick={handleReload}
            style={{ width: logoWidth }}
          />

          {WALLET_ENABLED && (
            <Box>
              <ConnectWallet />
            </Box>
          )}
        </Flex>
      </Container>
    </AnimatedBox>
  );
}

export { Navbar };
