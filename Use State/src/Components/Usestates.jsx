import React from "react";
import { useState } from "react";


const Usestates = () => {
  const [control, setContorls] = useState(false);
  const songs = [
    {
      banner:
        "https://i.pinimg.com/1200x/97/99/cd/9799cd23ade3032b6c5aa2bf832940f6.jpg",
      movie: "Fifty Shades Freed",
      song: "For You",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/1200x/ad/03/b2/ad03b251be30ab415f969dd867fbcf81.jpg",
      movie: "Awarapan",
      song: "Toh Phir Aao",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/736x/b7/ab/cc/b7abcc7f28e38117e80915720be4309a.jpg",
      movie: "Kabir Singh",
      song: "Kaise Hua",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/736x/4f/96/6a/4f966ad7ccb496a1b9db7254a653cbcb.jpg",
      movie: "Shershaah",
      song: "Raataan Lambiyan",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/736x/81/60/3b/81603b27e000c8847e0fd997233de0cc.jpg",
      movie: "Tamasha",
      song: "Agar Tum Saath Ho",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/736x/3a/93/16/3a9316f344b33fa8c59e54bf5cf374c0.jpg",
      movie: "Jab We Met",
      song: "Tum Se Hi",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/1200x/a8/33/d0/a833d02ad5db9e66078a140762504092.jpg",
      movie: "Animal",
      song: "Satranga",
      play: control,
    },
    {
      banner:
        "https://i.pinimg.com/1200x/47/1d/16/471d1658ef5ad8fef1998024731a1017.jpg",
      movie: "Bhediya",
      song: "Apna Bana Le",
      play: control,
    },
  ];

  return songs.map((item, idx) => (
    <div className="w-70 h-110 bg-gray-500 rounded-xl opacity-55 flex flex-col justify-start px-4 py-3.5">
      <div className="w-full h-55 bg-gray-800 rounded-xl overflow-hidden">
        <img
          src={item.banner}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <h3 className="text-md mt-3 font-medium text-cyan-100">{item.song}</h3>
      <h4 className="text-md mt-0 font-medium text-cyan-100">{item.movie}</h4>
      <div className="w-full flex justify-between items-center gap-2.5 mt-2.5">
        <h5 className="text-xs text-cyan-100">1:06</h5>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-30 h-full bg-gray-600 rounded-full"></div>
        </div>
        <h5 className="text-xs text-cyan-100">-0:27</h5>
      </div>
      <div className="w-full flex items-center justify-center gap-8 text-xl text-white mt-6 cursor-pointer">
        <i className="ri-star-line"></i>
        <i className="ri-skip-back-fill text-2xl"></i>
        {item.play ? (
          <i
            onClick={() => setContorls(false)}
            className="ri-pause-large-fill text-2xl"
          ></i>
        ) : (
          <i onClick={() => setContorls(true)} class="ri-play-large-fill"></i>
        )}
        <i className="ri-skip-forward-fill text-2xl"></i>
        <i className="ri-download-2-line"></i>
      </div>

      <div className="w-full flex justify-between items-center gap-2.5 mt-5">
        <i className="ri-volume-down-line text-cyan-100 text-lg"></i>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-30 h-full bg-gray-600 rounded-full"></div>
        </div>
        <i className="ri-volume-up-line text-cyan-100 text-md"></i>
      </div>
    </div>
  ));
};

export default Usestates;
