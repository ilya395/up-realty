import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { URL_TO_OBJECTS } from '../../../../constants';
import { awaitMoveObject, errorMoveObject } from '../../../../store/objects';
import { getToken, removeToken } from '../../../../utils/token';
import { requestGetObjects } from "../../actions";
import { REQUEST_DELETE_OBJECT } from "../../actions"

function* fetchDeleteObject(data) {
  try {
    const { payload } = data;
    yield put(awaitMoveObject()); // тут меняется состояние на ожидание
    // достань данные
    // yield delay(5000);
    const response = yield call(() => {
      return fetch(
        URL_TO_OBJECTS,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${getToken()}`,
          },
          body: JSON.stringify({ id: payload })
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

export function* watchDeleteObject() {
    yield takeEvery(REQUEST_DELETE_OBJECT, fetchDeleteObject);
}