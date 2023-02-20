import Header from "./header";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HeaderLayout;