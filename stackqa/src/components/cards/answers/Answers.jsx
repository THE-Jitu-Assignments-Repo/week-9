import React from "react";
import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAnswers, markPreferred } from "../../../features/answers/answerSlice";
import { C_modal, G_modal } from "../../../features/questions/QuestionSlice";
import Comment from "../comment/Comment";
import moment from 'moment'
import { getComment } from "../../../features/comments/commentSlice";
import CommentModal from "../../modals/commentModal/CommentModal";

function Answers({data,dataID}) {
  const [showComment, setShowComment] = React.useState(false);
  const {commentOpen}= useSelector(state=>state.questions)
  // const {answers} = useSelector(state=>state.answers)
  const dispatch = useDispatch()

  // useEffect(() => {
  //  dispatch(getAnswers(data.post_id))
  // }, [data.post_id])

  // console.log(answers);
  // console.log(dataID);
  useEffect(()=>{
    dispatch(getComment(data.answer_id))
    setShowComment(false)
  },[data.answer_id])

  return (
    <div>
      <div className="border-t h-auto p-5" >
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
              Answered {moment(data.answer_date).utc().format("MMMM Do YYYY")}
            </span>
            <h3 className="leading-relaxed max-w-md font-semi">
              {data.answer}
            </h3>
          </div>
          <div>
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full z-10 hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px]  rounded-sm">
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 "
                onClick={()=>dispatch(C_modal(true))}
              >
                <AiOutlineComment />
                comment
              </li>
              <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1  " onClick={()=>dispatch(markPreferred(data.answer_id))}>
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
            onClick={() => {setShowComment((prev) => !prev), dispatch(getComment(data.answer_id))}}
          >
            {" "}
            1 comment
          </span>{" "}
         {data.preferred && <div>| <span className="font-extralight text-green-500">Prefered </span>
          <AiFillCheckCircle className="font-extralight text-green-500" /></div> }
        </div>
      </div>
      {commentOpen && <CommentModal ansId={data.answer_id}/>}
      {showComment && <Comment />}
    </div>
  );
}

export default Answers;
