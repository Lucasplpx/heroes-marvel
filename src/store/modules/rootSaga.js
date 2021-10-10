import { all } from 'redux-saga/effects';

import users from './user/store/sagas';

export default function* rootSaga() {
  return yield all([users]);
}
