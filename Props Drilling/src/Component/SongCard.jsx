import React from "react";
import { FiHeart } from "react-icons/fi";

const SongCard = ({song , index , isFavrouite}) => {

  const {songName , singerName , image} = song;

  return (
    <div className="relative w-90 h-fit rounded-xl bg-[#eef3f9] p-4 ">
      {/* Heart */}
      <button onClick={()=>isFavrouite(index)} className={`absolute top-4 right-4 h-9 w-9 rounded-md bg-[#eef3f9] flex items-center justify-center text-orange-400 shadow-[0.5rem_0.5rem_1.125rem_#d4d9df,-0.5rem_-0.5rem_1.125rem_#ffffff]`}>
        <FiHeart size={14} />
      </button>

      <div className="flex gap-4">
        {/* Album */}
        <div className="h-18 w-18 shrink-0 overflow-hidden rounded-md shadow-[0.625rem_0.625rem_1.25rem_#d2d8de,-0.625rem_-0.625rem_1.25rem_#ffffff]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="flex-1 pt-1 min-w-0">
          {/* Playing */}
          <p className="flex items-center gap-1 text-[0.55rem] font-semibold tracking-widest text-gray-500 uppercase">
            <span className="flex gap-0.5">
              <span className="h-2 w-0.5 rounded-full bg-gray-500"></span>
              <span className="h-1.5 w-0.5 rounded-full bg-gray-400"></span>
              <span className="h-2.5 w-0.5 rounded-full bg-gray-500"></span>
            </span>
            Now Playing
          </p>

          {/* Song */}
          <h1 className="mt-1.5 text-lg font-semibold text-gray-800 truncate">
            {songName}
          </h1>

          {/* Artist */}
          <p className="mt-0.5 text-[0.7rem] text-gray-500 truncate">
            {singerName}
          </p>
        </div>
      </div>

      {/* Player Box */}
      <div className="mt-3 rounded-md bg-[#eef3f9] p-3 shadow-[inset_0.5rem_0.5rem_1.125rem_#d4d9df,inset_-0.5rem_-0.5rem_1.125rem_#ffffff]">
        {/* Fake Wave */}
        <div className="flex items-end justify-between h-6">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="w-[0.09rem] rounded-full bg-gray-400"
              style={{
                height: `${0.3 + Math.random() * 0.9}rem`,
              }}
            ></span>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-2 h-0.5 rounded-full bg-gray-300 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-orange-400"></div>
        </div>

        {/* Time */}
        <div className="mt-2 flex justify-between text-[0.65rem] text-gray-500">
          <span>1:32</span>
          <span>3:47</span>
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-between">
          {/* Shuffle */}
          <button className="h-8 w-8 rounded-full bg-[#eef3f9] flex items-center justify-center shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff] text-sm text-gray-600 hover:scale-95 transition">
            🔀
          </button>

          {/* Previous */}
          <button className="h-8 w-8 rounded-full bg-[#eef3f9] flex items-center justify-center shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff] text-base text-gray-700 hover:scale-95 transition">
            ⏮
          </button>

          {/* Play / Pause */}
          <button className="relative h-11 w-11 rounded-full bg-[#eef3f9] flex items-center justify-center shadow-[0.5rem_0.5rem_1rem_#d4d9df,-0.5rem_-0.5rem_1rem_#ffffff] hover:scale-95 transition">
            <div className="absolute h-full w-full rounded-full bg-orange-300 blur-lg opacity-50"></div>
            <div className="relative h-9 w-9 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
              <div className="flex gap-1">
                <span className="h-3.5 w-1 rounded-full bg-white"></span>
                <span className="h-3.5 w-1 rounded-full bg-white"></span>
              </div>
            </div>
          </button>

          {/* Next */}
          <button className="h-8 w-8 rounded-full bg-[#eef3f9] flex items-center justify-center shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff] text-base text-gray-700 hover:scale-95 transition">
            ⏭
          </button>

          {/* Airplay */}
          <button className="h-8 w-8 rounded-full bg-[#eef3f9] flex items-center justify-center shadow-[0.375rem_0.375rem_0.75rem_#d4d9df,-0.375rem_-0.375rem_0.75rem_#ffffff] text-sm text-gray-600 hover:scale-95 transition">
            📡
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
