import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

function Links() {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, name: "Facebook", url: "#" },
    { icon: <BsTwitter size={20} />, name: "Twitter", url: "#" },
    { icon: <BsInstagram size={20} />, name: "Instagram", url: "#" },
    { icon: <PiPinterestLogo size={20} />, name: "Pinterest", url: "#" },
    { icon: <LiaLinkedin size={20} />, name: "LinkedIn", url: "#" },
  ];

  return (
    <div className="w-full py-8 flex justify-center gap-x-3 bg-black">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="px-3 py-3 bg-pink-600 my-auto text-white hover:bg-white hover:text-pink-800 transition-colors duration-300 rounded-full shadow-pink-700 shadow-sm outline-1 outline-pink-700/50"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default Links;
