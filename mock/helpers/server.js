import Pretender from 'pretender';

function getScenarioFromURL() {
  const vars = {};

  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });

  const { MOCK_SCENARIO: scenario } = vars;

  return scenario;
}

// Reset the fetch API in Chrome so that the whatwg-fetch polyfills takes over
// that uses XMLHTTPRequest so that pretender can override XMLHTTPRequest
window.fetch = undefined;

let server;

export default function (scenario = getScenarioFromURL()) {

  if (server) {
    server.shutdown();
  }

  server = new Pretender(require(`../scenarios/${scenario || 'default'}`));

  server.handledRequest = function(verb, path, request) {
    console.groupCollapsed(verb, path);

    if (request.responseHeaders['Content-Type'] === 'application/json') {
      console.log(JSON.parse(request.responseText));
    } else {
      console.log(request.responseText);
    }

    console.groupEnd();
  }

  return server;
}
