import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index, { loader as loaderClients } from "./pages/Index";
import NewClient, { action as actionNewClient } from "./pages/NewClient";
import { action as actionDeleteClient } from "./components/Client";
import ErrorPage from "./pages/ErrorPage";

import EditClient, {
  loader as loaderEditClient,
  action as actionEditClient,
} from "./pages/EditClient";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPage />,
      },
      {
        path: "/new/client",
        element: <NewClient />,
        action: actionNewClient,
        errorElement: <ErrorPage />,
      },
      {
        path: "/client/:id/edit",
        element: <EditClient />,
        loader: loaderEditClient,
        action: actionEditClient,
        errorElement: <ErrorPage />,
      },
      {
        path: "/client/:id/delete",
        action: actionDeleteClient,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
