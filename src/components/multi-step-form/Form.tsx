import { FC, useEffect, useRef, useState } from "react";
import { Box, usePrevious } from "@chakra-ui/react";
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
  const errorKeys = Object.keys(errors);
  const currentSectionValue = watch((currentSectionName || "") as any);

  useEffect(() => {
    getActiveStepAndScroll(formStep);
  }, [formStep]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (currentSectionValue && !(formStep < prevFormStep)) {
      timerId = setTimeout(() => {
        setFormStep((formStep) => {
          if (formStep === sections.length) {
            return formStep;
          }

          return formStep + 1;
        });
      }, 1500);
    }

    return () => clearTimeout(timerId);
  }, [currentSectionValue, formStep, prevFormStep]);

  useEffect(() => {
    const sectionIdToScrollTo = sections.find(
      (s) => s.name === errorKeys[0]
    )?.id;

    if (sectionIdToScrollTo && errorKeys.length) {
      setFormStep(Number(sectionIdToScrollTo));
    }
  }, [isSubmitting]);

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
          <SectionList
            sections={sections}
            changeStep={setFormStep}
            submitForm={forceSubmit}
          />
          {!isLoading && !isSubmitting && (
            <Controls
              steps={sections.length}
              currentStep={formStep}
              onNext={setFormStep}
              onPrev={setFormStep}
            />
          )}
        </Box>
      </form>
    </FormProvider>
  );
};

export { Form };
