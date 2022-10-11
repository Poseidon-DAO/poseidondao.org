import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@rainbow-me/rainbowkit/styles.css";

import Head from "next/head";
import { Provider } from "react-redux";
import { MoralisProvider, useMoralis } from "react-moralis";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  useAccount,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import store from "redux/store";
import { Header } from "components/header";
import { Footer } from "components/footer2";

import useFetchBalance from "hooks/useFetchBalance";
import useFetchNfts from "hooks/useFetchNfts";

import { type AppProps } from "next/app";
import { useEffect } from "react";
import { WALLET_ENABLED } from "config";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "chakra/theme";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Poseidon DAO",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize="compact">
          <Provider store={store}>
            <MoralisProvider
              appId={process.env.NEXT_PUBLIC_MORALIS_ID!}
              serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL!}
            >
              <ErrorBoundary>
                <Header />
                <App Component={Component} {...pageProps} />
                <Footer />
              </ErrorBoundary>
            </MoralisProvider>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

function App({ Component, pageProps }: AppProps) {
  const { isConnected } = useAccount();
  const { Moralis, isWeb3Enabled } = useMoralis();

  const { fetchBalance } = useFetchBalance();
  const { fetchNfts } = useFetchNfts();

  // to be removed
  useEffect(() => {
    if (WALLET_ENABLED) {
      const enableWeb3 = async () => {
        try {
          await Moralis.enableWeb3();
          await Moralis.initPlugins();
        } catch (e) {}
      };
      enableWeb3();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeb3Enabled]);

  useEffect(() => {
    if (isConnected && isWeb3Enabled) {
      fetchBalance();
      fetchNfts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, isWeb3Enabled]);

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
      <Box minH="100vh" pt="10vh" bg="brand.background">
        <Component {...pageProps} />
      </Box>
    </>
  );
}

export default MyApp;
