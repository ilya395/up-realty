import { all } from 'redux-saga/effects';
import { watchLogin } from './login';
import { watchGettingObjects } from './objects';
import { watchGettingStatuses } from './statuses';

export function* rootSaga() {
  yield all([
    watchLogin(),
    watchGettingObjects(),
    watchGettingStatuses()
  ])
}