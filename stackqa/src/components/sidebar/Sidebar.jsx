import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { AiFillLock, AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="w-full bg-[#06152D] p-1 pt-10 min-h-screen h-full  flex-col flex justify-between pb-20">
      <div class="flex flex-col h-64 text-center max-w-full w-full">
        <div className="text-xl text-white text-start font-extralight divide-gray-600 ">
          <Link
            to="/"
            className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-800"
          >
            Home
          </Link>
        </div>
        <div className="text-xl text-white">
          <Link
            to="question"
            className="items-center flex-row flex p-1 gap-1 justify-center hover:bg-gray-800"
          >
            <AiOutlineQuestion />
            Questions
          </Link>
        </div>
        <div className="text-xl text-white">
          <Link
            to="profile"
            className="items-center flex-row flex p-1 gap-1 justify-center hover:bg-gray-800"
          >
            <AiOutlineUser />
            Users
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
