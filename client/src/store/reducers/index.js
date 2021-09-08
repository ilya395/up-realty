import { combineReducers } from 'redux';
import DialogPopupReducer from '../dialogPopup/reducers';
import LoginReducer from '../login/reducers';
import ObjectPopupReducer from '../ObjectPopup/reducers';
import ObjectsReducer from '../objects/reducers';
import StatusesReducer from '../statuses/reducer/stauses.reducer';

export const rootReducer = combineReducers({
  objectsReducer: ObjectsReducer,
  loginReducer: LoginReducer,
  dialogPopupReducer: DialogPopupReducer,
  objectPopupReducer: ObjectPopupReducer,
  statusesReducer: StatusesReducer
});