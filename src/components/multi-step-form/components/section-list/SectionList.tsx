import { Box, Flex } from "@chakra-ui/react";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  useFormContext,
  Controller,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues,
} from "react-hook-form";

import { SectionInfo } from "../section-info";

export interface ISectionProps {
  id: string;
  name?: string;
  title: string;
  question: string;
  questionNo: number;
  required: boolean;
  children: null | ((name: string) => ReactNode | ReactNode);
  continueButton: String | ReactNode;
  continueButtonPosition: "left" | "center" | "right";
  continueButtonSize: "md" | "xl";
  changeStep?: Dispatch<SetStateAction<number>>;
  error?: string | ReactNode;
}

interface ISectionListProps {
  sections: ISectionProps[];
  changeStep?: Dispatch<SetStateAction<number>>;
  submitForm?: () => void;
}

const SectionList: FC<ISectionListProps> = ({
  sections,
  changeStep,
  submitForm,
}) => {
  return (
    <Box px="15vw">
      {sections.map((section, index) => {
        return (
          <Section
            {...section}
            index={index}
            sectionsNumber={sections.length}
            changeStep={changeStep}
            submitForm={submitForm}
          />
        );
      })}
    </Box>
  );
};

const Section: FC<
  ISectionProps & {
    index: number;
    sectionsNumber: number;
    submitForm?: () => void;
  }
> = (props) => {
  const {
    id,
    name,
    children,
    changeStep,
    sectionsNumber,
    submitForm,
    ...sectionData
  } = props;
  const [showButton, setShowButton] = useState(name ? null : true);

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const answer = watch(name || "");

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (!!name && !!answer) {
      timerId = setTimeout(() => {
        setShowButton(true);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [name, answer]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (Number(id) !== sectionsNumber) return;
      if (event.key === "Enter") {
        event.preventDefault();
        submitForm?.();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function renderWithController(
    name: string,
    children: JSX.Element
    // children: (data: {
    //   field: ControllerRenderProps<FieldValues, string>;
    //   fieldState: ControllerFieldState;
    //   formState: UseFormStateReturn<FieldValues>;
    // }) => ReactElement
  ) {
    return (
      <Controller
        name={name}
        rules={{ required: true, validate: (v) => v > 0 }}
        render={() => children}
      />
    );
  }

  const SectionContainer = (
    <Flex
      h="90vh"
      alignItems="center"
      justifyContent="center"
      id={`section-${sectionData.index + 1}`}
      key={id}
    >
      <SectionInfo
        {...{
          ...sectionData,
          continueButton: !!showButton ? sectionData.continueButton : null,
          onClick: !!name
            ? () => changeStep?.((prevStep: number) => prevStep + 1)
            : undefined,
          buttonType: Number(id) === sectionsNumber ? "submit" : "button",
          error: !!Object.keys(errors).find((key: string) => key === name)
            ? sectionData.error
            : "",
        }}
      >
        {children && children(name || "")}
      </SectionInfo>
    </Flex>
  );

  if (!name) {
    return SectionContainer;
  }

  return renderWithController(name, SectionContainer);
};

export { SectionList };
