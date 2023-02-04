import { useState } from "react";
import { Box, CircularProgress, Flex } from "@chakra-ui/react";

import { EmptyPage } from "components/deploy-collection-drop";

const DeployCollectionDrop = () => {
  const [isLoading, setIsLoading] = useState(
    !!process.env.NEXT_PUBLIC_OPEN_EDITION_URL
  );

  function handleSpinnerHide() {
    setIsLoading(false);
  }

  const showFrame = !!process.env.NEXT_PUBLIC_OPEN_EDITION_URL;

  if (!showFrame) {
    return <EmptyPage />;
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

export default DeployCollectionDrop;
