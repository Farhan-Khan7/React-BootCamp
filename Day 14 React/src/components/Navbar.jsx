import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="h-fit w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
         Dynamic React <span className="text-blue-500">Router</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink to={"/"}
            className="text-sm font-medium text-gray-300 transition hover:text-blue-500"
          >
            Home
          </NavLink>

          <NavLink to={"/about"}
            className="text-sm font-medium text-gray-300 transition hover:text-blue-500"
          >
            About
          </NavLink>

          <NavLink to={"/products"}
            className="text-sm font-medium text-gray-300 transition hover:text-blue-500"
          >
            Products
          </NavLink>

          
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
          Get Started
        </button>

      </div>
    </nav>
  );
};

export default Navbar;