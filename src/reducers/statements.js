import { reduce } from 'ramda';
import { handleActions } from 'redux-actions';
import { STATEMENTS_SUCCESS } from '../actions';

export default handleActions({
  [STATEMENTS_SUCCESS]: (state, { payload })=> reduce(
    (acc, value)=> ({ ...acc, [value.id]: value}),
    state,
    payload
  )
}, {});
