import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@pages/ErrorPage'
import Layout from '@layout/Layout1';
import Home from '@pages/Home'
import Login from '@pages/Login';
import Logout from '@pages/Logout';
import Register from '@pages/Register';
import User from '@pages/User';

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // user 
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Logout",
        element: <Logout />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/User",
        element: <User />,
        errorElement: <ErrorPage />,
      },

      // admin 
      {
        path: "/admin",
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/Dashboard",
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/Storage",
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/UserList",
        element: <User />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);