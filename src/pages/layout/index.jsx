import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet>{children}</Outlet>
    </>
  );
};

export default Layout;
