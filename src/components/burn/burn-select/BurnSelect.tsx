import { FC } from "react";
import {
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
  useBreakpointValue,
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
  const valueSize = useBreakpointValue({ sm: "2xl", lg: "md" });

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
    <Flex mt={12} flexDir={{ sm: "column", lg: "row" }}>
      <NumberInput
        maxW={{ sm: "330px", lg: "140px" }}
        mr="2rem"
        value={fieldValue}
        onChange={(value) => handleChange(Number(value))}
        size="lg"
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
        my={{ sm: 20, lg: "initial" }}
      >
        <SliderMark value={1} {...{ ...labelStyles, fontSize: valueSize }}>
          1
        </SliderMark>

        <SliderMark
          value={maxAmountToBuy}
          {...{ ...labelStyles, ml: -7, fontSize: valueSize }}
        >
          {maxAmountToBuy}
        </SliderMark>

        <SliderMark
          value={fieldValue}
          textAlign="center"
          fontWeight="extrabold"
          fontSize={valueSize}
          bg="brand.red"
          color="white"
          mt={{ sm: "-16", lg: "-8" }}
          ml={valueLength > 3 ? "-8" : "-4"}
          w={valueLength > 3 ? "16" : "8"}
        >
          {fieldValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="brand.red" />
        </SliderTrack>
        <SliderThumb w={{ sm: 12, lg: 6 }} h={{ sm: 12, lg: 6 }} />
      </Slider>
    </Flex>
  );
};

export { BurnSelect };
