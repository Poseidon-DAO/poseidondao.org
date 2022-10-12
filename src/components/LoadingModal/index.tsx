import { Paragraph, Spinner } from "evergreen-ui";
import { Flex } from "@chakra-ui/react";

export default function LoadingModal({
  white,
  text,
}: {
  white?: boolean;
  text?: string;
}) {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.4)"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      {white ? (
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
          bg="white"
          maxW="90vw"
          maxH="90vh"
          p="5rem"
        >
          <Paragraph marginBottom={15}>{text}</Paragraph>
          <Spinner size={110} color="white" />
        </Flex>
      ) : (
        <Spinner size={110} color="white" />
      )}
    </Flex>
  );
}
