import React from "react";
import { useLoaderData } from "react-router-dom";
import data from "../../db.json";
import Client from "../components/Client";
export function loader() {
  return data.clientes;
}
function Index() {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl font-black text-blue-900">Clients</h1>
      <p className="mt-3">Manage Your Clients</p>
      {data.length ? (
        <table className="w-full bg-white shadow-xl mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No Hay Clientes aún</p>
      )}
    </div>
  );
}

export default Index;
