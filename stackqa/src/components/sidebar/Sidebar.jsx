import React from "react";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillFileUnknown,
  AiFillLock,
  AiOutlineHome,
  AiOutlineQuestion,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/UserSlice";
import {
  getAllQuestions,
  getQuestion,
  getQuestionMostAns,
  getRecentlyPosted,
} from "../../features/questions/QuestionSlice";
import { useState } from "react";

function Sidebar({ isOpen }) {
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const [max, setMax]= useState(6)
  return (
    <div
      className={`bg-[#06152D] p-1 pt-10 min-h-screen h-screen  fixed top-[60px] left-0  flex-col flex justify-between pb-20 transition-all duration-100 ease-linear overflow-x-hidden
    ${isOpen ? "w-[200px] opacity-100" : "w-[0px] opacity-0"}
    `}
    >
      <div className="flex flex-col h-64 text-center max-w-full w-full">
        <div className="text-xl text-blue-500 text-start divide-gray-600 ">
          <Link
            to="/"
            className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-800"
          >
            <AiOutlineHome /> Home
          </Link>
        </div>

        <div className="Q">
          <div className="text-xl text-white font-extralight peer py-1">
            <Link
              to="question"
              className="items-center flex-row flex p-1 gap-1 pl-5  hover:bg-gray-800 hover:text-blue-500"
            >
              <AiOutlineQuestion />
              Questions
            </Link>
          </div>
          <div
            className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col text-white drop-shadow-lg pl-10 font-extralight"
          >
            <Link
              to="question"
              onClick={() => dispatch(getAllQuestions({pageNumber: page , rowsPerPage: max}))}
              className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-300 hover:text-blue-500"
            >
              All Questions
            </Link>
            <Link
              to="question"
              onClick={()=>dispatch(getRecentlyPosted({pageNumber: page , rowsPerPage: max}))}
              className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-300 hover:text-blue-500"
            >
              Recently asked
            </Link>
            <Link
              to="question"
              className="items-center flex-row flex p-1 gap-1 justify-start hover:bg-gray-300 hover:text-blue-500"
              onClick={() => dispatch(getQuestionMostAns({pageNumber: page , rowsPerPage: max}))}
            >
              Most answered
            </Link>
          </div>
        </div>
        <div className="text-xl font-extralight text-white py-1">
          <Link
            to="users"
            className="items-center flex-row flex p-1 gap-1 pl-5 hover:bg-gray-800 hover:text-blue-500"
          >
            <AiOutlineUser />
            Users
          </Link>
        </div>
        <div className="text-xl font-extralight text-white py-1">
          <Link
            to="aboutus"
            className="items-center flex-row flex p-1 gap-1 pl-5 hover:bg-gray-800 hover:text-blue-500"
          >
            <AiFillFileUnknown />
            About us
          </Link>
        </div>
      </div>
      {token && (
        <div className="w-full grid  text-xl text-white">
          <span
            className="flex items-center cursor-pointer justify-center gap-3 my-5 hover:text-blue-500"
            onClick={() => dispatch(logout())}
          >
            {" "}
            <AiFillLock />
            Log out
          </span>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
