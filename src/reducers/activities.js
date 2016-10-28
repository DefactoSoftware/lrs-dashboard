import { reduce } from 'ramda';
import { handleActions } from 'redux-actions';
import { ADD_ACTIVITIES } from '../actions';

export default handleActions({
  [ADD_ACTIVITIES]: (state, { payload })=> reduce(
    (acc, value)=> ({ ...acc, [value.id]: value}),
    state,
    payload
  )
}, {});
