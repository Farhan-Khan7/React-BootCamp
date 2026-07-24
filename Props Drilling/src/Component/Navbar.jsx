import React from "react";
import { FiMusic, FiCompass, FiList, FiHeart, FiSearch } from "react-icons/fi";

const Navbar = ({index}) => {
  return (
    <nav className="flex items-center justify-between w-full w-full mx-auto rounded-md bg-[#eef3f9] px-6 py-3 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-md bg-[#eef3f9] flex items-center justify-center shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff]">
          <FiMusic className="text-orange-400" size={18} />
        </div>
        <span className="text-lg font-bold text-gray-800 tracking-tight">
          Tunely
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-2 rounded-md bg-[#eef3f9] p-1.5 shadow-[inset_0.4rem_0.4rem_0.9rem_#d4d9df,inset_-0.4rem_-0.4rem_0.9rem_#ffffff]">
        {/* Discover - active */}
        <button className="flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-semibold text-gray-800 bg-[#eef3f9] shadow-[0.3rem_0.3rem_0.6rem_#d4d9df,-0.3rem_-0.3rem_0.6rem_#ffffff]">
          <FiCompass size={15} className="text-orange-400" />
          Discover
        </button>

        {/* Songs */}
        <button className="flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
          <FiMusic size={15} />
          Songs
        </button>

        {/* Playlists */}
        <button className="flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
          <FiList size={15} />
          Playlists
        </button>

        {/* Favourites with count */}
        <button className="flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
          <FiHeart size={15} className="text-orange-400" />
          Favourites
          <span className="ml-1 h-5 min-w-[1.25rem] px-1 flex items-center justify-center rounded bg-orange-400 text-white text-[0.65rem] font-bold shadow-[0.15rem_0.15rem_0.4rem_#d4d9df]">
            {index}
          </span>
        </button>
      </div>

      {/* Right: Search + Profile */}
      <div className="flex items-center gap-3">
        <button className="h-10 w-10 rounded-md bg-[#eef3f9] flex items-center justify-center text-gray-600 shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff] hover:scale-95 transition">
          <FiSearch size={16} />
        </button>
        <div className="h-10 w-10 rounded-md overflow-hidden shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff]">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
