import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NetworkGraph from '../components/NetworkGraph';
import { fetchStatements } from '../actions/statements';
import { getStatements } from '../selectors/statements';
import { insertNodesFromStatements, insertLinksFromStatements } from '../helpers/Statements';

class StatementsGraphContainer extends PureComponent {
  state = {
    nodes: [],
    links: [],
  }

  componentDidMount () {
    const { statements } = this.props;

    this.setStateFromStatements(statements);

    this.props.onMount();
  }

  componentWillReceiveProps ({ statements }) {
    this.setStateFromStatements(statements);
  }

  setStateFromStatements(statements) {
    const { nodes, links } = this.getGraphFromStatements(statements);

    this.setState({ nodes, links });
  }

  getGraphFromStatements (statements) {
    const { nodes, links } = this.state;

    return {
      nodes: insertNodesFromStatements(nodes, statements),
      links: insertLinksFromStatements(links, statements),
    };
  }

  render () {
    const { nodes, links } = this.state;

    return (
      <NetworkGraph nodes={nodes} links={links} />
    );
  }
}

const mapStateToProps = state => ({
  statements: getStatements(state),
});

const mapDispatchToProps = (dispatch, { isAuthenticated }) => ({
  onMount: ()=> isAuthenticated && dispatch(fetchStatements())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementsGraphContainer);
