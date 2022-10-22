import { Box, Flex } from "@chakra-ui/react";

import { Container } from "components";
import { NftInfo, NftView } from "layout/drop";
import { useState } from "react";

const Drop = () => {
  const [fullScreen, setFullScreen] = useState(false);

  function handleExpand() {
    setFullScreen((prevState) => !prevState);
  }

  return (
    <Box pt="14vh">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          {!fullScreen && (
            <Box w="35%">
              <NftInfo />
            </Box>
          )}

          <Box
            w={fullScreen ? "100%" : "65%"}
            h={fullScreen ? "80vh" : "initial"}
            pl={8}
          >
            <NftView onExpand={handleExpand} expanded={fullScreen} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Drop;
