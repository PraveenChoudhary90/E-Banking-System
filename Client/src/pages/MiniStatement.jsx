import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/config";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

const MiniStatement = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [balance, setBalance] = useState([]);
  let creditAmount = 0;
  let debitAmount = 0;
  let netbalance = 0;

  const handelSubmit = async () => {
    const api = `${BASE_URL}/BankData/ministatement`;
    const response = await axios.post(api, {customerid:localStorage.getItem("userid"),startDate:startDate, endDate:endDate});
    console.log(response.data);
    setBalance(response.data);
  };

 

   balance.map((e) => {
    if (e.status === "credited") {
      creditAmount += e.amount;
    }
    if (e.status === "Debited") {
      debitAmount += e.amount;
    }
  });
  netbalance = creditAmount - debitAmount;



   const ans =  balance.map((e,index)=>{
    return(
      <>
         <tr key={index}>
                          <td>{index + 1}</td>
                          <td style={{color :"green"}}>{e.status === 'credited' ? e.amount : '---'}</td>
                          <td style={{color :"red"}}>{e.status === 'Debited' ? e.amount : '---'}</td>
                          <td style={{fontSize : "20px"}}>{e.status}</td>
                          {/* <td>{e.date}</td> */}
                         <td>{new Date(e.date).toDateString()}</td>

                        </tr>
      </>
    )
   })


  return (
    <>
    
      <div id="transcation">
        <h1 className="heading">Account Mini Statement</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="date"
            value={startDate}
            onChange={(e)=>{setStartDate(e.target.value)}}
            style={{ width: "150px" }}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e)=>{setEndDate(e.target.value)}}
            style={{ width: "150px" }}
          />
          <button style={{marginBottom:"20px"}} onClick={handelSubmit}  >Search</button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>sno</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody> 
            {ans}
          </tbody>
        </Table>
      </div>

      <ToastContainer />
    </>
  );
};

export default MiniStatement;
