import { FC, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { SectionInfo } from "components/multi-step-form/components";

interface IIntroProps {
  onSubmit: () => void;
}

const Intro: FC<IIntroProps> = ({ onSubmit }) => {
  function handleSubmit() {
    onSubmit();
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <Flex
      w="100%"
      h="90vh"
      px="15vw"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <SectionInfo
          title="Become a Guardian - PDN Burn flow"
          question="The Guardians are the keepers of DAO collection. Their goal is growing
          and improving the collection in the most healthy and representative
          way. Guardians are identified as owners of the Guardian NFT. The
          Guardian NFTs are cumulative and can be obtained burning 200.000 PDN
          tokens."
          continueButton="Start"
          continueButtonSize="xl"
          buttonType="submit"
          buttonIcon={null}
          onClick={handleSubmit}
        />
      </Box>
    </Flex>
  );
};

export { Intro };
