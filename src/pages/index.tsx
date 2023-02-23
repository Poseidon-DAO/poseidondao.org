import { useAccount } from "wagmi";
import { Box } from "@chakra-ui/react";
import { type NextPage } from "next";

import {
  PoseidonDAO,
  Collections,
  TokenRelease,
  TokenStats,
  CollectionStats,
  DerivatesCollection,
  GenesisCollection,
  Whitepaper,
  Architecture,
  Hero,
} from "components/landing";

const showTokenSection = process.env.NEXT_PUBLIC_SHOW_TOKEN_SECTION === "true";

const Home: NextPage = () => {
  const { address } = useAccount();

  return (
    <Box
      css={{
        backgroundImage:
          "linear-gradient(180deg,hsl(238deg 39% 20%) 0%,hsl(239deg 38% 14%) 23%,hsl(288deg 45% 2%) 100%)",
      }}
    >
      <Hero />
      <CollectionStats />
      <Collections />
      {showTokenSection && <TokenRelease />}
      {showTokenSection && !!address && <TokenStats />}
      <PoseidonDAO />
      <Whitepaper />
      <Architecture />
      <DerivatesCollection />
      <GenesisCollection />
    </Box>
  );
};

export default Home;
