import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { URL_TO_OBJECTS } from '../../../../constants';
import { REQUEST_GET_OBJECTS } from '../../actions';
import { awaitMoveObject, errorMoveObject, getObjects } from '../../../../store/objects';
import { getToken, removeToken } from '../../../../utils/token';

function* fetchGetObjects() {
  try {
    yield put(awaitMoveObject()); // тут меняется состояние на ожидание
    // достань данные
    // yield delay(5000);
    const objects = yield call(() => {
      return fetch(
        URL_TO_OBJECTS,
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
    yield put(getObjects(objects)); // тут меняется состояние на отрисовку
  } catch(e) {
    // ошибки покажи
    yield put(errorMoveObject(e));
    yield call(() => {
      return removeToken()
    });
  }
}

export function* watchGettingObjects() {
    yield takeEvery(REQUEST_GET_OBJECTS, fetchGetObjects);
}