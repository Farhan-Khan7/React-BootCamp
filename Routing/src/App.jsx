import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router";
import {NavLink} from "react-router"

const App = () => {

  
   
  return (
    <div>
      <div className="w-full h-15 bg-red-950 flex justify-between items-center px-15 ">
        <div className="text-2xl w-fit h-fit font-bold text-pink-300">Logo</div>
        <div className="w-100 flex justify-around font-bold text-pink-300">
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </div>
        <div className="flex gap-5">
          <h1 className="bg-pink-300 px-2 py-1 rounded-md flex items-center justify-center">
            Signup
          </h1>
          <h1 className="bg-pink-300 px-2 py-1 rounded-md flex items-center justify-center">
            Login
          </h1>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
