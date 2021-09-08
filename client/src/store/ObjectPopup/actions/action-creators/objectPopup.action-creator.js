import { OBJECT_POPUP_AWAIT_REQUEST, OBJECT_POPUP_ERROR_REQUEST, OBJECT_POPUP_IS_NOT_VISIBLE, OBJECT_POPUP_IS_VISIBLE, OBJECT_POPUP_SUCCESS_REQUEST } from "../types/objectPopup.type";

export const objectPopupIsVisibleAction = id => ({
  type: OBJECT_POPUP_IS_VISIBLE,
  payload: id
});

export const objectPopupIsNotVisibleAction = () => ({
  type: OBJECT_POPUP_IS_NOT_VISIBLE
});

export const objectPopupAwaitRequestAction = () => ({
  type: OBJECT_POPUP_AWAIT_REQUEST
});

export const objectPopupErrorRequestAction = () => ({
  type: OBJECT_POPUP_ERROR_REQUEST
});

export const objectPopupSuccessRequestAction = () => ({
  type: OBJECT_POPUP_SUCCESS_REQUEST
});