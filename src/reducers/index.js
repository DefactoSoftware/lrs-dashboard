import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import statements from './statements';
import users from './users';
import session from './session';

export default combineReducers({
  statements,
  users,
  session,
  routing
});
