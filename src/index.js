import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./Routes/root";
import ErrorPage from "./ErrorPage";
import Contact from "./Routes/contact";
import EditContact from "./Routes/edit";
import ContactHome from "./Routes/contactHome";

import {
  loader as contactsLoader,
  action as newContactAction,
} from "./Routes/root";

import { loader as contactLoader } from "./Routes/contact.jsx";

import { action as updateContactAction } from "./Routes/edit";

import { action as destroyAction } from "./Routes/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: newContactAction,
    children: [
      {
        index: true,
        element: <ContactHome />,
      },
      {
        path: "/contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateContactAction,
      },
      {
        path: "contacts/:id/destroy",
        action: destroyAction,
        errorElement: <p>Oooops! There was an error!</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
