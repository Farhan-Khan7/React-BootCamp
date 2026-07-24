import React, { useState } from "react";
import { FiShare, FiBookmark, FiStar } from "react-icons/fi";

const Props = ({values , index , isFriend}) => {
    const {name , profession , image , friends} = values
  return (
    <div className="relative w-80 h-fit shrink-0 rounded-xl overflow-hidden bg-white shadow-2xl border border-white">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-cyan-100"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Share */}
        <div className="flex justify-end">
          <button className="text-2xl">
            <FiShare />
          </button>
        </div>

        {/* Avatar */}
        <div className="mt-2">
          <img
            className="w-18 h-18 rounded-full object-cover"
            src={image}
            alt=""
          />
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">{name}</h2>

        <p className="text-neutral-500 text-md mt-1">{profession}</p>

        {/* Skills */}
        {/* <div className="flex gap-3 mt-5">
          {skills.map((item, idx) => (
            <span className="bg-white rounded-full px-5 py-1 text-sm flex items-center  shadow">
              {item}
            </span>
          ))}
        </div> */}

        {/* Stats */}
        <div className="grid grid-cols-3 mt-8 text-center">
          <div>
            <div className="flex justify-center items-center gap-2">
              <FiStar className="fill-black" />
              <span className="text-xl font-semibold">4.5</span>
            </div>

            <p className="text-neutral-500 mt-1">Rating</p>
          </div>

          <div className="border-x border-neutral-300">
            <h3 className="text-xl font-semibold">$15K+</h3>

            <p className="text-neutral-500 mt-1">Earned</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">$80/hr</h3>

            <p className="text-neutral-500 mt-1">Rate</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button onClick={()=>isFriend(index)} className={`flex-1 rounded-md ${friends ? "bg-black text-white" : "bg-white text-black"} cursor-pointer shadow-md font-semibold text-xl py-2 hover:scale-95 transition`}>
            {friends ? "Friends" : "Add Friends"}
          </button>

          <button className="rounded-full bg-white shadow-md w-20 flex items-center justify-center text-2xl hover:scale-95 transition">
            <FiBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Props;
