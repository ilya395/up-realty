import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { authAwaitAction, authErrorAction, authSuccessAction } from '../../../store/login';
import { URL_TO_AUTH } from '../../../constants';
import { REQUEST_AUTH } from '../actions';
import { removeToken, setToken } from '../../../utils/token';

function* fetchLogin(data) {
  try {
    const { payload } = data
    yield put(authAwaitAction()); // тут меняется состояние на ожидание
    // достань данные
    // yield delay(5000);
    const login = yield call(() => {
        return fetch(
            URL_TO_AUTH,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(payload)
            }
          )
          .then(res => res.json())
    });

    // положи в стайт
    yield put(authSuccessAction(login)); // тут меняется состояние на отрисовку

    yield call(() => setToken(login));
  } catch(e) {
    // ошибки покажи
    yield put(authErrorAction(e));
    yield call(() => {
      return removeToken()
    });
  }
}

export function* watchLogin() {
    yield takeEvery(REQUEST_AUTH, fetchLogin);
}