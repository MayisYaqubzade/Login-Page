import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Login = () => {
  const [show, toggleShow] = useState(true);
  const inputRef = useRef();
  return (
    <div className="flex justify-center items-center w-1/2 m-auto flex-col mt-40 ">
      <div className="flex justify-center items-center" >
        <NavLink to="/" className="text-white text-4xl mr-5">
          Login
        </NavLink>

       <NavLink to="register" className="text-white  text-4xl hover:active ">
          Register
        </NavLink>

       </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-14">
        <div className="flex -mr-px justify-center w-15 p-4">
          <span className="flex items-center leading-normal bg-transparent  border-0 rounded rounded-r-none text-2xl text-white opacity-80">
            <AiOutlineUser size={20} />
          </span>
        </div>
        <input
          type="text"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Username "
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border">
        <div className="flex -mr-px justify-center w-15 p-4">
          <span className="flex items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80">
            <AiOutlineLock size={20} />
          </span>
        </div>
        <input
          type="password"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Password"
          ref={inputRef}
        />

        <button
          className="flex justify-center items-center w-[90px]"
          onClick={() => {
            toggleShow(!show);
            if (show) {
              inputRef.current.type = "text";
            } else {
              inputRef.current.type = "password";
            }
          }}
        >
          {show ? (
            <div className="flex -mr-px justify-center w-15 p-4  items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80">
              <AiOutlineEye size={25} />
            </div>
          ) : (
            <div className="flex -mr-px justify-center w-15 p-4 items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80">
              <AiOutlineEyeInvisible size={25} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
