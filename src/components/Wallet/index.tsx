import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "evergreen-ui";
import { useMoralis } from "react-moralis";
import ConectWalletModal from "./WalletModal/ConnectWalletModal";
import { ProviderTypes } from "types";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import WalletInfo from "./WalletInfo";
import UserModal from "../UserModal";
export default function ConnectWallet() {
  const dispatch = useDispatch();

  const [connectModal, setConnectModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const { isAuthenticated, authenticate, logout, user } = useMoralis();

  const userData = useSelector((state: RootState) => state.auth.user);

  const login = useCallback(
    (payload: any) => dispatch(Actions.AuthActions.Login.success(payload)),
    [dispatch]
  );

  const storeLogout = useCallback(
    () => dispatch(Actions.AuthActions.Logout()),
    [dispatch]
  );

  const handleLogout = () => {
    setShowUserModal(false);
    logout();
    storeLogout();
  };

  const closeConnectModal = (provider?: ProviderTypes) => {
    setConnectModal(false);
    if (provider) {
      authenticate({
        provider,
        signingMessage: "Authorize linking of your wallet",
      });
    }
  };

  const handleWalletConnect = () => {
    setConnectModal(true);
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
  };

  const handleOpenUserModal = () => {
    setShowUserModal(true);
  };

  // Send user data to redux after authentication
  useEffect(() => {
    if (isAuthenticated) {
      login(JSON.parse(JSON.stringify(user)));
    }
  }, [isAuthenticated, login, user]);

  return (
    <>
      {isAuthenticated && userData.accounts && !showUserModal ? (
        <WalletInfo
          address={userData.accounts[0]}
          onClick={handleOpenUserModal}
        />
      ) : (
        !showUserModal && (
          <Button
            color="white"
            onClick={handleWalletConnect}
            appearance="primary"
            backgroundColor="rgba(9,9,121,0.35)"
            border="none"
            width={150}
            height={40}
          >
            CONNECT
          </Button>
        )
      )}
      <ConectWalletModal isOpen={connectModal} onClose={closeConnectModal} />
      <UserModal
        onLogout={handleLogout}
        isOpen={showUserModal}
        onClose={handleCloseUserModal}
      />
    </>
  );
}
