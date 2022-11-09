import { FC, useEffect, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

export interface IFormConfig {
  intro: IIntroConfigProps | null;
  outro: IOutroConfigProps | null;
  sections: ISectionProps[];
}
interface IMultiStepFormProps {
  onSubmit?: (data: any, statusSetter: () => void) => void;
  formConfig: IFormConfig;
  activeState?: FormStatus;
  isLoading?: boolean;
}

const FORM_STATES = {
  NOT_STARTED: "not-started",
  STARTED: "started",
  SUBMITED: "submited",
} as const;

type FormStatus = typeof FORM_STATES[keyof typeof FORM_STATES];

const divAnimationConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MultiStepForm: FC<IMultiStepFormProps> = ({
  onSubmit,
  formConfig,
  activeState,
  isLoading,
}) => {
  const { intro, outro } = formConfig;

  const [renderStatus, setRenderStatus] = useState({
    intro: !!intro,
    form: !!!intro,
    outro: !!outro,
  });
  const router = useRouter();

  const [surveryStatus, setSurveyStatus] = useState<FormStatus>(
    activeState || FORM_STATES.NOT_STARTED
  );

  useEffect(() => {
    if (activeState) {
      setSurveyStatus(activeState);
    }
  }, [activeState]);

  const hasNotStarted = surveryStatus === FORM_STATES.NOT_STARTED;
  const hasStarted = surveryStatus === FORM_STATES.STARTED;
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
    onSubmit?.(data, () => handleFormStatusChange(FORM_STATES.SUBMITED));
  }

  return (
    <>
      <AnimatePresence
        onExitComplete={() => setRenderStatus({ ...renderStatus, form: true })}
      >
        {hasNotStarted && intro && (
          <motion.div key="intro" {...divAnimationConfig}>
            <Intro config={intro} onSubmit={handleIntroSubmit} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence
        onExitComplete={() => setRenderStatus({ ...renderStatus, outro: true })}
      >
        {hasStarted && renderStatus.form && (
          <motion.div key="form" {...divAnimationConfig}>
            <Box minH="90vh">
              <Form
                formConfig={formConfig}
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasSubmited && outro && (
          <motion.div key="outro" {...divAnimationConfig}>
            <Outro config={outro} onSubmit={handleOutroSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { MultiStepForm };
