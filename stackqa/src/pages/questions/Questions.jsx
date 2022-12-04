import React, { useState } from "react";
import QuestionArticle from "../../components/cards/questionCard/QuestionArticle";
import Postquestion from "../../components/modals/postModal/Postquestion";
import './question.css'

function Questions() {
  const [post, setPost] = useState(false);
  const options = [
    { value: "nodejs", label: "nodejs" },
    { value: "programming", label: "programming" },
    { value: "Laptops", label: "laptops" },
    { value: "music", label: "music" },
    { value: "sports", label: "sports" },
    { value: "politics", label: "politics" }
  ];

  return (
    <div>
      <div className="pl-5 mt-2 flex items-center justify-between pr-5 p-2">
        <h1 className="text-xl">All Questions</h1>
        <div>
          <button
            className="border p-1 bg-blue-500 rounded-md hover:bg-blue-300 text-white"
            onClick={() => setPost((prev) => !prev)}
          >
            Post Question
          </button>
        </div>
      </div>

      {/* question modal */}
      {post && <Postquestion setPost={() => setPost((prev) => !prev)} />}

      <hr />
      <div className="w-full grid grid-cols-2 gap-5 pl-40">
        <section className="border mt-5 min-h-screen bg-slate-50 mb-4 rounded-md flex-col flex">
          <QuestionArticle />
          <QuestionArticle />
          <QuestionArticle />
          <QuestionArticle />
          <QuestionArticle />
        </section>
        <section className="w-1/2 mt-5 bg-slate-50 h-[500px] mb-10">
          <div className="text-xl font-extralight">
            <span className="leading-relaxed pl-5">Top suggested topics</span>
          </div>
          <div className="grid border-t h-auto grid-rows-3 grid-cols-2 gap-2 p-4">
            {options?.map(opt=><button className="text-black  bg-slate-300 p-1 rounded-md outline-none hover:bg-blue-200 hover:text-white">{opt.value}</button>)}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Questions;
