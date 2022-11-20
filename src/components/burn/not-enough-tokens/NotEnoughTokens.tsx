import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const NotEnoughTokens = () => {
  const buttonSize = useBreakpointValue({ sm: "2xl", lg: "xl" });
  const router = useRouter();

  function handleButtonClick() {
    router.push("/");
  }
  return (
    <Flex
      w="100%"
      h="90vh"
      px={{ sm: "5%", lg: "15vw" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Flex alignItems="center" my={4} mb={6}>
          <Heading fontSize={{ sm: "7xl", lg: "3xl" }}>
            You don't have enough tokens
          </Heading>
        </Flex>

        <Box>
          <Text
            fontSize={{ sm: "4xl", lg: "lg" }}
            lineHeight={1.2}
            opacity={0.7}
          >
            To be able to burn your tokens you have to connect your wallet. If
            you already connected the wallet click the Connect button below to
            proceed.
          </Text>
        </Box>

        <Box minH="80px" my={8}>
          <Button size={buttonSize} onClick={handleButtonClick}>
            Go Home
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export { NotEnoughTokens };
