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
import {
  getAnswers,
  markPreferred,
  vote,
} from "../../../features/answers/answerSlice";
import { C_modal, G_modal } from "../../../features/questions/QuestionSlice";
import moment from "moment";
import { getComment } from "../../../features/comments/commentSlice";
import CommentModal from "../../modals/commentModal/CommentModal";
import Comment from "../comment/Comment";
import { createAvatar } from "../../../Helpers/userImage/userImage";

function Answers({ data }) {
  const [showComment, setShowComment] = React.useState(false);
  const { commentOpen } = useSelector((state) => state.questions);
  const { AllComment } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  // console.log(data );

  useEffect(() => {
    dispatch(getComment(data.answer_id));
    // dispatch(getAllQuestions({ pageNumber: 1, rowsPerPage: 5 }));

    setShowComment(false);
  }, [data.answer_id]);

  const handleComment = () => {
    dispatch(getComment(data.answer_id));
    setShowComment((prev) => !prev);
  };

  const avatar = createAvatar(data.username);

  return (
    <div>
      <div className="border-t h-auto p-5">
        <div className="flex flex-row  bg-slate-300 p-2 rounded-lg">
          <div className="flex flex-col justify-start gap-2">
            <div className="w-8 mt-4 flex items-center justify-center ">
              {data.imageUrl ? (
                <img
                  src={data.imageUrl}
                  alt="anspic"
                  className="rounded-full"
                />
              ) : (
                <div className="bg-blue-500 rounded-full w-8 h-8 items-center flex justify-center text-white font-sans capitalize">
                  {avatar}
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <AiFillCaretUp
                className="hover:text-blue-500 cursor-pointer"
                size={20}
                onClick={() =>
                  dispatch(vote({ direction: "up", IDanswer: data.answer_id }))
                }
              />
              <span className="text-xl">
                {data.totalVotes ? data.totalVotes : 0}
              </span>
              <AiFillCaretDown
                className="hover:text-blue-500 cursor-pointer"
                size={20}
                onClick={() =>
                  dispatch(
                    vote({ direction: "down", IDanswer: data.answer_id })
                  )
                }
              />
            </div>
          </div>
          <div className="p-2 justify-between flex-grow flex-wrap">
            <div>{data.username}</div>
            <span className="text-gray-500 text-ellipsis">
              Answered {moment(data.answer_date).toNow(true)} ago
            </span>
            <h3 className="leading-relaxed max-w-md font-semi">
              {data.answer}
            </h3>
          </div>
          <div className="relative">
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full z-10 hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex right-0 lg:left-0 hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px]  rounded-sm">
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 "
                onClick={() => dispatch(C_modal(true))}
              >
                <AiOutlineComment />
                comment
              </li>
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1  "
                onClick={() =>
                  dispatch(
                    markPreferred({
                      post_id: data.post_id,
                      answer_id: data.answer_id,
                    })
                  )
                }
              >
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
            onClick={handleComment}
          >
            {" "}
            {data.totalComments ? data.totalComments : ""} comment
            {data.totalComments > 1 ? "s" : ""}
          </span>{" "}
          {data.preferred ? (
            <div className="flex items-center gap-2">
              |{" "}
              <span className="font-extralight text-green-500">Prefered </span>
              <AiFillCheckCircle className="font-extralight text-green-500" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="relative z-40">
        {commentOpen && <CommentModal ansId={data.answer_id} />}
      </div>
      {showComment &&
        AllComment?.map((item) => {
          return <Comment item={item} />;
        })}
    </div>
  );
}

export default Answers;
