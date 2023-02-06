import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type IProps = {
  title: string;
  message: string;
};

const CustomMessage = ({ title, message }: IProps) => {
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
          <Heading fontSize={{ sm: "7xl", lg: "3xl" }}>{title}</Heading>
        </Flex>

        <Box>
          <Text
            fontSize={{ sm: "4xl", lg: "lg" }}
            lineHeight={1.2}
            opacity={0.7}
          >
            {message}
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

export { CustomMessage };
