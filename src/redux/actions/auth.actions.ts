import asyncAction from "./asyncAction";

export const LOGIN = asyncAction("@auth/login");
export const LOGOUT = "@auth/logout";
export const GET_BALANCE = "@auth/getBalance";

export const Login = {
  request: (payload: any) => ({ type: LOGIN.REQUEST, payload }),
  success: (payload: any) => ({ type: LOGIN.SUCCESS, payload }),
  failed: (payload: any) => ({ type: LOGIN.FAILED, payload }),
};

export const Balance = (payload: string) => ({ type: GET_BALANCE, payload });

export const Logout = () => ({ type: LOGOUT });
