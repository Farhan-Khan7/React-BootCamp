import React, { useState } from "react";


const Counter = () => {

    let [count , setCount ] = useState(0)

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Counter
        </h1>

        <div className="text-6xl font-bold text-blue-600">
          {count}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={()=>(setCount(count - 1)) } className="w-12 h-12 rounded-lg bg-red-500 text-white text-2xl font-bold hover:bg-red-600 transition">
            -
          </button>

          <button onClick={()=>(setCount(count = 0)) } className="px-6 h-12 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">
            Reset
          </button>

          <button onClick={()=>(setCount(count + 1)) } className= " cursor-pointer w-12 h-12 rounded-lg bg-green-500 text-white text-2xl font-bold hover:bg-green-600 transition">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;