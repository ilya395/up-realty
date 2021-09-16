import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { URL_TO_STATUSES } from '../../../../constants';
import { REQUEST_GET_STATUSES } from '../../actions';
import { getToken, removeToken } from '../../../../utils/token';
import { awaitStatusesAction, errorStatusesAction, getStatusesAction } from '../../../../store/statuses';

function* fetchGetStatuses() {
  try {
    yield put(awaitStatusesAction()); // тут меняется состояние на ожидание
    // достань данные
    // yield delay(5000);
    const statuses = yield call(() => {
      return fetch(
        URL_TO_STATUSES,
        {
          // method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${getToken()}`,
          },
        }
      )
      .then(res => res.json())
    });

    // положи в стайт
    yield put(getStatusesAction(statuses)); // тут меняется состояние на отрисовку
  } catch(e) {
    // ошибки покажи
    yield put(errorStatusesAction(e));
    yield call(() => {
      return removeToken()
    });
  }
}

export function* watchGettingStatuses() {
    yield takeEvery(REQUEST_GET_STATUSES, fetchGetStatuses);
}