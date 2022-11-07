import { Flex } from "@chakra-ui/react";
import { Dispatch, FC, ReactElement, ReactNode, SetStateAction } from "react";
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
  defaultValue?: string | number;
  error?: string | ReactNode;
  title: string;
  question: string;
  questionNo?: number;
  required?: boolean;
  validate?: (v: any) => boolean;
  children?: (data: FormRegisteredFieldData) => ReactElement;
  continueButton?: string | ReactNode;
  continueButtonPosition?: "left" | "center" | "right";
  continueButtonSize?: "md" | "xl";
}

type ISectionExtendedProps = ISectionProps & {
  index: number;
  sectionsNumber: number;
  changeStep?: Dispatch<SetStateAction<number>>;
};

export interface FormRegisteredFieldData {
  field?: ControllerRenderProps<FieldValues, string>;
  fieldState?: ControllerFieldState;
  formState?: UseFormStateReturn<FieldValues>;
}

const SectionContainer = ({
  index,
  id,
  sectionsNumber,
  name,
  continueButton,
  error,
  children,
  changeStep,
  field,
  fieldState,
  formState,
  ...sectionData
}: FormRegisteredFieldData & ISectionExtendedProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Flex
      h="90vh"
      alignItems="center"
      justifyContent="center"
      id={`section-${index + 1}`}
      key={id}
    >
      <SectionInfo
        {...{
          ...sectionData,
          continueButton,
          buttonType: Number(id) === sectionsNumber ? "submit" : "button",
          onClick: !!name
            ? () => changeStep?.((prevStep: number) => prevStep + 1)
            : undefined,
          error: Object.keys(errors).find((e) => e === name)
            ? error
            : undefined,
        }}
      >
        {children &&
          children({
            field,
            fieldState,
            formState,
          })}
      </SectionInfo>
    </Flex>
  );
};

const Section: FC<ISectionExtendedProps> = (props) => {
  const { id, name, children, changeStep, sectionsNumber, ...sectionData } =
    props;

  const { control } = useFormContext();

  function renderWithController(
    name: string,
    children: (data: FormRegisteredFieldData) => ReactElement
  ) {
    return (
      <Controller
        control={control}
        defaultValue={sectionData.defaultValue || ""}
        name={name}
        rules={{
          required: sectionData.required,
          validate: sectionData.validate,
        }}
        render={(props) => children(props)}
      />
    );
  }

  if (!name) {
    return <SectionContainer {...props} />;
  }

  return renderWithController(name, (formProps) => (
    <SectionContainer {...props} {...formProps} />
  ));
};

export { Section };
