import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import activities from './activities';

export default combineReducers({
  activities,
  routing: routerReducer
})
