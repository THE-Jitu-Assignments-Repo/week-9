import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { userLogin } from '../../features/Auth/UserSlice'
import { setError, signUser, userLogin } from '../../features/Auth/UserSlice'
import {AiFillWarning} from 'react-icons/ai'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const {token, error} = useSelector(state=>state.user)

    const [login, setLogin] = useState({ email: '', password: '' })
    const handleLog=(e)=>{
      const {name, value}= e.target
      dispatch(setError())
      setLogin(prev=>({
        ...prev,
        [name]: value
      }))
    }

    const loginSubmit=(e)=>{
      e.preventDefault()
      dispatch(signUser(login))
      if(token){
        return navigate('/')
      }else{
        return navigate('/login')
      }
    }
    
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">STACK<i className="text-white">QA</i></a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of STACKQA, you can now ask your question and answer your question accordingly 
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline" onClick={()=>navigate('/register')}>Get Started!</a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          {error && <div className="text-sm p-2 text-red-500 flex items-center gap-2"><AiFillWarning size={20} /> {error}</div>}
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                name='email'
                value={login.email}
                onChange={handleLog}
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                name='password'
                value={login.password}
                onChange={handleLog}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={loginSubmit}
              >
                Log in
              </button>
            </div>
            <div className="text-sm text-black">
                <p>Don't have an Account? <span className='text-blue-600 hover:cursor-pointer' onClick={()=>navigate('/register')}>Create one Now...</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login