import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import StatementsList from '../components/StatementsList';
import { fetchStatements } from '../actions/statements';
import { getSortedStatements } from '../selectors/statements';

class StatementsContainer extends PureComponent {
  componentDidMount () {
    this.props.onMount();
  }

  render () {
    return <StatementsList statements={this.props.statements} />;
  }
}

const mapStateToProps = state => ({
  statements: getSortedStatements(state),
});

const mapDispatchToProps = (dispatch, { isAuthenticated }) => ({
  onMount: ()=> isAuthenticated && dispatch(fetchStatements())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementsContainer);
