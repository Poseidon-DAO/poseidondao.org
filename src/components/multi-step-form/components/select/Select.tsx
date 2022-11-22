import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
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
  const iconSize = useBreakpointValue({ sm: 30, lg: "16" });

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
            w={{ sm: "400px", lg: "initial" }}
            h={{ sm: "90px", lg: "initial" }}
          >
            <Flex
              px="6px"
              w={{ sm: "60px", lg: "auto" }}
              h={{ sm: "60px", lg: "auto" }}
              bg={isSelected ? "brand.text" : "transparent"}
              color={isSelected ? "brand.background" : "inherit"}
              border="1px solid"
              borderColor="brand.text"
              fontSize={{ sm: "2xl", lg: "initial" }}
              justifyContent="center"
              alignItems="center"
            >
              {key}
            </Flex>
            <Box ml={2} mr={6} w="100%">
              <Text fontSize={{ sm: "2xl", lg: "initial" }}>
                {Object.values(option)[0]}
              </Text>
            </Box>

            <Box visibility={isSelected ? "visible" : "hidden"}>
              <MdOutlineDone size={iconSize} />
            </Box>
          </Button>
        );
      })}
    </Stack>
  );
};

export { Select };
