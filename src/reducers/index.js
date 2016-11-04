import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import statements from './statements';

export default combineReducers({
  statements,
  routing: routerReducer
})
