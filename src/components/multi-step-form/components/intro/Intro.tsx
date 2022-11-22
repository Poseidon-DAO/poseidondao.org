import {
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { Box, ButtonProps, Flex } from "@chakra-ui/react";

import { SectionInfo } from "components/multi-step-form/components";

export interface IIntroConfigProps {
  title: string;
  question: string;
  continueButton: string | ReactNode;
  continueButtonSize?: "md" | "xl";
  buttonType?: ButtonProps["type"];
  buttonIcon?: ReactElement | null;
  showEnterText?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IIntroProps {
  onSubmit?: () => void;
  config: IIntroConfigProps;
}

const Intro: FC<IIntroProps> = ({ onSubmit, config }) => {
  function handleSubmit() {
    onSubmit?.();
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

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

export { Intro };
