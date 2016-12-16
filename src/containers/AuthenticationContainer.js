import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getPathName } from '../selectors/location';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends PureComponent {

    componentWillMount() {
      this.checkAuth(this.props);
    }

    checkAuth({ isAuthenticated, returnTo }) {
      if (!isAuthenticated) {
        browserHistory.replace({
          pathname: '/login',
          state: {
            keepPrevious: true,
            returnTo
          }
        });
      }
    }

    render() {
      return <Component {...this.props}/>;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return ({
      isAuthenticated: !!state.sessions.user,
      returnTo: getPathName(ownProps) || '/'
    });
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
