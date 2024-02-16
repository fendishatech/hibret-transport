import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HibretLogo } from "../../../assets/";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Services", to: "/services" },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-transparent  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img className="w-30 h-20" src={HibretLogo} alt="" />
          <p className="flex gap-2">
            <span className="text-companyPink-400 font-bold text-2xl">
              ሕብረት
            </span>
            <span className="text-companyBlue-400 font-bold text-2xl">
              ትራንስፖርት
            </span>
          </p>
        </div>

        <div className="lg:hidden">
          {isMenuOpen ? (
            <AiOutlineClose
              className="text-slate-500 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              className="text-slate-500 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* for larger device */}
        <div className="lg:flex items-center gap-3 hidden text-body">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to={link.to}
              className="block text-[#96085c] text-xl font-semibold hover:text-gray-400 py-2"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-4 bg-body p-4 rounded-lg text-white">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to={link.to}
              className="block text-[#96085c] text-2xl hover:text-gray-400 py-2"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
