import { REQUEST_DELETE_OBJECT, REQUEST_GET_OBJECTS } from "../types/objects.type";

export const requestGetObjects = () => ({
  type: REQUEST_GET_OBJECTS
});

export const requestDeleteObject = id => ({
  type: REQUEST_DELETE_OBJECT,
  payload: id
});