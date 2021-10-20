import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Flex,
  } from "../../elements/navbarElement";
import logo from "../icons/fundemy.png";
import coba from "../icons/Try it free.png";

const Navbar = () => {
    return (
        <div className="">
            <Container fluid>
                <Row>
                    <Nav>

                        <Col md={true}  style={{marginRight:"750px"}} >
                            <NavLink className="text-decoration-none" to="/">
                                <Flex>
                                    <img src={logo} width="120" alt="logo" />
                                </Flex>
                            </NavLink>
                        </Col>

                        <Col md={true} style={{marginLeft:"-150px"}}>
                            <NavLink className="text-decoration-none" to ="/course">
                                Course
                            </NavLink>
                        </Col>

                        <Col md={true} style={{marginLeft:"-250px",}}>
                            <NavLink className="text-decoration-none" to ="/paket">
                                Pilihan Paket
                            </NavLink>
                        </Col>

                        <Col md={true} style={{marginLeft:"-220px"}}>
                            <NavLink classname="text-decoration-none" to="/login">
                                Log in
                            </NavLink>
                        </Col>

                        <Col md={true} style={{marginTop:"35px", marginLeft:"-280px"}}>
                            <NavLink className="text-decoration-none" to="/paket">
                                <Flex>
                                    <img src={coba} width="100" height="50%" alt="logo" />
                                </Flex>
                            </NavLink>
                        </Col>
                    </Nav>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
