import { Box } from "@chakra-ui/react";
import { ConnectWallet } from "components/burn";
import { MultiStepForm } from "components/multi-step-form";

import { type NextPage } from "next";
import { useAccount } from "wagmi";

const Burn: NextPage = () => {
  const { isConnected } = useAccount();

  function handleSubmit(data: any) {
    console.log({ data });
    console.log("submit");
  }

  return (
    <Box pt="10vh" bg="brand.background">
      {isConnected ? (
        <MultiStepForm onSubmit={handleSubmit} />
      ) : (
        <ConnectWallet />
      )}
    </Box>
  );
};

export default Burn;
