import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { URL_TO_OBJECTS } from '../../../../constants';
import { awaitMoveObject, errorMoveObject } from '../../../../store/objects';
import { getToken, removeToken } from '../../../../utils/token';
import { requestGetObjects } from "../../actions";
import { REQUEST_ADD_OBJECT } from "../../actions"

function* fetchAddObject(data) {
  try {
    const { payload } = data;
    yield put(awaitMoveObject()); // тут меняется состояние на ожидание
    // достань данные
    // yield delay(5000);
    const response = yield call(() => {
      return fetch(
        URL_TO_OBJECTS,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${getToken()}`,
          },
          body: JSON.stringify({...payload})
        }
      )
      .then(res => res.json())
    });

    // положи в стайт
    yield put(requestGetObjects()); // тут меняется состояние на отрисовку
  } catch(e) {
    // ошибки покажи
    yield put(errorMoveObject(e));
    yield call(() => {
      return removeToken()
    });
  }
}

export function* watchAddObject() {
    yield takeEvery(REQUEST_ADD_OBJECT, fetchAddObject);
}