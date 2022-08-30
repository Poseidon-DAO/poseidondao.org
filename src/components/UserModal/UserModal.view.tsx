import CustomModal from "../UI_KIT/CustomModal";
import styled from "styled-components";
import AvatarDisplay from "../UI_KIT/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { ButtonTypes } from "types";
import { formatLongNumber, roundBalance } from "utils";
import { useRouter } from "next/router";
import useCopyAddress from "utils/useCopyAddress";
import { useCallback } from "react";
import Actions from "redux/actions";
import { Badge, Heading, Pane, Text } from "evergreen-ui";
import CustomButton from "components/UI_KIT/CustomButton";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function UserModal({
  isOpen,
  onClose,
  onLogout,
}: UserModalProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const userBalance = useSelector(
    (state: RootState) => state.wallet.wallet.balance
  );
  const copyAddress = useCopyAddress();
  const dispatch = useDispatch();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profile");
  const chainID = useSelector((state: RootState) => state.wallet.wallet.id);
  const newToast = useCallback(
    (payload: any) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  const isInRightChain = process.env.NEXT_PUBLIC_CHAIN_ID === chainID;

  console.log("IsInRightchain", process.env.NEXT_PUBLIC_CHAIN_ID, chainID);
  const wrongChainModal = () => {
    if (!isInRightChain) {
      newToast({
        type: "warning",
        text: "Please switch to " + process.env.NEXT_PUBLIC_CHAIN,
        duration: 5000,
      });
      return;
    }
    onClose();
  };

  const userBody = (
    <Pane display="flex" width="100%">
      <Pane style={{ height: "5rem", width: "20%" }}>
        <AvatarDisplay size={50} />
      </Pane>
      <Content>
        <Pane>
          <Heading>Address:</Heading>
          <Text>{user?.accounts[0]}</Text>
          <Pane>
            <Badge
              color="neutral"
              style={{ cursor: "pointer" }}
              onClick={copyAddress}
            >
              Copy Address
            </Badge>
          </Pane>
        </Pane>
        <Pane>
          <Heading>Balance:</Heading>
          <Text>{formatLongNumber(parseInt(userBalance))} PDN</Text>
        </Pane>
        <ButtonsContainer>
          {!isProfile && isInRightChain ? (
            <CustomButton
              type={ButtonTypes.success}
              style={{
                width: "25%",
                justifySelf: "flex-end",
                cursor: "pointer",
                marginRight: 5,
              }}
              text="Your Profile"
              onClick={() => {
                router.push("/profile");
                onClose();
              }}
            />
          ) : (
            <CustomButton
              onClick={wrongChainModal}
              type={ButtonTypes.success}
              style={{
                width: "25%",
                justifySelf: "flex-end",
                cursor: "pointer",
                marginRight: 5,
                border: "none",
              }}
              text="Your Profile"
            />
          )}
          <CustomButton
            onClick={onLogout}
            type={ButtonTypes.danger}
            text="Disconnect"
            style={{
              border: "none",
            }}
          />
        </ButtonsContainer>
      </Content>
    </Pane>
  );

  return user?.accounts?.length ? (
    <CustomModal
      header="Account"
      body={userBody}
      isOpen={isOpen}
      onClose={onClose}
    />
  ) : null;
}

const Content = styled.div`
  display: flex;
  flex: 1;
  height: 10rem;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  justify-self: flex-end;
`;
