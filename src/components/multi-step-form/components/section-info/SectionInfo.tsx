import {
  Box,
  ButtonProps,
  Flex,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC, MouseEventHandler, ReactElement, ReactNode } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";

import { OkButton } from "../ok-button";
import { ISectionProps } from "../section/Section";

interface ISectionInfoProps
  extends Omit<
    ISectionProps,
    | "id"
    | "questionNo"
    | "required"
    | "children"
    | "continueButton"
    | "continueButtonPosition"
    | "continueButtonSize"
  > {
  questionNo?: number;
  required?: boolean;
  children?: JSX.Element;
  continueButton?: string | ReactNode;
  continueButtonPosition?: "left" | "center" | "right";
  continueButtonSize?: "md" | "xl";
  buttonType?: ButtonProps["type"];
  buttonIcon?: ReactElement | null;
  showEnterText?: boolean;
  error?: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const SectionInfo: FC<ISectionInfoProps> = ({
  title,
  question,
  questionNo,
  required,
  children,
  continueButton,
  continueButtonPosition,
  continueButtonSize,
  buttonType,
  buttonIcon,
  showEnterText,
  error,
  onClick,
}) => {
  return (
    <FormControl my={12}>
      <Flex alignItems="center" my={4} mb={6}>
        {questionNo && <Text fontSize="3xl">{questionNo}</Text>}
        {questionNo && <BsArrowRightShort size={30} />}
        <Heading pl={questionNo ? "7px" : "initial"} size="2xl">
          {title} {required ? "*" : ""}
        </Heading>
      </Flex>

      <Box>
        <Text fontSize="3xl" lineHeight={1}>
          {question}
        </Text>
      </Box>

      {error && typeof error === "string" ? (
        <Flex
          display="inline-flex"
          mt={4}
          bg="white"
          p={2}
          fontWeight="light"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box color="brand.red" mr={2}>
            <IoIosWarning />
          </Box>
          <Text fontSize="sm" lineHeight={1} color="brand.red">
            {error}
          </Text>
        </Flex>
      ) : (
        error
      )}

      <Box minH="20px" my={8}>
        {children}
      </Box>

      <Box minH="80px">
        {typeof continueButton === "string" ? (
          <OkButton
            title={continueButton}
            align={continueButtonPosition}
            buttonSize={continueButtonSize}
            type={buttonType}
            icon={buttonIcon}
            showEnterText={showEnterText}
            onClick={onClick}
          />
        ) : (
          continueButton
        )}
      </Box>
    </FormControl>
  );
};

export { SectionInfo };
