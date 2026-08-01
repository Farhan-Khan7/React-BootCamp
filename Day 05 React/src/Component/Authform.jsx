import React from "react";
import { useState } from "react";

const AuthForm = ({ toggle, setToggle }) => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [user, setUser] = useState([]);
  console.log(user);

  const getData = (details) => {
    let { name, value } = details.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, formData]);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="w-full max-w-md h-fit bg-white rounded-2xl shadow-xl p-8 ">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-0">
          Welcome 👋
        </h1>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 mt-5">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className={`${toggle ? `w-1/2 py-2 rounded-md bg-blue-600 text-white font-medium cursor-pointer` : `w-1/2 py-2 rounded-md text-gray-600 hover:bg-white transition cursor-pointer`}  `}
          >
            Login
          </button>

          <button
            onClick={() => setToggle((prev) => !prev)}
            className={`${toggle ? `w-1/2 py-2 rounded-md text-gray-600 hover:bg-white transition cursor-pointer` : `w-1/2 py-2 rounded-md bg-blue-600 text-white font-medium cursor-pointer`}  `}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        {toggle ? (
          <form className="mt-8 space-y-5" onSubmit={submitForm}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                required
                value={formData.email}
                name="email"
                onChange={getData}
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
                required
                value={formData.password}
                name="password"
                onChange={getData}
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={submitForm}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 text-xl rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                onChange={(event) => setUserName(event.target.value)}
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
                onChange={(event) => setUserEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
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

            {/* Button */}
            <button
              onClick={submitForm}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 text-xl rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
