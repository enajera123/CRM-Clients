import React from "react";
import { Form, useActionData, useNavigate, redirect } from "react-router-dom";
import FormComponent from "../components/Form";
import Error from "../components/Error";
import { addClient } from "../data/clients";
export async function action({ request }) {
  let information = await request.formData();
  information = Object.fromEntries(information);
  if (Object.values(information).includes("")) {
    return "All the fields must be filled";
  }
  addClient(information);
  return redirect("/");
}
function NewClient() {
  const message = useActionData();
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <h1 className="text-4xl font-black text-blue-900">New Client</h1>
          <p className="mt-3">Add a new client</p>
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-800 hover:bg-blue-900 px-10 py-2 text-white uppercase font-bold text-xs"
          >
            Back
          </button>
        </div>
      </header>

      <main className="bg-white shadow rounded-xl md:w-3/4 px-5 py-10 mt-20 mx-auto">
        {message && <Error message={message} />}
        <Form method="post">
          <FormComponent />
          <input
            type="submit"
            value="Submit"
            className="uppercase font-bold hover:cursor-pointer hover:bg-blue-900 p-3 bg-blue-800 block text-white w-full"
          />
        </Form>
      </main>
    </div>
  );
}

export default NewClient;
