import { REQUEST_AUTH } from "../types/login.type";

export const requestAuthAction = (payload) => ({
  type: REQUEST_AUTH,
  payload
});