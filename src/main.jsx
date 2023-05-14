import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Blogs from "./components/Blogs/Blogs";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ChefDetails from "./components/ChefDetails/ChefDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-samiislam851-samiislam851.vercel.app/chef')
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/chef-details/:id",
        element: <PrivateRoute>
          <ChefDetails ></ChefDetails>
        </PrivateRoute>,
        loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-samiislam851-samiislam851.vercel.app/chef')
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
);