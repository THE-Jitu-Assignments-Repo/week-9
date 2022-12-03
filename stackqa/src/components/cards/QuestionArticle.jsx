import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp, AiFillSchedule, AiOutlineEllipsis, AiOutlineUser } from 'react-icons/ai';
import Answers from '../modals/answers/Answers';

function QuestionArticle() {
      const [isanswer, setIsAnswer] = useState(false);

  return (
    <article className="border-b h-auto grid-col-1 grid-flow-row items-center from-sky-200 bg-white p-3">
            <div className="flex flex-row">
              <div className="rounded-full bg-blue-400 w-12 h-11 mt-4 flex items-center justify-center">
                <AiOutlineUser size={20} />
              </div>
              <div className="p-2 justify-between flex-grow flex-wrap">
                <div>Michael Jay</div>
                <span className="text-gray-300 text-ellipsis">
                  Asked March 07, 2022
                </span>
                <h3 className="leading-relaxed max-w-md hover:text-blue-500">
                  How can one be good at programming. How can one be good at
                  programming. How can one be good at programming
                </h3>
              </div>
              <div className="p-2">
                <AiOutlineEllipsis size={20} />
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
                <h3 className="leading-relaxed max-w-md font-extralight line-clamp-3">
                  How can one be good at programming. How can one be good at
                  programming. How can one be good at programming. How can one
                  be good at programming ... How can one be good at programming.
                  How can one be good at programming
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
                <div className="p-1 flex items-center bg-white rounded-md hover:text-white hover:bg-blue-300 cursor-pointer">
                  <span className="pr-1 pl-1">Answer</span>
                </div>
              </div>
            </div>

            {/* answer modal-content */}
            {isanswer && <Answers />}
          </article>
  )
}

export default QuestionArticle