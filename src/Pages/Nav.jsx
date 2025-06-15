import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { navData } from "../Data/Data";

import logo from "../assets/red-cross-vector-icon-hospital-sign-medical-health-first-aid-symbol-isolated-vhite-modern-gradient-design-141217893.webp";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="lg:bg-white bg-[#bcccdc] md:bg-white p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="text-xl font-bold">
            <img
              className="w-[50.49px] h-[38.3px] border-[1px]"
              src={logo}
              alt="Logo"
            />
          </ul>

          <ul className="hidden space-x-6 md:flex items-center">
            {navData.map((item, index) => (
              <li key={index} className="text-black hover:text-gray-400">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
            <button
              className="bg-[#f6ca56] w-[129px] h-[38px] rounded-[10px] text-white px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
              onClick={handleLoginClick}
            >
              Get Started
            </button>
          </ul>

          <button
            className="text-gray-300 focus:outline-none md:hidden"
            id="menu-button"
            onClick={handleMobileMenuClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`flex-col space-y-2 p-4 md:hidden ${
            mobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          {navData.map((item, index) => (
            <li key={index} className="text-black hover:text-gray-400">
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
