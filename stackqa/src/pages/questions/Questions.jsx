import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionArticle from "../../components/cards/questionCard/QuestionArticle";
import Postquestion from "../../components/modals/postModal/Postquestion";
import {
  getAllQuestions,
  G_modal,
  topSuggested,
} from "../../features/questions/QuestionSlice";
import "./question.css";

function Questions() {
  // const [post, setPost] = useState(false);
  const { questions, postOpen } = useSelector((state) => state.questions);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(6);
  const dispatch = useDispatch();
  const options = [
    { value: "nodejs", label: "nodejs" },
    { value: "programming", label: "programming" },
    { value: "Laptops", label: "laptops" },
    { value: "music", label: "music" },
    { value: "sports", label: "sports" },
    { value: "politics", label: "politics" },
  ];
  useEffect(() => {
    dispatch(getAllQuestions({ pageNumber: page, rowsPerPage: max }));
  }, []);

  // console.log("csdc",data);

  return (
    <div>
      <div className="pl-5 mt-2 flex items-center justify-between pr-5 p-2 ">
        <h1 className="text-xl">All Questions</h1>
        <div>
          <button
            className="border p-1 bg-blue-500 rounded-md hover:bg-blue-300 text-white"
            onClick={() => dispatch(G_modal(true))}
          >
            Post Question
          </button>
        </div>
      </div>
      <div className="z-30 relative">
        {/* question modal */}
        {postOpen && <Postquestion />}
      </div>

      <hr />
      <div className="lg:w-full lg:grid lg:grid-cols-2 lg:gap-5  lg:pl-40">
        <section className="border mt-5 min-h-screen bg-slate-50 mb-4 rounded-md flex-col flex">
          {/* map post here */}
          {questions?.allPost ? (
            questions?.allPost?.map((qst) => {
              return <QuestionArticle key={qst.post_id} item={qst} />;
            })
          ) : (
            <div className="m-auto text-center">
              <img src="https://imgs.search.brave.com/cvX6WWfjSjHAPgWt1QtqB8NV0Crx7OM3Uo34lU4pvps/rs:fit:675:450:1/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbm8tc2Vh/cmNoLWZvdW5kLTI1/MTE2MDgtMjEzMzY5/Ni5wbmc" />
            </div>
          )}
        </section>
        <section className="w-[300px] p-4 mt-5 bg-slate-50 h-[500px] mb-10">
          <div className="text-xl font-extralight">
            <span className="leading-relaxed pl-5">Top suggested topics</span>
          </div>
          <div className="grid border-t h-auto grid-rows-3 grid-cols-2 gap-2 pt-4">
            {options?.map((opt, index) => (
              <button
                className="text-black  font-extralight  bg-slate-300 pr-1 pl-1 rounded-sm outline-none hover:bg-blue-200 hover:text-white"
                key={index}
                onClick={() => dispatch(topSuggested(opt.value))}
              >
                {opt.value}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Questions;
