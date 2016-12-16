import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UsersOverview from '../components/UsersOverview';
import { fetchUsers } from '../actions/users';
import { getUsers } from '../selectors/users';

class UsersOverviewContainer extends PureComponent {
  componentDidMount () {
    this.props.onMount();
  }

  render () {
    const { users } = this.props;
    return (<UsersOverview users={users} />);
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: ()=> dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersOverviewContainer);
