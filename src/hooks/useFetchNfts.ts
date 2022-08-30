import { useCallback } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";

export default function useFetchNfts() {
  const dispatch = useDispatch();
  const { Moralis, account } = useMoralis();

  const setNfts = useCallback(
    (payload: any) => dispatch(Actions.WalletActions.fetchNfts(payload)),
    [dispatch]
  );

  const fetchNfts = async () => {
    const chain = await Moralis.getChainId();

    const res = await Moralis.Web3API.account.getNFTs({
      address: account!!,
      //@ts-ignore
      chain,
    });

    setNfts(res.result);
  };

  return { fetchNfts };
}
