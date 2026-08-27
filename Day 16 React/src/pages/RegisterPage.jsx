import React, { useContext } from "react";
import watch from "../assets/watch.png";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
// import { Auth } from "../Context/AuthContext";


const RegisterPage = () => {

    // let {registerUser , setRegisterUser} = useContext('Auth')

  let Navigate = useNavigate();
  let {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="h-screen overflow-hidden bg-[#202226] text-white flex">
      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Watch Image */}
        <img
          src={watch}
          alt="Luxury Horloge Watch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-end p-10 xl:p-14">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">
            Time Is Precious
          </p>

          <h2 className="text-4xl xl:text-5xl font-serif leading-tight">
            Begin Your
            <br />
            <span className="text-amber-400">Timeless Journey</span>
          </h2>

          <p className="text-zinc-300 mt-4 max-w-md text-sm leading-5">
            Join Horloge and discover a world where precision, craftsmanship,
            and timeless elegance come together.
          </p>

          <p className="text-zinc-400 text-[10px] tracking-[0.3em] uppercase mt-6">
            Precision. Elegance. Heritage.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-5">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="text-center mb-5">
            <h1 className="text-2xl font-serif tracking-[0.2em]">HORLOGE</h1>

            <p className="text-zinc-500 text-[10px] tracking-[0.3em] mt-1 uppercase">
              Timeless Elegance
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 shadow-2xl">
            {/* Heading */}
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Create Account</h2>

              <p className="text-zinc-500 text-xs mt-1">
                Create your account and start your journey with Horloge
              </p>
            </div>

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit(formSubmit)} className="space-y-3.5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-zinc-300 mb-1.5"
                >
                  Full Name
                </label>

                <input
                  {...register("name", {
                    required: "name is required",
                  })}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="
                    w-full
                    h-10
                    bg-zinc-950
                    border border-zinc-800
                    rounded-lg
                    px-3
                    text-sm
                    text-white
                    placeholder:text-zinc-600
                    outline-none
                    transition
                    focus:border-amber-500
                  "
                />
                {errors.name && (
                  <p className="text-red-700">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-zinc-300 mb-1.5"
                >
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    h-10
                    bg-zinc-950
                    border border-zinc-800
                    rounded-lg
                    px-3
                    text-sm
                    text-white
                    placeholder:text-zinc-600
                    outline-none
                    transition
                    focus:border-amber-500
                  "
                />
                {errors.email && (
                  <p className="text-red-700">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs text-zinc-300 mb-1.5"
                >
                  Password
                </label>

                <input
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 character required",
                    },
                  })}
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="
                    w-full
                    h-10
                    bg-zinc-950
                    border border-zinc-800
                    rounded-lg
                    px-3
                    text-sm
                    text-white
                    placeholder:text-zinc-600
                    outline-none
                    transition
                    focus:border-amber-500
                  "
                />
                {errors.password && (
                  <p className="text-red-700">{errors.password.message}</p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="
                  w-full
                  h-10
                  bg-amber-500
                  hover:bg-amber-400
                  text-black
                  text-sm
                  font-semibold
                  rounded-lg
                  transition
                  duration-200
                  active:scale-[0.98]
                  mt-1
                "
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="h-px bg-zinc-800 flex-1"></div>

              <span className="text-[10px] text-zinc-600">OR</span>

              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>

            {/* Login Link */}
            <p className="text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <button
                onClick={() => Navigate("/")}
                className="
                  text-amber-500
                  hover:text-amber-400
                  transition
                  font-medium
                  cursor-pointer
                "
              >
                Login
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-[10px] text-zinc-600 mt-4">
            © 2026 Horloge. Crafted for those who value time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
