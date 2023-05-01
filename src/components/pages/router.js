import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../pages/ErrorPage'
import Layout from '../layout/Layout1';
import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Test from '../pages/Test'

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
        path: "/Register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Test",
        element: <Test />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);