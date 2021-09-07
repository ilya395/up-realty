import { combineReducers } from 'redux';
import DialogPopupReducer from '../dialogPopup/reducers';
import LoginReducer from '../login/reducers';
import ObjectsReducer from '../objects/reducers';

export const rootReducer = combineReducers({
  objectsReducer: ObjectsReducer,
  loginReducer: LoginReducer,
  dialogPopupReducer: DialogPopupReducer
});