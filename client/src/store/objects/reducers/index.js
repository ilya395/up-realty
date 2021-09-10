import { ADD_OBJECT, AWAIT_OBJECT, DELETE_OBJECT, EDIT_OBJECT, ERROR_OBJECT, GET_OBJECTS, GET_OBJECT, DROP_OBJECT } from "../actions";

export const initialObjectsState = {
  objects: [],
  checked: null,
  error: false,
  await: false
}

export default function ObjectsReducer(state, action) {
  switch (action.type) {

    case AWAIT_OBJECT:
      return {
        ...state,
        error: false,
        await: true,
      }

    case ERROR_OBJECT:
      return {
        ...state,
        error: action.payload,
        await: false,
      }

    case ADD_OBJECT:
      return {
        ...state,
        error: false,
        await: false,
        objects: state.objects.push(action.payload)
      }

    case DELETE_OBJECT:
      return {
        ...state,
        error: false,
        await: false,
        objects: state.objects.filter(item => +item.id !== +action.payload.id)
      }

    case EDIT_OBJECT:
      return {
        ...state,
        error: false,
        await: false,
        objects: state.objects.filter(item => +item.id !== +action.payload.id).push(action.payload)
      }

    case GET_OBJECTS:
      return {
        ...state,
        error: false,
        await: false,
        objects: action.payload.data ? [...action.payload.data] : []
      }

    case GET_OBJECT:
      return {
        ...state,
        error: false,
        await: false,
        checked: state.objects.find(item => +item.id === +action.payload.id)
      }

    case DROP_OBJECT:
      return {
        ...state,
        error: false,
        await: false,
        checked: null
      }

    default:
      return { ...state };
  }
}