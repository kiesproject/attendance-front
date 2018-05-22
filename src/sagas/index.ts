import { all, call, put, takeEvery } from 'redux-saga/effects';

import { login, LoginAsync } from '../action/';
import { postLogin } from '../api/AttendanceApi';

function* loginAsync(action: LoginAsync) {
  const { username: name, password } = action;
  try {
    const response = yield call(postLogin, name, password);
    yield put(login(response.name, response.password));
  } catch (error) {
    // TODO: put action to error
    yield console.error(error.message);
  }
}

function* watchLogin() {
  yield takeEvery('LOGIN_ASYNC', loginAsync);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
