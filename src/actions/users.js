import { createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as UsersAPI from '../api/Users';
import { USERS_SUCCESS, USERS_REQUESTED } from './index';

export const addUsers = createAction(USERS_SUCCESS);
export const fetchUsers = createAction(USERS_REQUESTED);

export function* handleFetchUsers () {
  const { data: users } = yield call(UsersAPI.fetchUsers);

  yield put(addUsers(users));
}

export function* watchUsers () {
  yield* takeLatest(USERS_REQUESTED, handleFetchUsers);
}
