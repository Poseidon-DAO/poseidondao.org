import { Box } from "@chakra-ui/react";
import {
  ArtistsAndCollectors,
  Collections,
  CollectionStats,
  DerivatesCollection,
  GenesisCollection,
  Hero,
} from "components/landing";

import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      mt="-10vh"
      css={{
        backgroundImage:
          "linear-gradient(180deg,hsl(238deg 39% 20%) 0%,hsl(239deg 38% 14%) 23%,hsl(288deg 45% 2%) 100%)",
      }}
    >
      <Hero />
      <CollectionStats />
      <Collections />
      <ArtistsAndCollectors />
      <DerivatesCollection />
      <GenesisCollection />
    </Box>
  );
};

export default Home;
