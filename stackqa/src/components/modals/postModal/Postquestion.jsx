import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// import { toast } from "react-toastify";
import {
  getAllQuestions,
  G_modal,
  postQuestion,
} from "../../../features/questions/QuestionSlice";
import { validatePost } from "../../../Helpers/post/postvalidate";

function Postquestion() {
  const { token } = useSelector((state) => state.user);
  const {errorQst} = useSelector(state=>state.questions)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = [
    { value: "nodejs", label: "nodejs" },
    { value: "programming", label: "programming" },
    { value: "Laptops", label: "laptops" },
    { value: "music", label: "music" },
    { value: "sports", label: "sports" },
    { value: "politics", label: "politics" },
    { value: "General", label: "general" },
  ];
  const [question, setQuestion] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  // const [errorD, setErrorD] = useState('')
  // const [post, setPost] = useState({question:'', category: ''})

  const handlePost = (e) => {
    e.preventDefault();
    // const {name, value}= e.target
    //   setPost(prev=>({
    //     ...prev,
    //     [name]: value,

    //   }))
    const { value } = e.target;
    setQuestion(value);
  };

  const handleSumbitPost = (e) => {
    e.preventDefault();
    // const {question} = question
    // console.log(question);
    //     console.log(category);
    // if(!question && !category){
      //   setErrorD('Please fill in the question field')
      //   console.log(errorD);
      //   toast.error(errorD)
      // }
      // if (!errorQst) {
      const category = selectedOption.map((item) => item.value).toString();
      dispatch(postQuestion({ question, category }));
      dispatch(G_modal(false));
      dispatch(getAllQuestions({ pageNumber: 1, rowsPerPage: 5 }));
    // }
  };


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="fixed flex top-0 left-0 right-0 w-full h-full items-center  justify-center backdrop-blur-sm">
      <div className="absolute bg-white lg:w-2/6  top-40 shadow-md rounded-sm h-auto z-40  outline-none overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between p-5 border">
          <span className="text-xl flex items-center gap-2">
            <MdPostAdd size={30} />
            Create new post
          </span>
          <AiFillCloseSquare
            className="text-blue-500 hover:text-red-500"
            onClick={() => dispatch(G_modal(false))}
            size={30}
          />
        </div>
        <article className="flex flex-col items-start p-5">
          {errorQst ? (<div className="text-center text-red-500">{errorQst}</div>): ''}
          <textarea
            name="question"
            value={question}
            className="bg-slate-300 w-full p-5 outline-none "
            placeholder="whats on your mind that you need to share and get help?"
            autoFocus
            cols="30"
            rows="5"
            onChange={handlePost}
          ></textarea>
          <label htmlFor="category" className="mt-4">
            Select category
          </label>
          <Select
            defaultInputValue={selectedOption}
            onChange={setSelectedOption}
            isMulti
            options={options}
            className="w-full"
          />
        </article>

        <div className="flex items-center justify-end p-5  gap-3">
          <button
            className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300"
            onClick={handleSumbitPost}
          >
            Post
          </button>
          <button
            className="bg-blue-500 p-2 rounded-sm pl-5 pr-5 text-white hover:bg-blue-300"
            onClick={() => dispatch(G_modal(false))}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Postquestion;
