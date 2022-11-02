import { FC, useEffect, useRef, useState } from "react";
import { Box, usePrevious } from "@chakra-ui/react";
import { useScroll, useSpring } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { ProgressBar, SectionList, Controls } from "./components";
import { BurnSelect } from "components/burn";

interface IFormProps {
  onSubmit?: (data: any) => void;
}

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const sections = [
  {
    id: "1",
    name: "nftsAmount",
    defaultValue: 0,
    error: "Please select one of the options!",
    title: "How many NFTs you want to mint?",
    question:
      "The burn ratio is 200.000 PDN. You own X PDN, that means you can mint up to Y NFTs. Select the number of NFTs you want to mint. This will be executed in a single transaction that will be executed in the next step.",
    questionNo: 1,
    required: true,
    children: (fieldName: string) => <BurnSelect fieldName={fieldName} />,
    continueButton: "OK",
    continueButtonPosition: "left" as "left",
    continueButtonSize: "md" as "md",
  },
  {
    id: "2",
    name: undefined,
    defaultValue: "",
    error: undefined,
    title: "Burn your PDN and become a Guardian",
    question:
      "This is the last step in the process where you confirm you want to become a Guardian burning your tokens.Click on the BURN button to run the burn transaction you will confirm using your wallet, for instance Metamask.",
    questionNo: 2,
    required: false,
    children: null,
    continueButton: "OK",
    continueButtonPosition: "left" as "left",
    continueButtonSize: "md" as "md",
  },
];

const Form: FC<IFormProps> = ({ onSubmit }) => {
  const [formStep, setFormStep] = useState(1);
  const prevFormStep = usePrevious(formStep);

  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const progressBarWidth = useSpring(scrollYProgress, SPRING_CONFIG);

  const fields = sections.map((section) => ({
    name: section?.name,
    value: section?.defaultValue || "",
  }));

  const formFields = fields.reduce((acc, v) => {
    if (!v.name) return acc;

    return { ...acc, [v.name as string]: v.value };
  }, {});

  const formMethods = useForm({
    defaultValues: formFields,
  });

  const {
    formState: { errors },
    handleSubmit: onFormSubmit,
    getValues,
    watch,
  } = formMethods;

  const currentSectionName = sections.find(
    (s) => Number(s.id) === formStep
  )?.name;

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
    const errorKeys = Object.keys(errors);
    const sectionIdToScrollTo = sections.find(
      (s) => s.name === errorKeys[0]
    )?.id;

    if (sectionIdToScrollTo && errorKeys.length) {
      setFormStep(Number(sectionIdToScrollTo));
    }
  }, [errors]);

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
          <Controls
            steps={sections.length}
            currentStep={formStep}
            onNext={setFormStep}
            onPrev={setFormStep}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export { Form };
