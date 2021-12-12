import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './subjectpage.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavLink } from "../elements/navbarElement"
import { useHistory } from 'react-router';
import swal from "sweetalert";
import Cookies from "js-cookie";


const Subjectpage = () => {
  const loged = Cookies.get("token")
    return (
        <>
        <Navbar />
        <div style={{height:"180px"}}></div>
        <h1 className="headtext">Subjects</h1>
        <p className="bodytext">Choose the subject</p>
        <div className="boxpur" fluid style={{marginTop:"75px"}}>
        <Container>
        <div style={{height:"50px"}}></div>

        <Row>
          <Col md={4}>
            <NavLink to="/listcourse">
          <div className="cardsub">
          <div style={{height:"25px"}}></div>
          <img src={alphabet} width="75%" style={{marginTop:"10px"}}/>
          <p className="titlecardsub">Alphabet</p>
            
          </div>
          </NavLink>
          </Col>
          <Col md={4}>
          <div className="cardsub">
          <div style={{height:"25px"}}></div>
          <img src={number} width="75%" style={{marginTop:"10px"}}/>
          <p className="titlecardsub">Number</p>
            
          </div>
          </Col>
          <Col md={4}>
          <div className="cardsub">
          <div style={{height:"25px"}}></div>
          <img src={color} width="75%" style={{marginTop:"10px"}}/>
          <div style={{height:"55px"}}></div>
          <p className="titlecardsub">Color</p>
            
          
          </div>

          </Col>

          </Row>
       
          
        </Container>
        
        </div>
        </>
    )
}

export default Subjectpage
