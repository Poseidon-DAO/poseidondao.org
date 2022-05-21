import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
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
  const wallet = useSelector((state: RootState) => state.wallet.wallet);

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
      {isAuthenticated && userData.accounts ? (
        <WalletInfo
          address={userData.accounts[0]}
          balance={wallet.balance}
          onClick={handleOpenUserModal}
        />
      ) : (
        <Button
          id="connect"
          className="d-none d-lg-block"
          type="button"
          color="default"
          onClick={handleWalletConnect}
        >
          CONNECT
        </Button>
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
