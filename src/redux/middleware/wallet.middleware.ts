import { delay, put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
import { IReduxAction } from "../../types";
import { getNfts } from "utils";

function* getNftData(action: IReduxAction) {
  try {
    getNfts(action.payload);
  } catch (error: any) {
    if (error.message) {
      yield put(
        Actions.WalletActions.UpdateNfts.failed("Error updating the NFTs")
      );
    }
  }
}

function* clearTransactionSuccess() {
  yield delay(3000);
  yield put(Actions.WalletActions.clearTransactionSuccess());
}

export default function* walletMiddleware() {
  yield takeEvery(Actions.WalletActions.FETCH_NFTS, getNftData);
  yield takeEvery(
    Actions.WalletActions.CLEAR_TRANSACTION_HASH,
    clearTransactionSuccess
  );
}
