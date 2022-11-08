import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineEnter } from "react-icons/ai";

interface IPressEnterNotice {
  withOr?: boolean;
}

const PressEnterNotice: FC<IPressEnterNotice> = ({ withOr }) => {
  return (
    <Flex>
      <Text>
        {withOr ? "or" : ""} press{" "}
        <Text as="span" fontWeight="bold">
          Enter
        </Text>
      </Text>

      <Box ml={1}>
        <AiOutlineEnter />
      </Box>
    </Flex>
  );
};

export { PressEnterNotice };
