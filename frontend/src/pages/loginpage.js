import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { LogBtn, NavLink } from "../elements/loginElement"
import gambar from '../component/icons/login image2.png'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import axios from 'axios'

const Loginpage = () => {
    let history = useHistory()
    const { register, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
        axios
            .post("https://backend-fundemy.herokuapp.com/api/user/login", data)
            .then(() => {
                history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
                <Row>
                    <Col>
                        <img src={gambar} height="85%" alt="logo" />
                    </Col>

                    <Col className="justify-content-md-center">
                        <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Welcome Back,</h1>
                        <h1 style={{color:'#FABD2E', marginLeft:"-15px", marginTop:"-10px", marginBottom:"15px"}}>FunBuddies!</h1>
                        <h6 style={{color:'#606060', marginLeft:"-15px", marginBottom:"50px"}}>Sign up to continue</h6>

                        <Form>
                            <Row>
                                <Form.Group controlId='username'>
                                    <h6 style={{color:'#501E65'}}>Username</h6>
                                    <Form.Control style={{paddingRight:"220px"}} placeholder='learnwithfun' {...register("username")}></Form.Control>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group controlId='password'>
                                    <h6 style={{color:'#501E65'}}>Password</h6>
                                    <Form.Control style={{paddingRight:"220px", marginBottom:"40px"}} type='password' placeholder='********' {...register("password")}></Form.Control>
                                </Form.Group>
                            </Row>

                            <LogBtn type='submit' variant='primary' onClick={handleSubmit(handleLogin)}>Login</LogBtn>
                            
                            <Row>
                                Don't have an account? &nbsp;<NavLink to ="/register" >Sign up</NavLink>
                            </Row>
                        </Form>
                    </Col>
                </Row>
    )
}

export default Loginpage
