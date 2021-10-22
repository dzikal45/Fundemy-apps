import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './subjectpage.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavLink } from "../elements/navbarElement"
import CardExample from '../component/card/cardlist';
import Cardlist from '../component/card/cardlist';


const Listcourse = () => {
    return (
        <>
        <Navbar />
        <div style={{height:"180px"}}></div>
        <h1 className="headtext">Alphabet</h1>
        <p className="bodytext">Choose your course</p>
        <div className="boxpur" fluid style={{marginTop:"75px"}}>

            <Container>
            <div style={{height:"50px"}}></div>
                <Row>
                <Col md={4}>
            
        <Cardlist />
        </Col>
        <Col md={4}>
        <Cardlist />
        </Col>
        <Col md={4}>
        <Cardlist />
        </Col></Row>
        </Container>
        </div>
        </>
    )
}

export default Listcourse
