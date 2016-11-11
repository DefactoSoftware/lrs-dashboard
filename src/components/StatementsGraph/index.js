import React, { Component } from 'react';
import CSS from './style.css';
import { stringToColor } from '../../helpers/String';

const ActorNode = ({ x, y, r, name, color })=> (
  <circle
    r={r}
    fill={color}
    cx={x}
    cy={y}
    key={name}
    className={CSS.ActorNode}
  >
    {name}
  </circle>
);

const ObjectNode = ({ x, y, r, name, color })=> (
  <rect
    width={r}
    height={r}
    fill={color}
    x={x}
    y={y}
    key={name}
    className={CSS.ObjectNode}
  >
    {name}
  </rect>
);

const Link = ({
  actor: { x: actorX, y: actorY, name: actorName } = { x: 0, y: 0 },
  object: { x: objectX, y: objectY, name: objectName } = { x: 0, y: 0 },
  verb
})=> (
  <line
    className={CSS.Link}
    x1={actorX}
    y1={actorY}
    x2={objectX}
    y2={objectY}
    data-key={`${actorName}-${verb}-${objectName}`}
    key={`${actorName}-${verb}-${objectName}`}
  />
);

class StatementsGraph extends Component {
  getNodes (nodes) {
    return nodes.map(name => ({
      name,
      color: stringToColor(name),
      r: Math.floor(Math.random() * 20 + 2),
      x: Math.floor(Math.random() * 100 + 2),
      y: Math.floor(Math.random() * 100 + 2),
    }));
  }

  getLinks (actors, objects, links) {
    return links.map(({ actor, object, ...attributes })=> {
      return {
        actor: actors.find(currentActor => actor === currentActor.name),
        object: objects.find(currentObject => object === currentObject.name),
        ...attributes
      }
    });
  }

  render () {
    const actors = this.getNodes(this.props.actors);
    const objects = this.getNodes(this.props.objects);
    const links = this.getLinks(actors, objects, this.props.links);

    return (
      <svg className={CSS.StatementsGraph}>
        {links.map(Link)}
        {actors.map(ActorNode)}
        {objects.map(ObjectNode)}
      </svg>
    );
  }
}

export default StatementsGraph;
