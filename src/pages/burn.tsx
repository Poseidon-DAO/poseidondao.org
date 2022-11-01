import { Box } from "@chakra-ui/react";
import { Form } from "components/burn/form";
import { Intro } from "components/burn/form/components/intro";

import { type NextPage } from "next";
import { useState } from "react";

const Burn: NextPage = () => {
  const [hasSurveryStarted, setSurveryStarted] = useState(false);

  return (
    <Box pt="10vh" bg="brand.background">
      <Box minH="90vh">
        {!hasSurveryStarted ? (
          <Box px="15vw">
            <Intro onSubmit={() => setSurveryStarted(true)} />
          </Box>
        ) : (
          <Form />
        )}
      </Box>
    </Box>
  );
};

export default Burn;
