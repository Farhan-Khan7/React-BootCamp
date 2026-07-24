import React, { useState } from "react";

const Practice = () => {

    const [item , setItem] = useState([])

  return (
    <div className="w-100 bg-white rounded-xl shadow-lg p-6 relative">
      <h2 className="text-2xl font-bold text-center mb-6">Array UI</h2>

      {/* Array Boxes */}
      <div className="w-full flex flex-wrap  gap-4 mb-8 bg-transparent">

        {item.map((val , idx) => (

        <div className="w-14 h-14 bg-slate-800 text-white rounded-lg flex items-center justify-center text-lg font-semibold">
          {val}
        </div>       
        ))}
        </div>


      {/* Buttons */}
      <div className="flex flex-col gap-4 items-center absolute bottom-10 left-12">
        <button onClick={()=>setItem([...item , item.push(item.length+1)] )}  className="w-70 flex-1 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
          Add
        </button>

        <button onClick={()=>setItem(item.slice(0, -1))} className="w-70 flex-1 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Practice;
