import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillSchedule,
  AiOutlineCodepen,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlineSave,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Answers from "../answers/Answers";
import CommentModal from "../../modals/commentModal/CommentModal";
import { useSelector } from "react-redux";

function QuestionArticle() {
  const [isanswer, setIsAnswer] = useState(false);
  const [iscomment, setIsComment] = useState(false);
  const { postOpen } = useSelector((state) => state.questions);

  return (
    <article className="border-b h-auto grid-col-1 grid-flow-row items-center from-sky-200 bg-white p-3">
      <div className="flex flex-row">
        <div className="object-contain w-12 mt-4 flex items-start justify-center">
          <img src="/assets/pic.png" alt="profile" className="rounded-full" />
        </div>
        <div className="p-2 justify-between flex-grow flex-wrap">
          <div>Michael Jay</div>
          <span className="text-gray-300 text-ellipsis">
            Asked March 07, 2022
          </span>
          <h3 className="leading-relaxed max-w-md hover:text-blue-500">
            How do native speakers tell I’m foreign based on my English alone?
          </h3>
        </div>
        <div>
          <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full hover:text-white">
            <AiOutlineEllipsis className="" size={30} />
          </div>
          <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px] z-20 rounded-sm">
            <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
              <AiOutlineEdit />
              Edit post
            </li>
            <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
              <AiOutlineDelete />
              Delete post
            </li>

            <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
              <AiOutlineSave />
              Save post
            </li>
            <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
              <AiOutlineCodepen /> Embed post
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col items-center justify-center pr-2">
          <AiFillCaretUp
            className="hover:text-blue-500 cursor-pointer"
            size={20}
          />
          <span className="text-xl">32</span>
          <AiFillCaretDown
            className="hover:text-blue-500 cursor-pointer"
            size={20}
          />
        </div>
        <div className="p-2 justify-between flex-grow flex-wrap">
          <h3 className="leading-relaxed max-w-md font-extralight line-clamp-none">
            I’m a 19-year-old student from Nairobi, kenya. I’ve been introduced
            to the language at a very young age and I’m capable of conducting
            any type of conversation. However, some of my English-speaking
            friends on the internet didn’t take too long to figure I’m not a
            native speaker. Why is that?
          </h3>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-sm justify-between bg-slate-300 m-8  p-2">
        <div className="items-center justify-between flex flow-row w-full ">
          <div
            className="p-1 flex items-center bg-white rounded-md  hover:text-white hover:bg-blue-300 cursor-pointer"
            onClick={() => setIsAnswer((prev) => !prev)}
          >
            <AiFillSchedule className="text-blue-500" size={20} />
            <span className="pr-1 pl-1">15 Answers</span>
          </div>
          <div className="p-1  flex items-center bg-white rounded-md hover:text-white hover:bg-blue-300 cursor-pointer">
            <span className="pr-1 pl-1 flex items-center gap-1 ">
              <AiOutlineShareAlt /> share
            </span>
          </div>
        </div>
      </div>

      {/* answer modal-content */}
      {isanswer && <Answers />}

      {/* {postOpen && <CommentModal />} */}
    </article>
  );
}

export default QuestionArticle;
