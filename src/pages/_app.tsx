import "@rainbow-me/rainbowkit/styles.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { type AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { DefaultSeo } from "next-seo";
import TagManager from "react-gtm-module";

import { PageInitalizer } from "PageInitalizer";
import { Footer, Header, ErrorBoundary } from "components";
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
          <ErrorBoundary>
            <Head>
              <title>Poseidon DAO</title>
              <meta name="viewport" content="viewport-fit=cover" />
            </Head>

            <Header />
            <PageInitalizer>
              <DefaultSeo
                title="Poseidon DAO"
                description="Making Crypto Art the 21th Century Art"
                openGraph={{
                  type: "website",
                  locale: "en_IE",
                  url: "https://poseidondao.org",
                  siteName: "Poseidon DAO",
                  images: [
                    {
                      url: "https://poseidondao.org/img/hero/background-tunnel.png",
                      width: 800,
                      height: 600,
                      alt: "Hero Image Alt",
                      type: "image/png",
                    },
                  ],
                }}
                twitter={{
                  handle: "@Poseidon_SF",
                  site: "@Poseidon_SF",
                  cardType: "summary_large_image",
                }}
              />
              <Component {...pageProps} />
            </PageInitalizer>
            {pathname === "/" && <Footer />}
          </ErrorBoundary>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
