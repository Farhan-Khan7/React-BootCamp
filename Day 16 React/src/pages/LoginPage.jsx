import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginPage = () => {

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
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif tracking-[0.2em]">
            HORLOGE
          </h1>

          <p className="text-zinc-500 text-xs tracking-[0.3em] mt-2 uppercase">
            Timeless Elegance
          </p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              Welcome Back
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

            {/* Email */}
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-lg transition duration-200 active:scale-[0.98]"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-zinc-800 flex-1"></div>

            <span className="text-xs text-zinc-600">
              OR
            </span>

            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-zinc-500">
            Don't have an account?{" "}
            <a
            onClick={() => Navigate("/register")}
              href=""
              className="text-amber-500 hover:text-amber-400 transition font-medium"
            >
              Create Account
            </a>
          </p>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-600 mt-6">
          © 2026 Horloge. Crafted for those who value time.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;