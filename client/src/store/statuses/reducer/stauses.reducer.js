import { AWAIT_STATUSES, ERROR_STATUSES, GET_STATUSES } from "../actions";

export const initialStatusesState = {
  statuses: [],
  error: false,
  await: false
}

export default function StatusesReducer(state = initialStatusesState, action) {
  switch (action.type) {

    case AWAIT_STATUSES:
      return {
        error: false,
        await: true
      }

    case ERROR_STATUSES:
      return {
        error: action.error,
        await: false
      }

    case GET_STATUSES:
      return {
        statuses: [...action.payload.data],
        error: false,
        await: false
      }

    default:
      return {
        ...state
      }
  }
}