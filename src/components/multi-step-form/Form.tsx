import { FC, useEffect, useRef, useState } from "react";
import { Box, usePrevious } from "@chakra-ui/react";
import { useScroll, useSpring } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { ProgressBar, SectionList, Controls } from "./components";

import { type IFormConfig } from "./MultiStepForm";

interface IFormProps {
  onSubmit?: (data: any) => void;
  formConfig: IFormConfig;
}

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const Form: FC<IFormProps> = ({ onSubmit, formConfig }) => {
  const { sections } = formConfig;
  const steps = sections.length;

  const [formStep, setFormStep] = useState(1);
  const prevFormStep = usePrevious(formStep);

  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const progressBarWidth = useSpring(scrollYProgress, SPRING_CONFIG);

  const formMethods = useForm();

  const {
    formState: { errors, isSubmitting },
    handleSubmit: onFormSubmit,
    watch,
  } = formMethods;

  const currentSectionName = sections.find(
    (s) => Number(s.id) === formStep
  )?.name;
  const currentSectionValue = watch(currentSectionName || "");

  useEffect(() => {
    getActiveStepAndScroll(formStep);
  }, [formStep]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        if (formStep === steps) {
          return forceSubmit();
        }

        handleNext();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [formStep, steps]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    let focusedElement = document.activeElement;

    if (currentSectionValue && !(formStep < prevFormStep)) {
      timerId = setTimeout(() => {
        if (
          focusedElement != document.body &&
          focusedElement instanceof HTMLElement
        ) {
          focusedElement?.blur();
        }

        handleNext();
      }, 2000);
    }

    return () => clearTimeout(timerId);
  }, [currentSectionValue, formStep, prevFormStep]);

  useEffect(() => {
    if (isSubmitting) {
      const errorKeys = Object.keys(errors);
      const errorSectionId = sections.find((s) => s.name === errorKeys[0])?.id;

      if (!!errorSectionId) {
        return setFormStep(Number(errorSectionId));
      }
    }
  }, [isSubmitting, errors]);

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

  function forceSubmit() {
    onFormSubmit(handleSubmit)();
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
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export { Form };
