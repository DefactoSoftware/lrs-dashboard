import { createSelector } from 'reselect'
import { prop, is } from 'ramda';

export const getSession = prop('session');
export const getUser = createSelector(getSession, prop('user'));
export const isAuthenticated = createSelector(getUser, is(Object));
