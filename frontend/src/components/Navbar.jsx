import { Link, useLocation } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { logOut } from "../redux/auth/action";
import {ExitIcon} from '@radix-ui/react-icons'
export const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { userName, isLoggedin } = useSelector((store) => {
    return {
      userName: store.authReducer.userName,
      isLoggedin: store.authReducer.isLoggedin,
    };
  }, shallowEqual);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="w-full bg-gray-900 text-white text-lg font-medium fixed z-50">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="font-medium text-3xl color-text cursor-pointer">
          UShorter
        </div>
        <nav className="">
          <ul className="flex space-x-6">
            <li className="color-text">
              <Link
                to={"/"}
                className={`px-2 pb-1 ${
                  pathname == "/" ? "border-b-2 border-purple-700" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="color-text">
              <Link
                to={"/all"}
                className={`px-2 pb-1 rounded-md ${
                  pathname == "/all" ? "border-b-2 border-purple-700" : ""
                }`}
              >
                All-url
              </Link>
            </li>
            <li className="color-text">
              <Link
                to={"/about"}
                className={`px-2 pb-1 ${
                  pathname == "/about" ? "border-b-2 border-purple-700" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li className="color-text">
              {!isLoggedin ? (
                <Link
                  to={"/register"}
                  className={`px-2 pb-1 ${
                    pathname == "/register"
                      ? "border-b-2 border-purple-700"
                      : ""
                  }`}
                >
                  Register
                </Link>
              ) : (
                <Link
                  className={`px-2 pb-1`}
                >
                  {userName}
                </Link>
              )}
            </li>
            <li className="color-text">
              {!isLoggedin ? (
                <Link
                  to={"/login"}
                  className={`px-2 pb-1 ${
                    pathname == "/login" ? "border-b-2 border-purple-700" : ""
                  }`}
                >
                  Login
                </Link>
              ) : (
                <Link
                  onClick={handleLogout}
                  className={`px-2 pb-1 flex justify-center items-center gap-1`}
                >
                 <span> Logout</span><span> <ExitIcon  className="text-white" /></span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
