import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

import { type FC, type ReactNode } from "react";

interface IPageContainerProps {
  children?: ReactNode;
  fullscreen?: boolean;
  takeFullHeight?: boolean;
  maxW?: ContainerProps["maxW"];
}

const Container: FC<IPageContainerProps> = ({
  children,
  fullscreen,
  takeFullHeight,
  maxW,
}) => {
  if (fullscreen) {
    return (
      <ChakraContainer
        maxW={maxW || "100%"}
        p={0}
        h={takeFullHeight ? "100%" : "initial"}
      >
        {children}
      </ChakraContainer>
    );
  }

  return (
    <ChakraContainer
      maxW={maxW || { sm: "90%", lg: "container.2xl" }}
      p={0}
      h={takeFullHeight ? "100%" : "initial"}
    >
      {children}
    </ChakraContainer>
  );
};

export { Container };
