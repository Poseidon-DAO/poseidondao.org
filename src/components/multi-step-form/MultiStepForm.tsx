import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useScroll, useSpring } from "framer-motion";

import { Intro, BurnSelect, Verification } from "components/burn";

import { ProgressBar, SectionList, Controls } from "./components";

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const Form = () => {
  const [formStep, setFormStep] = useState(1);
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const progressBarWidth = useSpring(scrollYProgress, SPRING_CONFIG);

  const sections = [
    {
      id: "1",
      title: "How many NFTs you want to mint?",
      question:
        "The burn ratio is 200.000 PDN. You own X PDN, that means you can mint up to Y NFTs. Select the number of NFTs you want to mint. This will be executed in a single transaction that will be executed in the next step.",
      questionNo: 1,
      required: true,
      children: <BurnSelect />,
      continueButton: "OK",
      continueButtonPosition: "left" as "left",
      continueButtonSize: "md" as "md",
    },
    {
      id: "2",
      title: "Burn your PDN and become a Guardian",
      question:
        "This is the last step in the process where you confirm you want to become a Guardian burning your tokens.Click on the BURN button to run the burn transaction you will confirm using your wallet, for instance Metamask.",
      questionNo: 2,
      required: false,
      children: <Verification />,
      continueButton: "OK",
      continueButtonPosition: "left" as "left",
      continueButtonSize: "md" as "md",
    },
  ];

  useEffect(() => {
    getActiveStepAndScroll(formStep);
  }, [formStep]);

  function getActiveStepAndScroll(nextStep: number = 1) {
    const nextSection = document.getElementById(`section-${nextStep}`);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Box ref={scrollContainerRef} h="90vh" overflowY="hidden">
      <ProgressBar percentage={progressBarWidth} />
      <SectionList sections={sections} />
      <Controls
        steps={sections.length}
        currentStep={formStep}
        onNext={setFormStep}
        onPrev={setFormStep}
      />
    </Box>
  );
};

const MultiStepForm = () => {
  const [hasSurveryStarted, setSurveryStarted] = useState(false);

  return (
    <Box minH="90vh">
      {!hasSurveryStarted ? (
        <Box px="15vw">
          <Intro onSubmit={() => setSurveryStarted(true)} />
        </Box>
      ) : (
        <Form />
      )}
    </Box>
  );
};

export { MultiStepForm };
