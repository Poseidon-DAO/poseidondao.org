import { FC } from "react";
import {
  Box,
  Flex,
  Text,
  Textarea as ChakraTextarea,
  TextareaProps,
} from "@chakra-ui/react";

interface ITextAreaProps extends TextareaProps {
  maxChars?: number;
}

const TextArea: FC<ITextAreaProps> = ({ maxChars, ...props }) => {
  return (
    <Box>
      <ChakraTextarea
        placeholder="Type your answer here..."
        variant="flushed"
        size="lg"
        resize="none"
        fontSize="3xl"
        h="140px"
        {...props}
      />

      <Flex justifyContent="flex-end" mt={2} opacity="0.7">
        <Text fontSize="sm">
          {(props?.value as string).length || 0} / {maxChars}
        </Text>
      </Flex>
    </Box>
  );
};

export { TextArea };
