import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import CSS from './style.css';

const SourceNode = ({ x, y, r, id, color })=> (
  <circle
    r={r}
    fill={color}
    transform={`translate(${x}, ${y})`}
    key={id}
    rel={id}
    title={id}
    className={CSS.ActorNode}
  />
);

const TargetNode = ({ x, y, r, id, color })=> (
  <rect
    width={r}
    height={r}
    fill={color}
    transform={`translate(${x - r / 2}, ${y - r / 2})`}
    key={id}
    rel={id}
    title={id}
    className={CSS.ObjectNode}
  />
);

const NodeRepresentation = ({ type, ...attributes })=> {
  if (type === 'object') {
    return <TargetNode {...attributes} />;
  }

  return <SourceNode {...attributes} />;
};

const NodeLink = ({
  id,
  value,
  source: { x: sourceX, y: sourceY } = { x: 0, y: 0 },
  target: { x: targetX, y: targetY } = { x: 0, y: 0 },
})=> {
  return (
    <line
      className={CSS.Link}
      x1={sourceX}
      y1={sourceY}
      x2={targetX}
      y2={targetY}
      data-id={id}
      key={id}
      strokeWidth={value}
    />
  );
}

class NetworkGraph extends Component {
  componentWillMount () {
    const { nodes, links } = this.props;
    const simulation = d3.forceSimulation(nodes)
                         .force('link', d3.forceLink(links).id(d => d.id).strength(d => d.value  / 100))
                         .force('collision', d3.forceCollide().radius(d => d.r + 0.5).strength(0.9))
                         .force('charge', d3.forceManyBody().strength(-50))
                         .force('x', d3.forceX().x(d => d.x))
                         .force('y', d3.forceY().y(d => d.y))
                         .on('tick', ()=> this.forceUpdate());

     this.setState({ simulation });
  }

  componentDidMount () {
    const { simulation } = this.state;
    const svg = ReactDOM.findDOMNode(this);
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    simulation.force('center', d3.forceCenter(width / 2, height / 2))

    this.setState({ simulation });
  }

  componentWillReceiveProps (nextProps) {
    const { simulation } = this.state;
    const { nodes, links } = nextProps;

    simulation.force('link').links(links);
    simulation.nodes(nodes);

    this.setState({ simulation });
  }

  render () {
    const { nodes, links } = this.props;

    return (
      <svg className={CSS.NetworkGraph}>
        {links.map(link => <NodeLink {...link} key={link.id} />)}
        {nodes.map(node => <NodeRepresentation {...node} key={node.id} />)}
      </svg>
    );
  }
}

export default NetworkGraph;
