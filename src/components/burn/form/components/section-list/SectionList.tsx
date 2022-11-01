import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { SectionInfo } from "../section-info";

export interface ISectionProps {
  id: string;
  title: string;
  question: string;
  questionNo: number;
  required: boolean;
  children: ReactNode;
  continueButton: String | ReactNode;
  continueButtonPosition: "left" | "center" | "right";
  continueButtonSize: "md" | "xl";
}

interface ISectionListProps {
  sections: ISectionProps[];
}

const SectionList: FC<ISectionListProps> = ({ sections }) => {
  return (
    <Box px="15vw">
      {sections.map((section, index) => {
        const { id, children, ...sectionData } = section;
        return (
          <Flex
            h="90vh"
            alignItems="center"
            justifyContent="center"
            id={`section-${index + 1}`}
            key={section.id}
          >
            <SectionInfo {...sectionData}>{children}</SectionInfo>
          </Flex>
        );
      })}
    </Box>
  );
};

export { SectionList };
