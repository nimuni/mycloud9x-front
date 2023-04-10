import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/pages/ErrorPage'
import Layout from './components/layout/Layout1';
import Test from './components/pages/Test'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { // 필수는 path element
        path: "contact",
        element: <Test />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
