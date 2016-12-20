import { fetchAuthorized } from '../services/BearerAuthentication';

export async function fetchStatements() {
  const response = await fetchAuthorized(`${process.env.LRS_DASHBOARD_API_URL}/statements/`);

  return await response.json();
}
