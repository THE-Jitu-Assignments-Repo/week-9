import React from "react";
import { AiFillFileText, AiOutlineUser } from "react-icons/ai";

function Profile() {
  return (
    <div>
      <div className="w-full mx-auto my-auto bg-blue-500 p-18">
        <div className="rounded-full p-20 bg-white w-10 h-10 top-40 ml-4 flex items-center justify-center relative shadow-lg hover:shadow-blue-300">
          <div className="grid place-items-center">
              <AiOutlineUser size={100} />
          </div>
        </div>
        <div className="flex pl-44">
          <div className="flex-grow">
            <h1 className="text-xl font-bold text-white">MICHAEL KAMAU</h1>
            <p className="text-white text-sm pl-3">CTO, STACKQA</p>
            <span className="pl-3 font-sans font-semibold">
              <i>Mike001@gmail.com</i>
            </span>
          </div>
        </div>
      </div>
      <section className="w-full mt-24 shadow-sm">
        <div className="container h-full w-full p-12 px-5 py-2 mx-auto">
          <div className="flex flex-col pl-5 text-left mb-2">
            <span className="text-xl font-semibold leading-relaxed">
              Let's be productive today
            </span>
            <span className="text-xl font-extralight leading-relaxed">
              Your stats...
            </span>
          </div>
          <div className="flex gap-5 items-center justify-evenly mb-2">
            <div className="border flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">25</h1>
              {/* <AiFillFileText className="m-5"  size={30}/> */}
              <span className="text-xl font-extralight leading-relaxed ">
                Questions
              </span>
            </div>
            <div className="border  flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">12</h1>
              {/* <AiFillFileText  className="m-5"  size={30} /> */}
              <span className="text-xl font-extralight leading-relaxed">
                Answers
              </span>
            </div>
            <div className="border  flex shadow-lg flex-col justify-center items-center p-8 hover:shadow-blue-300">
              <h1 className="text-2xl font-bold">20</h1>
              {/* <AiFillFileText  className="m-5"  size={30} /> */}
              <span className="text-xl font-extralight leading-relaxed">
                Accepted
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
