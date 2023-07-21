export async function addClient(newClient) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "post",
      body: JSON.stringify(newClient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  return result;
}
export async function getClient(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();
  return result;
}
export async function deleteClient(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "delete",
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function updateClient(id, newClient) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "put",
      body: JSON.stringify(newClient),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
