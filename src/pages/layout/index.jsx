import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet>
        <div className="bg-[#f7f7f7]">{children}</div>
      </Outlet>
      <Footer />
    </>
  );
};

export default Layout;
