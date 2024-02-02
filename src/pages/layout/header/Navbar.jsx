import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About me", to: "/about" },
  ];

  return (
    <nav className="bg-transparent  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-slate-500 text-2xl font-bold">Logo</h1>

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
              className="block text-slate-500 hover:text-gray-400 py-2"
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
              className="block text-slate-500 hover:text-gray-400 py-2"
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
