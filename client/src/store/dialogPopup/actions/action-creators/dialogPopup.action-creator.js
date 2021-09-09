import { DIALOG_POPUP_IS_NOT_VISIBLE, DIALOG_POPUP_IS_VISIBLE } from "../types/dialogPopup.type";

export const dialogPopupIsVisibleAction = (id = null) => ({
  type: DIALOG_POPUP_IS_VISIBLE,
  payload: id
});

export const dialogPopupIsNotVisibleAction = () => ({
  type: DIALOG_POPUP_IS_NOT_VISIBLE
});