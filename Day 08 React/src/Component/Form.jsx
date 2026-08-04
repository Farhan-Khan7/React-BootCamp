import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const Form = ({ showForm, setShowForm , setCardData , cardData }) => {

  

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    let users = [...cardData , data];
    setCardData(users)
    localStorage.setItem("user" , JSON.stringify(users))
    reset()
  }

  return (
    <div
      className={`${
        showForm
          ? "w-200 bg-white/20 backdrop-blur-3xl border border-white/20 absolute top-5 left-1/2 -translate-x-1/2 rounded-2xl p-8"
          : "hidden"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute right-5 top-5 text-3xl text-white hover:rotate-90 transition"
      >
        <IoClose className="cursor-pointer" />
      </button>

      <p className="text-center text-gray-300 mb-8">
        Fill all the details below
      </p>

      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(formSubmit)}>
        {/* Name */}
        <div>
          <label className="text-white block mb-2">Name</label>

          <input
            {...register("name" , {
              required : "Name is required",
              pattern : {
                value : /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message : "Blank spaces are not allowed"
              }
            })}
            type="text"
            placeholder="Enter your Name"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
          {errors.name && <p className="text-sm font-bold text-red-600">{errors.name.message}</p>}
        </div>

        {/* Profession */}
        <div>
          <label className="text-white block mb-2">Profession</label>

          <input
          {...register("profession" , {
            required : "Profession is required",
          })}
            type="text"
            placeholder="Enter your Profession"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
          {errors.profession && <p className="text-sm font-bold text-red-600">{errors.profession.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-white block mb-2">Email</label>

          <input
          {...register("email" , {
            required : "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address"
            }
          })}
            type="email"
            placeholder="Enter Your Email"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
          {errors.email && <p className="text-sm font-bold text-red-600">{errors.email.message}</p>}
        </div>

        {/* Contact */}
        <div>
          <label className="text-white block mb-2">Contact</label>

          <input
          {...register("contact" , {
            required : "Contact is required",
            minLength: {
              value : 10,
              message : "Minimum 10 digits allowed"
            },
            maxLength : {
              value : 10,
              message : "Maximum 10 digits allowed"
            }
          })}
            type="tel"
            placeholder="Enter your Contact "
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
          {errors.contact && <p className="text-sm font-bold text-red-600">{errors.contact.message}</p>}
        </div>

        {/* Profile Image */}
        <div>
          <label className="text-white block mb-2">Profile Image URL</label>

          <input
          {...register("image" , {
            required : "Profile pic URL is required"
          })}
            type="text"
            placeholder="Enter your image URL : https://..."
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
           {errors.image && <p className="text-sm font-bold text-red-600">{errors.image.message}</p>}
        </div>

        {/* Instagram */}
        <div>
          <label className="text-white block mb-2">Instagram Link</label>

          <input
          {...register("instagram")}
            type="text"
            placeholder="Enter your insta URL : https://instagram.com/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
           
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-white block mb-2">LinkedIn Link</label>

          <input
          {...register("linkedln")}
            type="text"
            placeholder="Enter your Linkedln URL : https://linkedin.com/in/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Threads */}
        <div>
          <label className="text-white block mb-2">Threads Link</label>

          <input
          {...register("threads")}
            type="text"
            placeholder="Enter your Threads URL : https://threads.net/@username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* X */}
        <div>
          <label className="text-white block mb-2">X (Twitter) Link</label>

          <input
          {...register("x")}
            type="text"
            placeholder="Enter your X URL : https://x.com/username"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none text-white placeholder:text-gray-400"
          />
        </div>

        {/* Button */}
        <button className="cursor-pointer col-span-2 bg-white text-black py-3 rounded-xl font-bold text-lg hover:bg-gray-200 transition mt-2">
          Generate Card
        </button>
      </form>
    </div>
  );
};

export default Form;
