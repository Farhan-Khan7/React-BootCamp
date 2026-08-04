import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { RiThreadsFill } from "react-icons/ri";

const ProfileCard = () => {
  return (
    <div className="w-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-2xl">

      {/* Cover Image */}
      <div className="relative h-36">
        <img
          src="https://i.pinimg.com/736x/23/b5/6b/23b56b41b844e95d432fccad8b135655.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />

        {/* Profile Image */}
        <img
          src="https://i.pinimg.com/736x/23/b5/6b/23b56b41b844e95d432fccad8b135655.jpg"
          alt="Profile"
          className="absolute w-24 h-24 rounded-full border-4 border-zinc-900 object-cover left-1/2 -translate-x-1/2 bottom-[-45px]"
        />
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-6 text-white">

        {/* Name */}
        <h2 className="text-2xl font-bold text-center">
          Aria Chen
        </h2>

        {/* Profession */}
        <p className="text-center text-zinc-400 text-sm mt-1">
          Professional Photographer
        </p>

        {/* Details */}
        <div className="mt-8 space-y-4">

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Email</span>
            <span>aria@gmail.com</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Contact</span>
            <span>+91 9876543210</span>
          </div>

        </div>

        {/* Social Media */}
        <div className="mt-7">

          <h3 className="text-center text-sm text-zinc-400 mb-4">
            Available On
          </h3>

          <div className="flex justify-center gap-4">

            <button className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-pink-600 transition duration-300">
              <FaInstagram className="text-xl" />
            </button>

            <button className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-blue-600 transition duration-300">
              <FaLinkedinIn className="text-xl" />
            </button>

            <button className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition duration-300">
              <RiThreadsFill className="text-xl" />
            </button>

            <button className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-black transition duration-300">
              <FaXTwitter className="text-xl" />
            </button>

          </div>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3 mt-8">

          <button className="bg-white text-black py-2 rounded-lg font-semibold hover:bg-zinc-200 transition">
            Friend
          </button>

          <button className="bg-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Update
          </button>

          <button className="bg-red-600 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProfileCard;