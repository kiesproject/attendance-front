import { all, call, put, takeEvery } from 'redux-saga/effects';

import { error as errorAction, login, LoginAsync } from '../action/';
import { postLogin } from '../api/AttendanceApi';

function* loginAsync(action: LoginAsync) {
  const { username: name, password } = action;
  try {
    const response = yield call(postLogin, name, password);
    // TODO: get administer authority by response
    yield put(login(response.user, true));
  } catch (error) {
    yield put(errorAction(true, error.message));
  }
}

function* registerAsync(action: any) {
  const { username: name, password } = action;
  yield console.log('registerAsync', name, password);
}

function* watchLogin() {
  yield takeEvery('LOGIN_ASYNC', loginAsync);
}

function* watchRegister() {
  yield takeEvery('REGISTER_ASYNC', registerAsync);
}

export default function* rootSaga() {
  yield all([watchLogin(), watchRegister()]);
}
