import { flatten, pipe, map } from 'ramda';
import { stringToColor } from './String';
import { modifyUniqueByAttribute, mutableJoinByKey } from './Array';

export const createLink = ({ actor, verb, object })=> ({
  source: actor,
  target: object,
  id: `${actor}-${object}`,
  x: 0,
  y: 0,
  value: 0
});

export const createNodePair = ({ actor, object })=> [
  {
    id: actor,
    type: 'actor',
    color: stringToColor('actor'),
    r: 3,
  },
  {
    id: object,
    type: 'object',
    color: stringToColor('object'),
    r: 3,
  }
];

const modifyUniqueIdByAttribute = modifyUniqueByAttribute('id');

export const getNodes = pipe(
  map(createNodePair),
  flatten,
  modifyUniqueIdByAttribute('r', r => r * 1.05)
);

export const getLinks = pipe(
  map(createLink),
  modifyUniqueIdByAttribute('value', value => value + 0.25)
);

const mutableJoinById = mutableJoinByKey('id');

export const insertNodesFromStatements = (nodes, statements)=> mutableJoinById(
  nodes,
  getNodes(statements)
);

export const insertLinksFromStatements = (links, statements)=> mutableJoinById(
  links,
  getLinks(statements)
);
