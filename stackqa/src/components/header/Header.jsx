import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getuserdetails, logout } from "../../features/Auth/UserSlice";
import {
  getmyquestions,
  searchQuestions,
} from "../../features/questions/QuestionSlice";
import { useState } from "react";
// import { useEffect } from "react";

function Header({ close }) {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSearch = (e) => {
    setText(e.target.value);
    // dispatch(searchQuestions(text));
  };

  return (
    <nav className="flex fixed top-0 inset-x-0 h-[60px] items-center z-10  bg-gray-100 shadow-xl mb-1">
      <div className="flex-grow lg:flex lg:items-center lg:w-auto ml-2 lg:ml-8 flex items-center">
        <div className="">
          <AiOutlineMenu
            className="hover:bg-gray-300 cursor-pointer lg:text-2xl"
            onClick={close}
          />
        </div>
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <span className="font-bold font-serif lg:text-2xl tracking-tight text-blue-900 pr-2 pl-3 ">
            STACK<i className="text-blue-600">QA</i>
          </span>
          <img
            src="/assets/logo3.png"
            alt="logo"
            className="h-8 w-8 mr-2 object-scale-down"
          />
        </div>
      </div>
      <div className="flex-grow my-auto pb-5 hidden sm:hidden md:block ">
        <section className="grid grid-flow-row mt-4">
          <label className="flex">
            <span className="sr-only">Search</span>
            <AiOutlineSearch
              className="pointer-events-none absolute top-5 transform-translate-y-8  mx-1 text-blue-800"
              size={25}
            />
            <input
              className="placeholder:italic  placeholder:text-slate-400 block bg-white w-full  border-slate-300 rounded-l-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for question..."
              type="text"
              name="search"
              value={text}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="bg-blue-500 p-1 rounded-r-md text-white"
              onClick={() => {
                dispatch(searchQuestions(text)), navigate("/question");
              }}
            >
              Search
            </button>
          </label>
        </section>
      </div>
      <div className="max-w-screen-sm w-80">
        <div className="text-sm lg:flex-grow justify-end flex pr-5 items-center gap-3 ">
          {token && (
            <Link
              to="profile"
              
              onClick={() => {
                dispatch(getmyquestions()), dispatch(getuserdetails(),navigate('profile'));
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 hover:text-blue-900 items-center my-4 lg:my-auto"
            >
              {/* <a */}
              {/* > */}
                My Profile
              {/* </a> */}
            </Link>
          )}
          {!token && (
            <div className="items-center gap-3 flex">
              <button
                className="p-1 bg-blue-500 text-white rounded-md pr-4 pl-4 hover:bg-blue-400"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="p-1 bg-blue-500 text-white rounded-md pr-4 pl-4 hover:bg-blue-400"
                onClick={() => navigate("/register")}
              >
                signup
              </button>{" "}
            </div>
          )}
          {token && (
            <button
              className="p-1 bg-blue-500 text-white rounded-md pr-4  pl-4 hover:bg-blue-400"
              onClick={() => {
                dispatch(logout()), navigate("/");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
