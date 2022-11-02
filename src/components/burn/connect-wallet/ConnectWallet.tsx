import { Box, Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { SectionInfo } from "components/multi-step-form/components";

const ConnectWallet = () => {
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
          title="Connect your wallet"
          question="To be able to burn your tokens you have to connect your wallet. If you already connected the wallet
          click the Connect button below to proceed."
          continueButton={null}
        />

        <ConnectButton />
      </Box>
    </Flex>
  );
};

export { ConnectWallet };
