import SuccessAnimation from "components/SuccessAnimation";
import { Paragraph, Spinner } from "evergreen-ui";
import styled from "styled-components";

export default function LoadingModal({
  white,
  text,
}: {
  white?: boolean;
  text?: string;
}) {
  return (
    <Container>
      {white ? (
        <SpinnerBackground>
          <Paragraph marginBottom={15}>{text}</Paragraph>
          <Spinner size={110} color="white" />
        </SpinnerBackground>
      ) : (
        <Spinner size={110} color="white" />
      )}
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

const SpinnerBackground = styled.div`
  padding: 5rem;
  max-width: 90vw;
  max-height: 90vh;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
