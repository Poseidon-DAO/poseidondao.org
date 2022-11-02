import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

interface IBurnSelectProps {
  fieldName: string;
}

const BurnSelect: FC<IBurnSelectProps> = ({ fieldName }) => {
  const { watch, setValue } = useFormContext();

  const currentValue = watch(fieldName);

  function handleOptionChange(newValue: number) {
    setValue(fieldName, newValue);
  }

  return (
    <Box>
      <Stack display="inline-flex">
        {[
          {
            A: "1 Guardian NFT",
            value: 1,
          },
          {
            B: "2 Guardian NFT",
            value: 2,
          },
          {
            C: "3 Guardian NFT",
            value: 3,
          },
        ].map((option) => {
          const key = Object.keys(option)[0];
          const isSelected = currentValue === option.value;

          return (
            <Button
              key={key}
              border="1px solid"
              borderColor={isSelected ? "brand.text" : "whiteAlpha.300"}
              _focus={{ outline: "none" }}
              variant="unstyled"
              p={2}
              textAlign="left"
              onClick={() => handleOptionChange(option.value)}
              display="inline-flex"
              justifyContent="space-between"
              flexDir="row"
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
                <Text>{Object.values(option)[0] as string}</Text>
              </Box>

              <Box visibility={isSelected ? "visible" : "hidden"}>
                <MdOutlineDone />
              </Box>
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export { BurnSelect };
