import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import statements from './statements';
import users from './users';

export default combineReducers({
  statements,
  users,
  routing: routerReducer
})
