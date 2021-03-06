import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { prop } from 'ramda';
import { authenticateUser } from '../actions/sessions';
import LoginModal from '../components/LoginModal';
import { getPreviousState } from '../selectors/location';
import { isAuthenticated } from '../selectors/session';

class LoginContainer extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  componentWillMount() {
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated: wasAuthenticated } = this.props;
    const { isAuthenticated } = nextProps;

    if (wasAuthenticated !== isAuthenticated) {
      this.checkAuth(nextProps);
    }
  }

  checkAuth({ isAuthenticated, returnTo }) {
    if (isAuthenticated) {
      browserHistory.replace({
        pathname: returnTo,
        state: {
          keepPrevious: false
        }
      });
    }
  }

  render () {
    return (
      <LoginModal
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.onSubmit.bind(this)}
        onEmailChange={this.onEmailChange.bind(this)}
        onPasswordChange={this.onPasswordChange.bind(this)}
      />
    );
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.email, this.state.password);
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  returnTo: prop('returnTo', getPreviousState(state)) || '/'
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password)=> dispatch(authenticateUser({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
