const defaults = {
  url: null,
  options: {},
  onSuccess: ()=> null,
  onError: ()=> null,
  jwt: null
};

function withAuthorizationHeaders(jwt, options) {
  return {
    ...options,
    headers: {
      'Authorization': `Bearer ${jwt}`,
      ...options.headers
    }
  }
}

async function reauthorizeRequest(initialResponse, url, options, ...args) {
  try {
    const response = await authorize();

    defaults.onSuccess(response);

    return fetch(url, withAuthorizationHeaders(defaults.jwt, options), ...args);
  } catch (error) {

    defaults.onError(error);

    throw new Error(initialResponse);
  }
}

export async function authorize(url, options) {
  const response = await fetch(url || defaults.url, options || defaults.options);
  const { status } = response;

  if (status < 400) {
    const body = await response.json();
    const { data: { jwt } } = body;

    setOptions({ url, options, jwt });

    return body;
  }

  throw new Error(response);
}

export async function fetchAuthorized(url, options = {}, ...args) {
  const response = await fetch(url, withAuthorizationHeaders(defaults.jwt, options), ...args);
  const { status } = response;

  if (status === 401) {
    return reauthorizeRequest(response, url, options, ...args);
  }

  return response;
}

export function setOptions(options) {
  Object.assign(defaults, options);
};
