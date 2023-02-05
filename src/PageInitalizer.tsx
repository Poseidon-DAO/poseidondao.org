import { type ReactNode } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import { usePDNBalance, useNfts } from "lib/hooks";

interface IPageInitalizerProps {
  children: ReactNode;
}

const PageInitalizer: NextPage<IPageInitalizerProps> = ({ children }) => {
  const { pathname } = useRouter();

  usePDNBalance();
  useNfts();

  return (
    <Box
      minH="100vh"
      bg={
        pathname === "/deploy-collection-drop" ||
        pathname === "/deploy-collection" 
          ? "brand.black"
          : "brand.background"
      }
    >
      {children}
    </Box>
  );
};

export { PageInitalizer };
