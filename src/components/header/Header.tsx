import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Flex, useBreakpointValue, useTheme } from "@chakra-ui/react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useTranslation from "next-translate/useTranslation";

import { WALLET_ENABLED } from "constants/env";
import { Container, SocialIcons, LanguagePicker } from "components";
import { makeAnimatedElement } from "utils/makeAnimatedElement";

import logo from "../../../public/img/logo-transparent.png";

const headerColorForRoute: Record<string, string> = {
  "/": "transparent",
  "/drop": "blue",
};

const i18nEnabled = process.env.NEXT_PUBLIC_ENABLE_I18N;

function Header() {
  const { t } = useTranslation("common");
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
  const AnimatedImage = makeAnimatedElement(motion.div);

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
            {WALLET_ENABLED ? (
              <ConnectButton label={t("connect")} />
            ) : (
              <Box>
                <SocialIcons size={iconsSize} />
              </Box>
            )}

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
