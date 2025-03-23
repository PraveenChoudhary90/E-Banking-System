import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/config";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'

const Statement = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [balancee, setBalancee] = useState([])
    let creditAmount = 0
    let debitAmount = 0
    let netbalance = 0

    const loadData = async () => {
        const api = `${BASE_URL}/BankData/balance/?userid=${localStorage.getItem("userid")}`
        const res = await axios.get(api)
        console.log(res.data)
        setBalancee(res.data)
      }
    
      useEffect(() => {
        loadData()
      }, [])
    
         balancee.map((e) => {
        if (e.status === "credited") {
          creditAmount += e.amount
        }
        if (e.status === "Debited") {
          debitAmount += e.amount
        }
      })
      netbalance = creditAmount - debitAmount
    






  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
 if(startDate>e.target.value){
  toast.error("Start date must be less than end date")}
    setEndDate(e.target.value);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/BankData/Statement`, {
          id: localStorage.getItem("userid"),
          start: startDate,
          end: endDate,
        });
        setBalance(response.data.balance);
        setTransactions(response.data.transactionID);
        console.log(response.data.transactionID);
      } catch (error) {
        console.log(error);
      }
    };
    if (startDate && endDate) {
      fetchTransactions();
    }
  }, [startDate, endDate]);

  return (
    <>
     <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="shadow-lg border-0">
                <Card.Header className="bg-primary text-white text-center p-3">
                  <h3>Total  Balance</h3>
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
      <div id="transcation">
        <h1 className="heading" >Account Mini Statement</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            style={{ width: "150px" }}
          />
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            style={{ width: "150px" }}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Deposite</th>
              <th>Withdraw</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
            transactions.map((transaction, index) =>
             (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction._id}</td>
                <td>{transaction.transactionType==="credited"?transaction.amount:"-"}</td>
                <td>{transaction.transactionType==="Debited"?transaction.amount:"-"}</td>
                <td>{new Date(transaction.createdAt).toDateString()}</td>
              </tr>
            ))}
           <tr>
            <td colSpan={5}></td>
          </tr>
            <tr>
              <td colSpan="2"></td>
              <td>Available Balance:</td>
              <td colSpan="2">{balance}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <ToastContainer />
    </>
  );
};

export default Statement;