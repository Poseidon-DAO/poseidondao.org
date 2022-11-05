import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";
import { usePDNBalance } from "lib/hooks";

import { type FormRegisteredFieldData } from "components/multi-step-form/components";
import { useBurnStore } from "@zustand/burn";

interface IBurnSelectProps extends FormRegisteredFieldData {}

let RATIO = 200_000;

const BurnSelect: FC<IBurnSelectProps> = ({ field }) => {
  const { watch, setValue } = useFormContext();
  const { balance } = usePDNBalance();

  const setBurnAmount = useBurnStore((state) => state.setBurnAmount);

  const maxAmountToBuy = Math.floor(Number(balance) / RATIO);

  const fieldName = field?.name;
  const currentValue = watch(fieldName || "");

  function handleOptionChange(newValue: number) {
    setValue(fieldName!, newValue);
  }

  function handleInputChange(value: number) {
    setValue(fieldName!, value);
    setBurnAmount(value);
  }

  if (maxAmountToBuy > 5) {
    return (
      <Flex display="inline-flex">
        <Input
          autoFocus
          value={field?.value}
          onChange={(e) => handleInputChange(e.target.valueAsNumber)}
          placeholder="E.g. 7"
          type="number"
        />
      </Flex>
    );
  }

  const options = Array.from({ length: maxAmountToBuy }, (_, index) => ({
    [String.fromCharCode(index + 65)]: `${index + 1} Guardian NFT`,
    value: index + 1,
  }));

  return (
    <Box>
      <Stack display="inline-flex">
        {options.map((option) => {
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
