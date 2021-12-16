import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardlist from "../component/card/cardlist";
import Footer from "../component/footer/footer";
import Navbar from "../component/navbar/navbar";
import "./subjectpage.css";

const Listcourse = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "180px" }}></div>
      <h1 className="headtext">Alphabet</h1>
      <p className="bodytext">Choose your course</p>
      <div className="boxpur" fluid style={{ marginTop: "75px" }}>
        <Container>
          <div style={{ height: "50px" }}></div>
          <Row>
            <Col md={4}>
              <Cardlist />
            </Col>
            <Col md={4}>
              <Cardlist />
            </Col>
            <Col md={4}>
              <Cardlist />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Listcourse;
