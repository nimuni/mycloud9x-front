import NotFound from "components/notFound";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderFooter from "components/layout/headerFooter";
import Main from "routes/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,  // layout 설정
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main />}
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
