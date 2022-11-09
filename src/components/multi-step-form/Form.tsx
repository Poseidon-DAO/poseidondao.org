import { FC, useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useScroll, useSpring } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { ProgressBar, SectionList, Controls } from "./components";

import { type IFormConfig } from "./MultiStepForm";

interface IFormProps {
  onSubmit?: (data: any) => void;
  formConfig: IFormConfig;
  isLoading?: boolean;
}

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const Form: FC<IFormProps> = ({ onSubmit, formConfig, isLoading }) => {
  const { sections } = formConfig;
  const steps = sections.length;

  const [formStep, setFormStep] = useState(1);

  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const progressBarWidth = useSpring(scrollYProgress, SPRING_CONFIG);

  const formMethods = useForm();

  const {
    formState: { errors, isSubmitting },
    handleSubmit: onFormSubmit,
  } = formMethods;

  useEffect(() => {
    getActiveStepAndScroll(formStep);
  }, [formStep]);

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

  useEffect(() => {
    const errorKeys = Object.keys(errors);

    if (isSubmitting && errorKeys.length) {
      const errorSectionId = sections.find((s) => s.name === errorKeys[0])?.id;

      if (!!errorSectionId) {
        return setFormStep(Number(errorSectionId));
      }
    }
  }, [isSubmitting, errors]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    const nextSection = document.getElementById(`section-${formStep}`);
    const input = nextSection?.querySelectorAll("input, textarea")[0];

    if (input instanceof HTMLElement) {
      timerId = setTimeout(() => {
        input.focus();
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [formStep]);

  function handlePrev() {
    setFormStep((step) => {
      if (step === 1) return step;
      return step - 1;
    });
  }

  function handleNext() {
    setFormStep((step) => {
      if (step === steps) return step;
      return step + 1;
    });
  }

  function getActiveStepAndScroll(nextStep: number = 1) {
    const nextSection = document.getElementById(`section-${nextStep}`);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(data: any) {
    onSubmit?.(data);
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onFormSubmit(handleSubmit)}>
        <Box ref={scrollContainerRef} h="90vh" overflowY="hidden">
          <ProgressBar percentage={progressBarWidth} />
          <SectionList sections={sections} changeStep={setFormStep} />
          <Controls
            steps={sections.length}
            currentStep={formStep}
            onNext={handleNext}
            onPrev={handlePrev}
            disabled={isLoading || isSubmitting}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export { Form };
