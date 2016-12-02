export function fetchUsers() {
  return fetch(`${process.env.LRS_DASHBOARD_API_URL}/users/`)
    .then(response => response.json());
}
