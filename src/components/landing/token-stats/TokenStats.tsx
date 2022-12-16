import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Container } from "components/container";
import { useAccount } from "wagmi";

const TokenStats = () => {
  return (
    <Box py={20} w="100vw">
      <Container>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem
            w="100%"
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
          />
          <GridItem
            w="100%"
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
          />
          <GridItem
            w="100%"
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
          />
          <GridItem
            w="100%"
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export { TokenStats };
