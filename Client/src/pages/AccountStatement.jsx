import React, { useEffect, useState } from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'


const AccountStatement = () => {
  const [balance, setBalance] = useState([])
  const [mydata, setmydata] = useState([]);
  let creditAmount = 0
  let debitAmount = 0
  let netbalance = 0

  const loadData = async () => {
    const api = `${BASE_URL}/BankData/AccountStatement/?userid=${localStorage.getItem("userid")}`
    const response = await axios.get(api)
    console.log(response.data)
    setBalance(response.data.Amount)
    setmydata(response.data.Balance)
  }

  useEffect(() => {
    loadData()
  }, [])
  

   balance.map((e) => {
    if (e.status === "credited") {
      creditAmount += e.amount
    }
    if (e.status === "Debited") {
      debitAmount += e.amount
    }
  })
  netbalance = creditAmount - debitAmount
 

  
   mydata.map((e1) => {
    if (e1.status === "credited") {
      creditAmount += e1.amount
    }
    if (e.status === "Debited") {
      debitAmount += e1.amount
    }
  })
  netbalance = creditAmount - debitAmount

    
   const ans =balance.map((e,index)=>{
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
    <Container className="mt-5">
         <Row className="justify-content-center">
           <Col md={8} lg={6}>
             <Card className="shadow-lg border-0">
               <Card.Header className="bg-primary text-white text-center p-3">
                 <h3> Total Balance Inquiry</h3>
               </Card.Header>
               <Card.Body>
                   <>
                     <Row className="mb-3">
                       <Col xs={12}>
                         <div><strong>Net Avilabel Balance:</strong> {netbalance}</div>
                       </Col>
                     </Row>
                   </>
                
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>
        <Container className="mt-5">
         <Row className="justify-content-center">
           <Col md={8} lg={6}>
             <Card className="shadow-lg border-0">
               <Card.Header className="bg-primary text-white text-center p-3">
                 <h3> Current  Balance </h3>
               </Card.Header>
               <Card.Body>
                   <>
                     <Row className="mb-3">
                       <Col xs={12}>
                         <div><strong>Current List Balance:</strong> {netbalance}</div>
                       </Col>
                     </Row>
                   </>
                
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>
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