import { FC, useState } from "react";
import { Box } from "@chakra-ui/react";

import { Intro, Outro } from "components/burn";

import { Form } from "./Form";

const FORM_STATES = {
  NOT_STARTED: "not-started",
  STARTED: "started",
  SUBMITED: "submited",
} as const;

type FormStatus = typeof FORM_STATES[keyof typeof FORM_STATES];

interface IMultiStepFormProps {
  onSubmit?: (data: any) => void;
}

const MultiStepForm: FC<IMultiStepFormProps> = ({ onSubmit }) => {
  const [surveryStatus, setSurveyStatus] = useState<FormStatus>(
    FORM_STATES.NOT_STARTED
  );

  const hasNotStarted = surveryStatus === FORM_STATES.NOT_STARTED;
  const hasSubmited = surveryStatus === FORM_STATES.SUBMITED;

  function handleFormStatusChange(newStatus: FormStatus) {
    setSurveyStatus(newStatus);
  }

  function handleIntroSubmit() {
    handleFormStatusChange(FORM_STATES.STARTED);
  }

  function handleFormSubmit(data: any) {
    onSubmit?.(data);
    handleFormStatusChange(FORM_STATES.SUBMITED);
  }

  if (hasNotStarted) {
    return <Intro onSubmit={handleIntroSubmit} />;
  }

  if (hasSubmited) {
    return <Outro />;
  }

  return (
    <Box minH="90vh">
      <Form onSubmit={handleFormSubmit} />
    </Box>
  );
};

export { MultiStepForm };
