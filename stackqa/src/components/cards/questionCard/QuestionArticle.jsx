import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import CommentModal from "../../modals/commentModal/CommentModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  getAnswers,
  markPreferred,
  postAnswer,
} from "../../../features/answers/answerSlice";
import { GrSend } from "react-icons/gr";
import {
  deleteQuestion,
  getQuestion,
  G_modal,
  postDetails,
} from "../../../features/questions/QuestionSlice";
import { createAvatar } from "../../../Helpers/userImage/userImage";

function QuestionArticle({ item }) {
  const dispatch = useDispatch();
  const [isanswer, setIsAnswer] = useState(false);
  const [iscomment, setIsComment] = useState(false);
  const [answer, setAnswer] = useState("");
  const { postOpen, commentOpen, selectedPost, askedBy } = useSelector(
    (state) => state.questions
  );
  const { token } = useSelector((state) => state.user);
  const { answers } = useSelector((state) => state.answers);
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getAnswers(item.post_id));
    // console.log(selectedPost);
    let post = selectedPost.post?.post_id;
    if (post !== item.post_id) {
      setIsAnswer(false);
    }
  }, [item.post_id, selectedPost]);

  const handleSend = () => {
    let post_id = item.post_id;
    if (token) {
      if (answer) {
        dispatch(postAnswer({ post_id, answer }));
        setAnswer("");
      }
    } else {
      navigate("/login");
    }
  };

  // const userAvatar = userImage(item?.username);
  const avatar = createAvatar(item.username);

  const handleOpenAns = () => {
    dispatch(getQuestion(item.post_id));
    dispatch(getAnswers(item.post_id));
    setIsAnswer((prev) => !prev);
  };

  const handleEdit = () => {
    dispatch(G_modal(true));
  };

  return (
    <article
      className="border-b h-auto grid-col-1 grid-flow-row items-center from-sky-200 bg-white p-3"
      key={item.post_id}
    >
      <div className="flex flex-row">
        <div className="object-contain w-12 mt-4 flex items-start justify-center">
          {item?.imageUrl ? (
            <img src={item.imageUrl} alt="profile" className="rounded-full" />
          ) : (
            <div className="bg-blue-500 rounded-full w-10 h-10 items-center flex justify-center text-white capitalize text-xl">
              {avatar}
            </div>
          )}
        </div>
        <div className="p-2 justify-between flex-grow flex-wrap">
          <div>{item.username}</div>
          <span className="text-gray-300 text-ellipsis">
            Asked {moment(item.post_date).utc().format("MMMM Do YYYY")}
          </span>
          <h3 className="leading-relaxed max-w-md hover:text-blue-500">
            {item.question}
          </h3>
        </div>
        <section className="">
          <div className="relative">
            <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full hover:text-white">
              <AiOutlineEllipsis className="" size={30} />
            </div>
            <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col right-0 lg:left-0 drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px]  z-20 rounded-sm">
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 "
                onClick={handleEdit}
              >
                <AiOutlineEdit />
                Edit post
              </li>
              <li
                className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 "
                onClick={() => dispatch(deleteQuestion(item.post_id))}
              >
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
        </section>
      </div>
      {item.preferredAns && (
        <div className="flex flex-row items-center mb-4">
          <div className="flex flex-col items-center justify-center pr-2">
            <AiFillCaretUp
              className="hover:text-blue-500 cursor-pointer"
              onClick={() =>
                dispatch(
                  markPreferred({ direction: "up", answerID: item.answer_id })
                )
              }
              size={20}
            />
            <span className="text-xl">{item.totalVotes}</span>
            <AiFillCaretDown
              className="hover:text-blue-500 cursor-pointer"
              onClick={() =>
                dispatch(
                  markPreferred({ direction: "down", answerID: item.answer_id })
                )
              }
              size={20}
            />
          </div>
          <div className="p-2 justify-between flex-grow flex-wrap">
            <h3 className="leading-relaxed max-w-md font-extralight line-clamp-none">
              {item.preferredAns}
            </h3>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center rounded-sm justify-between bg-slate-300 m-8  p-2">
        <div className="items-center justify-between flex flow-row w-full ">
          <div
            className="p-1 flex items-center bg-white rounded-md  hover:text-white hover:bg-blue-300 cursor-pointer"
            onClick={handleOpenAns}
          >
            <AiFillSchedule className="text-blue-500" size={20} />
            <span className="pr-1 pl-1">
              {item.totalAns ? item.totalAns : ""} Answer
              {item.totalAns > 1 ? "s" : ""}{" "}
            </span>
          </div>
          <div className="p-1  flex items-center bg-white rounded-md hover:text-white hover:bg-blue-300 cursor-pointer">
            <span className="pr-1 pl-1 flex items-center gap-1 ">
              <AiOutlineShareAlt /> share
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row  bg-slate-300 p-3 mb-2">
        <input
          type="text"
          className="outline-none font-extralight p-1 pl-2 w-full rounded-l-md caret-slate-400"
          placeholder="Write your answer ..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-r-md w-20 hover:bg-blue-300 hover:text-white flex-row flex items-center justify-center"
          onClick={handleSend}
        >
          <GrSend size={20} />
        </button>
      </div>
      <div className="z-30 relative">
        {/* answer modal-content */}
        {isanswer &&
          answers?.map((answ) => {
            return <Answers data={answ} />;
          })}
      </div>
    </article>
  );
}

export default QuestionArticle;
