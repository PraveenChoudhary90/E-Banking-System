import React, { useEffect, useState } from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const BalanceInquiry = () => {
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

     balance.map((e) => {
    if (e.status === "credited") {
      creditAmount += e.amount
    }
    if (e.status === "Debited") {
      debitAmount += e.amount
    }
  })
  netbalance = creditAmount - debitAmount

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center p-3">
              <h3>Balance Inquiry</h3>
            </Card.Header>
            <Card.Body>
                <>
                  <Row className="mb-3">
                    <Col xs={6}>
                      <div><strong>Credit Amount:</strong> {creditAmount}</div>
                    </Col>
                    <Col xs={6}>
                      <div><strong>Debit Amount:</strong> {debitAmount}</div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <div><strong>Net Balance:</strong> {netbalance}</div>
                    </Col>
                  </Row>
                  <Button variant="primary" className="w-100" onClick={loadData}>
                    Refresh Data
                  </Button>
                </>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BalanceInquiry