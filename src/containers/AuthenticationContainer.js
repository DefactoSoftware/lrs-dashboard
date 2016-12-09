import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        const redirectAfterLogin = this.props.location.pathname;

        browserHistory.push({
          pathname: '/login',
          state: {
            keepPrevious: true,
            returnTo: redirectAfterLogin
          }
        });
      }
    }

    render() {
      if (this.props.isAuthenticated) {
        if (Component) {
          return <Component {...this.props}/>;
        }

        return this.props.children;
      }

      return <p>Not authorized</p>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: !!state.sessions.user
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
