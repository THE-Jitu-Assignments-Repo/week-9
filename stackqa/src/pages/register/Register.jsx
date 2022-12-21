import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, setError } from "../../features/Auth/UserSlice";
import {AiFillWarning} from 'react-icons/ai'

function Register() {
  const {error} = useSelector(state=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [regUser, setRegUser] = useState({
    username: "",
    imageUrl: "",
    email: "",
    password: "",
  });
  const handleReg = (e) => {
    const { name, value } = e.target;
    dispatch(setError())
    setRegUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const registeruser = (e) => {
    e.preventDefault();
    dispatch(registerUser(regUser));
     if(!error){
       return navigate('/login')
      }else{
        return navigate('/register')
      }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">
              STACK<i className="text-white">QA</i>
            </a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of STACKQA, you can now ask your question and answer
            your question accordingly
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Have an account?</span>
            <a
              href="#"
              className="underline"
              onClick={() => navigate("/login")}
            >
              Click me to Login!
            </a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <a href="#" className="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Create New Account
          </h3>
          {error && (
            <div className="text-sm p-2 text-red-500 flex items-center gap-2">
              <AiFillWarning size={20} /> {error}
            </div>
          )}

          <form
            className="flex flex-col space-y-5"
            onSubmit={(e) => navigate("/login")}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-gray-500"
              >
                UserName
              </label>
              <input
                type="username"
                name="username"
                value={regUser.username}
                onChange={handleReg}
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="imageUrl"
                className="text-sm font-semibold text-gray-500"
              >
                Profile Pic
              </label>
              <input
                type="url"
                name="imageUrl"
                value={regUser.imageUrl}
                onChange={handleReg}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={regUser.email}
                onChange={handleReg}
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={regUser.password}
                onChange={handleReg}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={registeruser}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
