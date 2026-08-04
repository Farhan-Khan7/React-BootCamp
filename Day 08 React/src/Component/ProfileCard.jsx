import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiThreadsFill } from "react-icons/ri";

const ProfileCard = ({users, setUpdateUser , setShowForm , deletedUsers , id}) => {

  
  return (
    <div className="w-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-2xl">
      {/* Cover Image */}
      <div className="relative h-36">
        <img
          src={users.image}
          alt="Cover"
          className="w-full h-full object-cover"
        />

        {/* Profile Image */}
        <img
          src={users.image}
          alt="Profile"
          className="absolute w-24 h-24 rounded-full border-4 border-zinc-900 object-cover left-1/2 -translate-x-1/2 top-25"
        />
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-6 text-white">
        {/* Name */}
        <h2 className="text-2xl font-bold text-center">{users.name}</h2>

        {/* Profession */}
        <p className="text-center text-zinc-400 text-sm mt-1">
          {users.profession}
        </p>

        {/* Details */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Email</span>
            <span>{users.email}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Contact</span>
            <span>+91 {users.contact}</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mt-5">
          {/* Instagram */}
          <a
            href={users.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-pink-600 transition duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>

          {/* LinkedIn */}
          <a
            href={users.linkedln}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>

          {/* Threads */}
          <a
            href={users.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition duration-300"
          >
            <RiThreadsFill className="text-xl" />
          </a>

          {/* X (Twitter) */}
          <a
            href={users.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-black transition duration-300"
          >
            <FaXTwitter className="text-xl" />
          </a>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          <button className="bg-white text-black py-2 rounded-lg font-semibold hover:bg-zinc-200 transition">
            Friend
          </button>

          <button onClick={()=> {
            setUpdateUser(users)
            setShowForm((prev) => !prev)
          }} className="bg-blue-600 py-2 cursor-pointer rounded-lg font-semibold hover:bg-blue-700 transition">
            Update
          </button>

          <button onClick={()=> deletedUsers(id)}  className="bg-red-600 py-2 rounded-lg font-semibold cursor-pointer hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
