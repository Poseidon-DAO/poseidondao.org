import { extendTheme, ThemeOverride } from "@chakra-ui/react";

import { fonts } from "chakra/fonts";
import { config } from "chakra/config";
import { colors } from "chakra/colors";

import * as components from "chakra/components";

export const theme: ThemeOverride = extendTheme({
  colors,
  fonts,
  config,
  components: { ...components },
});
