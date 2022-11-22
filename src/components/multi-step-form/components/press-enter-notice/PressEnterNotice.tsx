import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineEnter } from "react-icons/ai";

interface IPressEnterNotice {
  withOr?: boolean;
}

const PressEnterNotice: FC<IPressEnterNotice> = ({ withOr }) => {
  const arrowSize = useBreakpointValue({ sm: 40, lg: "20" });
  return (
    <Flex>
      <Text fontSize={{ sm: "3xl", lg: "initial" }}>
        {withOr ? "or" : ""} press{" "}
        <Text as="span" fontWeight="bold">
          Enter
        </Text>
      </Text>

      <Box ml={1}>
        <AiOutlineEnter size={arrowSize} />
      </Box>
    </Flex>
  );
};

export { PressEnterNotice };
