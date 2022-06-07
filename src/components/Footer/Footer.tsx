import { Colors } from "components/UI_KIT/colors";
import { Heading, Pane } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Image
          height={100}
          width={150}
          alt="..."
          className="logo img-fluid rounded"
          src="/img/logo-transparent.png"
        />
        <Pane
          display="flex"
          flex={1}
          maxWidth="100vw"
          marginBottom={2}
        >
          <Column>
            <ColumnContent>
              <NavLink
                href="https://opensea.io/PoseidonNftFund"
                target="_blank"
                rel="noreferrer"
              >
                OpenSea
              </NavLink>
              <NavLink
                href="https://superrare.com/poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                SuperRare
              </NavLink>
              <NavLink
                href="https://foundation.app/@Poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                Foundation
              </NavLink>
            </ColumnContent>
          </Column>
          <Column>
            <ColumnContent>
              <NavLink
                href="mailto:info@poseidonnft.org"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </NavLink>
              <NavLink
                href="https://mirror.xyz/0x4Ac0eaC004c87e43a8D52CAC8B431FEaFBb9B62b"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </NavLink>
              <NavLink
                href="https://poseidongroup.ch/"
                target="_blank"
                rel="noreferrer"
              >
                Group
              </NavLink>
              <Link href="/artists">
                <NavLink>Artists</NavLink>
              </Link>
            </ColumnContent>
          </Column>
        </Pane>
        <Pane
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading marginBottom="1rem" color={Colors.white.gray}>
            Follow us:
          </Heading>
          <Row>
            <SocialIcon
              className="social-icon"
              target="_blank"
              url="https://twitter.com/Poseidon_SF/"
              bgColor={Colors.blue.clear}
              fgColor="white"
            />
            <SocialIcon
              className="social-icon"
              target="_blank"
              url="https://discord.gg/gUsX8MpTqk"
              bgColor={Colors.blue.clear}
              fgColor="white"
            />
            <SocialIcon
              className="social-icon"
              target="_blank"
              url="https://instagram.com/poseidondao"
              bgColor={Colors.blue.clear}
              fgColor="white"
            />
            <SocialIcon
              className="social-icon"
              target="_blank"
              url="https://github.com/Poseidon-DAO"
              bgColor={Colors.blue.clear}
              fgColor="white"
            />
          </Row>
        </Pane>
      </Content>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  max-width: 100vw;
  width: 100vw;
  padding: 50px 0;
  border-top: 2px solid #e14eca;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #292d61 30%, #171941 80%);
  @media (max-width: 991px) {
    padding-left: 0;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const Content = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  @media (max-width: 991px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1da;
  cursor: pointer;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  max-width: 50%;
  flex: 1;
  @media (max-width: 991px) {
    width: 15rem;
    max-width: 90vw;
    margin: 1rem 0;
  }
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  min-width: 250px;
`;
