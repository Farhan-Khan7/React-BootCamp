import React from 'react'
import { MdOutlineShortcut } from "react-icons/md";

const Form = () => {
  return (
    <div className="w-300 h-fit bg-white/20 backdrop-blur-3xl border border-white/20 absolute top-20 left-1/2 -translate-x-1/2 rounded-2xl p-8">

    <MdOutlineShortcut className="text-4xl text-gray-200 absolute right-5 top-2 mb-4" />
    <h1 className="text-center text-2xl text-gray-200 mt-2 mb-8">
        Fill your details
    </h1>

    <form className="space-y-5 flex flex-wrap gap-7 justify-between">

        {/* Name */}
        <div className="w-130">
            <label className="block text-white mb-2">
                Name
            </label>

            <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        {/* Profession */}
        <div className="w-130">
            <label className="block text-white mb-2">
                Profession
            </label>

            <input
                type="text"
                placeholder="Frontend Developer"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        {/* Instagram */}
        <div className="w-130">
            <label className="block text-white mb-2">
                Instagram Link
            </label>

            <input
                type="url"
                placeholder="https://instagram.com/username"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        {/* LinkedIn */}
        <div className="w-130">
            <label className="block text-white mb-2">
                LinkedIn Link
            </label>

            <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        {/* Threads */}
        <div className="w-130">
            <label className="block text-white mb-2">
                Threads Link
            </label>

            <input
                type="url"
                placeholder="https://threads.net/@username"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        {/* X */}
        <div className="w-130">
            <label className="block text-white mb-2">
                X (Twitter) Link
            </label>

            <input
                type="url"
                placeholder="https://x.com/username"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 outline-none text-white placeholder:text-gray-300"
            />
        </div>

        <button
            className="w-full bg-white text-black font-semibold py-3 rounded-full mt-4 hover:scale-105 transition"
        >
            Generate Card
        </button>

    </form>

</div>
  )
}

export default Form
