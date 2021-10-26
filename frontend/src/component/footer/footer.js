import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import perlogo from "../icons/34logo.png";
import { Col, Row, Container, Table } from "react-bootstrap";
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow style={{margin:"2%", height:"250px"}}>
          <MDBCol md="3">
          <img src={perlogo} width="250" alt="logo" style={{marginBottom:"10px", marginTop:"10px"}}/>

          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">About</h5>
            <ul style={{paddingLeft:"0"}}>
              <li className="list-unstyled">
                <a href="#!">Tentang FUNDemy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Product</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Payment</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Follow us on</h5>

            <Row>
        <Col sm={2}>
        <IconButton color="inherit" href="">
    <InstagramIcon />
 </IconButton>
            </Col>
        <Col sm={2}>
        <IconButton color="inherit" href="">
    <TwitterIcon />
 </IconButton>
        </Col>
        <Col sm={2}>
        <IconButton color="inherit" href="">
    <FacebookIcon />
 </IconButton>
        </Col>
        <Col sm={2}>
        <IconButton color="inherit" href="">
    <YouTubeIcon />
 </IconButton>
        </Col>
        </Row>

          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Contact</h5>
            <ul style={{paddingLeft:"0"}}>
              <li className="list-unstyled">
                <a>Mon - Fri 08.00 - 17.00</a>
              </li>
              <li className="list-unstyled">
                <a>Jatinangor, Sumedang, Jawa Barat.</a>
              </li>
              <li className="list-unstyled">
                <div style={{height:"10px"}}></div>
              </li>
              <li className="list-unstyled">
                <a>Telepon : (021) 33333333</a>
              </li>
              <li className="list-unstyled">
                <a>Email : hi@fundemy.com</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{backgroundColor:"#FABD2E"}}>
        <MDBContainer>
          <a> Made by ♥︎ Triple Disaster. 2021.</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;