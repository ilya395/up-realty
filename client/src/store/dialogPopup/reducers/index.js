import { DIALOG_POPUP_IS_NOT_VISIBLE, DIALOG_POPUP_IS_VISIBLE } from "../actions/types/dialogPopup.type";

export const initialDialogPopupState = {
  isVisible: false,
}

export default function DialogPopupReducer(state = initialDialogPopupState, action) {
  switch (action.type) {
    case DIALOG_POPUP_IS_VISIBLE:
      return {
        isVisible: true
      }

    case DIALOG_POPUP_IS_NOT_VISIBLE:
      return {
        isVisible: false
      }

    default:
      return {
        ...state
      }
  }
}
