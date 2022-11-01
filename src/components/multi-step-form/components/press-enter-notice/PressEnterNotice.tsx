import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineEnter } from "react-icons/ai";

const PressEnterNotice = () => {
  return (
    <Flex>
      <Text>
        press{" "}
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
