import { FC } from "react";
import {
  Box,
  ButtonGroup,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
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
  const buttonIconSize = useBreakpointValue({ sm: 32, lg: 24 });

  return (
    <Box textAlign="right" pos="fixed" right="5vw" bottom="50px">
      <ButtonGroup isAttached variant="solid">
        <IconButton
          bg="brand.red"
          aria-label="Previous"
          onClick={onPrev}
          icon={<FiChevronUp size={buttonIconSize} />}
          disabled={currentStep === 1 || disabled}
          size="lg"
        />
        <IconButton
          bg="brand.red"
          aria-label="Next"
          onClick={onNext}
          icon={<FiChevronDown size={buttonIconSize} />}
          disabled={currentStep === steps || disabled}
          size="lg"
        />
      </ButtonGroup>
    </Box>
  );
};

export { Controls };
