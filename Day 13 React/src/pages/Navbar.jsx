import React from "react";
import {NavLink} from 'react-router'

const Navbar = () => {
  return (
    <nav className="h-fit w-full border-b border-gray-200 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          React<span className="text-blue-600">Router</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <navLink to={"/home"}
            // onClick={() => setToggle("home")}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </navLink>

          <navLink to={"/about"}
            // onClick={() => setToggle("about")}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </navLink>

          <navLink to={"/services"} 
            // onClick={() => setToggle("services")}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Services
          </navLink>

          <navLink to={"/projects"}
            // onClick={() => setToggle("projects")}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Projects
          </navLink>

          <navLink to={"/contact"}  
            // onClick={() => setToggle("contact")}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </navLink>
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