import ConnectWallet from "components/Wallet";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";
import { Image, Pane } from "evergreen-ui";
import Logo from '../../../public/img/logo-transparent.png'

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");
  const [color, setColor] = useState("transparent");
  const [logoHeight, setLogo] = useState("5rem");

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
      setColor('#4824fa');
      setLogo("3rem");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("transparent");
      setLogo("5rem");
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
      height='10vh'
      width='100vw'
      zIndex={100}
      top={0}
      left={0}
      right={0}
      position='fixed'
      backgroundColor={color}
      paddingX='10vw'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Pane flex={1}>
        <Image src={Logo.src} height={logoHeight} />
      </Pane>
      <Pane flex={1} justifyContent='flex-end' display='flex' >
        <ConnectWallet />
      </Pane>
    </Pane>
  );
}
