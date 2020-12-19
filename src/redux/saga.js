import { all } from 'redux-saga/effects';
import { authenticateSaga } from './sagas/login';
import { registerSaga } from './sagas/register';

export function* sagas() {
  yield all([authenticateSaga(), registerSaga()]);
}
