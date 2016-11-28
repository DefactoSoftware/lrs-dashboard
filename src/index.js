import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore }  from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';
import RouterContainer from './containers/RouterContainer';
import { watchStatements } from './actions/statements';

const saga = createSagaMiddleware();

const logger = createLogger();
const store = createStore(reducers, {}, applyMiddleware(logger, saga));
const history = syncHistoryWithStore(browserHistory, store);

saga.run(watchStatements);

const render = (container)=> (ReactDOM.render((
  <AppContainer>
    <Provider store={store}>
      {container}
    </Provider>
  </AppContainer>
), document.getElementById('root')));

render(<RouterContainer history={history} />);

if (module.hot) {
  module.hot.accept('./containers/RouterContainer', ()=> {
    const NextRootContainer = require('./containers/RouterContainer').default;

    render(<NextRootContainer history={history} />);
  });
}
