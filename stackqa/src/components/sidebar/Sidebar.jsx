import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {  AiFillFileUnknown, AiFillLock,  AiOutlineHome, AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";

function Sidebar({isOpen}) {
  return (
    <div className={`bg-[#06152D] p-1 pt-10 min-h-screen h-screen  fixed top-[60px] left-0  flex-col flex justify-between pb-20 transition-all duration-100 ease-linear overflow-x-hidden
    ${isOpen?"w-[200px] opacity-100":"w-[0px] opacity-0"}
    `}>
      <div className="flex flex-col h-64 text-center max-w-full w-full">
        <div className="text-xl text-white text-start font-extralight divide-gray-600 ">
          <Link
            to="/"
            className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-800"
          >
           <AiOutlineHome /> Home
          </Link>
        </div>
        <div className="text-xl text-white font-extralight py-1">
          <Link
            to="question"
            className="items-center flex-row flex p-1 gap-1 pl-5 hover:bg-gray-800"
          >
            <AiOutlineQuestion />
            Questions
          </Link>
        </div>
        <div className="text-xl font-extralight text-white py-1">
          <Link
            to="users"
            className="items-center flex-row flex p-1 gap-1 pl-5 hover:bg-gray-800"
          >
            <AiOutlineUser />
            Users
          </Link>
        </div>
        <div className="text-xl font-extralight text-white py-1">
          <Link
            to="users"
            className="items-center flex-row flex p-1 gap-1 pl-5 hover:bg-gray-800"
          >
            <AiFillFileUnknown />
            About us
          </Link>
        </div>
      </div>
      <div className="w-full grid  text-xl text-white">
        <Link
          to="/login"
          className="flex items-center justify-center gap-3 my-5"
        >
          {" "}
          <AiFillLock />
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
