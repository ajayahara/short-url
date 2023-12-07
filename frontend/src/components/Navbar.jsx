import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white text-md font-medium nav-family">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="font-medium text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color cursor-pointer">Shortener</div>
        <nav className="">
          <ul className="flex space-x-6">
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/register"}>Register</Link>
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
