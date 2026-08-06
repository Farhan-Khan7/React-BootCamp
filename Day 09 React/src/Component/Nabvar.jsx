import React, { useState } from "react";
import { useContext } from "react";
import { MyShop } from "../Context/Context";

const Navbar = () => {

  const {setTabs} = useContext(MyShop);

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-slate-900 text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
        E-Commerce
      </h1>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-lg font-medium">
        <li onClick={() => setTabs(false)} className="cursor-pointer hover:text-cyan-400 transition">
          Home
        </li>

        <li onClick={() => setTabs(true)} className="cursor-pointer hover:text-cyan-400 transition">
          Cards
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;