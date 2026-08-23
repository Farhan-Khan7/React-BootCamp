import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f5f2ec] px-8 md:px-12 lg:px-16 py-8">
      <div className="max-w-[1450px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to={'/home'}
          className="font-serif text-3xl md:text-4xl tracking-[0.18em] text-[#111]"
        >
          AUREL
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-[13px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive
                  ? "text-[#a87938]"
                  : "text-[#111] hover:text-[#a87938]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive
                  ? "text-[#a87938]"
                  : "text-[#111] hover:text-[#a87938]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-[13px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive
                  ? "text-[#a87938]"
                  : "text-[#111] hover:text-[#a87938]"
              }`
            }
          >
            Services
          </NavLink>

        </div>

        {/* Menu Button */}
        <button
          className="
            border border-[#222]
            rounded-full
            px-6 py-2.5
            text-[13px]
            tracking-[0.18em]
            uppercase
            text-[#111]
            transition-all
            duration-300
            hover:bg-[#111]
            hover:text-white
          "
        >
          Menu
        </button>

      </div>
    </nav>
  );
};

export default Navbar;