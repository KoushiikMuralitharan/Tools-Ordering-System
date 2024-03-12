import React, { useState } from "react";
import loginSignupImage from "../images/login-animation.gif";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImagetoBase64 } from "../Utility/Imagetobase64";
import './signup.css'
import axios from 'axios'
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [firstname, setFirstName] = useState();
  const [lastname, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e)=>{
      e.preventDefault()
        axios.post('http://localhost:3001/register',{firstname,lastname,email,password})
        .then(res=>{
          alert("Account Created Successfully");
        }).catch(err=>console.log(err))
     
  }
  return (
    <div className="pics">
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-white">Upload</p>
          </div>
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            onChange={(e)=> setFirstName(e.target.value)}
          ></input>

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            onChange={(e)=> setlastName(e.target.value)}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            onChange={(e)=>setEmail(e.target.value)}
          ></input>

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 px-1 rounded-full mt-4 ">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have Account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
