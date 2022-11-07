import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Flex } from "@chakra-ui/react";

import { usePDNBalance } from "lib/hooks";
import { useBurnStore } from "@zustand/burn";

import {
  Select,
  Input,
  type FormRegisteredFieldData,
} from "components/multi-step-form/components";

interface IBurnSelectProps extends FormRegisteredFieldData {}

let RATIO = 200_000;

const BurnSelect: FC<IBurnSelectProps> = ({ field }) => {
  const { watch } = useFormContext();
  const { balance } = usePDNBalance();

  const setBurnAmount = useBurnStore((state) => state.setBurnAmount);

  const maxAmountToBuy = Math.floor(Number(balance) / RATIO);

  const fieldName = field?.name;
  const currentValue = watch(fieldName || "");

  function handleOptionChange(newValue: number) {
    field?.onChange(newValue);
  }

  function handleInputChange(value: number) {
    field?.onChange(value);
    setBurnAmount(value);
  }

  if (maxAmountToBuy > 5) {
    return (
      <Input
        value={field?.value}
        onChange={(e) => handleInputChange(e.target.valueAsNumber)}
        type="number"
      />
    );
  }

  const options = Array.from({ length: maxAmountToBuy }, (_, index) => ({
    [String.fromCharCode(index + 65)]: `${index + 1} Guardian NFT`,
    value: index + 1,
  }));

  return (
    <Box>
      <Select
        options={options}
        value={currentValue}
        onChange={handleOptionChange}
      />
    </Box>
  );
};

export { BurnSelect };
