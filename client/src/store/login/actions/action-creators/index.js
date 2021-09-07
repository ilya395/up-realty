import { AWAIT_AUTH, ERROR_AUTH, SUCCESS_AUTH, END_AUTH } from "../types";

export const authAwaitAction = () => ({
  type: AWAIT_AUTH,
});

export const authErrorAction = error => ({
  type: ERROR_AUTH,
  error
});

export const authSuccessAction = payload => ({
  type: SUCCESS_AUTH,
  payload
});

export const authEndAction = () => ({
  type: END_AUTH
})