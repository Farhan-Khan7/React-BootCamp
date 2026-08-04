import React from "react";
import { IoClose } from "react-icons/io5";

const Form = ({ showForm, setShowForm }) => {
  return (
    <div
      className={`${
        showForm
          ? "w-[900px] bg-white/20 backdrop-blur-3xl border border-white/20 absolute top-5 left-1/2 -translate-x-1/2 rounded-2xl p-8"
          : "hidden"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute right-5 top-5 text-3xl text-white hover:rotate-90 transition"
      >
        <IoClose className="cursor-pointer" />
      </button>

      <p className="text-center text-gray-300 mb-8">
        Fill all the details below
      </p>

      <form className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="text-white block mb-2">Name</label>

          <input
            type="text"
            placeholder="Aria Chen"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Profession */}
        <div>
          <label className="text-white block mb-2">Profession</label>

          <input
            type="text"
            placeholder="Frontend Developer"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-white block mb-2">Email</label>

          <input
            type="email"
            placeholder="aria@gmail.com"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="text-white block mb-2">Contact</label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="text-white block mb-2">Profile Image URL</label>

          <input
            type="text"
            placeholder="https://..."
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Instagram */}
        <div>
          <label className="text-white block mb-2">Instagram Link</label>

          <input
            type="text"
            placeholder="https://instagram.com/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-white block mb-2">LinkedIn Link</label>

          <input
            type="text"
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Threads */}
        <div>
          <label className="text-white block mb-2">Threads Link</label>

          <input
            type="text"
            placeholder="https://threads.net/@username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* X */}
        <div>
          <label className="text-white block mb-2">X (Twitter) Link</label>

          <input
            type="text"
            placeholder="https://x.com/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Button */}
        <button className="col-span-2 bg-white text-black py-3 rounded-xl font-bold text-lg hover:bg-gray-200 transition mt-2">
          Generate Card
        </button>
      </form>
    </div>
  );
};

export default Form;
