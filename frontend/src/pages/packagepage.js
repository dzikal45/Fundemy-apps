import React, { useState } from 'react'
import { useHistory } from "react-router";
import { Col, Row, Container, Button } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './packagepage.css'
import bear from '../component/icons/bearrr 1.png'
import lion from '../component/icons/lion-3 1.png'
import tupai from '../component/icons/tupai 1.png'
import testimoni from '../component/icons/testimoni paket.png'
import Footer from '../component/footer/footer';
import { NavBtnLink } from '../elements/navbarElement';
import Cookies from "js-cookie";

const Packagepage = () => {
    const history = useHistory()
    const [ selectPaket1, setSelectPaket1 ] = useState(75_000)
    const [ selectPaket2, setSelectPaket2 ] = useState(144_000)
    const [ selectPaket3, setSelectPaket3 ] = useState(228_000)

    const total_payment = Cookies.get("total_payment")

    const actionClick1 = () => {
        Cookies.set("total_payment", 75000)
        Cookies.set("subscription", '3 Months')
        history.push('/payment')
    }

    const actionClick2 = () => {
        Cookies.set("total_payment", 144000)
        Cookies.set("subscription", '6 Months')
        history.push('/payment')
    }
    const actionClick3 = () => {
        Cookies.set("total_payment", 228000)
        Cookies.set("subscription", '1 Year')
        history.push('/payment')
    }

    

    return (
        <>
        <Navbar />
        <div style={{height:"180px"}}></div>
        <h1 className="headtext">Pricing & Benefit Subscribing</h1>
        <p className="bodytext">Choose your package and start teaching your kids with us</p>
        <div className="boxpur" style={{marginTop:"75px"}}>
            <Row>
                <Col md={3} xs={12}>
                    <img src={bear} style={{opacity: 0}}/>
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5 style={{color: "#501E65", marginTop: "20px"}}>FREE TRIAL</h5>
                        <p>Try it free</p>
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
                        <h5 style={{color: "#501E65", marginTop: "20px"}}>3 Months</h5>
                        <p>	&#40; 90 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp. 75.000</h2>
                        <button onClick={actionClick1} > Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    <img src={tupai} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5 style={{color: "#501E65", marginTop: "20px"}}>6 Months</h5>
                        <p>	&#40; 180 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp. 144.000</h2>
                        <button onClick={actionClick2}> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

                <Col md={3} xs={12}>
                    <img src={lion} />
                    <div className="cardfree">
                    <Container style={{padding:"7%"}}>
                        <h5 style={{color: "#501E65", marginTop: "20px"}}>1 Year</h5>
                        <p>	&#40; 365 days 	&#41;</p>
                        <h2 style={{margin: "40px"}}>Rp.228.000</h2>
                        <button onClick={actionClick3}> Choose Package</button>
                    </Container>
                    </div>
                    
                </Col>

   
            </Row>
        </div>
        <div style={{height:"120px"}}></div>
        <img src={testimoni} width="100%"/>
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
