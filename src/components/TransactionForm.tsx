import { TextInputField, Tooltip } from "evergreen-ui";
import { useIsMobile } from "hooks/useIsMobile";
import { useState } from "react";
import { Form, FormGroup, Label } from "reactstrap";
import web3 from "web3";
import styled from "styled-components";
import { Colors } from "components/UI_KIT/colors";

TransactionForm.defaultProps = {
  resetOnSubmit: false,
  column: false,
  maxAmountButton: false,
  loading: false,
  buttonProps: {
    title: "",
  },
};

function TransactionForm({
  onSubmit,
  buttonProps,
  resetOnSubmit,
  availableBalance,
}: any) {
  const isMobile = useIsMobile();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    address: "",
    amount: "",
  });

  function validate() {
    if (!amount) {
      setErrors({
        ...errors,
        amount: "Please provide an amount!",
      });
      if (!address) {
        setErrors({
          ...errors,
          address: "Please provide an address!",
        });
      }
      return false;
    }

    if (!web3.utils.isAddress(address)) {
      setErrors({
        ...errors,
        address: "Please provide a valid address!",
      });

      return false;
    }

    return true;
  }

  function reset() {
    setAddress("");
    setAmount("");
  }

  function handleMaxValueSet() {
    setAmount(availableBalance);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    onSubmit?.({ address, amount }, reset);

    if (resetOnSubmit) {
      reset();
    }
  }

  const { title, ...allButtonProps } = buttonProps;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup style={{ margin: "1rem 0rem" }}>
        <Label style={{ color: "white" }}>Address:</Label>
        <TextInputField
          type="text"
          value={address}
          onChange={(e: any) => setAddress(e.target.value)}
          placeholder="0x850EdEfE0A1d573057a695B870Ada74116F8E3d0"
          style={{ width: !isMobile ? "80%" : "100%" }}
        />
      </FormGroup>
      <FormGroup style={{ margin: "1rem 0rem" }}>
        <Label style={{ color: "white" }}>Amount:</Label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: !isMobile ? "80%" : "100%",
          }}
        >
          <TextInputField
            type="number"
            value={amount}
            onChange={(e: any) => setAmount(e.target.value)}
            placeholder="7"
            style={{ marginRight: "1rem" }}
          />
          <Badge onClick={handleMaxValueSet} style={{ marginBottom: "1rem" }}>
            MAX
          </Badge>
        </div>
      </FormGroup>
      <Button disabled={amount.length < 1 || address.length < 1}>SEND</Button>
    </Form>
  );
}

const Badge = styled.div`
  width: fit-content;
  background: transparent;
  color: white;
  font-size: 0.7em;
  padding: 0.7em 1em;
  border: 0.1px solid lightgrey;
  border-radius: 3px;
  margin-left: 0.5rem;
  &:hover {
    background-color: ${Colors.blue.clear};
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

const Button = styled.div<{ disabled: boolean }>`
  width: fit-content;
  background: ${(props) =>
    !props.disabled ? "transparent" : Colors.blue.ocean};
  color: ${(props) => (!props.disabled ? "white" : "grey")};
  font-size: 1em;
  margin-top: 1rem;
  padding: 0.5em 1em;
  border: ${(props) => (!props.disabled ? "0.1px solid lightgrey" : "none")};
  border-radius: 3px;
  &:hover {
    transform: ${(props) => (!props.disabled ? "scale(0.98)" : "")};
    background-color: ${(props) => (!props.disabled ? Colors.blue.clear : "")};
    transition: background-color 0.2s;
    cursor: ${(props) => (!props.disabled ? "pointer" : "default")};
  }
`;

export default TransactionForm;
