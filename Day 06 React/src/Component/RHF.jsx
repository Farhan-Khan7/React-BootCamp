import React from "react";
import {useForm} from 'react-hook-form';

const RHF = () => {

    const {register , handleSubmit , formState : {errors} , reset} = useForm();

    const formSubmit = (data) =>{
        console.log(data)
        reset()
    }

 return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome 👋
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login or create a new account
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 mt-8">
          <button className="w-1/2 py-2 rounded-md bg-blue-600 text-white font-medium">
            Login
          </button>

          <button className="w-1/2 py-2 rounded-md text-gray-600 hover:bg-white transition">
            Create Account
          </button>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit(formSubmit)}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
            {...register("UserName")}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {...register("UserEmail")}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {...register("UserPassword")}
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue
          </button>

        </form>
      </div>
    </div>
  );
};

export default RHF;
