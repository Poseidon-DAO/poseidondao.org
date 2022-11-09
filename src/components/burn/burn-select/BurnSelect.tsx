import { FC } from "react";
import {
  Box,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

import { usePDNBalance, usePDNRatio } from "lib/hooks";
import { useBurnStore } from "@zustand/burn";
import { type FormRegisteredFieldData } from "components/multi-step-form/components";

interface IBurnSelectProps extends FormRegisteredFieldData {}

const labelStyles = {
  mt: "5",
  ml: "-0.5",
  fontSize: "sm",
};

const BurnSelect: FC<IBurnSelectProps> = ({ field }) => {
  const setBurnAmount = useBurnStore((state) => state.setBurnAmount);

  const { balance } = usePDNBalance();
  const { ratio } = usePDNRatio();

  const maxAmountToBuy = Math.floor(Number(balance) / ratio!);

  function handleChange(value: number) {
    field?.onChange(value);
    setBurnAmount(value);
  }

  const valueLength = !!field?.value ? `${field.value}`.split("").length : 0;

  const fieldValue = field?.value || 1;

  return (
    <Flex mt={12}>
      <NumberInput
        maxW="140px"
        mr="2rem"
        value={fieldValue}
        onChange={(value) => handleChange(Number(value))}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={fieldValue}
        onChange={handleChange}
        min={1}
        max={maxAmountToBuy}
        step={1}
      >
        <SliderMark value={1} {...labelStyles}>
          1
        </SliderMark>

        <SliderMark value={maxAmountToBuy} {...{ ...labelStyles, ml: -7 }}>
          {maxAmountToBuy}
        </SliderMark>

        <SliderMark
          value={fieldValue}
          textAlign="center"
          fontWeight="extrabold"
          bg="brand.red"
          color="white"
          mt="-8"
          ml={valueLength > 3 ? "-8" : "-4"}
          w={valueLength > 3 ? "16" : "8"}
        >
          {fieldValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="brand.red" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};

export { BurnSelect };
