import { FC, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import {
  Intro,
  Outro,
  type IIntroConfigProps,
  type IOutroConfigProps,
  type ISectionProps,
} from "./components";
import { Form } from "./Form";

const FORM_STATES = {
  NOT_STARTED: "not-started",
  STARTED: "started",
  SUBMITED: "submited",
} as const;

type FormStatus = typeof FORM_STATES[keyof typeof FORM_STATES];

export interface IFormConfig {
  intro: IIntroConfigProps | null;
  outro: IOutroConfigProps | null;
  sections: ISectionProps[];
}
interface IMultiStepFormProps {
  onSubmit?: (data: any) => void;
  formConfig: IFormConfig;
}

const MultiStepForm: FC<IMultiStepFormProps> = ({ onSubmit, formConfig }) => {
  const { intro, outro } = formConfig;

  const router = useRouter();

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

  function handleOutroSubmit() {
    router.push(outro?.redirectUrl || "/");
  }

  function handleFormSubmit(data: any) {
    onSubmit?.(data);
    handleFormStatusChange(FORM_STATES.SUBMITED);
  }

  if (hasNotStarted && intro) {
    return <Intro config={intro} onSubmit={handleIntroSubmit} />;
  }

  if (hasSubmited && outro) {
    return <Outro config={outro} onSubmit={handleOutroSubmit} />;
  }

  return (
    <Box minH="90vh">
      <Form formConfig={formConfig} onSubmit={handleFormSubmit} />
    </Box>
  );
};

export { MultiStepForm };
