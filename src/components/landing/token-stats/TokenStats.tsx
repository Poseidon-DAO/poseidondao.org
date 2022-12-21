import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Container } from "components/container";
import {
  usePDNBalance,
  usePDNRatio,
  usePDNSymbol,
  useVestLength,
  useVestMetadata,
  useVestWithdraw,
} from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getTransactionLink } from "utils/getTransactionLink";

const TokenStats = () => {
  const router = useRouter();
  const toast = useToast();

  const { balance } = usePDNBalance();
  const { symbol } = usePDNSymbol();
  const { ratio } = usePDNRatio();

  const { vestLength } = useVestLength();
  const {
    totalVestedAmount,
    totalExpiredVestedAmount,
    expiredVestIds,
    timeToNextVestString,
  } = useVestMetadata({
    vestLength,
  });

  const { withdraw, withdrawData, withdrawError, withdrawStatus } =
    useVestWithdraw({
      args: {
        vestIndex: !!expiredVestIds.length ? expiredVestIds[0] : undefined,
      },
    });

  useEffect(() => {
    if (withdrawStatus === "loading") {
      toast({
        title: "Vest withdraw.",
        description: "Withdrawing vest...",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }

    if (withdrawStatus === "error" || true) {
      toast({
        title: "Vest withdraw error.",
        description: `Withdrawing vest failed. ${withdrawError?.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }

    if (withdrawStatus === "success") {
      toast({
        title: "Vest withdraw sucess.",
        description: `Withdrawing vest succeed. ${getTransactionLink(
          withdrawData?.hash || ""
        )}`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }, [withdrawStatus]);

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
            border="1px solid"
            borderColor="brand.red"
            pos="relative"
          >
            <Text fontSize="3xl">Total {symbol}</Text>
            <Tooltip label={balance}>
              <Text fontSize="5xl" fontWeight="bold">
                {Number(balance).toFixed(2)} {symbol}
              </Text>
            </Tooltip>

            <Box h="60px" mt={6}>
              <Button
                size="xl"
                w="240px"
                fontSize="md"
                onClick={handleBurnClick}
                disabled={Number(balance) < ratio!}
              >
                BURN
              </Button>
            </Box>
          </GridItem>

          <GridItem w="100%" p={8} border="1px solid" borderColor="brand.red">
            <Text fontSize="3xl">Total Vested {symbol}</Text>
            <Tooltip label={totalVestedAmount}>
              <Text fontSize="5xl" fontWeight="bold">
                {Number(totalVestedAmount).toFixed(2)} {symbol}
              </Text>
            </Tooltip>

            <Box h="60px" mt={6}></Box>
          </GridItem>

          <GridItem w="100%" p={8} border="1px solid" borderColor="brand.red">
            <Text fontSize="3xl">Available {symbol}</Text>
            <Tooltip label={totalExpiredVestedAmount}>
              <Text fontSize="5xl" fontWeight="bold">
                {Number(totalExpiredVestedAmount).toFixed(2)} {symbol}
              </Text>
            </Tooltip>

            <Box h="60px" mt={6}>
              <Button
                size="xl"
                w="240px"
                fontSize="md"
                disabled={!expiredVestIds.length}
                onClick={handleClaimClick}
              >
                CLAIM LATEST VEST
              </Button>
            </Box>
          </GridItem>

          <GridItem
            w="100%"
            p={8}
            border="1px solid"
            borderColor="brand.red"
            pos="relative"
          >
            <Text fontSize="3xl">Next {symbol} available in</Text>
            <Text fontSize="5xl" fontWeight="bold">
              {timeToNextVestString || "N/A"}
            </Text>
            <Box h="60px" mt={6}></Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export { TokenStats };
