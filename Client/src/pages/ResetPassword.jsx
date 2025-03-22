import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import BASE_URL from '../config/config';
export default function ResetPassword() {
  let [input,setinput]=useState({})
  let nav =useNavigate();
  const Handleinput=(e)=>{
    let{name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  const buttonClick =()=>{
    console.log(input);
  }

  const Handleform=async(e)=>{
    e.preventDefault();
    console.log("form");
    if(input.newpassword != input.confomepass){
      toast.error("please write it same passord in new pasword and confirm password field")
    }
    if(input.newpassword === input.confomepass){
      let api =`${BASE_URL}/resetpassword`;
      console.log("equal")
        try {
          
          let response =await axios.post(api,{userid:localStorage.getItem("userid"),...input})
          console.log(response);
          toast.success(response.data.msg)
          nav("/profile");
        } catch (error) {
          toast.error(error.response.data.msg)
        }
    }
    
  }
  return (
    <>
    <div className='resetPassword_section'>
      <div className="reset_password_main">
        <div className="heading">
          <h1>
            You can reset your password
          </h1>
          <div className="body">
            <form  method="post" onSubmit={Handleform}>
              <div className="oldpassword">
                <label >Enter the current Password</label>
                <input type="text" name='oldpassword' onChange={Handleinput} />
              </div>
              <div className='Newpassword'>
                <label >Enter the New Password</label>
                <input type="text" name='newpassword' onChange={Handleinput} />
              </div>
              <div className="confomepassword">
                <label >Write Confime Password</label>
                <input type="text" name='confomepass' onChange={Handleinput}  />
              </div>
              <button type="submit" onClick={buttonClick}>Submit</button>
            </form>
          </div>
        </div>
      
      </div>
    </div>
     <ToastContainer />
    </>
  )
}