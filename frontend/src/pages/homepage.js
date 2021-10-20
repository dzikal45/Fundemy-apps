import React from 'react'
import { Col, Row, Container, Table } from "react-bootstrap";
import gambar1 from "../component/icons/header-lp 1.png"

const Homepage = () => {
    return (
        <Row>
            <Row>
                <img src={gambar1} width="100%" style={{marginLeft:"100px"}} alt="logo" />
            </Row>
        </Row>
    )
}

export default Homepage
