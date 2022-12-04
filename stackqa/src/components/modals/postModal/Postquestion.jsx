import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import {MdPostAdd} from 'react-icons/md'

function Postquestion({ setPost }) {
  return (
    <div className="fixed flex top-0 left-0 right-0 w-full h-full items-center  justify-center backdrop-blur-sm">
      <div className="absolute bg-white  w-2/6  top-40 shadow-md rounded-sm h-2/4 z-10  outline-none overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between p-5 border">
          <span className="text-xl flex items-center gap-2"><MdPostAdd size={30}/>Write your Question here ...</span>
          <AiFillCloseSquare
            className="text-blue-500 hover:text-red-500"
            onClick={setPost}
            size={30}
          />
        </div>
        <article className="flex flex-col items-start mb-10">
          <textarea
            name="question"
            className="bg-slate-300 w-full p-5 outline-none " placeholder="whats on your mind that you need to share and get help?"
            autoFocus
            cols="30"
            rows="10"
          ></textarea>
          <input type="text" />
        </article>

        <div className="flex items-center justify-end p-5  gap-3">
          <button className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300">
            Post
          </button>
          <button
            className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300"
            onClick={setPost}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Postquestion;
