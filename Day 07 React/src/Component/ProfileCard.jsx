import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { RiThreadsFill } from "react-icons/ri";

const ProfileCard = () => {
  return (
    <div className="h-fit flex px-10 py-5 gap-5 flex-wrap justify-between ">

      <div className="relative w-80 h-120 rounded-xl overflow-hidden shadow-2xl">

        {/* Background Image */}
        <img
          src="https://i.pinimg.com/736x/23/b5/6b/23b56b41b844e95d432fccad8b135655.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

          <h2 className="text-3xl font-bold">
            Aria Chen
          </h2>

          <p className="text-sm text-zinc-300 mt-1">
            Professional Photographer
          </p>

          <p className="text-sm text-zinc-400">
            Available on
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-md hover:bg-white/25 transition">

              <FaInstagram />
              <span className="text-sm font-bold">Instagram</span>

            </button>

            <button className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-md hover:bg-white/25 transition">

              <FaLinkedinIn />
              <span className="text-sm font-bold">LinkedIn</span>

            </button>

            <button className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-md hover:bg-white/25 transition">

              <RiThreadsFill />
              <span className="text-sm font-bold">Threads</span>

            </button>

            <button className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1 rounded-md hover:bg-white/25 transition">

              <FaXTwitter />
              <span className="text-sm font-bold">X</span>

            </button>

          </div>

          {/* Friend Button */}
          <button className="w-full mt-8 bg-white text-black py-2 rounded-md font-semibold text-xl shadow-lg hover:scale-[1.02] transition">
            Friend
          </button>

        </div>

      </div>

      

    </div>
  );
};

export default ProfileCard;