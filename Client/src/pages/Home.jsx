// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link, useNavigate } from 'react-router-dom';
// import BASE_URL from '../config/config';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

// function Home() {
//   const [email,setEmail] = useState("");
//   const [password, setPassword]  =useState("");

//   const navigate = useNavigate();

//   const handelSubmit = async(e)=>{
//     e.preventDefault();
//     const api = `${BASE_URL}/BankData/CustomerLogin`;
//     try {
//       const response = await axios.post(api, {email:email, password:password});
//       console.log(response.data);
//       localStorage.setItem("username", response.data.firstname+" "+response.data.lastname);
//       localStorage.setItem("email", response.data.email);
//       localStorage.setItem("userid", response.data._id);
//       navigate("/dashboard")
//       toast.success(response.data.msg);
//       // alert("Login Successfully");
//     } catch (error) {
//      toast.error(error.response.data.msg);
//     }
//   }

//   return (
//     <>

//          <div id="myform">
//             <h3>User Account Login</h3>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handelSubmit}>
//         Submit
//       </Button>
//       <h5>If You Dont't have Account <button style={{borderRadius:"30px"}}><Link  to="/registration" style={{textDecoration:"none"}} >Click Here Open Account</Link> </button></h5>
//     </Form>
//    </div>
//     <ToastContainer />

//     </>
//   )
// }

// export default Home
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <>
      <div id="silder">
        <Carousel>
          <Carousel.Item>
            <img src="b3.jpg" alt="" height="700px" width="100%" />
            <Carousel.Caption>
              <h1>SAVINGS ACCOUNTS</h1>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Excepturi
                asperiores nesciunt tempore veniam corrupti doloremque, dolores
                dolorum architecto ipsum, aut pariatur modi obcaecati ipsam quas
                earum aspernatur esse placeat magnam?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./b1.jpg" alt="" height="700px" width="100%" />
            <Carousel.Caption>
              <h3>BANKING SOLUTIONS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
                asperiores nesciunt tempore veniam corrupti doloremque, dolores
                dolorum architecto ipsum, aut pariatur modi obcaecati ipsam quas
                earum aspernatur esse placeat magnam?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./b4.jpg" alt="" height="700px" width="100%" />
            <Carousel.Caption>
              <h3>FINANCING SOLUTIONS</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
                asperiores nesciunt tempore veniam corrupti doloremque, dolores
                dolorum architecto ipsum, aut pariatur modi obcaecati ipsam quas
                earum aspernatur esse placeat magnam?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="card">
        <div id="card1">
          <img src="001-wallet.svg" width="200px" height="200px" alt="" />
          <h1>Money Savings</h1>
          <h5>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </h5>
        </div>
        <div id="card1">
          <img src="cart1.svg" width="200px" height="200px" alt="" />
          <h1>Online Shoppings</h1>
          <h5>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </h5>
        </div>
        <div id="card1">
          <img src="006-credit-card.svg" width="200px" height="200px" alt="" />
          <h1>Credit / Debit Cards</h1>
          <h5>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </h5>
        </div>
      </div>

      <div id="about">
        <img src="about.jpg" width="500px" height="400px" alt="" />
        <div id="data">
          <h1>Amortization Computation</h1>
          <h4>
            A small river named Duden flows by<br></br> their place and supplies
            it with the necessary regelialia.
          </h4>
          <h5>
            Officia quaerat eaque neque<br></br> Lorem ipsum dolor sit amet
            <br></br> Consectetur adipisicing elit
          </h5>
          <div id="in">
            <input type="text" placeholder="Enter Your Email" />
            <button>Submit Email</button>
          </div>
        </div>
      </div>

      <div id="aboutpage">
        <h1>About Us</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          neque tempora reiciendis.
        </h4>
      </div>
      <div id="aboutpage1">
        <img src="about1.jpg" width="500px" height="400px" alt="" />
        <div id="data1">
        <h1>We Solve Your Financial Problem</h1>
        <h5>
          Far far away, behind the word mountains, far from the countries<br/>
          Vokalia and Consonantia, there live the blind texts. Separated they<br/>
          live in Bookmarksgrove right at the coast of the Semantics, a large<br/>
          language ocean. A small river named Duden flows by their place and<br/>
          supplies it with the necessary regelialia. It is a paradisematic<br/>
          country, in which roasted parts of sentences fly into your mouth.<br/>
        </h5>
        </div>
      </div>
    </>
  );
};

export default Home;
