import { useState } from "react";
import { Box, CircularProgress, Flex, Text } from "@chakra-ui/react";

const OpenEdition = () => {
  const [isLoading, setIsLoading] = useState(
    !!process.env.NEXT_PUBLIC_OPEN_EDITION_URL
  );

  function handleSpinnerHide() {
    setIsLoading(false);
  }

  const showFrame = !!process.env.NEXT_PUBLIC_OPEN_EDITION_URL;

  if (!showFrame) {
    return (
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">
          No deploy collection drop planned, please come back later{" "}
        </Text>
      </Flex>
    );
  }

  return (
    <Box
      pt="10vh"
      w="100vw"
      h="100vh"
      overflow={isLoading ? "hidden" : "initial"}
    >
      {isLoading && (
        <Flex w="100vw" h="90vh" justifyContent="center" alignItems="center">
          <CircularProgress isIndeterminate color="black" size={4} />
        </Flex>
      )}

      <iframe
        src={process.env.NEXT_PUBLIC_OPEN_EDITION_URL}
        width="100%"
        height="100%"
        onLoad={handleSpinnerHide}
      />
    </Box>
  );
};

export default OpenEdition;
