import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form } from "react-bootstrap";
import { NavLink, RegBtn } from '../elements/loginElement'
import gambar from '../component/icons/login image.png'

const Registerpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    return (
        <Row>
            <Col>
                <img src={gambar} width="640" alt="logo" />
            </Col>

            <Col className="justify-content-md-center">
                <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Welcome Back,</h1>
                <h1 style={{color:'#FABD2E', marginLeft:"-15px", marginTop:"-10px", marginBottom:"15px"}}>FunBuddies!</h1>
                <h6 style={{color:'#606060', marginLeft:"-15px", marginBottom:"50px"}}>Sign up to continue</h6>

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
                            
                        <Row>
                            Already Have an Account? &nbsp; <NavLink to ="/login" >Log in</NavLink>
                        </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Registerpage
