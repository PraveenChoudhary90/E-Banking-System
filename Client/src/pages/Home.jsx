import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config/config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Home() {
  const [email,setEmail] = useState("");
  const [password, setPassword]  =useState("");

  const navigate = useNavigate();

  const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/BankData/CustomerLogin`;
    try {
      const response = await axios.post(api, {email:email, password:password});
      console.log(response.data);
      toast("You are Login Successfully")
      localStorage.setItem("username", response.data.firstname+" "+response.data.lastname);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userid", response.data._id);
      navigate("/dashboard")
    } catch (error) {
     toast.error(error.response.data.msg) 
    }
  }

  return (
    <>

         <div id="myform">  
            <h3>User Account Login</h3>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
      <h5>If You Dont't have Account <button style={{borderRadius:"30px"}}><Link  to="/registration" style={{textDecoration:"none"}} >Click Here Open Account</Link> </button></h5>
    </Form>
   </div>
          <ToastContainer />
   
    
    </>
  )
}

export default Home