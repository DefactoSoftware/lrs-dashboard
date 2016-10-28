import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe } from 'ramda';

export const getActivities = pipe(prop('activities'), values);
export const activitiesSelector = createSelector(getActivities, sortBy(prop('timestamp')));
