import React, { useEffect, useState } from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const AccountStatement = () => {
  const [balance, setBalance] = useState([])
  let creditAmount = 0
  let debitAmount = 0
  let netbalance = 0

  const loadData = async () => {
    const api = `${BASE_URL}/BankData/balance/?userid=${localStorage.getItem("userid")}`
    const res = await axios.get(api)
    console.log(res.data)
    setBalance(res.data)
  }

  useEffect(() => {
    loadData()
  }, [])



   const ans =  balance.map((e,index)=>{
    return(
      <>
         <tr key={index}>
                          <td>{index + 1}</td>
                          <td style={{color :"green"}}>{e.status === 'credited' ? e.amount : '---'}</td>
                          <td style={{color :"red"}}>{e.status === 'Debited' ? e.amount : '---'}</td>
                          <td style={{fontSize : "20px"}}>{e.status}</td>
                          <td>{e.date}</td>
                        </tr>
      </>
    )
   })

  return (
   <>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Status</th>
          <th>Date</th>
          {/* <th>Description</th> */}

        </tr>
      </thead>
      <tbody>
        {ans}
     </tbody>
     </Table>
   </>
  )
}

export default AccountStatement;