import { FC } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

interface IBurnSelectProps {
  options: {
    [key: string]: string | number;
    value: any;
  }[];
  value: any;
  onChange: (value: any) => void;
}

const Select: FC<IBurnSelectProps> = ({ options, value, onChange }) => {
  function handleSelect(value: any) {
    onChange(value);
  }

  return (
    <Stack display="inline-flex">
      {options.map((option) => {
        const key = Object.keys(option)[0];
        const isSelected = value === option.value;

        return (
          <Button
            key={key}
            border="1px solid"
            borderColor={isSelected ? "brand.text" : "whiteAlpha.300"}
            _focus={{ outline: "none" }}
            variant="unstyled"
            p={2}
            textAlign="left"
            onClick={() => handleSelect(option.value)}
            display="inline-flex"
            justifyContent="space-between"
            flexDir="row"
            borderRadius="none"
          >
            <Box
              px="6px"
              bg={isSelected ? "brand.text" : "transparent"}
              color={isSelected ? "brand.background" : "inherit"}
              border="1px solid"
              borderColor="brand.text"
            >
              {key}
            </Box>
            <Box ml={2} mr={6} w="100%">
              <Text>{Object.values(option)[0]}</Text>
            </Box>

            <Box visibility={isSelected ? "visible" : "hidden"}>
              <MdOutlineDone />
            </Box>
          </Button>
        );
      })}
    </Stack>
  );
};

export { Select };
