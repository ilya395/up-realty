import { all } from 'redux-saga/effects';
import { watchLogin } from './login';
import { watchGettingObjects } from './objects';

export function* rootSaga() {
  yield all([
    watchLogin(),
    watchGettingObjects()
  ])
}