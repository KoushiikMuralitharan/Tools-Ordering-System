import React, { useState } from "react";
import loginSignupImage from "../images/login-animation.gif";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link ,useNavigate} from "react-router-dom";
import './Login.css'; 
import axios from 'axios'
const Login = () => {
  
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const handleShowPassword = () => {
      setShowPassword((preve) => !preve);
    };
    axios.defaults.withCredentials = true;

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(res=>{
             if(res.data.Status === "Success"){
              if(res.data.role ==="admin"){
                navigate('/dashboard')
              }else{
                navigate('/')
              }
             }
        }).catch(err=> console.log(err))
    }
  return (
    <div className="pics1">
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden  rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>

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
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <MdRemoveRedEye /> : <IoEyeOffSharp />}
            </span>
          </div>
          <button type="submit" className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 px-1 rounded-full mt-4 ">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Dont have an Account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login