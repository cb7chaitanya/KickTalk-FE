import React, {useState} from 'react'
import {Heading} from '../Heading'
import {SubHeading} from '../SubHeading'
import {Input} from '../Input'
import  {Button}  from '../Button'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {Bottom} from "../Bottom"
import { signupBody } from '@/zod/authSchemas'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpEndpoint } from '@/conf/config'

function Signup({toggleForm}) { 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = signupBody.safeParse({ email, username, password });
    if (validationResult.success) {
      try {
        const response = await axios.post(signUpEndpoint,{
          username,
          email,
          password
        });
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } catch (error) {
        console.error("API call failed:", error);
      }
    } else {
      toast.error("Validation failed. Please check your inputs.");
    }
  };
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const navigate = useNavigate();
  return (
    <div className='-h-screen flex justify-center items-center'>
      <div className='rounded-lg w-80 p-2 text-center px-4 h-max bg-black'>
      <Heading heading={"Sign Up"}/>
      <SubHeading subHeading={"Enter Details"}/>
      <Input label={"Email"} onChange={e=>{
        setEmail(e.target.value)
      }} placeholder={"Enter Email"}/>
      <Input label={"Username | Min:5 | Max:25"} onChange={e=>{
        setUsername(e.target.value)
      }} placeholder={"Enter Username"}/>
      <Input label={"Password | Min:6"} onChange={ e=>{
        setPassword(e.target.value)
      }} placeholder={"Enter Password"} />
      <div>
      <Button label={"Sign Up"} onClick={handleSubmit} />
      </div>
      <Bottom label={"Already have an account?"} buttonText={"Sign In"} onClick={toggleForm}/>
    </div>
    </div>
  )
}


export default Signup