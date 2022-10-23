import { type FC, useState } from "react";
import { type GetServerSideProps } from "next";
import { Box, Flex } from "@chakra-ui/react";

import { Container } from "components";
import { NftInfo, NftView } from "layout/drop";
import { getNftMetadata } from "lib/api/queryFunctions";
import { type NftMetadata } from "lib/types/NftMetadata";

// const ManifoldAddress = process.env.NEXT_PUBLIC_MANIFOLD_ADDRESS;

interface IOpenEditionProps extends NftMetadata {}

const OpenEdition: FC<IOpenEditionProps> = (props) => {
  const [fullScreen, setFullScreen] = useState(false);

  function handleExpand() {
    setFullScreen((prevState) => !prevState);
  }

  return (
    <Box pt="14vh">
      <Container>
        <Flex
          flexDir={{ sm: "column-reverse", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          {!fullScreen && (
            <Box w={{ sm: "100%", lg: "35%" }} mt={{ sm: 12, lg: 0 }}>
              <NftInfo {...props} />
            </Box>
          )}

          <Box
            w={{
              sm: "100%",
              lg: fullScreen ? "100%" : "65%",
            }}
            h={fullScreen ? "80vh" : "initial"}
            pl={{ sm: 0, lg: 8 }}
          >
            <NftView onExpand={handleExpand} expanded={fullScreen} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await getNftMetadata(
    {
      contractAddress: "0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3", // ManifoldAddress!,
      tokenId: params?.id as string,
    },
    { json: false }
  );

  const hasError = response.ok ? false : true;

  if (hasError) {
    return {
      notFound: hasError,
    };
  }

  const data = await response.json();

  return {
    props: data,
  };
};

export default OpenEdition;
