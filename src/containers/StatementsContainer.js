import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatementsList from '../components/StatementsList';
import { fetchStatements } from '../actions/statements';
import { getSortedStatements } from '../selectors/statements';

class StatementsContainer extends Component {
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

const mapDispatchToProps = dispatch => ({
  onMount: ()=> dispatch(fetchStatements())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementsContainer);
