import React from 'react';
import { Router, Route } from 'react-router';
import StatementsGraphContainer from './StatementsGraphContainer';
import StatementsListContainer from './StatementsListContainer';
import UsersOverviewContainer from './UsersOverviewContainer';
import ApplicationContainer from './ApplicationContainer';
import LoginModalContainer from './LoginModalContainer';
import { requireAuthentication } from './AuthenticationContainer';

export default ({ history })=>(
  <Router history={history}>
    <Route path="/" component={ApplicationContainer}>
      <Route path="login" component={LoginModalContainer} modal={true} />

      <Route path="statements">
        <Route path="graph" component={requireAuthentication(StatementsGraphContainer)} />
        <Route path="list" component={requireAuthentication(StatementsListContainer)} />
      </Route>

      <Route path="users" component={requireAuthentication(UsersOverviewContainer)} />
    </Route>
  </Router>
);
