import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Container } from "components/container";
import {
  usePDNBalance,
  usePDNSymbol,
  useVestLength,
  useVestMetadata,
  useVestWithdraw,
} from "lib/hooks";
import { useRouter } from "next/router";

const TokenStats = () => {
  const router = useRouter();

  const { balance } = usePDNBalance();
  const { symbol } = usePDNSymbol();

  const { vestLength, vestLengthStatus } = useVestLength();
  const {
    vestMetadata,
    totalVestedAmount,
    totalExpiredVestedAmount,
    expiredVestIds,
    lastUnexpiredVestTimestamp,
  } = useVestMetadata({
    vestLength,
  });

  const { withdraw } = useVestWithdraw({
    args: { vestIndex: "" },
  });

  function handleBurnClick() {
    router.push("/burn");
  }

  function handleClaimClick() {
    withdraw?.();
  }

  return (
    <Box py={20} w="100vw">
      <Container>
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem
            w="100%"
            p={8}
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
            pos="relative"
          >
            <Text fontSize="3xl">Total {symbol}</Text>
            <Text fontSize="5xl" fontWeight="bold">
              {balance} {symbol}
            </Text>

            <Box pos="absolute" bottom={8}>
              <Button size="xl" w="160px" onClick={handleBurnClick}>
                BURN
              </Button>
            </Box>
          </GridItem>

          <GridItem
            w="100%"
            p={8}
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
          >
            <Text fontSize="3xl">Total Vested {symbol}</Text>
            <Text fontSize="5xl" fontWeight="bold">
              {totalVestedAmount} {symbol}
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            p={8}
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
            pos="relative"
          >
            <Text fontSize="3xl">Available {symbol}</Text>
            <Text fontSize="5xl" fontWeight="bold">
              {totalExpiredVestedAmount} {symbol}
            </Text>

            <Box pos="absolute" bottom={8}>
              <Button
                size="xl"
                w="160px"
                disabled={!expiredVestIds.length}
                onClick={handleClaimClick}
              >
                CLAIM
              </Button>
            </Box>
          </GridItem>

          <GridItem
            w="100%"
            p={8}
            h="35vh"
            border="1px solid"
            borderColor="brand.red"
            pos="relative"
          >
            <Text fontSize="3xl">Next {symbol} available in</Text>
            <Text fontSize="5xl" fontWeight="bold">
              32 days
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export { TokenStats };
