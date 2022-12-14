import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlineWarning,
} from "react-icons/ai";
import moment from "moment";

function Comment({item}) {
  return (
    <div className="border w-[85%] mr-4 mb-2 mx-auto rounded-lg">
      <article className="border-b h-auto grid-col-1  grid-flow-row rounded-lg items-center from-sky-200 bg-white p-3" key={item.comment_id}>
        <div className="flex flex-row">
          <div className="p-2 justify-between flex-grow flex-wrap">
            <div>{item.username}</div>
            <span className="text-gray-300 text-ellipsis">
              {moment(item.comment_date).utc().format("MMMM Do YYYY")}
            </span>
            <h5 className="leading-relaxed max-w-md hover:text-blue-500">
              {item.comment}
            </h5>
          </div>
          <div className="relative">
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex right-0 lg:left-0 hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px] z-10 rounded-sm">
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineEdit />
                Edit comment
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineDelete />
                Delete
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
                <AiOutlineWarning />
                Report
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Comment;
