import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar/navbar";
import './detailpage.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavLink } from "../elements/navbarElement"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import headercourse from "../component/icons/abc.jpg"
import ReactPlayer from 'react-player'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import fotomas from '../component/icons/fotomasmas.png'
import { Col, Row, Container, Button, Form, Modal, CloseButton } from "react-bootstrap";
import Footer from '../component/footer/footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import abc from "../component/icons/abc.jpg"
import { NavBtnLink } from "../elements/navbarElement"
import { Divider } from '@material-ui/core';
import logocolor from "../component/icons/logocolor.png";

import { useHistory } from 'react-router';



const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};




const Quiz = () => {
    const value = 4;
    let history = useHistory()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
       
        <>
        <Navbar />
        <div style={{margin:"100px"}}>
        {/* <div style={{height:"50px"}}></div> */}
    <div style={{height:"40px"}}></div>
    <Row>
        <Col md={9} fluid>
        <h1 className="headtext1">Quiz Time!</h1>
        <h4 >from ABC Course</h4>
        <div style={{height:"50px"}}></div>
        <p style={{fontSize:"30px"}}> Huruf Alphabet Ke-3 adalah ...</p>
        <div style={{height:"50px"}}></div>
        <button onClick={handleShow} style={{width:"15%", padding:"10px", borderRadius:"10px", borderStyle:"none", color:"black", fontWeight:"bold"}}>Show Answer</button>
        <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        style={{
            marginTop:"80px"
        }}
      >
        <Modal.Header>
            
            <img src={logocolor} style={{width:"25%"}}></img>
            <div style={{width:"50px"}}>
            <CloseButton/>
            </div>
        </Modal.Header>
        <Modal.Body>
<p> Answer: </p>
   <p style={{fontWeight:"bold", fontSize:"25px"}}> C </p>
        </Modal.Body>
      </Modal>



      </Col>
      <Col md={3}>
        
        <Container>
          <p style={{fontSize:"20px", color:"#89559F", marginTop:"20px"}}> Next Course </p>
          <div style={{height:"2px", width:"100%", backgroundColor:"#FABD2E", marginTop:"10px", marginBottom:"20px"}}></div>
          <div style={{justifyContent:"center", padding:"28px", margin:"5px", borderRadius:"10px", backgroundColor:"#A4D0BA"}}>
   
          <Card sx={{  borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={abc}
     
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            D E F
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


  <div style={{height:"20px"}}></div>

    <Card sx={{borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={abc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            G H I
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
    <div style={{height:"20px"}}></div>
    <Card sx={{ borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={abc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           J K L
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{height:"20px"}}></div>

    <Card sx={{  borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={abc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            M N O
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 

          </div>
          </Container>
          </Col> 
          </Row>  
        


          
          
          
          
           </div>
           <div className="separator-sage">
            
            </div>
            <div className="separator-purple">
                
            </div>
           <Footer />

    {/* <img src={headercourse} style={{width:"100%", height: "undefined"}}></img> */}
    </>

        
       
    )
}

export default Quiz
