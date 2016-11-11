import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe, map, uniq, reduce } from 'ramda';

export const getStatements = pipe(prop('statements'), values);
export const getSortedStatements = createSelector(getStatements, sortBy(prop('timestamp')));
export const getActors = createSelector(getStatements, pipe(map(prop('actor')), uniq));
export const getObjects = createSelector(getStatements, pipe(map(prop('object')), uniq));
export const getLinks = createSelector(getStatements, reduce(
  (links, { actor, verb, object })=> {
    const finder = link => (
      link.actor === actor &&
      link.object === object &&
      link.verb === verb
    );

    const foundLink = links.find(link => finder(link));
    const filteredLinks = links.filter(link => !finder(link));

    const weight = (foundLink && foundLink.weight) || 0;

    return [...filteredLinks, { actor, verb, object, weight: weight + 1 }];
  },
  []
));
