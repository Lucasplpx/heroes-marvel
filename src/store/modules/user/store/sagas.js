import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import { api } from '../../../../services/api';

import {
  Types,
  actionStoreUsersSuccess,
  actionStoreUsersFailure,
} from './actions';

export function* storeUserRequest({ payload: { data } }) {
  try {
    // const response = yield call(api.get,'/users', data);
    const response = yield call(api.get, '');
    yield put(actionStoreUsersSuccess(response.data));
    yield delay(3000);
  } catch (error) {
    yield put(actionStoreUsersFailure(error.message));
  }
}

export default all([takeLatest(Types.STORE_REQUEST, storeUserRequest)]);
