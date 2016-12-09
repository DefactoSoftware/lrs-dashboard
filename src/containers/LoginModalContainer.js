import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { authenticateUser } from '../actions/sessions';
import LoginModal from '../components/LoginModal';

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  };

  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth();
  }

  checkAuth() {
    if (this.props.isAuthenticated) {

      browserHistory.push({
        pathname: this.props.returnTo || '/',
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

const mapStateToProps = state => ({
  isAuthenticated: !!state.sessions.user,
  returnTo: state.routing.locationBeforeTransitions.state.returnTo
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password)=> dispatch(authenticateUser({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
