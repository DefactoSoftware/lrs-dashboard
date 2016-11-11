import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatementsGraph from '../components/StatementsGraph';
import { fetchStatements } from '../actions/statements';
import { getActors, getObjects, getLinks } from '../selectors/statements';

class StatementsGraphContainer extends Component {
  componentDidMount () {
    this.props.onMount();
  }

  render () {
    return (
      <StatementsGraph
        links={this.props.links}
        actors={this.props.actors}
        objects={this.props.objects}
      />
    );
  }
}

const mapStateToProps = state => ({
  actors: getActors(state),
  objects: getObjects(state),
  links: getLinks(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: ()=> dispatch(fetchStatements())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementsGraphContainer);
