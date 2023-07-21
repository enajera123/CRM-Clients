export async function addClient(newClient) {}
export async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  return result;
}
export async function getClient(id) {}
export async function deleteClient(id) {}
export async function updateClient(id, newClient) {}
