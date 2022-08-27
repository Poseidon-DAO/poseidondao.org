import asyncAction from "./asyncAction";

export const UPDATE_CHAIN = "@wallet/update_chain";
export const FETCH_NFTS = "@wallet/fetch_nfts";
export const UPDATE_NFTS = asyncAction("@wallet/update_nfts");
export const SET_TRANSACTION_HASH = "@wallet/set_transaction_hash";
export const CLEAR_TRANSACTION_HASH = "@wallet/clear_transaction_hash";
export const CLEAR_TRANSACTION_SUCCESS = "@wallet/clear_transaction_success";

export const UpdateChain = (payload: any) => ({
  type: UPDATE_CHAIN,
  payload,
});

export const fetchNfts = (payload: any) => ({
  type: FETCH_NFTS,
  payload,
});

export const setSuccessfulHashTransaction = (payload: string) => ({
  type: SET_TRANSACTION_HASH,
  payload,
});

export const clearTransactionHash = () => ({
  type: CLEAR_TRANSACTION_HASH,
});

export const clearTransactionSuccess = () => ({
  type: CLEAR_TRANSACTION_SUCCESS,
});

export const UpdateNfts = {
  request: (payload: any) => ({ type: UPDATE_NFTS.REQUEST, payload }),
  success: (payload: any) => ({ type: UPDATE_NFTS.SUCCESS, payload }),
  failed: (payload: any) => ({ type: UPDATE_NFTS.FAILED, payload }),
};
