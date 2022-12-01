import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function Layout() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    <div className="w-full min-w-full">
      <Header close={()=>setIsOpen(prev =>!prev)}/>
    </div>
    <div className="w-full min-h-screen flex">
        <Sidebar isOpen={isOpen} />
      <div className={`flex-1 mt-[60px] ${isOpen?"ml-[200px]":"ml-[0px]"} transition-all duration-100 ease-linear bg-gray-100`}>
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default Layout;
