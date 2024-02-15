import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet>{children}</Outlet>
      <Footer />
    </>
  );
};

export default Layout;
