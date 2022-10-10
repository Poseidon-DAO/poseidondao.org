import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { fonts } from "styles/fonts";
import { config } from "styles/config";
import { colors } from "styles/colors";

export const theme: ThemeOverride = extendTheme({
  colors,
  fonts,
  config,
});
