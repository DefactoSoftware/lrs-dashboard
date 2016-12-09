import { handleActions } from 'redux-actions';
import { SESSION_SUCCESS, SESSION_ERROR } from '../actions';

export default handleActions({
  [SESSION_SUCCESS]: (state, { payload: { user } })=> ({ user }),
  [SESSION_ERROR]: ()=> ({})
}, {});
