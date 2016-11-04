import { createAction } from 'redux-actions';
import * as StatementsAPI from '../api/Statements';
import { ADD_STATEMENTS, FETCH_STATEMENTS } from './index';

export const addStatements = createAction(ADD_STATEMENTS);
export const fetchStatementsLoading = createAction(FETCH_STATEMENTS, ()=> ({ loading: true }));
export const fetchStatementsError = createAction(FETCH_STATEMENTS, ()=> ({ error: true }));
export const fetchStatementsSuccess = createAction(FETCH_STATEMENTS, ()=> ({ success: true }));

export const fetchStatements = ()=> dispatch => {
  dispatch(fetchStatementsLoading());

  return StatementsAPI.fetchStatements()
    .then(({ data })=> {
      dispatch(fetchStatementsSuccess());
      dispatch(addStatements(data));
    })
    .catch(()=> {
      dispatch(fetchStatementsError());
    });
};
