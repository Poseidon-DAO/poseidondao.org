import ConnectWallet from "components/Wallet";
import { useEffect, useState } from "react";
import { Image, Pane } from "evergreen-ui";
import Logo from "../../../public/img/logo-transparent.png";
import { useRouter } from "next/router";
import { Colors } from "components/UI_KIT/colors";
import { WALLET_ENABLED } from "config";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const defaultHeight = 4;
const defaultPadding = 3;

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");
  const [color, setColor] = useState("transparent");
  const [logoHeight, setLogo] = useState(defaultHeight);
  const [padding, setPadding] = useState(defaultPadding);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor(Colors.blue.clear);
      setLogo(2.5);
      setPadding(0);
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("transparent");
      setLogo(defaultHeight);
      setPadding(defaultPadding);
    }
  };

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };

  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <Pane
      height="10vh"
      width="100vw"
      zIndex={100}
      top={0}
      left={0}
      right={0}
      position="fixed"
      backgroundColor={color}
      paddingX="10vw"
      paddingTop={`${padding}rem`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      transition="0.15s all ease"
    >
      <Image
        src={Logo.src}
        height={`${logoHeight}rem`}
        onClick={() => router.push("/")}
        cursor="pointer"
      />
      {WALLET_ENABLED && (
        <Pane flex={1} justifyContent="flex-end" display="flex">
          <ConnectButton />
        </Pane>
      )}
    </Pane>
  );
}
