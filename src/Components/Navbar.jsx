import React from "react";
import Logo from "../assets/Logo.png";
function Navbar() {
  return (
    <nav className="w-full py-7 px-20 shadow-inner flex justify-between ">
      {/* logo Section  */}
      <div>
        <img src={Logo} alt="" className="h-16" />
      </div>
      <ul className="flex justify-between items-center font-semibold text-[16px] text-blue-950  space-x-8">
        <li className="cursor-pointer hover:text-red-600">Home</li>
        <li className="cursor-pointer hover:text-red-600">Portfolio</li>
        <li className="cursor-pointer hover:text-red-600">Services</li>
        <li className="cursor-pointer hover:text-red-600">About</li>
        <li className="cursor-pointer hover:text-red-600">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
