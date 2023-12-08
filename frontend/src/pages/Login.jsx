// LoginForm.js
import  { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login, e.g., make API request
    console.log("Login submitted:", formData);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center text-white">
      <form className="w-1/3 px-8 py-6 pb-4 shadow-xl border border-gray-600 rounded-lg">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color text-center text-xl mb-4">
          Login
        </h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-md">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end items-center">
          <button
            type="submit"
            className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md text-white"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don &apos;t have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
            Register here.
          </Link>
        </p>
      </form>
    </div>
  );
};

