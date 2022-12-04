import React from "react";
import {
  AiOutlineCodepen,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlineSave,
  AiOutlineUser,
} from "react-icons/ai";

function Comment() {
  return (
    <div className="bg-slate-500 w-4/6 border ml-40 mx-auto ">
      <article className="border-b h-auto grid-col-1 grid-flow-row items-center from-sky-200 bg-white p-3">
        <div className="flex flex-row">
          <div className="rounded-full bg-blue-400 w-12 h-12  mt-4 flex items-center justify-center">
            <AiOutlineUser size={20} />
          </div>
          <div className="p-2 justify-between flex-grow flex-wrap">
            <div>Russel Jay</div>
            <span className="text-gray-300 text-ellipsis">
              commented March 07, 2022
            </span>
            <h3 className="leading-relaxed max-w-md hover:text-blue-500">
              How can one be good at programming. How can one be good at
              programming. How can one be good at programming
            </h3>
          </div>
          <div>
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px] z-10 rounded-sm">
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineEdit />
                Edit comment
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineDelete />
                Delete
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Comment;
