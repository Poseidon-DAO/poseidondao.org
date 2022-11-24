import { type ReactNode } from "react";
import { type NextPage } from "next";
import { Box } from "@chakra-ui/react";

import { usePDNBalance, useNfts } from "lib/hooks";

interface IPageInitalizerProps {
  children: ReactNode;
}

const PageInitalizer: NextPage<IPageInitalizerProps> = ({ children }) => {
  usePDNBalance();
  useNfts();

  return (
    <Box minH="100vh" bg="brand.background">
      {children}
    </Box>
  );
};

export { PageInitalizer };
