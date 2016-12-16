import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import statements from './statements';
import users from './users';
import sessions from './sessions';

export default combineReducers({
  statements,
  users,
  sessions,
  routing
});
