import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const Practice2 = () => {
  const [val, setVal] = useState(0);
    return (
    <div className="w-100 h-150 bg-amber-200 rounded-xl overflow-hidden relative">
      
      {/* Images Wrapper */}
      <div
        className="w-full h-full flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateY(-${val * 100}%)`,
        }}
      >
        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/736x/15/9c/8e/159c8e026339a803795b9ad49a7b4a89.jpg"
          alt=""
        />

        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/1200x/de/aa/f7/deaaf7812a6a7258ac5b45a4cf9cb65c.jpg"
          alt=""
        />

        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/736x/28/a2/ec/28a2ec6758359c15912abb914a5e4f9f.jpg"
          alt=""
        />

        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/736x/90/7a/29/907a29cd4cd43c1cb8197530e7d5f5b8.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/736x/c3/6e/09/c36e0932877d98da449ff7b16f473ea6.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover shrink-0"
          src="https://i.pinimg.com/1200x/21/8b/a0/218ba0058b4215ba6dababaff00ca012.jpg"
          alt=""
        />
      </div>

      <button
        onClick={() => setVal((prev) => (prev + 1) % 6)}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl bg-gray-300 p-2 rounded-full text-black"
      >
        <FaArrowDown />
      </button>
    </div>
  );

};

export default Practice2;
