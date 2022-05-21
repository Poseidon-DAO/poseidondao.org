import Footer from "components/Footer/Footer";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import LoopGallery from "components/LoopGallery/LoopGallery";
import { PageBackground } from "components/PageBackground";
import { BoxIcon, Heading, Pane, Paragraph } from "evergreen-ui";
import styled from "styled-components";
import SocialMediaIcons from "components/UI_KIT/SocialMediaIcons";

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <Pane
        height='100vh' 
        width='100vw' 
        display="flex" 
        margin={0} 
        alignItems="center" 
        backgroundColor='#202249'
        justifyContent="center"
      >
        <Container>
          <ContentWrapper>
            <Heading marginBottom='2rem' color='white' fontSize={40} fontWeight={300}>Artists & Collectors DAO <br /></Heading>
            <Paragraph color='white'>
              Poseidon DAO brings NFTs to the next step, enabling their
              evolution. The DAO is built on top of the knowledge of a huge
              collective of artists and collectors, in order to create a
              decentralized entity that can lead NFTs and crypto art to
              another level.
            </Paragraph>
            <SocialMediaIcons />
          </ContentWrapper>
        </Container>
      </Pane>

      <LoopGallery>
          {[
            "-x-.jpg",
            "afternoon-garage.jpg",
          "ape.png",
            "basktopus.jpg",
            "clone1.png",
            "club50.jpg",
            "contemplation.jpg",
            "core-craving.jpg",
            "queen.png",
          "the-k-pop-is-dead-nft-.jpg",
            "punk.png",
            "what-a-dream-looks-like-.jpg",
          ].map((i: string) => (
        <img
            key={i}
              alt="..."
              className="img-fluid floating img-gallery"
              src={require(`assets/img/collection/${i}`).default}
            />
          ))}
      </LoopGallery>
    </>
  )}

const ContentWrapper = styled.div`
  text-align: start;
  display: flex;
  width: 450px;
  flex-direction: column;
  @media (max-width: 992px) {
    text-align: center;
    max-width: 100%;
    align-items: center;
  }
  `
  const Container = styled.div`
  display: flex;
  width: 70vw;
  @media (max-width: 992px) {
    width: 95vw;
    align-items: center;
    justify-content: center;
  }
`

export default LandingPage;