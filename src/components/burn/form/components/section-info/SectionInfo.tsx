import { Box, Flex, FormControl, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import { OkButton } from "../ok-button";
import { type ISectionProps } from "../section-list";

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
  children?: ReactNode;
  continueButton?: string | ReactNode;
  continueButtonPosition?: "left" | "center" | "right";
  continueButtonSize?: "md" | "xl";
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
}) => {
  return (
    <FormControl isInvalid={false} my={12}>
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

      <Box minH="20px" my={8}>
        {children}
      </Box>

      {continueButton &&
        (typeof continueButton === "string" ? (
          <OkButton
            title={continueButton}
            align={continueButtonPosition}
            buttonSize={continueButtonSize}
          />
        ) : (
          continueButton
        ))}
    </FormControl>
  );
};

export { SectionInfo };
