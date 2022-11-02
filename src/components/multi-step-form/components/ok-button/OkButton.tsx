import { FC, MouseEventHandler, ReactElement, ReactNode } from "react";
import { Box, Button, ButtonProps, Flex } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

import { PressEnterNotice } from "../press-enter-notice";

interface IOkButtonProps {
  title?: string;
  align?: "left" | "center" | "right";
  buttonSize?: "md" | "xl";
  type?: ButtonProps["type"];
  icon?: ReactElement | null;
  showEnterText?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const OkButton: FC<IOkButtonProps> = ({
  align,
  buttonSize = "md",
  title = "OK",
  type,
  icon = <MdOutlineDone />,
  showEnterText = true,
  onClick,
}) => {
  const alginMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[align || "left"];

  return (
    <Flex alignItems="center" justifyContent={alginMap}>
      <Button
        size={buttonSize}
        rightIcon={!!icon ? icon : undefined}
        fontWeight="extrabold"
        type={type}
        onClick={onClick}
      >
        {title}
      </Button>
      <Box ml={4}>{showEnterText && <PressEnterNotice />}</Box>
    </Flex>
  );
};

export { OkButton };