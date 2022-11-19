import { Box } from "@chakra-ui/react";
import { type NextPage } from "next";

import {
  PoseidonDAO,
  Collections,
  CollectionStats,
  DerivatesCollection,
  GenesisCollection,
  Whitepaper,
  Architecture,
  Hero,
} from "components/landing";

const Home: NextPage = () => {
  return (
    <Box
      pos="relative"
      zIndex={-1}
      css={{
        backgroundImage:
          "linear-gradient(180deg,hsl(238deg 39% 20%) 0%,hsl(239deg 38% 14%) 23%,hsl(288deg 45% 2%) 100%)",
      }}
    >
      <Hero />
      <CollectionStats />
      {/* <Collections />
      <PoseidonDAO />
      <Whitepaper />
      <Architecture />
      <DerivatesCollection />
      <GenesisCollection /> */}
    </Box>
  );
};

export default Home;
