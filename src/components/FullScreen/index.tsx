import styled from "styled-components";
import Background from "../../assets/images/background-tunnel.png";

const FullScreen = ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
);

export default FullScreen;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${Background.src});
  background-size: contain;
  flex: 1;
  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 1rem 0;
  }
`;
