import { useMemo } from "react";
import { useAccount } from "wagmi";
import { Box, Button } from "@chakra-ui/react";
import { type NextPage } from "next";

import { BurnSelect, ConnectWallet, NotEnoughTokens } from "components/burn";
import { IFormConfig, MultiStepForm } from "components/multi-step-form";
import { type FormRegisteredFieldData } from "components/multi-step-form/components";

import { useDebounce } from "hooks";
import { useBurnStore } from "@zustand/burn";
import { usePDNBalance, usePDNBurn, usePDNRatio } from "lib/hooks";

const Burn: NextPage = () => {
  const { isConnected } = useAccount();

  const { balance } = usePDNBalance();
  const { ratio } = usePDNRatio();

  const burnAmount = useBurnStore((state) => state.burnAmount);
  const debouncedAmount = useDebounce(burnAmount);

  const { burn, isBurning, isBurnFetching, isBurnSuccess } = usePDNBurn({
    args: {
      amount: !!debouncedAmount ? `${Number(debouncedAmount) * ratio!}` : "",
    },
    enabled: !!ratio && ratio! <= Number(balance),
  });

  const maxAmountToBuy = Math.floor(Number(balance) / ratio!);

  const formConfig = useMemo<IFormConfig>(
    () => ({
      intro: {
        title: "Become a Guardian - PDN Burn flow",
        question: `The Guardians are the keepers of DAO collection. Their goal is growing and improving the collection in the most healthy and representative way. Guardians are identified as owners of the Guardian NFT. The Guardian NFTs are cumulative and can be obtained burning ${ratio} PDN tokens.`,
        continueButton: "Start",
        continueButtonSize: "xl",
        buttonType: "submit",
        buttonIcon: null,
      },
      outro: {
        title: "Congratulations! You are now a Guardian",
        question:
          "You correctly minted the Guardian NFT. What now? Visit our forum or our Discord to discover the life of a Guardian.",
        continueButton: "Go Home",
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
          defaultValue: "1",
          error: "Please choose a valid value to mint!",
          title: "How many NFTs you want to mint?",
          question: `The burn ratio is ${ratio} PDN. You own ${balance} PDN, that means you can mint up to ${maxAmountToBuy} NFTs. Select the number of NFTs you want to mint. This will be executed in a single transaction that will be executed in the next step.`,
          questionNo: 1,
          required: true,
          validate: (v: any) => v <= maxAmountToBuy && v > 0,
          children: (props: FormRegisteredFieldData | undefined) => (
            <BurnSelect {...props} />
          ),
          continueButton: "OK",
        },
        {
          id: "2",
          title: "Burn your PDN and become a Guardian",
          question:
            "This is the last step in the process where you confirm you want to become a Guardian burning your tokens.Click on the BURN button to run the burn transaction you will confirm using your wallet, for instance Metamask.",
          questionNo: 2,
          continueButton: (
            <Button
              size="xl"
              type="submit"
              isLoading={isBurning || isBurnFetching}
              isDisabled={isBurning || isBurnFetching}
            >
              Submit
            </Button>
          ),
        },
      ],
    }),
    [isBurning, isBurnFetching, maxAmountToBuy, ratio, balance]
  );

  function handleSubmit() {
    burn?.();
  }

  const nonSufficientFunds = ratio! > Number(balance);

  if (nonSufficientFunds) {
    return (
      <Box pt="10vh" bg="brand.background">
        <NotEnoughTokens />;
      </Box>
    );
  }

  return (
    <Box pt="10vh" bg="brand.background">
      {isConnected ? (
        <MultiStepForm
          activeState={isBurnSuccess ? "submited" : undefined}
          formConfig={formConfig}
          onSubmit={handleSubmit}
          isLoading={isBurning || isBurnFetching}
        />
      ) : (
        <ConnectWallet />
      )}
    </Box>
  );
};

export default Burn;
