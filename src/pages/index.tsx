import { useEffect } from "react";
import LoopGallery from "components/LoopGallery/LoopGallery";
import FullScreen from "components/FullScreen";
import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import styled from "styled-components";
import SocialMediaIcons from "components/UI_KIT/SocialMediaIcons";
import { BsTrophy, BsSuitHeart } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/router";

const skew = 8;
const IMAGES = [
  {
    skew: `skew(-${skew}deg, ${skew}deg)`,
    images: [
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
    ],
  },
  {
    skew: `skew(${skew}deg, -${skew}deg)`,
    images: [
      "clone2.png",
      "eva-0.jpg",
      "feeling-lost-.jpg",
      "future-archaeology.jpg",
      "gigachad.png",
      "grifter.png",
      "hipster-farnese.jpg",
      "res-adversae.jpg",
      "searching-for-god.jpg",
      "the-wall-part2.jpg",
      "waiting.jpg",
      "world-11235.jpg",
    ],
  },
  {
    skew: `skew(-${skew}deg, ${skew}deg)`,
    images: [
      "in-bocca-al-lupo.jpg",
      "kingsqueen.png",
      "limbus.jpg",
      "madonna-of-the-sacred-heart.jpg",
      "metahero.png",
      "mystic-lollipop.jpg",
      "r-e-c-o-v-e-r.png",
      "summermute.jpg",
      "torus.jpg",
      "squiggle.png",
      "wasteland.jpg",
      "ypj-womens-vs-long-beards-nft.jpg",
    ],
  },
];

const LandingPage = () => {
  const router = useRouter();
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <FullScreen>
        <Container>
          <ContentWrapper>
            <Heading
              marginBottom="2rem"
              color="white"
              fontSize={40}
              fontWeight={300}
              lineHeight="40px"
            >
              Artists & Collectors DAO <br />
            </Heading>
            <Paragraph color="white">
              Poseidon DAO brings NFTs to the next step, enabling their
              evolution. The DAO is built on top of the knowledge of a huge
              collective of artists and collectors, in order to create a
              decentralized entity that can lead NFTs and crypto art to another
              level.
            </Paragraph>
            <SocialMediaIcons />
          </ContentWrapper>
        </Container>
      </FullScreen>

      <FullScreen>
        <Pane
          width="100vw"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          {IMAGES.map(({ skew, images }) => (
            <LoopGallery skew={skew} imgArray={images} />
          ))}
        </Pane>
      </FullScreen>

      <FullScreen>
        <Container>
          <Pane flex={1}>
            <Pane display="flex" alignItems="flex-end">
              <Card>
                <BsTrophy size="25%" color="salmon" />
                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Heading size={600} color="white">
                    4
                  </Heading>
                  <CardText>Collections</CardText>
                </Pane>
              </Card>
              <Card big>
                <IoRocketOutline size="25%" color="white" />
                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Heading size={600} color="white">
                    3000+
                  </Heading>
                  <CardText>NFTs</CardText>
                </Pane>
              </Card>
            </Pane>
            <Pane display="flex" alignItems="flex-end">
              <Card big left>
                <BsSuitHeart size="25%" color="#1C8CF8" />
                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Heading size={600} color="white">
                    50+
                  </Heading>
                  <CardText>Artists</CardText>
                </Pane>
              </Card>
              <Card>
                <FaCoins size="25%" color="#06F1C2" />
                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Heading size={600} color="white">
                    $10M+
                  </Heading>
                  <CardText>Value</CardText>
                </Pane>
              </Card>
            </Pane>
          </Pane>
          <Pane flex={1} width="100%">
            <ContentWrapper>
              <Heading
                color="#d1d1da"
                fontSize={40}
                fontWeight={300}
                marginY='2rem'
              >
                DAO Collection
              </Heading>
              <Text fontWeight={200} color="#d1d1da" textAlign="left">
                The DAO is built on top of a massive treasury made up of
                historical NFTs, 1-of-1 and collectibles.
                <br />
                <br />
              </Text>
              <Text fontWeight={200} color="#d1d1da" textAlign="left">
                Poseidon valued art and artists investing in the long term
                vision of digital art.
              </Text>
              <br />
              <br />
              <Link
                href="https://opensea.io/PoseidonNftFund"
                target="_blank"
                rel="noreferrer"
              >
                <Pane display="flex" alignItems="center" cursor="pointer">
                  <Text color="#1C8CF8" marginRight="1px">
                    OpenSea Collection
                  </Text>
                  <AiOutlineRight
                    size={12}
                    color="#1C8CF8"
                    style={{ marginTop: "1.5px" }}
                  />
                </Pane>
              </Link>
              <Link
                href="https://superrare.com/poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                <Pane display="flex" alignItems="center" cursor="pointer">
                  <Text color="#1C8CF8" marginRight="1px">
                    Superrare Collection
                  </Text>
                  <AiOutlineRight
                    size={12}
                    color="#1C8CF8"
                    style={{ marginTop: "1.5px" }}
                  />
                </Pane>
              </Link>
              <Link
                href="https://foundation.app/@Poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                <Pane display="flex" alignItems="center" cursor="pointer">
                  <Text color="#1C8CF8" marginRight="1px">
                    Foundation Collection
                  </Text>
                  <AiOutlineRight
                    size={12}
                    color="#1C8CF8"
                    style={{ marginTop: "1.5px" }}
                  />
                </Pane>
              </Link>
            </ContentWrapper>
          </Pane>
        </Container>
      </FullScreen>

      <DerivativeSection>
        <Container>
          <ContentWrapper>
            <Heading
              marginBottom="2rem"
              color="white"
              fontSize={40}
              fontWeight={300}
              lineHeight="40px"
            >
              Derivatives Collection
            </Heading>
            <Paragraph color="white">
              The purpose of the derivatives collection is to combine different
              artistic styles with unique pieces of high commercial value but
              little artistic content, valuing both the starting work thanks to
              the collaboration of excellent artists as well as the DAO itself
              and future token holders. Niro Perrone, Gio' Roman and Bert One
              are just some of the artists the DAO partnered with for
              derivatives project.
            </Paragraph>
            <br />
            <Paragraph color="white">
              To make collectors and art lovers of all budgets participate as
              much as possible in the project, to all those who make bids during
              the auction, for each bid, they will be given in airdrop the
              governance tokens of the DAO.
            </Paragraph>
            <Link
              href="https://foundation.app/collection/posder"
              target="_blank"
              rel="noreferrer"
            >
              <Pane
                display="flex"
                alignItems="center"
                cursor="pointer"
                marginTop="1rem"
              >
                <Text color="#1C8CF8" marginRight="1px">
                  On Foundation
                </Text>
                <AiOutlineRight
                  size={12}
                  color="#1C8CF8"
                  style={{ marginTop: "1.5px" }}
                />
              </Pane>
            </Link>
          </ContentWrapper>
        </Container>
      </DerivativeSection>
    </>
  );
};

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
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    width: 90vw;
    justify-content: center;
  }
  @media (max-width: 992px) {
    width: 95vw;
    justify-content: center;
    flex-direction: column;
  }
`;

const Card = styled.div<{ big?: boolean; left?: boolean }>`
  display: flex;
  width: 11rem;
  max-width: 30vw;
  justify-content: space-between;
  padding: ${(props) => (props.big ? "2rem 2rem" : "1.5rem 1.2rem")};
  background-color: ${(props) => (props.big ? "#4824FA" : "#202251")};
  border-radius: 5px;
  transform: ${(props) =>
    props.left ? "translate(1px, -5px)" : props.big ? `translateX(-5px)` : ""};
  box-shadow: 5px 5px 5px 0px #00000040, inset 4px 4px 15px 0px #00000040,
    -8px 12px 19px -6px rgba(0, 0, 0, 0.52);
  @media (max-width: 992px) {
    padding: ${(props) => (props.big ? "1.5rem 1.5rem" : "1rem 1rem")};
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #1c8cf8;
`;

const CardText = styled.p`
  font-size: 18px;
  color: #8e88a9;
  margin: 0;
  line-height: 1.5;
  @media (max-width: 992px) {
    font-size: 14px;
  }
`;
const Icon = styled.div<{ size: number }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: #1c8cf8;
  @media (max-width: 992px) {
    width: ${(props) => props.size * 0.9};
    height: ${(props) => props.size * 0.9};
  }
`;

const DerivativeSection = styled.div`
  background-image: url("/img/derivatives/twitter-teaser.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default LandingPage;
