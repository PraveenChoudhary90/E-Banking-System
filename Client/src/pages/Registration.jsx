
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import BASE_URL from '../config/config';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate = useNavigate();
const [Input, setInput] = useState({});


const handelInput = (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(Input);
}

      const handelSubmit =async (e)=>{
       e.preventDefault();
       const api = `${BASE_URL}/BankData/InsertData`;
       try {
        const response = await axios.post(api, Input);
        toast.success(response.data.msg);
        navigate("/home")
       } catch (error) {
        toast.error(error.response.data.msg);
       }
      }

  return (
    <>
             <div id="myformdata"> 
         <h3>  Open Your New Account </h3>
            <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter first Name</Form.Label>
            <Form.Control type="text" name='firstname' value={Input.firstname} onChange={handelInput} />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswords">
            <Form.Label> Enter Last Name </Form.Label>
            <Form.Control type="text" name='lastname' value={Input.lastname} onChange={handelInput} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Enter Email </Form.Label>
            <Form.Control type="email" name='email' value={Input.email} onChange={handelInput} />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordq">
            <Form.Label> Enter City </Form.Label>
            <Form.Control type="text" name='city' value={Input.city} onChange={handelInput} />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPasswordc">
            <Form.Label> Enter Mobile Number  </Form.Label>
            <Form.Control type="text" name='mobile' value={Input.mobile} onChange={handelInput}  />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassworda">
            <Form.Label> Enter Full Address </Form.Label>
            <Form.Control type="text" name='fulladdress' value={Input.fulladdress} onChange={handelInput}  />
          </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPasswordn">
            <Form.Label> Enter Pin Code </Form.Label>
            <Form.Control type="text" name='pincode' value={Input.pincode} onChange={handelInput} />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordk">
            <Form.Label> Enter State Name </Form.Label>
            <Form.Control type="text" name='statename' value={Input.statename} onChange={handelInput} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handelSubmit}>
            Submit
          </Button>
        </Form>
       </div>
       <ToastContainer />
    </>
  )
}

export default Registration