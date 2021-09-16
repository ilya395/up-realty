import { AWAIT_STATUSES, ERROR_STATUSES, GET_STATUSES } from "..";

export const awaitStatusesAction = () => ({
  type: AWAIT_STATUSES
});

export const errorStatusesAction = error => ({
  type: ERROR_STATUSES,
  error
});

export const getStatusesAction = payload => ({
  type: GET_STATUSES,
  payload
});