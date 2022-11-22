import { Box, ButtonProps, Flex } from "@chakra-ui/react";

import { FC, MouseEventHandler, ReactElement, ReactNode } from "react";

import { SectionInfo } from "../";

export interface IOutroConfigProps {
  title: string;
  question: string;
  continueButton: string | ReactNode;
  continueButtonSize?: "md" | "xl";
  buttonType?: ButtonProps["type"];
  buttonIcon?: ReactElement | null;
  showEnterText?: boolean;
  redirectUrl?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IOutroProps {
  onSubmit?: () => void;
  config: IOutroConfigProps;
}

const Outro: FC<IOutroProps> = ({ config, onSubmit }) => {
  return (
    <Flex
      w="100%"
      h="90vh"
      px={{ sm: "5%", lg: "15vw" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <SectionInfo {...config} onClick={() => onSubmit?.()} />
      </Box>
    </Flex>
  );
};

export { Outro };
