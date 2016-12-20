import { createSelector } from 'reselect'
import { prop, compose, isNil, not, defaultTo, pipe } from 'ramda';

export const getSession = pipe(prop('session'), defaultTo({}));
export const getUser = createSelector(getSession, prop('user'));
export const isAuthenticated = createSelector(getUser, compose(not, isNil));
