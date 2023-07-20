import React from "react";

function Client({ client }) {
  const { nombre, empresa, telefono, email, id } = client;
  return (
    <tr className="border-b">
      <td className="p-2 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-2 space-y-2">
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold uppercase">Tel: </span>
          {telefono}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold uppercase">Email: </span>
          {email}
        </p>
      </td>
      <td className="flex justify-end gap-3 p-6">
        <input className=" hover:cursor-pointer font-bold uppercase text-blue-600 hover:text-blue-700"  type="button" value="Edit" />
        <input className=" hover:cursor-pointer font-bold uppercase text-red-600 hover:text-red-700" type="button" value="Delete" />
      </td>
    </tr>
  );
}

export default Client;
