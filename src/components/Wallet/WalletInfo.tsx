import LoadingSpinner from "components/LoadingSpinner";
import SuccessAnimation from "components/SuccessAnimation";
import { Colors } from "components/UI_KIT/colors";
import { Alert, Text } from "evergreen-ui";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";
import styled from "styled-components";
import { roundBalance } from "utils";

interface WalletInfoProps {
  address: string;
  onClick: () => void;
}

export default function WalletInfo({ address, onClick }: WalletInfoProps) {
  const transactionHashToFetch = useSelector(
    (state: RootState) => state.wallet.currentTransaction
  );

  const { account, Moralis } = useMoralis();

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

  const updateBalance = useCallback(
    (payload: number) => dispatch(Actions.AuthActions.Balance(payload)),
    [dispatch]
  );

  const setNfts = useCallback(
    (payload: any) => dispatch(Actions.WalletActions.fetchNfts(payload)),
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

  const getBalance = async () => {
    const options = ERC20Options(
      account!!,
      SMART_CONTRACT_FUNCTIONS.GET_BALANCE,
      { account }
    );

    const newBalance = await Moralis.executeFunction(options);
    if (!newBalance) {
      updateBalance(0);
      return;
    }

    //@ts-ignore
    const newBalanceFormatted = (parseInt(balance._hex) / 10 ** 26) * 100000;

    updateBalance(parseInt(newBalanceFormatted.toFixed(0)));
  };

  const fetchNfts = async () => {
    const chain = await Moralis.getChainId();

    const res = await Moralis.Web3API.account.getNFTs({
      address: account!!,
      //@ts-ignore
      chain,
    });

    setNfts(res.result);
  };

  const fetchBalanceAndNfts = () => {
    getBalance();
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
        <Container onClick={onClick}>
          <LeftContainer>
            <Text color={Colors.white.primary}>
              {balance ? roundBalance(balance, 4) : "0.00"} PDN
            </Text>
          </LeftContainer>
          <MiddleContainer address={address}>
            <Text color={Colors.white.primary}>
              {address?.slice(0, 8) + "..." + address?.slice(-8)}
            </Text>
          </MiddleContainer>
          {(loadingBurn || showSuccess) && (
            <RightContainer>
              {loadingBurn && <LoadingSpinner size={35} />}
              {showSuccess && <SuccessAnimation />}
            </RightContainer>
          )}
        </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171941;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 0.5px solid #4824fa;
  height: 5vh;
  margin-right: 1rem;
`;

const LeftContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-right: 0.5px solid #4824fa;
  height: 100%;
`;

const RightContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 1rem;
  border-left: 0.5px solid #4824fa;
  height: 100%;
`;

const MiddleContainer = styled.div<Pick<WalletInfoProps, "address">>`
  padding: 0 1rem;
  display: flex;
  justify-content: ${(props) => (props.address ? "center" : "flex-end")};
  max-height: 100%;
`;
