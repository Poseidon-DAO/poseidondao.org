import "styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MoralisProvider, useMoralis } from "react-moralis";
import store from "redux/store";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import { NetworkTypes } from "types";
import { WALLET_ENABLED } from "config";
import styled from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_ID!}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL!}
      >
        <ToastContainer />
        <IndexNavbar />
        <App Component={Component} {...pageProps} />
        <Footer />
      </MoralisProvider>
    </Provider>
  );
}

function App({ Component, pageProps }: AppProps) {
  const toastData = useSelector((state: RootState) => state.utils.toast);
  const [chainId, setChainId] = useState<string>("");
  const { Moralis, isAuthenticated, account, logout } = useMoralis();
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload: any) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );
  const updateChain = useCallback(
    (payload: any) => dispatch(Actions.WalletActions.UpdateChain(payload)),
    [dispatch]
  );
  const updateBalance = useCallback(
    (payload: string) => dispatch(Actions.AuthActions.Balance(payload)),
    [dispatch]
  );
  const storeLogout = useCallback(
    () => dispatch(Actions.AuthActions.Logout()),
    [dispatch]
  );

  const userData = useSelector((state: RootState) => state.auth.user);

  //Initialize web3 env
  const setWeb3Env = () => {
    getNetwork();
    monitorNetwork();
    monitorDisconnection();
  };

  //Toast depending on chain being used
  const getNetwork = async () => {
    try {
      const chainID = await Moralis.getChainId();
      if (chainID) {
        setChainId(chainID);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Reload on chain change
  const monitorNetwork = () => {
    Moralis.onChainChanged(function () {
      getNetwork();
    });
  };

  //Check if user disconnects from inside Metamask
  const monitorDisconnection = () => {
    Moralis.onAccountChanged(function () {
      logout();
      storeLogout();
    });
  };

  //Update stuff once web3 is enabled.
  const onWeb3Enabled = () => {
    Moralis.onWeb3Enabled(function () {
      setWeb3Env();
    });
  };

  // Initialize web3 through Moralis on load
  useEffect(() => {
    if (WALLET_ENABLED) {
      const enableWeb3 = async () => {
        try {
          await Moralis.enableWeb3();
          await Moralis.initPlugins();
        } catch (e) {
          newToast({
            text: "Please install Metamask",
            type: "error",
          });
        }
      };
      enableWeb3();
      onWeb3Enabled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If user authenticates, we set up the environment
  useEffect(() => {
    if (isAuthenticated) {
      onWeb3Enabled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  //Update chain of change in wallet
  useEffect(() => {
    if (chainId.length && userData.balance && account) {
      //@ts-ignore
      const chainName = NetworkTypes[chainId];
      updateChain({
        name: chainName,
        id: chainId,
        balance: userData.balance,
        address: account,
      });
    }
  }, [chainId, updateChain, userData.balance, account]);

  //Trigger toast on chain id change
  useEffect(() => {
    if (
      isAuthenticated &&
      chainId.length &&
      chainId !== process.env.NEXT_PUBLIC_CHAIN_ID
    ) {
      newToast({
        text: "Please switch to " + process.env.NEXT_PUBLIC_CHAIN,
        type: "warning",
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, isAuthenticated]);

  // Fetch address balance and NFTs on address change
  useEffect(() => {
    const getBalancesAndNfts = async () => {
      if (account) {
        try {
          const balances = await Moralis.Web3API.account.getNativeBalance({
            address: account,
            //@ts-ignore
            chain: chainId,
          });

          updateBalance(Moralis.Units.FromWei(balances.balance));
        } catch (e) {
          updateBalance("0");
        }
      }
    };
    if (account && chainId.length && isAuthenticated) {
      getBalancesAndNfts();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isAuthenticated, chainId]);

  // Display toasts set in Redux
  useEffect(() => {
    if (toastData.text.length) {
      toast[toastData.type](toastData.text, {
        position: "bottom-right",
        autoClose: toastData.time ? toastData.time : 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
      });
    }
  }, [toastData]);

  return (
    <>
      <Head>
        <title>Poseidon DAO</title>
        <meta
          name="viewport"
          // content="minimum-scale=1, initial-scale=1, width=device-width"
          content="viewport-fit=cover"
        />
      </Head>
      <Dots>
        <Component {...pageProps} />
      </Dots>
    </>
  );
}

export default MyApp;

const Dots = styled.div`
  background-image: url("/img/dots.png");
  background-repeat: repeat repeat;
  background-size: contain;
`;
