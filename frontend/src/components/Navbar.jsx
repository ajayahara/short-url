import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const {pathname}=useLocation();
  return (
    <div className="w-full bg-gray-900 text-white text-lg font-medium fixed z-50">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="font-medium text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color cursor-pointer">UShorter</div>
        <nav className="">
          <ul className="flex space-x-6">
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/"} className={`px-2 pb-1 ${pathname=='/'?'border-b-2 border-purple-700':''}`}>Home</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/about"} className={`px-2 pb-1 ${pathname=='/about'?'border-b-2 border-purple-700':''}`}>About</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/register"} className={`px-2 pb-1 ${pathname=='/register'?'border-b-2 border-purple-700':''}`}>Register</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/login"} className={`px-2 pb-1 ${pathname=='/login'?'border-b-2 border-purple-700':''}`}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
