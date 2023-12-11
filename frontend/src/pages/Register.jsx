// RegisterForm.js
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { registerPost } from "../redux/auth/action";
const initialFormData = {
  userName: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { loading,isLoggedin } = useSelector((store) => {
    return {
      loading: store.authReducer.isRegisterLoading,
      error: store.authReducer.isRegisterError,
      message: store.authReducer.errorRegisterMessaage,
      isLoggedin:store.authReducer.isLoggedin
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerPost(formData));
    setFormData(initialFormData);
  };
  if(isLoggedin){
    return <Navigate to='/' />
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center text-white">
      <form className="w-1/3 px-8 py-6 pb-4 shadow-xl border border-gray-600 rounded-lg">
        <h1 className="color-text text-center text-xl mb-4">Register</h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="text-md">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg focus:outline-none"
              required
            />
          </div>
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
          {!loading ? (
            <button
              type="submit"
              className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md text-white"
              onClick={handleSubmit}
            >
              Register
            </button>
          ) : (
            <button
              className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md text-white"
              disabled
            >
              Loading...
            </button>
          )}
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-500 hover:underline color-text"
          >
            Login here.
          </Link>
        </p>
      </form>
    </div>
  );
};
