import React from "react";
import { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineEllipsis,
  AiOutlineRight,
  AiOutlineUser,
} from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import Comment from "../comment/Comment";

function Answers({ setIsComment }) {
  const [showComment, setShowComment] = React.useState(false);

  return (
    <div>
      <div className="border-t h-auto p-5">
        <div className="flex flex-row  bg-slate-300 p-2 mb-1">
          <input
            type="text"
            className="outline-none font-extralight p-1 pl-2 w-full rounded-l-md caret-slate-400"
            placeholder="Write your answer ..."
          />
          <button className="bg-blue-500 rounded-r-md w-20 hover:bg-blue-300 hover:text-white flex-row flex items-center justify-center">
            <GrSend size={20} />
          </button>
        </div>
        <div className="flex flex-row  bg-slate-300 p-2 rounded-lg">
          <div className="flex flex-col justify-start gap-2">
            <div className="w-8 mt-4 flex items-center justify-center ">
              <img
                src="/assets/pic.png"
                alt="anspic"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <AiFillCaretUp
                className="hover:text-blue-500 cursor-pointer"
                size={20}
              />
              <span className="text-xl">12</span>
              <AiFillCaretDown
                className="hover:text-blue-500 cursor-pointer"
                size={20}
              />
            </div>
          </div>
          <div className="p-2 justify-between flex-grow flex-wrap">
            <div>John Doe</div>
            <span className="text-gray-500 text-ellipsis">
              Answered March 08, 2022
            </span>
            <h3 className="leading-relaxed max-w-md font-semi">
              How can one be good at programming. How can one be good at
              programming. How can one be good at programming
            </h3>
          </div>
          <div>
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full z-10 hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px]  rounded-sm">
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 "
                onClick={setIsComment}
              >
                <AiOutlineComment />
                comment
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1  ">
                <AiOutlineCheckCircle /> Accept
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineDelete />
                Delete answer
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-1 flex items-center gap-1 ">
          <span
            className="font-extralight cursor-pointer hover:bg-slate-300 hover:rounded-md pr-1 pl-1"
            onClick={() => setShowComment((prev) => !prev)}
          >
            {" "}
            1 comment
          </span>{" "}
          | <span className="font-extralight text-green-500">Prefered </span>
          <AiFillCheckCircle className="font-extralight text-green-500" />
        </div>
      </div>
      {showComment && <Comment />}
    </div>
  );
}

export default Answers;
