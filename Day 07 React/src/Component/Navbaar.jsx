import React from 'react'

const Navbaar = ({showForm , setShowForm}) => {
  return (
    <div className='rounded backdrop-blur-3xl w-full h-15 px-3 py-2 bg-white/20 text-white flex items-center justify-between'>
      <div className='w-fit h-full ml-10 rounded-full overflow-hidden '>
        <img className='w-full h-full' src="https://i.pinimg.com/736x/1f/a1/66/1fa166b8be7105927a3af53cc8891458.jpg" alt="" />
      </div>

      <div className='w-120 h-10 ml-17 bg-gray-800 rounded flex items-center justify-evenly'>
        <p className='font-bold'>Home</p>
        <p className='font-bold'>About</p>
        <p className='font-bold'>Contact</p>
      </div>

      <button onClick={() =>  setShowForm(true)} className={`cursor-pointer px-5 py-2 bg-gray-800 rounded font-bold flex justify-center items-center mr-7`}>Create User</button>
    </div>
  )
}

export default Navbaar
