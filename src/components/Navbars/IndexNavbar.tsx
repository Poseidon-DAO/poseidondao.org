import ConnectWallet from "components/Wallet";
import { useEffect, useState } from "react";
import { Image, Pane } from "evergreen-ui";
import Logo from "../../../public/img/logo-transparent.png";
import { useRouter } from "next/router";

const defaultHeight = 5;
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
      setColor("#4824fa");
      setLogo(3);
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
      <Pane flex={1} onClick={() => router.push('/')} cursor='pointer'>
        <Image src={Logo.src} height={`${logoHeight}rem`} />
      </Pane>
      {process.env.NEXT_PUBLIC_ENABLE_WALLET && (
        <Pane flex={1} justifyContent="flex-end" display="flex">
          <ConnectWallet />
        </Pane>
      )}
    </Pane>
  );
}
