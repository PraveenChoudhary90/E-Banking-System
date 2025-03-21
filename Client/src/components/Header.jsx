import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div id="header">
    {/* <img src="bank.jpeg" width="150px" height="100px" style={{paddingBottom:"20px"}} alt="" /> */}
    <img src="pic3.jpeg" width="100px" height="100px" style={{paddingBottom:"20px"}} alt="" />
    <h1 style={{paddingTop:"20px"}}>Welcome To E-Banking-System</h1>
    <div>
 <Navbar bg="primary" data-bs-theme="dark" style={{fontSize:"15px",marginTop:"20px"}}>
        <Container>
          {/* <Navbar.Brand style={{fontSize:"30px"}} as={Link} to="home">E-Banking-Site</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="registration">Contact+912322232</Nav.Link>
            <Nav.Link as={Link}  to="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
        
    </div>
    </>
  )
}

export default Header