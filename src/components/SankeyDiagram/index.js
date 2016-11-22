import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from './style.css';
import { sankey } from 'd3-sankey';

console.log(sankey);

const Node = ({ x, y, id, color })=> (
  <rect
    fill={color}
    transform={`translate(${x}, ${y})`}
    key={id}
    rel={id}
    title={id}
    className={CSS.Node}
  />
);

const NodeLink = ({
  id,
  dy,
  value,
  path,
})=> {
  return (
    <path
      className={CSS.Link}
      d={path}
      data-id={id}
      key={id}
      strokeWidth={Math.max(1, dy)}
    />
  );
}

class SankeyDiagram extends Component {
  componentWillMount () {
    const { nodes, links } = this.props;
    const simulation = sankey()
                         .nodeWidth(15)
                         .nodePadding(10)
                         .nodes(nodes)
                         .links(links)
                         .layout(32);
    const path = simulation.link();


     this.setState({ simulation, path });
  }

  componentDidMount () {
    const { simulation } = this.state;
    const svg = ReactDOM.findDOMNode(this);
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    simulation.size([width, height]);

    this.setState({ simulation });
  }

  componentWillReceiveProps (nextProps) {
    const { simulation } = this.state;
    const { nodes, links } = nextProps;

    simulation.links(links);
    simulation.nodes(nodes);

    this.setState({ simulation });
  }

  render () {
    const { path } = this.state;
    const { nodes, links } = this.props;

    console.log(nodes);
    console.log(links);

    return (
      <svg className={CSS.NetworkGraph}>
        {links.map(link => <NodeLink {...link} path={path} key={link.id} />)}
        {nodes.map(node => <Node {...node} key={node.id} />)}
      </svg>
    );
  }
}

export default SankeyDiagram;
