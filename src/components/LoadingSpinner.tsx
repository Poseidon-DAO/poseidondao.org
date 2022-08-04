import { Spinner } from "evergreen-ui";
import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner size={110} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
