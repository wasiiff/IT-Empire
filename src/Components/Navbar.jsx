import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom"; // Fixed import

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Portfolio", to: "portfolio" },
    { id: 3, name: "Services", to: "/" },
    { id: 4, name: "About", to: "/" },
    { id: 5, name: "Contact", to: "/" },
  ];

  return (
    <div className="w-full top-0 z-50 bg-white shadow-md">
      <nav className="w-full py-4 px-4 md:px-20 flex flex-col sm:flex-row justify-between items-center relative">
        <div className="w-full sm:w-auto flex justify-between items-center sm:hidden">
          <img src={Logo} alt="Company Logo" className="h-16 w-auto mx-auto" />
          <div className="w-10"></div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg bg-blue-950 text-white focus:outline-none"
          >
            {showMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        <div className="hidden sm:block">
          <img src={Logo} alt="Company Logo" className="h-20 w-auto" />
        </div>

        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className="font-semibold text-blue-950 hover:text-red-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Fixed Link & Positioning) */}
        <div
          className={`sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 z-50 transition-all duration-300 ease-in-out ${
            showMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="font-semibold text-blue-950 hover:text-red-600 transition-colors duration-200 text-lg"
                  onClick={() => setShowMenu(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;