import React, { Component } from 'react';
import * as d3 from 'd3';

class StatementsGraph extends Component {
  componentDidMount () {
    const simulation = d3.forceSimulation();

    simulation.on('tick', ()=> this.render());

    this.setState({
      simulation,
      data
    });
  }

  componentDidUpdate () {
    const nodes = this.getNodes();

    this.state.simulation.nodes(nodes);
  }

  getData () {
    return this.props.nodes.map(node => ({
      node,
      r: Math.floor(Math.random() * 8 + 2),
      x: 0,
      y: 0,
    }));
  }

  render () {
    return (
      <svg width="500" height="500">
        {this.props.nodes.map((node)=> {
          return (
            <circle
              r={node.r}
              fill="#0f0"
              cx={node.x}
              cy={node.y}
              ref={node}
              key={node}
            >
              {node}
            </circle>
          );
        })}
      </svg>
    );
  }
}

export default StatementsGraph;
