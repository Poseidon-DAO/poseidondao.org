import { Spinner } from "reactstrap";
import styled from "styled-components";

export default function LoadingModal() {
    return (
      <Container>
        <Spinner animation="border" style={{ height: 110, width: 110 }}/>
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
