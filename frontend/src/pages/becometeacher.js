import React from 'react'
import Navbar from "../component/navbar/navbar";
import './becometeacher.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
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
import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";
import Footer from '../component/footer/footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import abc from "../component/icons/abc.jpg"
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { LogBtn, NavLink, RegBtn } from "../elements/loginElement"
import gambar from '../component/icons/login image2.png'
import gambar2 from '../component/icons/login image.png'
import { useState, useEffect } from 'react'






const Teacherauth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
       
        <>
        <div className="header">
        </div>
        <Container>
          <Row>
          <Col md={6} className="justify-content-md-center">
                        <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Login</h1>
                        <Form>
                            <Row>
                                <Form.Group controlId='username'>
                                    <h6 style={{color:'#501E65'}}>Username</h6>
                                    <Form.Control style={{paddingRight:"220px"}} placeholder='learnwithfun' value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group controlId='password'>
                                    <h6 style={{color:'#501E65'}}>Password</h6>
                                    <Form.Control style={{paddingRight:"220px", marginBottom:"40px"}} type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                                </Form.Group>
                            </Row>

                            <LogBtn type='submit' variant='primary'>Login</LogBtn>

                        </Form>
                    </Col>
            <Col md={6} className="justify-content-md-center">
            <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Sign Up</h1>
                <Form>
                    <Row>
                        <Form.Group controlId="name">
                            <h6 style={{color:'#501E65'}}>Name</h6>
                            <Form.Control style={{BorderRight:"20px"}} placeholder="FUNBuddies" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="username">
                            <h6 style={{color:'#501E65'}}>Username</h6>
                            <Form.Control placeholder="teamwithfun" value={username} onChange={(e)=>setUsername(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId='email'>
                            <h6 style={{color:'#501E65'}}>Email</h6>
                            <Form.Control style={{paddingRight:"220px"}} type='email' placeholder='teamwithfun@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId='password'>
                            <h6 style={{color:'#501E65'}}>Password</h6>
                            <Form.Control style={{paddingRight:"220px"}} type='password' placeholder='Min. 8 Character' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>

                    <RegBtn  type='submit' variant='primary'>Create Account</RegBtn>
                </Form>
                    </Col>
                   
          </Row>

          
        </Container>

    </>

        
       
    )
}

export default Teacherauth
