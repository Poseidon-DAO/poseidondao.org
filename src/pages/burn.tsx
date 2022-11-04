import { Box } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import { BurnSelect, ConnectWallet } from "components/burn";
import { IFormConfig, MultiStepForm } from "components/multi-step-form";

import { type NextPage } from "next";

const formConfig: IFormConfig = {
  intro: {
    title: "Become a Guardian - PDN Burn flow",
    question:
      "The Guardians are the keepers of DAO collection. Their goal is growing and improving the collection in the most healthy and representative way. Guardians are identified as owners of the Guardian NFT. The Guardian NFTs are cumulative and can be obtained burning 200.000 PDN tokens.",
    continueButton: "Start",
    continueButtonSize: "xl",
    buttonType: "submit",
    buttonIcon: null,
  },
  outro: {
    title: "Congratulations! You are now a Guardian",
    question:
      "You correctly minted the Guardian NFT. What now? Visit our forum or our Discord to discover the life of a Guardian.",
    continueButton: "Go To Home",
    continueButtonSize: "xl",
    buttonType: "submit",
    buttonIcon: null,
    showEnterText: false,
    redirectUrl: "/",
  },
  sections: [
    {
      id: "1",
      name: "nftsAmount",
      defaultValue: "",
      error: "Please select one of the options!",
      title: "How many NFTs you want to mint?",
      question:
        "The burn ratio is 200.000 PDN. You own X PDN, that means you can mint up to Y NFTs. Select the number of NFTs you want to mint. This will be executed in a single transaction that will be executed in the next step.",
      questionNo: 1,
      required: true,
      continueButton: "OK",
      continueButtonPosition: "left",
      continueButtonSize: "md",
      validate: (v: any) => v > 0 && v < 4,
      children: (fieldName: string) => <BurnSelect fieldName={fieldName} />,
    },
    {
      id: "2",
      name: undefined,
      defaultValue: "",
      error: undefined,
      title: "Burn your PDN and become a Guardian",
      question:
        "This is the last step in the process where you confirm you want to become a Guardian burning your tokens.Click on the BURN button to run the burn transaction you will confirm using your wallet, for instance Metamask.",
      questionNo: 2,
      required: false,
      validate: undefined,
      continueButton: "OK",
      continueButtonPosition: "left",
      continueButtonSize: "md",
    },
  ],
};

const Burn: NextPage = () => {
  const { isConnected } = useAccount();

  function handleSubmit(data: any) {
    console.log({ data });
    console.log("submit");
  }

  return (
    <Box pt="10vh" bg="brand.background">
      {isConnected ? (
        <MultiStepForm formConfig={formConfig} onSubmit={handleSubmit} />
      ) : (
        <ConnectWallet />
      )}
    </Box>
  );
};

export default Burn;
