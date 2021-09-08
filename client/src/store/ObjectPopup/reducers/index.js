import { OBJECT_POPUP_AWAIT_REQUEST, OBJECT_POPUP_ERROR_REQUEST, OBJECT_POPUP_IS_NOT_VISIBLE, OBJECT_POPUP_IS_VISIBLE, OBJECT_POPUP_NEW_OBJECT, OBJECT_POPUP_SUCCESS_REQUEST } from "../actions/types/objectPopup.type";

export const initialObjectPopupState = {
  isVisible: false,
  // isNew: false,
  await: false,
  error: false,
  editing: false,
  editingData: null
}

export default function ObjectPopupReducer(state = initialObjectPopupState, action) {
  switch (action.type) {
    case OBJECT_POPUP_IS_VISIBLE:
      return {
        ...state,
        isVisible: true
      }

    case OBJECT_POPUP_IS_NOT_VISIBLE:
      return {
        ...state,
        isVisible: false
      }

    case OBJECT_POPUP_AWAIT_REQUEST:
      return {
        ...state,
        await: true,
        error: false,
        editing: false,
      }

    case OBJECT_POPUP_ERROR_REQUEST:
      return {
        ...state,
        await: false,
        error: action.payload,
        editing: false,
      }

    default:
      return {
        ...state
      }
  }
}
