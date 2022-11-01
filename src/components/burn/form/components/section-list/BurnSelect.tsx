import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

import { MdOutlineDone } from "react-icons/md";

const FIELD_NAME = "nftAmount";

const BurnSelect = () => {
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
          const isSelected = true; // currentValue === option.value;

          return (
            <Button
              key={key}
              border="1px solid"
              borderColor={isSelected ? "brand.text" : "whiteAlpha.300"}
              _focus={{ outline: "none" }}
              variant="unstyled"
              p={2}
              textAlign="left"
              // onClick={() => onChange(option.value)}
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
