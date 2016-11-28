export function fetchStatements() {
  return fetch(`${process.env.LRS_DASHBOARD_API_URL}/statements/`)
    .then(response => response.json());
}
