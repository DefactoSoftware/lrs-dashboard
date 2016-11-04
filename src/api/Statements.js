export function fetchStatements() {
  return fetch('http://localhost:3000/api/statements')
    .then(response => response.json());
}
