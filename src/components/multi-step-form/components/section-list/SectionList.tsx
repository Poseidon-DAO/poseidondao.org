import { Dispatch, FC, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";

import { ISectionProps, Section } from "../section/Section";

interface ISectionListProps {
  sections: ISectionProps[];
  changeStep?: Dispatch<SetStateAction<number>>;
}

const SectionList: FC<
  ISectionListProps & { changeStep?: Dispatch<SetStateAction<number>> }
> = ({ sections, changeStep }) => {
  return (
    <Box px="15vw">
      {sections.map((section, index) => {
        return (
          <Section
            key={section.id}
            {...section}
            index={index}
            sectionsNumber={sections.length}
            changeStep={changeStep}
          />
        );
      })}
    </Box>
  );
};

export { SectionList };
