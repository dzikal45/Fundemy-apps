import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Form, Modal, CloseButton } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './payment.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavBtnLink, NavLink } from "../elements/navbarElement"
import { Divider } from '@material-ui/core';
import btnpay from "../component/icons/buttonpay.png"
import logocolor from "../component/icons/logocolor.png";




const Payment = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        
        <Navbar />
        <div className="block" onScroll="no">
            .
        <div className="boxpayment">
                <p className="headerpay">Detail Payment</p>
                <Divider></Divider>
                <Row>
                    <Col md={8}>
                <p className="text11"> 3 Months Subscribing </p>
                </Col>
                <Col md={4}>
                    <p className="price">Rp. 75.000</p>
                </Col>
                </Row>
                <Divider></Divider>
                <Row>
                    <Col md={8}>
                <p className="total"> Total</p>
                </Col>
                <Col md={4}>
                    <p className="price" style={{fontWeight:"bold"}}>Rp. 75.000</p>
                </Col>
                </Row>
                
                    <button  className="btnpay" onClick={handleShow}>
                        Continue Payment
                    </button>
                    <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        style={{
            marginTop:"120px"
        }}
      >
        <Modal.Header>
            
            <img src={logocolor} style={{width:"25%"}}></img>
            Order Summary
            <div style={{width:"50px"}}>
            <CloseButton/>
            </div>
        </Modal.Header>
        <Modal.Body>
        <Row>
                    <Col md={3}>
                <p className="text11"> Total </p>
                </Col>
                <Col md={9}>
                    <p className="price">Rp. 75.000</p>
                </Col>
                </Row>
                <Row>
                    <Col md={3}>
                <p className="text11"> Order ID </p>
                </Col>
                <Col md={9}>
                    <p className="price">123456</p>
                </Col>
                </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Upload Bukti</Button>
        </Modal.Footer>
      </Modal>
                </div>
        </div>
              </>
    )
}

export default Payment
