import { Outlet } from "react-router-dom";
import { Navbar } from "@containers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
