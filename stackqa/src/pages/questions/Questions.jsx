import React, { useState } from "react";
import QuestionArticle from "../../components/cards/QuestionArticle";
import Postquestion from "../../components/modals/ask/Postquestion";

function Questions() {
  const [post, setPost] = useState(false);

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
      <div className="w-full grid grid-cols-2 gap-5 pl-10">
        <section className="border mt-5 min-h-screen bg-slate-50 mb-4 rounded-md flex-col flex">
          <QuestionArticle />
          <QuestionArticle />
        </section>
        <section className="w-1/2 mt-5 bg-slate-50 min-h-screen mb-10">
          <div className="text-xl font-extralight">
            <span className="leading-relaxed pl-5">Recently Asked</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Questions;
