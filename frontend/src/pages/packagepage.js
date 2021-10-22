import React, { useState } from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './packagepage.css'
import bear from '../component/icons/bearrr 1.png'
import lion from '../component/icons/lion-3 1.png'
import tupai from '../component/icons/tupai 1.png'
import testimoni from '../component/icons/testimoni paket.png'
import Footer from '../component/footer/footer';

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
                    <img src={lion} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h1 className="purple-text">FREE TRIAL</h1>
                        <p className="grey-text">Try it free</p>
                        <h2 style={{margin: "40px"}}>FREE</h2>
                        <button
                        > Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    <img src={bear} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h1 className="purple-text">3 Months</h1>
                        <p className="grey-text">	&#40; 90 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp. 75.000</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    <img src={tupai} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h1 className="purple-text">6 Months</h1>
                        <p className="grey-text">	&#40; 180 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp. 144.000</h2>
                        <button onClick> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    <img src={lion} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h1 className="purple-text">1 Year</h1>
                        <p className="grey-text">	&#40; 365 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp.228.000</h2>
                        <button> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

   
            </Row>
        </div>
        <div style={{height:"120px"}}></div>
        <img src={testimoni} width="100%" style={{margin: "auto"}}/>
        <div style={{height:"120px"}}></div>
        <div className="separator-sage">
            
            </div>
            <div className="separator-purple">
                
            </div>
        
        <Footer />

        </>
    )
}

export default Packagepage
