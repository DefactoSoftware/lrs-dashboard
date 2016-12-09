import { createAction } from 'redux-actions';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as SessionsAPI from '../api/Sessions';
import { SESSION_REQUESTED, SESSION_SUCCESS, SESSION_ERROR } from './index';

export const setCurrentSession = createAction(SESSION_SUCCESS);
export const setCurrentSessionFailed = createAction(SESSION_ERROR);
export const authenticateUser = createAction(SESSION_REQUESTED);

export function* handleRequestSession ({ payload }) {

  try {
    const response = yield call(SessionsAPI.newSession, payload);
    const { data: session } = response;

    yield put(setCurrentSession(session));

  } catch(error) {
    yield put(setCurrentSessionFailed(error));
  }
}

export function* watchSessions () {
  yield* takeEvery(SESSION_REQUESTED, handleRequestSession);
}
