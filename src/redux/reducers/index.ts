import { combineReducers } from "redux";
import AuthReducer, { IAuthState } from "./auth.reducers";
import UtilsReducer, { IUtilsState } from "./utils.reducers";
import WalletReducer, { IWalletState } from "./wallet.reducers";

export default combineReducers({
  auth: AuthReducer,
  utils: UtilsReducer,
  wallet: WalletReducer,
});

export interface RootState {
  auth: IAuthState;
  utils: IUtilsState;
  wallet: IWalletState;
}
