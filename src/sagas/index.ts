import { all, call, put, takeEvery } from 'redux-saga/effects';

import { error as errorAction, login, LoginAsync } from '../action/';
import { postLogin, postRegister } from '../api/AttendanceApi';

function* loginAsync(action: LoginAsync) {
  const { username: name, password } = action;
  try {
    const response = yield call(postLogin, name, password);
    // TODO: get administer authority by response
    // TODO: レスポンスは今後変わるかも？
    yield put(login(response.user, true));
  } catch (error) {
    yield put(errorAction(true, error.message));
  }
}

function* registerAsync(action: any) {
  const { username: name, password } = action;
  try {
    yield call(postRegister, name, password);
    // TODO: レスポンスは今後変わるかも？
    yield put(login(name, false));
  } catch (error) {
    yield put(errorAction(true, error.message));
  }
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
