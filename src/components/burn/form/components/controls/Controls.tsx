import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface IControlsProps {
  steps: number;
  currentStep: number;
  onNext: (newStep: number) => void;
  onPrev: (newStep: number) => void;
}

const Controls: FC<IControlsProps> = ({
  steps,
  currentStep,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleNext();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  function handlePrev() {
    if (currentStep === 1) return;
    onPrev(currentStep - 1);
  }

  function handleNext() {
    if (currentStep === steps) return;
    onNext(currentStep + 1);
  }

  return (
    <Box textAlign="right" pos="fixed" right="5vw" bottom="50px">
      <ButtonGroup isAttached variant="solid">
        <IconButton
          bg="brand.red"
          aria-label="Previous"
          onClick={handlePrev}
          icon={<FiChevronUp size={24} />}
          disabled={currentStep === 1}
        />
        <IconButton
          bg="brand.red"
          aria-label="Next"
          onClick={handleNext}
          icon={<FiChevronDown size={24} />}
          disabled={currentStep === steps}
        />
      </ButtonGroup>
    </Box>
  );
};

export { Controls };
