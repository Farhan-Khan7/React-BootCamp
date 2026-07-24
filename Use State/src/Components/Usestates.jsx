import React from 'react'
import { useState } from 'react';

const Usestates = () => {

    const [following , SetFollowing] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      {/* Outer Gradient Card */}
      <div className="relative w-180 h-90 rounded-[40px] bg-gradient-to-br from-sky-200 via-orange-300 to-purple-300 shadow-2xl">

        {/* Inner White Card */}
        <div className="absolute inset-4 bg-white rounded-[36px]">

          {/* Profile Image */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
            alt=""
            className="absolute top-6 left-8 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
          />

          {/* Content */}
          <div className="ml-52 mt-8 mr-8">

            <h1 className="text-5xl font-semibold text-zinc-900">
              Verona Nov
            </h1>

            <div className="mt-3 flex gap-3">
              <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-700">
                Writer
              </span>

              <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm text-yellow-700">
                Golden User
              </span>
            </div>

            <p className="mt-8 max-w-md text-xl leading-relaxed text-zinc-500">
              I write short stories and fanfiction
              <br />
              for the most popular fandoms.
            </p>

            <div className="mt-8 flex items-center justify-between">

              <button onClick={()=>{SetFollowing(!following)}} className={`cursor-pointer flex items-center gap-5 rounded-full  ${following ? `text-black bg-transparent`: `bg-black text-white`} px-13 py-2 w-60 text-2xl font-bold  transition hover:scale-105`}>
                {following ? <i class="ri-check-fill"></i> : <i className="ri-add-line"></i>}
                {following ? "Following" : "Follow"}
              </button>

              <div className="flex gap-4">

                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 text-2xl hover:bg-zinc-100">
                  <i className="ri-mail-line"></i>
                  
                </button>

                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 text-2xl hover:bg-zinc-100">
                  <i className="ri-notification-3-line"></i>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Usestates
