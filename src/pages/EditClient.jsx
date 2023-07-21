import React from "react";
import {
  useNavigate,
  Form,
  useLoaderData,
  redirect,
  useActionData,
} from "react-router-dom";
import FormComponent from "../components/Form";
import Error from "../components/Error";
import { getClient, updateClient } from "../data/clients";

export async function loader({ params }) {
  const client = await getClient(params.id);
  return client;
}
export async function action({ request, params }) {
  
  let information = await request.formData();
  
  information = Object.fromEntries(information);
  
  if (Object.values(information).includes("")) {
    return "All the fields must be filled";
  }
  await updateClient(params.id, information);

  return redirect("/");
}
function EditClient() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const actionData = useActionData()
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <h1 className="text-4xl font-black text-blue-900">
            Edit Client Section
          </h1>
          <p className="mt-3">Edit the client</p>
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
        {actionData && <Error message={actionData} />}
        <Form method="post">
          <FormComponent client={loaderData} />
          <input
            type="submit"
            value="Save Changes"
            className="uppercase font-bold hover:cursor-pointer hover:bg-blue-900 p-3 bg-blue-800 block text-white w-full"
          />
        </Form>
      </main>
    </div>
  );
}

export default EditClient;
