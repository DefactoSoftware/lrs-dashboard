import { createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as StatementsAPI from '../api/Statements';
import { STATEMENTS_SUCCESS, STATEMENTS_REQUESTED } from './index';

export const addStatements = createAction(STATEMENTS_SUCCESS);
export const fetchStatements = createAction(STATEMENTS_REQUESTED);

export function* handleFetchStatements () {
  const { data: statements } = yield call(StatementsAPI.fetchStatements);

  yield put(addStatements(statements));
}

export function* watchStatements () {
  yield* takeLatest(STATEMENTS_REQUESTED, handleFetchStatements);
}
