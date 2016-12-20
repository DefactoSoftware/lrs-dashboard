import { pipe, prop } from 'ramda';

export const JSONRequestBody = pipe(prop('requestBody'), JSON.parse);
