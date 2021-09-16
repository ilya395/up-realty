import { REQUEST_DELETE_OBJECT, REQUEST_GET_OBJECTS, REQUEST_EDITED_OBJECT, REQUEST_ADD_OBJECT } from "../types/objects.type";

export const requestGetObjects = () => ({
  type: REQUEST_GET_OBJECTS
});

export const requestDeleteObject = id => ({
  type: REQUEST_DELETE_OBJECT,
  payload: id
});

export const requestEditeObject = data => ({
  type: REQUEST_EDITED_OBJECT,
  payload: data
});

export const requestAddObject = data => ({
  type: REQUEST_ADD_OBJECT,
  payload: data
});