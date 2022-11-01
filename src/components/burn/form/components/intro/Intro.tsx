import { FC, FormEvent, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { SectionInfo } from "../section-info";

interface IIntroProps {
  onSubmit: () => void;
}

const Intro: FC<IIntroProps> = ({ onSubmit }) => {
  function handleSubmit(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
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
    <form onSubmit={handleSubmit} method="POST">
      <Flex w="100%" h="90vh" alignItems="center" justifyContent="center">
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
          />
        </Box>
      </Flex>
    </form>
  );
};

export { Intro };
