import styled from "styled-components";

const FullScreen = ({ children }: { children: React.ReactNode }) => (
  <Container>
    {children}
  </Container>
);

export default FullScreen;


const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #202249;
  overflow: hidden;
  flex: 1;
  @media (max-width: 768px) {
    height: 75vh;
    padding: 1rem 0;
  }
`