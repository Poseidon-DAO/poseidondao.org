import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useTransfer } from "hooks/useTransfer";
import TransactionForm from "components/TransactionForm";
import { Alert, Text } from "evergreen-ui";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";

export default function Transfer({
  availableBalance,
}: {
  availableBalance: string;
}) {
  const { transfer, isFetching, isLoading } = useTransfer({
    amount: "0",
    address: "",
  });
  const [transactionState, setTransactionState] = useState("");
  const dispatch = useDispatch();
  const updateBalance = useCallback(
    (payload: any) => dispatch(Actions.AuthActions.setBalance(payload)),
    [dispatch]
  );

  function handleTransactionSuccess(transferData: any, resetForm: () => void) {
    setTransactionState("success");
    updateBalance(+availableBalance - transferData.amount);
    resetForm();
  }

  function handleTransactionFailure() {
    setTransactionState("error");
  }

  async function handleTransfer(transferData: any, resetForm: () => void) {
    try {
      await transfer({
        ...transferData,
        onSuccess: () => handleTransactionSuccess(transferData, resetForm),
        onError: handleTransactionFailure,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (transactionState != "") {
      setTimeout(() => setTransactionState(""), 4000);
    }
  }, [transactionState]);

  return (
    <Container>
      <Text size="large" style={{ marginBottom: 5, color: "white" }}>
        Transfer tokens
      </Text>

      <TransactionForm
        column
        availableBalance={availableBalance}
        maxAmountButton
        onSubmit={handleTransfer}
        loading={isFetching || isLoading}
        buttonProps={{ title: "Transfer", variant: "contained" }}
      />
      {transactionState === "success" && (
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
          title="Successfully transferred your tokens"
          marginBottom={32}
        />
      )}
      {transactionState === "error" && (
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
          intent="error"
          title="Something went wrong when transfering your tokens!"
          marginBottom={32}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 50vw;
  height: 100%;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
