import { createSelector } from 'reselect'
import { prop, pipe, defaultTo } from 'ramda';

const defaultToObject = defaultTo({});
const defaultToEmptyString = defaultTo('');

export const getLocation = pipe(prop('location'), defaultToObject);
export const getPathName = createSelector(getLocation, pipe(prop('pathname'), defaultToEmptyString));
export const getState = createSelector(getLocation, pipe(prop('state'), defaultToObject));

export const getPreviousLocation = pipe(prop('routing'), defaultToObject, prop('locationBeforeTransitions'), defaultToObject);
export const getPreviousState = createSelector(getPreviousLocation, pipe(prop('state'), defaultToObject));
