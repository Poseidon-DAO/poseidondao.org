import { Box } from "@chakra-ui/react";
import { MultiStepForm } from "components/multi-step-form";

import { type NextPage } from "next";

const Burn: NextPage = () => {
  return (
    <Box pt="10vh" bg="brand.background">
      <MultiStepForm />
    </Box>
  );
};

export default Burn;
