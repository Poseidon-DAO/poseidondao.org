import { Image } from "evergreen-ui";
import styled, { keyframes } from "styled-components";
import { ProviderTypes } from "types";
interface ProviderProps {
  icon: string;
  name: ProviderTypes;
  onClick: (provider: ProviderTypes) => void;
}

export default function Provider({ icon, name, onClick }: ProviderProps) {
  return (
    <Container className="provider" onClick={() => onClick(name)}>
      <Image src={icon} alt={name} style={{ objectFit: "cover" }} height='100%' />
    </Container>
  );
}

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  margin: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(211, 211, 211, 0.6);
    box-shadow: inset;
    animation: ${scaleUp} 0.1s ease 0s 1 normal forwards;
  }
`