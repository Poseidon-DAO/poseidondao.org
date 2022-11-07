import { Dispatch, FC, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";

import { ISectionProps, Section } from "../section/Section";

interface ISectionListProps {
  sections: ISectionProps[];
  changeStep?: Dispatch<SetStateAction<number>>;
  submitForm?: () => void;
}

const SectionList: FC<
  ISectionListProps & { changeStep?: Dispatch<SetStateAction<number>> }
> = ({ sections, changeStep, submitForm }) => {
  return (
    <Box px="15vw">
      {sections.map((section, index) => {
        return (
          <Section
            {...section}
            key={section.id}
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

export { SectionList };
