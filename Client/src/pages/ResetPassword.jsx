import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config/config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const ResetPassword=()=>{
    const [oldPassword,setOldPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [renewPassword,setreNewPassword]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
 if(newPassword!=renewPassword){
toast.error("New Password does not match"); 
}
else{
    let api=`${BASE_URL}/BankData/resetpassword`;
    try {
        const response = await axios.post(api, { oldPassword,newPassword,id:localStorage.getItem("id") });
        toast.success(response.data);
    }
    catch (error) {
        toast.error(error.response.data);
    }
    }
}
    return(
        <>
        <div id="reset">
        <h1 className="heading" >Change Password</h1>
        <form >
            <label>Old Password:</label><br/>
            <input type="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}/><br/>
            <label>New Password:</label><br/>
            <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/><br/>
            <label>Re enter New Password:</label><br/>
            <input type="password" value={renewPassword} onChange={(e)=>setreNewPassword(e.target.value)}/><br/>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        <ToastContainer/>
        </>
    )
}

export default ResetPassword;