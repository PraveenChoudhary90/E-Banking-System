import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BASE_URL from '../config/config';
import axios from 'axios';

const WithdrawCash = () => {
  const[amount  ,setAmount] = useState("")
  const customerid = localStorage.getItem("userid")
const handleSubmit = async(e)=>{
       e.preventDefault()
       let api = `${BASE_URL}/BankData/transaction`
       const res =await axios.post(api , {amount : amount , status : "Debited" ,customerid : customerid })
       console.log(res.data)
       alert("Data Debited Successfully")
       
}
  return (
    <>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center mb-4">
            <h1>Withdraw Amount</h1>
          </div>
          <Form>
            <Form.Group controlId="amount">
              <Form.Label>Enter Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={amount}
                placeholder="Enter amount to withdraw"
                onChange={(e)=>setAmount(e.target.value)}              />
            </Form.Group>
            <Button variant="primary" type="text" className="w-100 mt-3" onClick={handleSubmit}>
              Withdraw
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default WithdrawCash;