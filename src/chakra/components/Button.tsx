import { theme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    fontWeight: "bold",
  },
  sizes: {
    ...theme.components.Button.sizes,
    xl: {
      fontSize: "xl",
      px: 24,
      py: 4,
    },
  },
  variants: {
    pdn: (props: any) => ({
      bg: props.theme.colors.brand.red,
      borderRadius: "none",
    }),
  },
  defaultProps: {
    variant: "pdn",
  },
};

export { Button };
