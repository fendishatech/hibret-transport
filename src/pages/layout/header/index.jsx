import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="p-6 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-[8px] bg-opacity-20 border-b border-gray-200 firefox:bg-opacity-90">
      <Navbar />
    </header>
  );
};

export default Header;
