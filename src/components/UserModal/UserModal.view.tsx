import CustomModal from "../UI_KIT/CustomModal";
import styled from "styled-components";
import AvatarDisplay from "../UI_KIT/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { ButtonTypes } from "types";
import { roundBalance } from "utils";
import Link from "next/link";
import { useRouter } from 'next/router'
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
  const copyAddress = useCopyAddress();
  const dispatch = useDispatch();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profile")
  const chainID = useSelector((state: RootState) => state.wallet.wallet.id);
  const newToast = useCallback(
    (payload: any) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  const wrongChainModal = () => {
    newToast({
      type: "warning",
      text: "Please switch to " + process.env.NEXT_PUBLIC_CHAIN,
      duration: 5000,
    });
  };

  const userBody = (
    <Pane display='flex' width='100%'>
      <Pane style={{ height: "5rem", width: "20%" }}>
        <AvatarDisplay size={50} />
      </Pane>
      <Content>
        <Pane>
          <Heading>Address:</Heading>
          <Text>{user?.accounts[0]}</Text>
          {!isProfile && process.env.NEXT_PUBLIC_CHAIN_ID === chainID ?
            <Link href ="/profile" style = {{ color: 'white', textDecoration: 'none' }}>
              <Badge
                color="green"
                style={{ cursor: "pointer", marginRight: 5 }}
                onClick={onClose}
                >
                Profile
              </Badge>
            </Link>
          : 
            <Badge
              color="green"
              style={{ cursor: "pointer", marginRight: 5 }}
              onClick={wrongChainModal}
              >
              Profile
            </Badge>
          }
          <Badge
            color="neutral"
            style={{ cursor: "pointer" }}
            onClick={copyAddress}
          >
              Copy Address
          </Badge>
        </Pane>
        <Pane>
          <Heading>Balance:</Heading>
          <Text>{roundBalance(user?.balance, 6)} ETH</Text>
        </Pane>
        <LogoutContainer>
          <CustomButton
            onClick={onLogout}
            type={ButtonTypes.danger}
            style={{ width: "25%", justifySelf: "flex-end", cursor: "pointer" }}
            text="Disconnect"
          />
        </LogoutContainer>
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

const LogoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  justify-self: flex-end;
`;
