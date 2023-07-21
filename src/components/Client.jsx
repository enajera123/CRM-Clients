import React from "react";
import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../data/clients";

export async function action({ params }) {
  await deleteClient(params.id);

  return redirect("/");
}

function Client({ client }) {
  const navigate = useNavigate();
  const { name, company, phone, email, id } = client;
  return (
    <tr className="border-b">
      <td className="p-2 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{company}</p>
      </td>
      <td className="p-2 space-y-2">
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold uppercase">Tel: </span>
          {phone}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold uppercase">Email: </span>
          {email}
        </p>
      </td>
      <td className="flex justify-end gap-3 p-6">
        <input
          className=" hover:cursor-pointer font-bold uppercase text-blue-600 hover:text-blue-700"
          type="button"
          value="Edit"
          onClick={() => navigate(`/client/${id}/edit`)}
        />
        <Form
        method="post"
          action={`/client/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Are you sure?")) {
              e.preventDefault();
            }
          }}
        >
          <input
            className=" hover:cursor-pointer font-bold uppercase text-red-600 hover:text-red-700"
            type="submit"
            value="Delete"
          />
        </Form>
      </td>
    </tr>
  );
}

export default Client;
