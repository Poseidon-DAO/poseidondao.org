import { Flex } from "@chakra-ui/react";
import {
  Dispatch,
  FC,
  ReactElement,
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
  defaultValue?: string;
  error?: string | ReactNode;
  title: string;
  question: string;
  questionNo?: number;
  required?: boolean;
  validate?: (v: any) => boolean;
  children?: (fieldName: string) => JSX.Element;
  continueButton: string | ReactNode;
  continueButtonPosition: "left" | "center" | "right";
  continueButtonSize: "md" | "xl";
}

type ISectionExtendedProps = ISectionProps & {
  index: number;
  sectionsNumber: number;
  submitForm?: () => void;
  changeStep?: Dispatch<SetStateAction<number>>;
};

const Section: FC<ISectionExtendedProps> = (props) => {
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
    control,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext();

  const answer = watch(name || "");

  useEffect(() => {
    if (name && answer) {
      const revalidate = async () => {
        await trigger(name);
      };

      revalidate();
    }
  }, [name, answer]);

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
    children: (data: {
      field: ControllerRenderProps<FieldValues, string>;
      fieldState: ControllerFieldState;
      formState: UseFormStateReturn<FieldValues>;
    }) => ReactElement
  ) {
    return (
      <Controller
        control={control}
        defaultValue={sectionData.defaultValue}
        name={name}
        rules={{
          required: sectionData.required,
          validate: sectionData.validate,
        }}
        render={(props) => children(props)}
      />
    );
  }

  const SectionContainer = (props: {
    formState?: UseFormStateReturn<FieldValues>;
    fieldState?: ControllerFieldState;
    field?: ControllerRenderProps<FieldValues, string>;
  }) => {
    return (
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
            error: Object.keys(errors).find((e) => e === name)
              ? sectionData.error
              : undefined,
          }}
        >
          {children && children(name || "")}
        </SectionInfo>
      </Flex>
    );
  };

  if (!name) {
    return <SectionContainer />;
  }

  return renderWithController(name, ({ formState, fieldState }) => (
    <SectionContainer formState={formState} fieldState={fieldState} />
  ));
};

export { Section };
