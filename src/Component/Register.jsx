import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Context } from "../Context";
const Register = () => {
  const navigate = useNavigate()
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
    setItems((items) => [...items, data]);
    if (inputRef3.value === "" ||inputRef4.value === "" ||inputRef5.value === "" ||inputRef1.value === "" ||inputRef2.value === "" ) {
      alert("Please fill out all fields");
    }
    else{
      const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/
      const passwordformat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
      if(mailformat.test(inputRef5.current.value)){
        if(passwordformat.test(inputRef1.current.value)){
          if(inputRef1.current.value === inputRef2.current.value){
            if(items.some(d=>d.email === inputRef5.current.value)){
              alert("You can`t register again with the same email")
            }
            else {
     navigate('/')
            }
          }
          else{
            alert("Repeat password is incorrect")
          }
        }
        else{
          alert("Password is weak")
        }
      }
      else{
        alert("The mail is wrong")
      }
    }
  };

  const [show1, toggleShow1] = useState(true);
  const [show2, toggleShow2] = useState(true);
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  return (
    <div className="flex justify-center items-center w-1/2 m-auto flex-col mt-20 ">
      <div>
        <NavLink to="/" className="text-white text-4xl mr-5 hover:active">
          Login
        </NavLink>
        <NavLink className="text-white  text-4xl">Sign up</NavLink>
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-14">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="First Name "
          value={firstName}
          ref={inputRef3}
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-2">
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Last Name "
          value={lastName}
          ref={inputRef4}
        />
      </div>
      <div className="flex flex-wrap items-stretch w-3/5 mb-4 relative h-15 bg-transparent rounded border pr-10 mt-2">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light bg-transparent text-slate-200 text-opacity-70 rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Enter Email Address... "
          value={email}
          ref={inputRef5}
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
      <button
        className="text-white  rounded-full p-3 text-2xl w-[420px] bg-white hover:button bg-opacity-30 leading-normal items-center flex justify-center   "
        onClick={() => registerPerson()}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
