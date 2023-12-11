// LoginForm.js
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginPost } from "../redux/auth/action";
const initialFormData = {
  email: "",
  password: "",
};
export const Login = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { loading,isLoggedin } = useSelector((store) => {
    return {
      loading: store.authReducer.isLoginLoading,
      error: store.authReducer.isLoginError,
      message: store.authReducer.errorLoginMessaage,
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
    dispatch(loginPost(formData));
    setFormData(initialFormData);
  };
  if(isLoggedin){
    return <Navigate to='/' />
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center text-white">
      <form className="w-1/3 px-8 py-6 pb-4 shadow-xl border border-gray-600 rounded-lg">
        <h1 className="color-text text-center text-xl mb-4">Login</h1>
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
          {!loading ? (
            <button
              type="submit"
              className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md text-white"
              onClick={handleSubmit}
            >
              Login
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
          Don &apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-500 hover:underline color-text"
          >
            Register here.
          </Link>
        </p>
      </form>
    </div>
  );
};
