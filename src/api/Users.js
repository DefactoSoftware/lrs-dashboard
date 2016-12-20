import { fetchAuthorized } from '../services/BearerAuthentication';

export async function fetchUsers() {
  const response = await fetchAuthorized(`${process.env.LRS_DASHBOARD_API_URL}/users/`);

  return await response.json();
}
