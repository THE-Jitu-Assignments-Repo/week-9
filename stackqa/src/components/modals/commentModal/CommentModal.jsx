import React from 'react'
import { AiFillCloseSquare, AiOutlineComment } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { C_modal, G_modal } from '../../../features/questions/QuestionSlice'

function CommentModal() {
  const {postOpen}=useSelector(state=>state.questions)
  const dispatch=useDispatch()
  return (
    <div className="fixed flex top-0 left-0 right-0 w-full h-full items-center  justify-center backdrop-blur-sm">
      <div className="absolute bg-white  w-2/6  top-40 shadow-md rounded-sm  z-30  outline-none overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between p-5 border">
          <span className="text-xl flex items-center gap-2"><AiOutlineComment size={40}/>Write your comment here ...</span>
          <AiFillCloseSquare
            className="text-blue-500 hover:text-red-500"
            onClick={()=>dispatch(C_modal(false))}
            size={30}
          />
        </div>
        <article className="flex flex-col items-start p-5 mb-10">
          <textarea
            name="question"
            className="bg-slate-300 w-full p-5 outline-none " placeholder="Whats your take on the answer provided for this question?"
            autoFocus
            cols="30"
            rows="5"
          ></textarea>
        </article>

        <div className="flex items-center justify-end p-5  gap-3">
          <button className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300">
            comment
          </button>
          <button
            className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300"
            onClick={()=>dispatch(C_modal(false))}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentModal