import React from "react";

function Form({client}) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-800">
          Name:{" "}
        </label>
        <input
          className="mt-2 block bg-gray-100 p-2 w-full"
          type="text"
          placeholder="Client's Name"
          id="name"
          name="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="text-gray-800">
          Company:{" "}
        </label>
        <input
          className="mt-2 block bg-gray-100 p-2 w-full"
          type="text"
          placeholder="Company Name"
          id="company"
          name="company"
          defaultValue={client?.company}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-800">
          Email:{" "}
        </label>
        <input
          className="mt-2 block bg-gray-100 p-2 w-full"
          type="email"
          placeholder="Ej: email@email.com"
          id="email"
          name="email"
          defaultValue={client?.email}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="text-gray-800">
          Phone Number:{" "}
        </label>
        <input
          className="mt-2 block bg-gray-100 p-2 w-full"
          type="number"
          placeholder="12345678"
          id="phone"
          name="phone"
          defaultValue={client?.phone}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="text-gray-800">
          Note:{" "}
        </label>
        <textarea
          className="mt-2 block bg-gray-100 p-5 w-full"
          type="text"
          placeholder="Give Us a Note"
          id="note"
          name="note"
          defaultValue={client?.note}
        />
      </div>
    </>
  );
}

export default Form;
