import NotFound from "components/notFound";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderFooter from "components/layout/headerFooter";

// Pages element
import Main from "routes/main";
import Login from "routes/login";
import Register from "routes/register";
import Drive from "routes/drive";
import Profile from "routes/profile";
import Admin from "routes/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,  // layout 설정
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main />},
      { path: 'login', element: <Login />, errorElement: <NotFound />},
      { path: 'register', element: <Register />, errorElement: <NotFound />},
      { path: 'drive', element: <Drive />, errorElement: <NotFound />},
      { path: 'profile', element: <Profile />, errorElement: <NotFound />, 
        children: [
          {
            path: 'changePwd', element: <Main />
          }
        ]
      },
      { path: 'admin', element: <Admin />, errorElement: <NotFound />,
        children: [
          { index: true, element: <Main />},
          { path: 'changePwd', element: <Main />},
        ]
      },
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
