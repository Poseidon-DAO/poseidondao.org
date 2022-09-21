import styled from "styled-components";
import Background from "../../assets/images/background-tunnel.png";

interface FullScreenProps {
  children: React.ReactNode;
  showImage?: boolean;
}

const FullScreen = ({ children, showImage }: FullScreenProps) => (
  <Container showImage={showImage ?? false}>{children}</Container>
);

export default FullScreen;

const Container = styled.div<{ showImage: boolean }>`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: ${(props) =>
    props.showImage ? `url(${Background.src})}` : "none"};
  background-size: cover;
  background-position: center center;
  background-color: purple;
  flex: 1;
  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 1rem 0;
  }
`;
