import styled from "styled-components";
import { roundBalance } from "utils";

interface WalletInfoProps {
  address: string;
  balance: string;
  onClick: () => void;
}

export default function WalletInfo({
  balance,
  address,
  onClick,
}: WalletInfoProps) {
  return (
    <Container onClick={onClick}>
      <LeftContainer>
        <p>{balance ? roundBalance(balance, 4) : "0.00"} ETH</p>
      </LeftContainer>
      <RightContainer address={address}>
        <p style={{ width: "fit-content" }}>
          {address?.slice(0, 8) + "..." + address?.slice(-8)}
        </p>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171941;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 0.5px solid #4824fa;
`;

const LeftContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-right: 0.5px solid #4824fa;
`;

const RightContainer = styled.div<Pick<WalletInfoProps, "address">>`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: ${(props) => (props.address ? "center" : "flex-end")};
`;
