import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index, { loader as loaderClients } from "./pages/Index";
import NewClient, { action as actionNewClient } from "./pages/NewClient";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",//commit
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
