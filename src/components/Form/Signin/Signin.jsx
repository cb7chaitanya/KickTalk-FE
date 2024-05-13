import React, { useState } from 'react'
import {Heading} from '../Heading'
import { SubHeading } from '../SubHeading'
import { Input } from '../Input'
import { Button } from '../Button'
import { Bottom } from '../Bottom'
import { signinBody } from '@/zod/authSchemas'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInEndpoint } from '@/conf/config'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

function Signin({toggleForm}) {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = signinBody.safeParse({ email, password });
    if (validationResult.success) {
      try {
        const response = await axios.post(signInEndpoint, {
          email,
          password
        });
        localStorage.setItem("Authorization", "Bearer " + response.data.token);
        navigate("/home");

        axios.interceptors.request.use(
          config => {
              const token = localStorage.getItem('Authorization');
              if (token) {
                config.headers.Authorization = token;
                useSetRecoilState()
              }
              return config;
          },
          error => {
              return Promise.reject(error);
          }
      );
      } catch (error) {
        console.error("API call failed:", error);
      }
    } else {
      toast.error("Validation failed. Please check your inputs.");
    }
  }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='rounded-lg bg-black w-80 p-2 text-center px-4 h-max'>
        <Heading heading={"Sign In"} />
        <SubHeading subHeading={"Enter Details"} />
        <Input label={"Email"} placeholder={"Enter Email"} onChange={e=>{
        setEmail(e.target.value)}} 
        className="w-full" TooltipContent="Please enter a valid email address." />

            <Input label={"Password"} placeholder={"Enter Password"} onChange={ e=>{
              setPassword(e.target.value)}}
              className="w-full" TooltipContent="Password must be at least 8 characters long."/>
            
        <div>
          <Button label={"Sign In"} onClick={handleSubmit}/>
        </div>
        <Bottom label={"Don't have an account?"} buttonText={"Sign Up"} onClick={toggleForm} />
      </div>
    </div>
  )
}

export default Signin