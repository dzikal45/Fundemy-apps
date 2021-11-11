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
                {/* </Row>
                <Row> */}
                
                    <Col md={3}>
                <p className="text11"> Order ID </p>
                </Col>
                <Col md={2}>
                    <p className="price">123456</p>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={2}>
                <p className="text11"> Total </p>
                </Col>
                <Col md={3}>
                    <p className="price">Rp. 75.000</p>
                </Col>
                </Row>
                <Divider/>
                <h4> Upload Bukti Pembayaran</h4>
                <p>Pastikan bukti pembayaran menampilkan:</p>
                <Row>
                    <Col md={6}>
                        <li>Tanggal/Waktu Transfer</li>
                        <p>contoh: tgl. 04/06/19 / jam 07:24:06</p>
                    </Col>
                    <Col md={6}>
                        <li>Detail Penerima</li>
                        <p>contoh: Transfer ke Rekening FUNDemy</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <li>Status Berhasil</li>
                        <p>contoh: Transfer BERHASIL, Transaksi Sukses</p>
                    </Col>
                    <Col md={6}>
                        <li>Jumlah Transfer</li>
                        <p>contoh: Rp. 75.000</p>
                    </Col>
                </Row>
                <div className="upload">
                <p>Pilih Gambar</p>
                <input type="file"></input>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <NavBtnLink variant="primary" to="/verifypayment">Upload Bukti</NavBtnLink>
        </Modal.Footer>
      </Modal>
                </div>
        </div>
              </>
    )
}

export default Payment
