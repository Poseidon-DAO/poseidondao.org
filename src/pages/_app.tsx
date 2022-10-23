import "@rainbow-me/rainbowkit/styles.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { type AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import TagManager from "react-gtm-module";

import { PageInitalizer } from "PageInitalizer";
import { Footer, Header, ErrorBoundary } from "components";
import store from "redux/store";
import { theme } from "chakra/theme";

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID })]
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

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID!,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          theme={lightTheme({
            borderRadius: "none",
            accentColor: theme?.colors?.red as string,
          })}
        >
          <Provider store={store}>
            <ErrorBoundary>
              <Head>
                <title>Poseidon DAO</title>
                <meta name="viewport" content="viewport-fit=cover" />
              </Head>

              <Header />
              <PageInitalizer>
                <Component {...pageProps} />
              </PageInitalizer>
              {pathname === "/" && <Footer />}
            </ErrorBoundary>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
