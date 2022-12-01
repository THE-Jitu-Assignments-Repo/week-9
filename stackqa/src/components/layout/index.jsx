import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function Layout() {
  const [isopen, setIsOpen] = useState(true)
  return (
    <>
    <div className="w-full min-w-full">
      <Header close={()=>setIsOpen(!isopen)}/>
    </div>
    <div className="w-full min-h-screen flex">
      <div className={isopen? `w-[200px] `: `w-[0]`}>
        {isopen? <Sidebar /> : null}
      </div>
      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default Layout;
