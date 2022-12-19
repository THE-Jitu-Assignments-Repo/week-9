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
import CommentModal from "../../modals/commentModal/CommentModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAnswers, postAnswer } from "../../../features/answers/answerSlice";
import { GrSend } from "react-icons/gr";
import {
  deleteQuestion,
  getQuestion,
  postDetails,
} from "../../../features/questions/QuestionSlice";

function QuestionArticle({ item }) {
  console.log(item);
  const dispatch = useDispatch();
  const [isanswer, setIsAnswer] = useState(false);
  const [iscomment, setIsComment] = useState(false);
  const [answer, setAnswer] = useState("");
  const { postOpen, commentOpen, selectedPost, askedBy } = useSelector(
    (state) => state.questions
  );
  const { answers } = useSelector((state) => state.answers);

  useEffect(() => {
    dispatch(getAnswers(item.post_id));
    let post = selectedPost.post?.post_id;
    if (post !== item.post_id) {
      setIsAnswer(false);
    }
  }, [item.post_id, selectedPost]);
  
  const handleSend = () => {
    let post_id = item.post_id;
    if (answer) {
      dispatch(postAnswer({ post_id, answer }));
      setAnswer("");
    }
  };
  const handleOpenAns = () => {
    dispatch(getQuestion(item.post_id));
    dispatch(postDetails(item.post_id))
    setIsAnswer((prev) => !prev);
  };

  return (
    <article
      className="border-b h-auto grid-col-1 grid-flow-row items-center from-sky-200 bg-white p-3"
      key={item.post_id}
    >
      <div className="flex flex-row">
        <div className="object-contain w-12 mt-4 flex items-start justify-center">
          <img src="/assets/pic.png" alt="profile" className="rounded-full" />
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
        <div>
          <div className="peer hover:bg-blue-500 peer cursor-pointer hover:rounded-full hover:text-white">
            <AiOutlineEllipsis className="" size={30} />
          </div>
          <ul className="h-auto hidden absolute peer-hover:flex hover:flex flex-col  drop-shadow-lg top-46 bg-white shadow-lg font-extralight w-[150px] z-20 rounded-sm">
            <li className="hover:bg-slate-200 cursor-pointer p-2 flex items-center gap-1 ">
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
            onClick={handleOpenAns}
          >
            <AiFillSchedule className="text-blue-500" size={20} />
            <span className="pr-1 pl-1">2 Answers</span>
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

      {/* answer modal-content */}
      {isanswer &&
        answers?.map((answ) => {
          // console.log(answ);
          return <Answers data={answ} />;
        })}
    </article>
  );
}

export default QuestionArticle;
