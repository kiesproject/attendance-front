import { all, put, takeEvery } from 'redux-saga/effects';

import { login, LoginAsync } from '../action/';

function* loginAsync(action: LoginAsync) {
  // TODO: post `/login`, and put `account` reducer
  const { username, password } = action;
  // dummy account
  if (username === 'fuga' && password === 'hogehoge') {
    yield put(login(username, false));
  }
}

function* watchLogin() {
  yield takeEvery('LOGIN_ASYNC', loginAsync);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
