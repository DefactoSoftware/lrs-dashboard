import { authorize } from '../services/BearerAuthentication';

export async function newSession(payload) {
  return await authorize(
    `${process.env.LRS_DASHBOARD_API_URL}/auth`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
