import { DIALOG_POPUP_IS_NOT_VISIBLE, DIALOG_POPUP_IS_VISIBLE } from "../actions/types/dialogPopup.type";

export const initialDialogPopupState = {
  isVisible: false,
  checked: null
}

export default function DialogPopupReducer(state = initialDialogPopupState, action) {
  switch (action.type) {
    case DIALOG_POPUP_IS_VISIBLE:
      return {
        isVisible: true,
        checked: action.payload
      }

    case DIALOG_POPUP_IS_NOT_VISIBLE:
      return {
        isVisible: false,
        checked: null
      }

    default:
      return {
        ...state
      }
  }
}
