import { Flex } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";
import SuccessAnimation from "components/SuccessAnimation";
import { Colors } from "components/UI_KIT/colors";
import { Alert, Text } from "evergreen-ui";
import useFetchBalance from "hooks/useFetchBalance";
import useFetchNfts from "hooks/useFetchNfts";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import { formatLongNumber, roundBalance } from "utils";

interface WalletInfoProps {
  address: string;
  onClick: () => void;
}

export default function WalletInfo({ address, onClick }: WalletInfoProps) {
  const transactionHashToFetch = useSelector(
    (state: RootState) => state.wallet.currentTransaction
  );

  const { fetchBalance } = useFetchBalance();
  const { fetchNfts } = useFetchNfts();

  const balance = useSelector(
    (state: RootState) => state.wallet.wallet.balance
  );
  const [queryCounter, setQueryCounter] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loadingBurn, setLoadingBurn] = useState(false);
  const [storedHash, setStoredHash] = useState("");

  const dispatch = useDispatch();
  const clearTransaction = useCallback(
    () => dispatch(Actions.WalletActions.clearTransactionHash()),
    [dispatch]
  );

  const { data, fetch } = useMoralisQuery(
    "burnAndReceiveNFT",
    (query) => query.equalTo("transaction_hash", transactionHashToFetch),
    [transactionHashToFetch.length, queryCounter]
  );

  const navigateToHash = () => {
    if (storedHash.length) {
      const url = `https://${process.env.NEXT_PUBLIC_CHAIN}.etherscan.io/tx/${storedHash}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const fetchBalanceAndNfts = () => {
    fetchBalance();
    fetchNfts();
  };

  useEffect(() => {
    if (transactionHashToFetch.length) {
      setStoredHash(transactionHashToFetch);
      setLoadingBurn(true);
      setQueryCounter(queryCounter + 1);
    }
  }, [transactionHashToFetch.length]);

  useEffect(() => {
    if (transactionHashToFetch.length) {
      if (!data.length && queryCounter > 0) {
        setTimeout(() => {
          fetch();
        }, 2000);
      } else {
        setQueryCounter(0);
        setShowSuccess(true);
        setLoadingBurn(false);
      }
    }
  }, [data, queryCounter]);

  useEffect(() => {
    if (showSuccess) {
      fetchBalanceAndNfts();
      setTimeout(() => {
        setShowSuccess(false);
        clearTransaction();
      }, 4000);
    }
  }, [showSuccess]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Flex
          onClick={onClick}
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          height="5vh"
          mr="1rem"
          border="0.5px solid #4824fa"
          borderRadius="0.5rem"
          bg="#171941"
        >
          <Flex
            __css={{
              padding: "0 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              borderRight: "0.5px solid #4824fa",
              height: "100%",
            }}
          >
            <Text color={Colors.white.primary}>
              {balance ? formatLongNumber(parseInt(balance)) : "0.00"} PDN
            </Text>
          </Flex>
          <Flex
            p="0 1rem"
            justifyContent={address ? "center" : "flex-end"}
            maxH="100%"
          >
            <Text color={Colors.white.primary}>
              {address?.slice(0, 8) + "..." + address?.slice(-8)}
            </Text>
          </Flex>
          {(loadingBurn || showSuccess) && (
            <Flex
              p="0 1rem"
              alignItems="center"
              justifyContent="center"
              w="fit-content"
              minW="1rem"
              borderLeft="0.5px solid #4824fa"
              h="100%"
            >
              {loadingBurn && <LoadingSpinner size={35} />}
              {showSuccess && <SuccessAnimation />}
            </Flex>
          )}
        </Flex>
      </div>
      {showSuccess && (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            zIndex: 100,
            right: "10px",
            maxWidth: "40%",
            cursor: "pointer",
            paddingRight: "1rem",
          }}
          intent="success"
          title={`Successfully burned your NFTs, transaction hash: ${storedHash.slice(
            0,
            6
          )}...${storedHash.slice(-6)}`}
          marginBottom={32}
          onClick={navigateToHash}
        />
      )}
    </>
  );
}
