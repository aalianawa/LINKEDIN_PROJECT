import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Pages from "./components/HomePage/Pages";

const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
  {
    path: "/",
    element: <Pages />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
