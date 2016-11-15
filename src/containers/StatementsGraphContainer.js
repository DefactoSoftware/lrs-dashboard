import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatementsGraph from '../components/StatementsGraph';
import { fetchStatements } from '../actions/statements';
import { getStatements } from '../selectors/statements';

class StatementsGraphContainer extends Component {
  componentDidMount () {
    this.props.onMount();
  }

  render () {
    return (
      <StatementsGraph statements={this.props.statements} />
    );
  }
}

const mapStateToProps = state => ({
  statements: getStatements(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: ()=> dispatch(fetchStatements())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementsGraphContainer);
