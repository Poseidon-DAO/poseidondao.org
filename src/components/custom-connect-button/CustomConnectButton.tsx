import { Button, useBreakpointValue } from "@chakra-ui/react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";

export const CustomConnectButton = () => {
  const buttonSize = useBreakpointValue({ sm: "2xl", lg: "xl" });

  return (
    <RainbowConnectButton.Custom>
      {({ openConnectModal }) => {
        return (
          <Button size={buttonSize} onClick={openConnectModal} type="button">
            Connect
          </Button>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
