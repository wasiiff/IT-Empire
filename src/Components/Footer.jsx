import React from "react";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import FaceBook from "../assets/Facebook.png";

const Footer = () => (
  <>
    <footer className="bg-[#1a1823] text-[#969696] py-6 font-nunito px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Navigation Links */}
          <div>
            <nav className="mb-6 w-4/5">
              <ul className="flex flex-wrap gap-4 text-sm font-semibold">
                {[
                  "Home",
                  "Gallery",
                  "Clients",
                  "Forms",
                  "Recruitments",
                  "Client Login",
                  "Contact",
                  "Blogs",
                  "Privacy Policy",
                  "Sales and Refunds",
                  "Terms of Use",
                  "FAQs",
                  "Article 1",
                  "Article 2",
                  "Article 3",
                ].map((link) => (
                  <li key={link} className="hover:text-white transition-colors">
                    <a href="#">{link} |</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Address Section */}
            <div className="flex flex-col md:flex-row justify-between md:pr-20">
              <div className="w-full md:w-1/2">
                <h3 className="mb-4 font-semibold text-lg text-white flex items-center">
                  Address
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="hover:text-white transition-colors flex items-start gap-x-3">
                    <FaHome className="mt-1 flex-shrink-0" />
                    <div>
                      <p>
                        First Floor, Software Technology Park, Canal Road,
                        Faisalabad, Pakistan
                      </p>
                    </div>
                  </li>
                  <li className="hover:text-white transition-colors flex items-start gap-x-3">
                    <FaHome className="mt-1 flex-shrink-0" />
                    <div>
                      <p>
                        Sub Office: Nazeer Park, Ghazi Road Defence, Lahore,
                        Pakistan
                      </p>
                    </div>
                  </li>
                  <li className="hover:text-white transition-colors flex items-start gap-x-3">
                    <FaHome className="mt-1 flex-shrink-0" />
                    <div>
                      <p>
                        Sub Office: Bewal Market G-9 Markaz, Islamabad, Pakistan
                      </p>
                    </div>
                  </li>
                  <li className="hover:text-white transition-colors flex items-start gap-x-3">
                    <FaHome className="mt-1 flex-shrink-0" />
                    <div>
                      <p>
                        Office 1101-2, Crystal Tower, Business Bay, Dubai, UAE
                      </p>
                    </div>
                  </li>
                  <li className="hover:text-white transition-colors flex items-start gap-x-3">
                    <FaHome className="mt-1 flex-shrink-0" />
                    <div>
                      <p>
                        {" "}
                        USA Office 17120 SW 92nd Ct, Palmetto Bay, Florida, USA
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left pr-28">
                <h3 className="mb-4 font-semibold text-lg text-white flex items-center">
                  Contact
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start hover:text-white transition-colors gap-x-3">
                    <FaEnvelope className="mt-1 flex-shrink-0" />
                    <a href="mailto:admin@itempire.org">admin@itempire.org</a>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors gap-x-3">
                    <FaPhoneAlt className="mt-1 flex-shrink-0" />
                    <a href="tel:+923111222783">+92 311 1222783 (Pakistan)</a>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors gap-x-3">
                    <FaPhoneAlt className="mt-1 flex-shrink-0" />
                    <a href="tel:+971553986055">+971 55 3986055 (UAE)</a>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors gap-x-3">
                    <FaPhoneAlt className="mt-1 flex-shrink-0" />
                    <a href="tel:+447588799432">+44 7588 799432 (UK)</a>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors gap-x-3">
                    <FaPhoneAlt className="mt-1 flex-shrink-0" />
                    <a href="tel:+61407348558">+61 407 348558 (Australia)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-auto space-y-4">
            <h1 className="font-semibold text-lg text-white flex items-center ">
              Like Us On Facebook
            </h1>
            {/* Social Prompt */}
            <div className="flex items-start w-48 md:w-72">
              <img src={FaceBook} alt="Facebook" className="w-48 md:w-80" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="text-[#585562] w-full bg-white py-4">
      <h1 className="text-center font-normal text-[14px]">
        {" "}
        © Copyright 2010-2025 www.itempire.net All Rights Reserved.
      </h1>
    </div>
  </>
);

export default Footer;
