import React, { useContext } from 'react'
import { MyStore } from '../context/MyContex';

const Navbar = () => {

    const {isOpenCart , setIsOpenCart} = useContext(MyStore)

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-red-950 text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white cursor-pointer">
        MyLogo
      </h1>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-lg font-medium">
        <li onClick={() => setIsOpenCart(false)} className="cursor-pointer hover:text-amber-300 transition">
          Home
        </li>

        <li onClick={() => setIsOpenCart(true)} className="cursor-pointer hover:text-amber-300 transition">
          Cards
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
