import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillSchedule,
  AiOutlineEllipsis,
  AiOutlineUser,
} from "react-icons/ai";

function Questions() {
  const [isanswer, setIsAnswer] = useState(false);
  return (
    <div>
      <div className="pl-5 mt-4">
        <h1 className="text-xl">All Questions</h1>
      </div>
      <hr />
      <div className="w-full grid grid-cols-2 gap-5 pl-4">
        <section className="border mt-5 min-h-screen bg-slate-50 mb-4 rounded-md flex-col flex">
          <article className="border-b h-auto grid-col-1 grid-flow-row items-center p-3">
            <div className="flex flex-row">
              <div className="rounded-full bg-blue-400 w-12 h-11 flex items-center justify-center">
                <AiOutlineUser size={20} />
              </div>
              <div className="p-2 justify-between flex-grow flex-wrap">
                <span className="text-gray-300 text-ellipsis">
                  Asked March 07, 2022
                </span>
                <h3 className="leading-relaxed max-w-md font-semibold">
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
                <div className="p-1 flex items-center bg-white rounded-md" onClick={()=> setIsAnswer(prev=>!prev)}>
                  <AiFillSchedule
                    className="text-blue-500 hover:text-blue-400"
                    size={20}
                  />
                  <span className="pr-1 pl-1">15 Answers</span>
                </div>
                <div className="p-1 flex items-center bg-white rounded-md">
                  <span className="pr-1 pl-1">Answer</span>
                </div>
              </div>
            </div>
            {/* answer modal-content */}
            <div className="border-t h-auto bg-gray-300 p-5">
              <div className="flex flex-row">
                <div className="rounded-full bg-blue-400 w-12 h-11 flex items-center justify-center border">
                  <AiOutlineUser size={15} />
                </div>
                <div className="p-2 justify-between flex-grow flex-wrap">
                  <span className="text-black-300 text-ellipsis">
                    Asked March 07, 2022
                  </span>
                  <h3 className="leading-relaxed max-w-md font-semibold">
                    How can one be good at programming. How can one be good at
                    programming. How can one be good at programming
                  </h3>
                </div>
                <div className="p-2">
                  <AiOutlineEllipsis size={20} />
                </div>
              </div>
            </div>
          </article>
          <article className="border-b h-auto grid-col-1 grid-flow-row items-center p-3">
            <div className="flex flex-row">
              <div className="rounded-full bg-blue-400 w-12 h-11 flex items-center justify-center">
                <AiOutlineUser size={20} />
              </div>
              <div className="p-2 justify-between flex-grow flex-wrap">
                <span className="text-gray-300 text-ellipsis">
                  Asked March 07, 2022
                </span>
                <h3 className="leading-relaxed line-clamp-3 max-w-md font-semibold">
                  How can one be good at programming. How can one be good at
                  programming. How can one be good at programming Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Minima id
                  quisquam porro illum officia blanditiis fugiat ea sapiente hic
                  corporis. Totam dicta animi iste.
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
                  be good at programming. How can one be good at programming.
                  How can one be good at programming
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center rounded-sm justify-between bg-slate-300 m-8  p-2">
              <div className="items-center justify-between flex flow-row w-full ">
                <div className="p-1 flex items-center bg-white rounded-md">
                  <AiFillSchedule
                    className="text-blue-500 hover:text-blue-400"
                    size={20}
                  />
                  <span className="pr-1 pl-1">15 Answers</span>
                </div>
                <div className="p-1 flex items-center bg-white rounded-md">
                  <span className="pr-1 pl-1">Answer</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="w-1/2 mt-5 bg-slate-50 min-h-screen mb-10">
          <div className="text-xl font-extralight">
            <span className="leading-relaxed pl-5">Recently Asked</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Questions;
