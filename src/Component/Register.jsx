import React, { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Context } from "../Context";
const Register = () => {
  const { items, setItems } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    repeatPassword: repeatPassword,
  };

  const registerPerson = () => {
    const obj = [...items, data];
    localStorage.setItem("users", JSON.stringify(obj));
    setItems(items => [...items, data])
  };

  const [show1, toggleShow1] = useState(true);
  const [show2, toggleShow2] = useState(true);
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  return (
    <div className="flex justify-center items-center w-1/2 m-auto flex-col mt-40 ">
      <div>
        <NavLink to="/" className="text-white text-4xl mr-5 hover:active">
          Login
        </NavLink>
        <NavLink className="text-white  text-4xl">Register</NavLink>
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-14">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="First Name "
          value={firstName}
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-2">
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Last Name "
          value={lastName}
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-2">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Enter Email Address... "
          value={email}
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border  mt-2">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Enter Password... "
          ref={inputRef1}
          value={password}
        />
        <button
          className="flex justify-center items-center w-[90px]"
          onClick={() => {
            toggleShow1(!show1);
            if (show1) {
              inputRef1.current.type = "text";
            } else {
              inputRef1.current.type = "password";
            }
          }}
        >
          {show1 ? (
            <div className="flex  justify-center w-15 p-4 items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80 ">
              <AiOutlineEye size={25} />
            </div>
          ) : (
            <div className="flex  justify-center w-15 p-4 items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80 ">
              <AiOutlineEyeInvisible size={25} />
            </div>
          )}
        </button>
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border  mt-2">
        <input
          onChange={(e) => setRepeatPassword(e.target.value)}
          type="password"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Repeat Password... "
          ref={inputRef2}
          value={repeatPassword}
        />
        <button
          className="flex justify-center items-center w-[90px]"
          onClick={() => {
            toggleShow2(!show2);
            if (show2) {
              inputRef2.current.type = "text";
            } else {
              inputRef2.current.type = "password";
            }
          }}
        >
          {show2 ? (
            <div className="flex  justify-center w-15 p-4 items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80 ">
              <AiOutlineEye size={25} />
            </div>
          ) : (
            <div className="flex  justify-center w-15 p-4 items-center leading-normal  border-0 rounded rounded-r-none text-2xl text-white opacity-80 ">
              <AiOutlineEyeInvisible size={25} />
            </div>
          )}
        </button>
      </div>
      <button onClick={() => registerPerson()}>Register</button>
    </div>
  );
};

export default Register;
