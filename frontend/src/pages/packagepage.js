import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './packagepage.css'

const Packagepage = () => {
    return (
        <>
        <Navbar />
        <div style={{height:"180px"}}></div>
        <h1 className="headtext">Pricing & Benefit Subscribing</h1>
        <p className="bodytext">Choose your package and start teaching your kids with us</p>
        <div className="boxpur" style={{marginTop:"75px"}}>
            <Row>
                <Col md={3} xs={12}>
                    
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5>FREE TRIAL</h5>
                        <p>Try it free</p>
                        <h2>FREE</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5>3 Months</h5>
                        <p>	&#40; 90 days 	&#41;</p>
                        <h2>Rp. 75.000</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5>6 Months</h5>
                        <p>	&#40; 180 days 	&#41;</p>
                        <h2>Rp. 144.000</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5>1 Year</h5>
                        <p>	&#40; 365 days 	&#41;</p>
                        <h2>Rp. 228.000</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

   
            </Row>
        </div>
        </>
    )
}

export default Packagepage
