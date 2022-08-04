import { Colors } from "components/UI_KIT/colors";
import { Text } from "evergreen-ui";
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
        <Text color={Colors.white.primary}>
          {balance ? roundBalance(balance, 4) : "0.00"} ETH
        </Text>
      </LeftContainer>
      <RightContainer address={address}>
        <Text color={Colors.white.primary}>
          {address?.slice(0, 8) + "..." + address?.slice(-8)}
        </Text>
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
  height: 5vh;
`;

const LeftContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-right: 0.5px solid #4824fa;
  height: 100%;
`;

const RightContainer = styled.div<Pick<WalletInfoProps, "address">>`
  padding: 0 1rem;
  display: flex;
  justify-content: ${(props) => (props.address ? "center" : "flex-end")};
  max-height: 100%;
`;
