import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { FC } from "react";

interface IInputProps extends InputProps {}

const Input: FC<IInputProps> = (props) => {
  return (
    <ChakraInput
      placeholder="Type your answer here..."
      variant="flushed"
      size="lg"
      fontSize="3xl"
      errorBorderColor="crimson"
      {...props}
    />
  );
};

export { Input };
