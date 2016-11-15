import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { flatten, pipe, map, reduce } from 'ramda';
import CSS from './style.css';
import { stringToColor } from '../../helpers/String';

const createLink = ({ actor, verb, object })=> ({
  source: actor,
  target: object,
  id: `${actor}-${verb}-${object}`,
  x: 0,
  y: 0,
  weight: 1
});

const createNodePair = ({ actor, object })=> [
  {
    id: actor,
    type: 'actor',
    color: stringToColor(actor),
    weight: 1,
  },
  {
    id: object,
    type: 'object',
    color: stringToColor(object),
    weight: 1
  }
];

const assignWeight = (modifier) => (items, item)=> [
  ...items.filter(({ id })=> id !== item.id),
  { ...item, weight: modifier(item.weight)},
];

const getNodesFromStatements = pipe(
  map(createNodePair),
  flatten,
  reduce(assignWeight(w => w * 10), [])
);

const getLinksFromStatements = pipe(
  map(createLink),
  reduce(assignWeight(w => w + 1), [])
);

const joinByKey = (current, next)=> {
  return next.reduce((list, item)=> {
    const currentItem = list.find(({ id })=> id === item.id);

    if (currentItem) {
      return list;
    }

    list.push(item);

    return list;
  }, current);
};

const ActorNode = ({ x, y, weight, id, color })=> (
  <circle
    r={weight}
    fill={color}
    cx={x}
    cy={y}
    key={id}
    rel={id}
    title={id}
    className={CSS.ActorNode}
  />
);

const ObjectNode = ({ x, y, weight, id, color })=> (
  <rect
    width={weight}
    height={weight}
    fill={color}
    x={x}
    y={y}
    key={id}
    rel={id}
    title={id}
    className={CSS.ObjectNode}
  />
);

const NodeRepresentation = ({ type, ...attributes })=> {
  if (type === 'object') {
    return <ObjectNode {...attributes} />;
  }

  return <ActorNode {...attributes} />;
};

const NodeLink = ({
  id,
  weight,
  source: { x: sourceX, y: sourceY } = { x: 0, y: 0 },
  target: { x: targetX, y: targetY } = { x: 0, y: 0 },
})=> {
  console.log(weight);
  return (
    <line
      className={CSS.Link}
      x1={sourceX}
      y1={sourceY}
      x2={targetX}
      y2={targetY}
      data-id={id}
      key={id}
      strokeWidth={weight}
    />
  );
}

class StatementsGraph extends Component {
  state = {
    nodes: [],
    links: [],
  }

  getGraphFromStatements (statements) {
    const { nodes, links } = this.state;
    return {
      nodes: joinByKey(nodes, getNodesFromStatements(statements)),
      links: joinByKey(links, getLinksFromStatements(statements)),
    };
  }

  componentDidMount () {
    const { statements } = this.props;
    const svg = ReactDOM.findDOMNode(this);
    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const simulation = d3.forceSimulation()
                         .force('link', d3.forceLink().id(d => d.id).distance(50))
                         .force('charge', d3.forceManyBody())
                         .force('collide', d3.forceCollide().radius((d)=> d.r * 10).strength(1))
                         .force('center', d3.forceCenter(width / 2, height / 2))
                         .on('tick', ()=> this.forceUpdate());

    this.updateSimulation(simulation, statements);
  }

  componentWillReceiveProps (nextProps) {
    const { statements } = nextProps;
    const { simulation } = this.state;

    this.updateSimulation(simulation, statements);
  }

  updateSimulation (simulation, statements) {
    const { nodes, links } = this.getGraphFromStatements(statements);

    this.setState({ nodes, links, simulation });

    simulation.force('link').links(links);
    simulation.nodes(nodes);
  }

  render () {
    const { nodes, links } = this.state;

    return (
      <svg className={CSS.StatementsGraph}>
        {links.map(link => <NodeLink {...link} key={link.id} />)}
        {nodes.map(node => <NodeRepresentation {...node} key={node.id} />)}
      </svg>
    );
  }
}

export default StatementsGraph;
