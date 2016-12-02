export function status200(response, type) {
  if (typeof response === 'object') {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(response)
    ];
  }

  return [ 200, {}, response ];
}
