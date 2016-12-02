import React from 'react';
import { Router, Route } from 'react-router';
import StatementsGraphContainer from './StatementsGraphContainer';
import StatementsListContainer from './StatementsListContainer';
import UsersOverviewContainer from './UsersOverviewContainer';
import ApplicationContainer from './ApplicationContainer';

export default ({ history })=>(
  <Router history={history}>
    <Route path="/" component={ApplicationContainer}>
      <Route path="statements/graph" component={StatementsGraphContainer} />
      <Route path="statements/list" component={StatementsListContainer} />
      <Route path="users" component={UsersOverviewContainer} />
    </Route>
  </Router>
);
