import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

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

import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      css={{
        backgroundImage:
          "linear-gradient(180deg,hsl(238deg 39% 20%) 0%,hsl(239deg 38% 14%) 23%,hsl(288deg 45% 2%) 100%)",
      }}
    >
      <NextSeo
        title="Poseido DAO"
        description="Making Crypt Art the 21th Century Art"
      />
      <Hero />
      <CollectionStats />
      <Collections />
      <PoseidonDAO />
      <Whitepaper />
      <Architecture />
      <DerivatesCollection />
      <GenesisCollection />
    </Box>
  );
};

export default Home;
