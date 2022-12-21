import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import QuestionArticle from "../../components/cards/questionCard/QuestionArticle";
import Postquestion from "../../components/modals/postModal/Postquestion";
import { getuserdetails } from "../../features/Auth/UserSlice";
import {
  getmyquestions,
  G_modal,
} from "../../features/questions/QuestionSlice";
import { createAvatar } from "../../Helpers/userImage/userImage";

function Profile() {
  const { questions, postOpen } = useSelector((state) => state.questions);
  const { user } = useSelector((state) => state.user);
  const [filterQuestion, setFilterQuestion] = useState();
  const dispatch = useDispatch();
  const myquestions = [
    { value: "votes", label: "Most votes" },
    { value: "answered", label: "Most answered" },
  ];

  
  useEffect(() => {
    dispatch(getuserdetails());
    dispatch(getmyquestions());
  }, []);

  let avatar = ''
  if(user.username !== undefined){
     avatar = createAvatar(user.username);
  }
  // console.log(user);
  // let str2= user.username
  // const createAvatar = (str2 = '') => {
  // str2 = str2.split(' ');
  // let avatar = str2[0][0] || str2[0][0]+str2[1][0];
  // return avatar;
// }

  return (
    <div>
      <div className="w-full mx-auto my-auto bg-blue-500 p-18">
        <div className="rounded-full  w-28 h-28  lg:w-32 lg:h-32 top-28 ml-4 lg:ml-12 flex items-center justify-center relative shadow-lg hover:shadow-blue-300">
          <div className="grid place-items-center">
            {user.imageUrl ? 
            (
              <img
                src={user.imageUrl}
                alt="pic"
                className="rounded-full  object-scale-down w-full relative"
              />
            ) : (
              <div className="bg-blue-600 rounded-full w-24 h-24 items-center flex justify-center text-white capitalize text-3xl">
                {avatar}
              </div>
            )}
          </div>
        </div>
        <div className="flex pl-36 lg:pl-44">
          <div className="flex-grow">
            <h1 className="text-xl font-bold text-white">{user.username}</h1>
            {/* <p className="text-white text-sm pl-3">CTO, STACKQA</p> */}
            <span className="pl-3 font-sans font-semibold">
              <i>{user.email}</i>
            </span>
          </div>
        </div>
      </div>
      <section className="w-full mt-24 shadow-sm">
        <div className="container h-full w-full p-12 px-5 py-2 mx-auto">
          <div className="flex flex-col pl-5 text-left mb-2 ">
            <span className="text-xl font-semibold leading-relaxed">
              Let's be productive today
            </span>
            <span className="text-xl font-extralight leading-relaxed">
              Your stats...
            </span>
          </div>
          <div className="flex gap-5 items-center justify-evenly mb-2 flex-wrap">
            <div className="border flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">
                {user.totalQst ? user.totalQst : 0}
              </h1>
              {/* <AiFillFileText className="m-5"  size={30}/> */}
              <span className="text-xl font-extralight leading-relaxed ">
                Question{user.totalQst > 1 ? "s" : ""}
              </span>
            </div>
            <div className="border  flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">
                {user.totalAns ? user.totalAns : 0}
              </h1>
              {/* <AiFillFileText  className="m-5"  size={30} /> */}
              <span className="text-xl font-extralight leading-relaxed">
                Answer{user.totalAns > 1 ? "s" : ""}
              </span>
            </div>
            <div className="border  flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">
                {user.totalPrefers ? user.totalPrefers : 0}
              </h1>
              {/* <AiFillFileText  className="m-5"  size={30} /> */}
              <span className="text-xl font-extralight leading-relaxed">
                Accepted
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="pl-5  mt-2 flex items-center justify-between pr-5 p-2 mb-2 flex-wrap gap-3">
        <h1 className="lg:text-sm text-xl">My Questions</h1>
        <div className="flex items-center gap-3 lg:w-[30%]">
          <div className="flex items-center border">
            <span className="flex items-center gap-1">
              <AiOutlineFilter />
              Filter
            </span>
          </div>
          <Select
            defaultInputValue={filterQuestion}
            onChange={setFilterQuestion}
            options={myquestions}
            className="w-full"
          />
          <button
            className=" w-full p-1 bg-blue-500 rounded-md hover:bg-blue-300 text-white"
            onClick={() => dispatch(G_modal(true))}
          >
            Post Question
          </button>
          {postOpen && <Postquestion />}
        </div>
      </div>
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-5 lg:pl-40">
        <section className="border mt-5 min-h-screen bg-slate-50 mb-4 rounded-md flex-col flex">
          {/* map post here */}
          {questions?.allPost?.map((qst) => {
            return <QuestionArticle key={qst.post_id} item={qst} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Profile;
