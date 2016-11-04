import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe } from 'ramda';

export const getStatements = pipe(prop('statements'), values);
export const getSortedStatements = createSelector(getStatements, sortBy(prop('timestamp')));
