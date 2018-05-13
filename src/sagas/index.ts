import { all, takeEvery } from 'redux-saga/effects';

import { Login } from '../action/';

function* loginAsync(action: Login) {
  yield console.log('login', action.id, action.password);
}

function* watchLogin() {
  yield takeEvery('LOGIN', loginAsync);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
