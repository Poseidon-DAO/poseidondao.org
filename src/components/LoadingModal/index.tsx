import { Spinner } from "evergreen-ui";
import styled from "styled-components";

export default function LoadingModal() {
    return (
      <Container>
        <Spinner size={110} color='white' />
      </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;
