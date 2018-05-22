import { all, call, put, takeEvery } from 'redux-saga/effects';

import { login, LoginAsync } from '../action/';
import { postLogin } from '../api/AttendanceApi';

function* loginAsync(action: LoginAsync) {
  // TODO: post `/login`, and put `account` reducer
  const { username: name, password } = action;
  console.log({
    name,
    password,
  });
  try {
    const response = yield call(postLogin, name, password);
    yield console.log('response', response);
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
