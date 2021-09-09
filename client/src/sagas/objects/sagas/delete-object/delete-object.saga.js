import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { URL_TO_OBJECTS } from '../../../../constants';
import { REQUEST_GET_OBJECTS } from '../../actions';
import { awaitMoveObject, errorMoveObject, getObjects } from '../../../../store/objects';
import { getToken, removeToken } from '../../../../utils/token';
import { requestGetObjects } from "../get-objects/get-objects.saga"

function* fetchDeleteObject(id) {
  console.log("fetchDeleteObject: ", id)
  try {
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
          body: JSON.stringify({ id })
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