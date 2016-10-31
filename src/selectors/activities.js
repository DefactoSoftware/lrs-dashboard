import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe } from 'ramda';

export const getActivities = pipe(prop('activities'), values);
export const getSortedActivities = createSelector(getActivities, sortBy(prop('timestamp')));
