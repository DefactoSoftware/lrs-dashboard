import { curry } from 'ramda';

function functionOrValue (value, ...args) {
  if (typeof value === 'function') {
    return value(...args);
  }

  return value;
}

export const createModel = curry((defaults, attributes)=> Object.keys(defaults).reduce(
  (acc, key)=> ({
    [key]: functionOrValue(defaults[key], acc),
    ...acc,
  }),
  { ...attributes }
));
