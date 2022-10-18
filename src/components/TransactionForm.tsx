import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import web3 from "web3";
import { usePDNBalance, usePDNTransfer } from "lib/hooks";
import { useDebounce } from "hooks";
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
  loading?: boolean;
  onSuccess: () => void;
  onError: () => void;
  onSubmit?: (data: { to: string; amount: string }, reset: () => void) => void;
}

TransactionForm.defaultProps = {
  resetOnSubmit: false,
  onSubmit: () => {},
  loading: false,
};

function TransactionForm({
  loading = false,
  onSubmit,
  onSuccess,
  onError,
}: ITransactionFormProps) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    to: "",
    amount: "",
  });

  const debouncedTo = useDebounce(to);
  const debouncedAmount = useDebounce(amount);

  const { transfer, transferData, isTransfering } = usePDNTransfer({
    args: { amount: debouncedAmount, to: debouncedTo },
    onSuccess,
    onError,
  });

  const { balance } = usePDNBalance();

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
      if (!to) {
        setErrors({
          ...errors,
          to: "Please provide an address!",
        });
      }
      return false;
    }

    if (!web3.utils.isAddress(to)) {
      setErrors({
        ...errors,
        to: "Please provide a valid address!",
      });

      return false;
    }

    return true;
  }

  function reset() {
    setTo("");
    setAmount("");
  }

  function handleMaxValueSet() {
    setAmount(balance!);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    transfer?.();
    onSubmit?.({ to, amount }, reset);

    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" wrap="nowrap">
        <Box mb={4}>
          <FormLabel htmlFor="to">Address</FormLabel>
          <Input
            name="to"
            value={to}
            disabled={loading}
            onChange={handleInputChange(setTo)}
            placeholder="0x850EdEfE0A1d573057a695B870Ada74116F8E3d0"
            autoComplete="off"
            size="lg"
            isInvalid={!!errors["to"]}
          />
          <Text color="brand.red">{errors["to"]}</Text>
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
                disabled={Number(amount) > Number(balance)}
                isLoading={loading}
              >
                Transfer
              </Button>
            ),
            tooltip: Number(balance) < Number(amount),
          })}
        </Flex>
      </Flex>
    </form>
  );
}

export default TransactionForm;
