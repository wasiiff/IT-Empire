import React from "react";
import { BiChevronDown } from "react-icons/bi";
import FormBg from "../assets//FormBg.jpg";
import Logo from "../assets/NewLogo.png";

function Form() {
  return (
    <div
      style={{ backgroundImage: `url(${FormBg})` }}
      className="bg-cover bg-center h-screen"
    >
      <div className="backdrop-blur-2xl flex flex-col md:flex-row justify-between px-6 items-start py-10 h-screen">
        {/* Logo Section  */}

        <div>
          <img src={Logo} alt="" />
        </div>

        {/* Form Section  */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Request A Quote
          </h2>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <div className="relative">
              <select
                name="service"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none bg-white cursor-pointer transition-all duration-200"
              >
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="E-commerce Solutions">
                  E-commerce Solutions
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO Services">SEO Services</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Database Management">Database Management</option>
              </select>
              <BiChevronDown
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>

            <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300 uppercase tracking-wide">
              REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
