import { GET_OBJECTS, ADD_OBJECT, EDIT_OBJECT, DELETE_OBJECT, ERROR_OBJECT, AWAIT_OBJECT } from "../types/actions.type";

export const getObjects = payload => ({
  type: GET_OBJECTS,
  payload
});

export const addObject = payload => ({
  type: ADD_OBJECT,
  payload
});

export const editObject = payload => ({
  type: EDIT_OBJECT,
  payload
});

export const deleteObject = payload => ({
  type: DELETE_OBJECT,
  payload
});

export const errorMoveObject = payload => ({
  type: ERROR_OBJECT,
  payload
});

export const awaitMoveObject = () => ({
  type: AWAIT_OBJECT
})