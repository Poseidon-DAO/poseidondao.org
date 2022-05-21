import Footer from "components/Footer/Footer";
import { useEffect } from "react";
import LoopGallery from "components/LoopGallery/LoopGallery";
import FullScreen from "components/FullScreen";
import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import styled from "styled-components";
import SocialMediaIcons from "components/UI_KIT/SocialMediaIcons";
import { BsTrophy, BsSuitHeart } from 'react-icons/bs';
import { IoRocketOutline } from 'react-icons/io5';
import { FaCoins} from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
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
      "what-a-dream-looks-like-.jpg",]
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
    ]
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
    ]
  }
]


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
      </FullScreen>

      <FullScreen>
        <Pane width='100vw' display='flex' flexDirection='column' justifyContent='space-evenly'>
          {IMAGES.map(({ skew, images }) => <LoopGallery scew={skew} imgArray={images}/> )}
        </Pane>
      </FullScreen>

      <FullScreen>
        <Container>
          <Pane flex={1}>
            <Pane display='flex' alignItems='flex-end'>
              <Card>
                <BsTrophy size={50} color='salmon' />
                <Pane display='flex' flexDirection='column' justifyContent='space-between'>
                  <Heading size={600} color='white'>4</Heading>
                  <Text fontSize={18} color='#8E88A9'>Collections</Text>
                </Pane>
              </Card>
              <Card big>
                <IoRocketOutline size={50} color='white' />
                <Pane display='flex' flexDirection='column' justifyContent='space-between'>
                  <Heading size={600} color='white'>3000+</Heading>
                  <Text fontSize={18} color='#8E88A9'>NFTs</Text>
                </Pane>
              </Card>
            </Pane>
            <Pane display='flex' alignItems='flex-end'>
              <Card big left>
                <BsSuitHeart size={40} color='#1C8CF8' />
                <Pane display='flex' flexDirection='column' justifyContent='space-between'>
                  <Heading size={600} color='white'>50+</Heading>
                  <Text fontSize={18} color='#8E88A9'>Artists</Text>
                </Pane>
              </Card>
              <Card>
                <FaCoins size={40} color='#06F1C2'/>
                <Pane display='flex' flexDirection='column' justifyContent='space-between'>
                  <Heading size={600} color='white'>$10M+</Heading>
                  <Text fontSize={18} color='#8E88A9'>Value</Text>
                </Pane>
              </Card>
            </Pane>
          </Pane>
          <Pane flex={1}>
            <Pane width='80%'>
              <Heading marginBottom='2rem' color='#d1d1da' fontSize={40} fontWeight={300}>
                DAO Collection
              </Heading>
              <Text fontWeight={200} color='#d1d1da'>
                The DAO is built on top of a massive treasury made up of
                historical NFTs, 1-of-1 and collectibles.
                <br />
                <br />
              </Text>
              <Text fontWeight={200} color='#d1d1da'>
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
                <Pane display='flex' alignItems='center' cursor='pointer'>
                  <Text color='#1C8CF8' marginRight='1px'>
                    OpenSea Collection
                  </Text>
                  <AiOutlineRight size={12} color='#1C8CF8' style={{ marginTop: '1.5px' }}/>
                </Pane>
              </Link>
              <Link
                href="https://superrare.com/poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                <Pane display='flex' alignItems='center' cursor='pointer'>
                  <Text color='#1C8CF8' marginRight='1px'>
                    Superrare Collection
                  </Text>
                  <AiOutlineRight size={12} color='#1C8CF8' style={{ marginTop: '1.5px' }}/>
                </Pane>
              </Link>
              <Link
                href="https://foundation.app/@Poseidonnftfund"
                target="_blank"
                rel="noreferrer"
              >
                <Pane display='flex' alignItems='center' cursor='pointer'>
                  <Text color='#1C8CF8' marginRight='1px'>
                    Foundation Collection
                  </Text>
                  <AiOutlineRight size={12} color='#1C8CF8' style={{ marginTop: '1.5px' }}/>
                </Pane>
              </Link>
            </Pane>
          </Pane>
        </Container>
      </FullScreen>
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

const Card = styled.div<{ big?: boolean, left?: boolean }>`
  display: flex;
  width: 35%;
  justify-content: space-between;
  padding: ${props => props.big ? '2rem 2rem' : '1.5rem 1.2rem'};
  background-color: ${props => props.big ? '#4824FA' : '#202251'};
  border-radius: 5px;
  transform: ${props => 
    props.left ? 'translate(1px, -5px)' : 
    props.big ? `translateX(-5px)` : 
    ''};
  box-shadow: 5px 5px 5px 0px #00000040, inset 4px 4px 15px 0px #00000040, -8px 12px 19px -6px rgba(0,0,0,0.52);
`

const Link = styled.a`
  text-decoration: none;
  color: #1C8CF8;
`

export default LandingPage;