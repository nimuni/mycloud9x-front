import NotFound from "components/notFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import HeaderFooterLayout from "components/layout/headerFooterLayout";
// import HeaderLayout from "components/layout/headerLayout";

// Pages element
import MainPage from "routes/mainPage";
import LoginPage from "routes/loginPage";
import RegisterPage from "routes/registerPage";
import DrivePage from "routes/drivePage";
import ProfilePage from "routes/profile/profilePage";
import ProfileChangePwd from "routes/profile/profileChangePwd";
import ProfileIndex from "routes/profile/profileIndex";
import Admin from "routes/adminPage";
import MembershipPage from "routes/membershipPage";
import PasswordPage from "routes/passwordPage";

// import PasswordChangePage from "routes/passwordChangePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />, // layout 설정
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "drive", element: <DrivePage />, errorElement: <NotFound /> },
      {
        path: "profile",
        element: <ProfilePage />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <ProfileIndex /> },
          { path: "changePwd", element: <ProfileChangePwd /> },
        ],
      },
      {
        path: "admin",
        element: <Admin />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <MainPage /> },
          { path: "changePwd", element: <MainPage /> },
        ],
      },
      { path: "login", element: <LoginPage />, errorElement: <NotFound /> },
      {
        path: "register",
        element: <RegisterPage />,
        errorElement: <NotFound />,
      },
      {
        path: "membership",
        element: <MembershipPage />,
        errorElement: <NotFound />,
      },
      {
        path: "password",
        element: <PasswordPage />,
        errorElement: <NotFound />,
      },
      // { path: 'passwordchange', element: <PasswordChangePage />, errorElement: <NotFound />}
    ],
  },
  // {
  //   path: "/",
  //   element: <HeaderLayout />,  // layout 설정
  //   errorElement: <NotFound />,
  //   children: [
  //     { path: 'login', element: <Login />, errorElement: <NotFound />},
  //     { path: 'register', element: <Register />, errorElement: <NotFound />}
  //   ]
  // }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
