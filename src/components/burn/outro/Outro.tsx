import { Box, Flex } from "@chakra-ui/react";

import { SectionInfo } from "components/multi-step-form/components";
import { useRouter } from "next/router";

const Outro = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

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
          title="Congratulations! You are now a Guardian"
          question="You correctly minted the Guardian NFT. What now? Visit our forum or our Discord to discover the life of a Guardian."
          continueButton="Go To Home"
          continueButtonSize="xl"
          buttonType="submit"
          buttonIcon={null}
          showEnterText={false}
          onClick={handleClick}
        />
      </Box>
    </Flex>
  );
};

export { Outro };
