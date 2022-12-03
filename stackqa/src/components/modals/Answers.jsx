import React from 'react'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineEllipsis, AiOutlineUser } from 'react-icons/ai'

function Answers() {
  return (
    <div>
        <div className="border-t h-auto p-5">
                <div className="flex flex-row  bg-slate-300 p-2 rounded-lg mb-1">
                  <input
                    type="text"
                    className="font-extralight p-1 w-full"
                    placeholder="Add an answer ..."
                  />
                </div>
                <div className="flex flex-row  bg-slate-300 p-2 rounded-lg">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="rounded-full bg-blue-400 w-8 h-8 mt-4 flex items-center justify-center border">
                      <AiOutlineUser size={15} />
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
                  <div className="p-2">
                    <AiOutlineEllipsis size={20} />
                  </div>
                </div>
                <div className="pt-1">
                  <span className="font-extralight">comment</span> |{" "}
                  <span className="font-extralight">Prefered</span>
                </div>
              </div>
    </div>
  )
}

export default Answers