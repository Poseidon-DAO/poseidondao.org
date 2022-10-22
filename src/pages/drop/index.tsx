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
        <Flex
          flexDir={{ sm: "column-reverse", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          {!fullScreen && (
            <Box w={{ sm: "100%", lg: "35%" }} mt={{ sm: 12, lg: 0 }}>
              <NftInfo />
            </Box>
          )}

          <Box
            w={{
              sm: "100%",
              lg: fullScreen ? "100%" : "65%",
            }}
            h={fullScreen ? "80vh" : "initial"}
            pl={{ sm: 0, lg: 8 }}
          >
            <NftView onExpand={handleExpand} expanded={fullScreen} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Drop;
