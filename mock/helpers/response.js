import { partial } from 'ramda';

const JSONResponse = (status = 200, body = {}, headers = {})=> [
  status,
  { 'Content-Type': 'application/json', ...headers },
  JSON.stringify(body)
];

const StringResponse = (status = 200, body = '', headers = {})=> [
  status,
  headers,
  body
];

const response = (status, body = undefined, headers = {})=> {
  if (typeof body === 'object') {
    return JSONResponse(status, body, headers);
  }

  return StringResponse(status, body, headers);
};

export const status200 = partial(response, [200]);
export const status404 = partial(response, [404]);
