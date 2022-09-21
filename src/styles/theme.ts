import { extendTheme } from "@chakra-ui/react";
import { fonts } from "styles/fonts";
import { config } from "styles/config";
import { colors } from "styles/colors";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({ colors, fonts, config, breakpoints });
