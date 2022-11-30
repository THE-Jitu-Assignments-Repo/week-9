import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-full bg-[#06152D] p-5 min-h-screen h-full">
      <div className="w-full grid justify-center items-center">
        <span class="text-2xl text-white font-extrabold whitespace-nowrap truncate my-auto p-[10px] w-full">
          {" "}
          STACKQA
        </span>
      </div>
      <hr className="mb-3" />
      <div class="grid grid-cols-1 divide-y-[1px] divide-gray-600 text-center w-full">
        <div className="text-2xl text-white">
          <Link to="/">Home</Link>
        </div>
        <div className="text-2xl text-white">
          <Link to="question">Questions</Link>
        </div>
        <div className="text-2xl text-white">
          <Link to="profile">Users</Link>
         
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
