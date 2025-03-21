import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function TopNav() {
  return (
      <>
      <Navbar bg="primary" data-bs-theme="dark" style={{fontSize:"20px"}}>
        <Container>
          <Navbar.Brand style={{fontSize:"30px"}} as={Link} to="home">E-Banking-Site</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="registration">Registration</Nav.Link>
            <Nav.Link as={Link}  to="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
     </>
    )  
     }

export default TopNav