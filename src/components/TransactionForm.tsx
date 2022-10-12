import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import web3 from "web3";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";

interface ITransactionFormProps {
  resetOnSubmit?: boolean;
  onSubmit?: (
    data: { address: string; amount: string },
    reset: () => void
  ) => void;
  loading?: boolean;
  availableBalance: string;
}

TransactionForm.defaultProps = {
  resetOnSubmit: false,
  onSubmit: () => {},
  loading: false,
};

function TransactionForm({
  onSubmit,
  resetOnSubmit,
  availableBalance,
  loading,
}: ITransactionFormProps) {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    address: "",
    amount: "",
  });

  console.log(errors);

  const handleInputChange =
    (setter: Dispatch<SetStateAction<any>>, asNumber = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(asNumber ? event.target.valueAsNumber : event.target.value);
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: "",
      }));
    };

  function renderSubmitButton({
    element,
    tooltip,
  }: {
    element: ReactNode;
    tooltip: boolean;
  }) {
    if (!tooltip) return element;

    return (
      <Tooltip label="Insufficient funds">
        <span>{element}</span>
      </Tooltip>
    );
  }

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

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" wrap="nowrap">
        <Box mb={4}>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            name="address"
            value={address}
            disabled={loading}
            onChange={handleInputChange(setAddress)}
            placeholder="0x850EdEfE0A1d573057a695B870Ada74116F8E3d0"
            autoComplete="off"
            size="lg"
            isInvalid={!!errors["address"]}
          />
          <Text color="brand.red">{errors["address"]}</Text>
        </Box>

        <Box mb={4}>
          <FormLabel htmlFor="amount">Amount</FormLabel>
          <InputGroup>
            <Input
              name="amount"
              value={amount}
              disabled={loading}
              onChange={handleInputChange(setAmount, true)}
              placeholder="7"
              type="number"
              autoComplete="off"
              size="lg"
              isInvalid={!!errors["amount"]}
              pr="4.5rem"
            />

            {!amount && (
              <InputRightElement w="4.5rem" h="100%">
                <Tooltip label="Use the max amount of tokens you have">
                  <Button size="sm" onClick={handleMaxValueSet}>
                    Max
                  </Button>
                </Tooltip>
              </InputRightElement>
            )}
          </InputGroup>
          <Text color="brand.red">{errors["amount"]}</Text>
        </Box>

        <Flex justifyContent="flex-end">
          {renderSubmitButton({
            element: (
              <Button
                size="lg"
                type="submit"
                disabled={amount > availableBalance}
                isLoading={loading}
              >
                Transfer
              </Button>
            ),
            tooltip: availableBalance < amount,
          })}
        </Flex>
      </Flex>
    </form>
  );
}

export default TransactionForm;
