import { all } from 'redux-saga/effects';
import { authenticateSaga } from './sagas/login';

export function* sagas() {
  yield all([authenticateSaga()]);
}
