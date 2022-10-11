import { Container as ChakraContainer } from "@chakra-ui/react";

import { type FC, type ReactNode } from "react";

interface IPageContainerProps {
  children?: ReactNode;
  fullscreen?: boolean;
}

const Container: FC<IPageContainerProps> = ({ children, fullscreen }) => {
  if (fullscreen) {
    return (
      <ChakraContainer maxW="100%" p="0">
        {children}
      </ChakraContainer>
    );
  }

  return (
    <ChakraContainer maxW={["90%", "container.2lg"]} p={0}>
      {children}
    </ChakraContainer>
  );
};

export { Container };
