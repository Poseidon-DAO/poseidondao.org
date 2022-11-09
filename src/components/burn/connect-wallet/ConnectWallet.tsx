import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
        <Flex alignItems="center" my={4} mb={6}>
          <Heading size="lg">Connect your wallet</Heading>
        </Flex>

        <Box>
          <Text fontSize="lg" lineHeight={1.2} opacity={0.7}>
            To be able to burn your tokens you have to connect your wallet. If
            you already connected the wallet click the Connect button below to
            proceed.
          </Text>
        </Box>

        <Box minH="80px" my={8}>
          <ConnectButton />
        </Box>
      </Box>
    </Flex>
  );
};

export { ConnectWallet };
