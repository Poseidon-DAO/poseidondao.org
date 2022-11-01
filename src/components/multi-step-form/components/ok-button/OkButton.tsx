import { FC } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

import { PressEnterNotice } from "../press-enter-notice";

interface IOkButtonProps {
  title?: string;
  align?: "left" | "center" | "right";
  buttonSize?: "md" | "xl";
}

const OkButton: FC<IOkButtonProps> = ({
  align,
  buttonSize = "md",
  title = "OK",
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
        rightIcon={<MdOutlineDone />}
        fontWeight="extrabold"
      >
        {title}
      </Button>
      <Box ml={4}>
        <PressEnterNotice />
      </Box>
    </Flex>
  );
};

export { OkButton };
