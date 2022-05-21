import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { IReduxAction, IUser } from "types";

export interface IAuthState extends ApiReducerState {
  user: IUser;
}

const initialState = {
  ...apiReducerInitialState,
  user: {
    username: "",
    authData: {},
    createdAt: "",
    updatedAt: "",
    accounts: [],
    ethAddress: "",
    sessionToken: "",
    objectId: "",
    balance: "",
  },
};

const AuthReducer = (
  state: IAuthState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.AuthActions.LOGIN.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case Actions.AuthActions.LOGIN.FAILED:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case Actions.AuthActions.LOGIN.SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case Actions.AuthActions.LOGOUT:
      return {
        ...state,
        user: initialState.user,
      };
    case Actions.AuthActions.GET_BALANCE:
      return {
        ...state,
        user: { ...state.user, balance: payload },
        failure: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
