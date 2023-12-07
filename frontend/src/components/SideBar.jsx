import {
  BellIcon,
  DashboardIcon,
  GearIcon,
  HamburgerMenuIcon,
  HomeIcon,
  MoonIcon,
  PieChartIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
const Sidebar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [isDark,setIsDark]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen);
  };
  return (
    <div className={`h-screen bg-gray-800 text-white transition-all ease-in-out duration-500 ${isOpen?'w-64':'w-16'}`}>
      <div className="mt-2">
        <div className={`flex justify-normal items-center rounded-full gap-2 pl-3 py-1 relative left-7 ${isOpen?'border-[3px] border-white':'border-none h-12'}`}>
          {isDark?<SunIcon  className={`w-4 h-4 hover:text-purple-500 ${isOpen?'visible':'hidden'}`} onClick={()=>setIsDark(false)}/>:<MoonIcon  className={`w-4 h-4 hover:text-purple-500 ${isOpen?'visible':'hidden'}`} onClick={()=>setIsDark(true)}/>}
          <BellIcon className={`w-4 h-4 hover:text-purple-500 ${isOpen?'visible':'hidden'}`}/>
          <span className={`uppercase text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 px-12 py-1 rounded-full ml-6 ${isOpen?'visible':'hidden'}`}>Nerve</span>
          <button className="absolute right-0 p-3 rounded-full bg-gray-800 border-[3px] border-white 
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-purple-500 transition-transform transform duration-700 hover:rotate-[225deg]" onClick={handleClick}>
            <DashboardIcon className="w-5 h-5"/>
          </button>
        </div>
      </div>
      <nav>
        <ul className={`flex flex-col gap-1 text-xl pt-8 ${isOpen?'pl-10':'pl-0'}`}>
          <li className="group cursor-pointer">
            <div className={`w-full flex gap-2 items-center bg-gray-800 py-1 rounded-full relative left-0 group-hover:left-8 ease-in-out duration-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-purple-500 ${isOpen?'group-hover:pl-4 justify-normal pr-4':'justify-center'}`}>
              <HomeIcon className="w-5 h-5"/>
              <span className={`${isOpen?'visible':'hidden'}`}>Home</span>
            </div>
          </li>
         <li className="group cursor-pointer">
            <div className={`w-full flex gap-2 items-center bg-gray-800 py-1 rounded-full relative left-0 group-hover:left-8 ease-in-out duration-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-purple-500 ${isOpen?'group-hover:pl-4 justify-normal pr-4':'justify-center'}`}>
              <HamburgerMenuIcon className="w-5 h-5"/>
              <span className={`${isOpen?'visible':'hidden'}`}>Dashboard</span>
            </div>
          </li>
         <li className="group cursor-pointer">
            <div className={`w-full flex gap-2 items-center bg-gray-800 py-1 rounded-full relative left-0 group-hover:left-8 ease-in-out duration-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-purple-500 ${isOpen?'group-hover:pl-4 justify-normal pr-4':'justify-center'}`}>
              <PieChartIcon className="w-5 h-5"/>
              <span className={`${isOpen?'visible':'hidden'}`}>Graph</span>
            </div>
          </li>
           <li className="group cursor-pointer">
            <div className={`w-full flex gap-2 items-center bg-gray-800 py-1 rounded-full relative left-0 group-hover:left-8 ease-in-out duration-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-purple-500 ${isOpen?'group-hover:pl-4 justify-normal pr-4':'justify-center'}`}>
              <GearIcon className="w-5 h-5"/>
              <span className={`${isOpen?'visible':'hidden'}`}>Setting</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
