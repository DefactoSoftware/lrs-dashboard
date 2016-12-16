import { createSelector } from 'reselect'
import { sortBy, prop, values, pipe } from 'ramda';

export const getUsers = pipe(prop('users'), values);
export const getSortedUsers = createSelector(getUsers, sortBy(prop('email')));
