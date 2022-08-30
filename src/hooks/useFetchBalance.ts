import { useCallback } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";

export default function useFetchBalance() {
  const dispatch = useDispatch();
  const { Moralis, account } = useMoralis();

  const updateBalance = useCallback(
    (payload: any) => dispatch(Actions.AuthActions.setBalance(payload)),
    [dispatch]
  );

  const fetchBalance = async () => {
    const options = ERC20Options(
      account!!,
      SMART_CONTRACT_FUNCTIONS.GET_BALANCE,
      { account }
    );

    const newBalance = (await Moralis.executeFunction(
      options
    )) as unknown as number;
    if (!newBalance || newBalance === 0) {
      updateBalance(0);
      return;
    }

    const newBalanceConverted = //@ts-ignore
      ((parseInt(newBalance._hex) / 10 ** 26) * 100000000).toFixed(0);
    updateBalance(parseInt(newBalanceConverted));
  };

  return { fetchBalance };
}
