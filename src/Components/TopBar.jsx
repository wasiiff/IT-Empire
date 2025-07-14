import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { LuTabletSmartphone } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import { GiCharacter } from "react-icons/gi";

const buttons = [
  {
    id: 1,
    name: "We are hiring",
    icon: IoMdPersonAdd,
  },
  {
    id: 2,
    name: "Client Login",
    icon: GiCharacter,
  },
  {
    id: 3,
    name: "Get Your Website Qoute",
  },
  {
    id: 4,
    name: "Get Your SEO Plan",
  },
];

function TopBar() {
  return (
    <div className="w-full py-1 px-16 bg-white flex justify-between shadow-inner drop-shadow-xl">
      <ul className="text-blue-950 hover:text-red-600 text-xs flex justify-items-start items-center gap-x-3 font-extralight">
        <li className="cursor-pointer flex space-x-1">
          <LuTabletSmartphone />
          <p className="font-semibold">+923-111-222-783</p>
        </li>
        <li className="cursor-pointer flex space-x-1">
          <SlEnvolopeLetter />
          <p className="font-semibold">admin@itempire.org</p>
        </li>
      </ul>
      <ul className="flex gap-x-2">
        {buttons.map((btn) => (
          <li key={btn.id}>
            <button
              className={`py-2.5 px-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full font-semibold text-white text-xs text-center flex items-center gap-x-1 hover:from-blue-600 hover:to-blue-400 transition-all duration-300 ${
                !btn.icon ? "px-6" : ""
              }`}
            >
              {btn.icon && <btn.icon className="text-sm" />}
              {btn.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopBar;
