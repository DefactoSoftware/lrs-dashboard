import { reduce } from 'ramda';
import { handleActions } from 'redux-actions';
import { USERS_SUCCESS } from '../actions';

export default handleActions({
  [USERS_SUCCESS]: (state, { payload })=> reduce(
    (acc, value)=> ({ ...acc, [value.id]: value}),
    state,
    payload
  )
}, {});
