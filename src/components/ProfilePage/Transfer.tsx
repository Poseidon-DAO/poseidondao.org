import { useEffect, useState } from "react";
import { Alert } from "evergreen-ui";
import TransactionForm from "components/TransactionForm";
import { Heading } from "@chakra-ui/react";
import { Container } from "components/container";

export default function Transfer() {
  const [transactionState, setTransactionState] = useState("");

  function handleTransactionSuccess() {
    setTransactionState("success");
  }

  function handleTransactionError() {
    setTransactionState("error");
  }

  useEffect(() => {
    if (transactionState != "") {
      setTimeout(() => setTransactionState(""), 4000);
    }
  }, [transactionState]);

  return (
    <Container>
      <Heading size="lg">Transfer tokens</Heading>

      <TransactionForm
        onSuccess={handleTransactionSuccess}
        onError={handleTransactionError}
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
            paddingRight: "1rem",
          }}
          intent="warning"
          title="Something went wrong when transfering your tokens!"
          marginBottom={32}
        />
      )}
    </Container>
  );
}
