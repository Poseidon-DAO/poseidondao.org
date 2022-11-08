import { FC } from "react";
import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface IControlsProps {
  steps: number;
  currentStep: number;
  disabled?: boolean;
  onPrev: () => void;
  onNext?: () => void;
}

const Controls: FC<IControlsProps> = ({
  steps,
  currentStep,
  disabled = false,
  onPrev,
  onNext,
}) => {
  return (
    <Box textAlign="right" pos="fixed" right="5vw" bottom="50px">
      <ButtonGroup isAttached variant="solid">
        <IconButton
          bg="brand.red"
          aria-label="Previous"
          onClick={onPrev}
          icon={<FiChevronUp size={24} />}
          disabled={currentStep === 1 || disabled}
        />
        <IconButton
          bg="brand.red"
          aria-label="Next"
          onClick={onNext}
          icon={<FiChevronDown size={24} />}
          disabled={currentStep === steps || disabled}
        />
      </ButtonGroup>
    </Box>
  );
};

export { Controls };
