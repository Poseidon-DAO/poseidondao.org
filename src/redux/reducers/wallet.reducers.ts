import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { INft, IReduxAction, IWallet } from "types";

export interface IWalletState extends ApiReducerState {
  wallet: IWallet;
  nfts: INft[];
  currentTransaction: string;
  transaction_success: boolean;
}

const initialState = {
  ...apiReducerInitialState,
  wallet: {
    name: "",
    address: "",
    balance: "",
    id: "",
  },
  currentTransaction: "",
  transaction_success: false,
  nfts: [],
};

const WalletReducer = (
  state: IWalletState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.WalletActions.UPDATE_CHAIN:
      return {
        ...state,
        wallet: payload,
      };
    case Actions.WalletActions.UPDATE_NFTS.SUCCESS:
      return {
        ...state,
        nfts: payload,
      };
    case Actions.WalletActions.UPDATE_NFTS.FAILED:
      return {
        ...state,
        failed: true,
      };
    case Actions.AuthActions.LOGOUT:
      return {
        ...initialState,
      };
    case Actions.WalletActions.CLEAR_TRANSACTION_HASH:
      return {
        ...state,
        currentTransaction: "",
        transaction_success: true,
      };
    case Actions.WalletActions.SET_TRANSACTION_HASH:
      return {
        ...state,
        currentTransaction: payload,
        transaction_success: false,
      };
    case Actions.WalletActions.CLEAR_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction_success: false,
      };
    default:
      return state;
  }
};

export default WalletReducer;
