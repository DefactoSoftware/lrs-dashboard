import { reduce } from 'ramda';
import { handleActions } from 'redux-actions';
import { ADD_STATEMENTS } from '../actions';

export default handleActions({
  [ADD_STATEMENTS]: (state, { payload })=> reduce(
    (acc, value)=> ({ ...acc, [value.id]: value}),
    state,
    payload
  )
}, {});
