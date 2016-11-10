import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe, map, uniq } from 'ramda';

export const getStatements = pipe(prop('statements'), values);
export const getSortedStatements = createSelector(getStatements, sortBy(prop('timestamp')));
export const getActors = createSelector(getStatements, pipe(map(prop('actor')), uniq));
export const getObjects = createSelector(getStatements, pipe(map(prop('object')), uniq));
export const getLinks = createSelector(getStatements, map(
  ({ actor: source, verb: value, object: target })=> ({ source, value, target })
));
