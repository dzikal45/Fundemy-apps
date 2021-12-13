import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Form, Modal, CloseButton } from "react-bootstrap";
import Navbar from "../component/navbar/navbarpayment";
import './payment.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavBtnLink, NavLink } from "../elements/navbarElement"
import { Divider } from '@material-ui/core';
import btnpay from "../component/icons/buttonpay.png"
import logocolor from "../component/icons/logocolor.png";
import Pay from "../component/icons/paypay.png"




const Verifypayment = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        
        <Navbar />
        <div className="boxverif">
        <img src={Pay} width="375px"></img>
        <p className="headerpay1">Terima Kasih, FUNBuddies!</p>
        <p className="bodypay1">Saat ini status subscriptionmu sedang menunggu proses pembayaran.</p>
        <NavBtnLink variant="primary" to="/">Back to Home</NavBtnLink>
        </div>

              </>
    )
}

export default Verifypayment
