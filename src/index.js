import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore }  from 'react-router-redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import ApplicationContainer from './components/Application/container';
import ActivitiesContainer from './components/Activities/container';
import NoMatch from './components/NoMatch';

const logger = createLogger();
const store = createStore(reducers, {}, applyMiddleware(logger));

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ApplicationContainer}>
        <Route path="activities" component={ActivitiesContainer}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
