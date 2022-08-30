import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";

const makeOptions = ({
  account,
  address,
  amount,
}: {
  account: string | null;
  address: string;
  amount: string;
}) =>
  ERC20Options(account, SMART_CONTRACT_FUNCTIONS.TRANSFER, {
    to: address,
    amount,
  });

interface UseTransferInputType {
  address: string;
  amount: string;
}

export function useTransfer(props: UseTransferInputType) {
  const { Moralis, account } = useMoralis();

  const { address, amount } = props;

  const result = useWeb3ExecuteFunction(
    makeOptions({ account, address, amount: Moralis.Units.Token(amount, 18) })
  );

  return {
    ...result,
    transfer: ({
      address,
      amount,
      onSuccess,
      onError,
    }: {
      address: string;
      amount: string;
      onSuccess: any;
      onError: any;
    }) => {
      result.fetch({
        params: makeOptions({
          account,
          address,
          amount: Moralis.Units.Token(amount, 18),
        }),
        onSuccess,
        onError,
      });
    },
  };
}
