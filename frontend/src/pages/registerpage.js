import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Button, Form } from "react-bootstrap";
import { NavLink, RegBtn } from '../elements/loginElement'
import gambar from '../component/icons/login image.png'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';

const Registerpage = () => {
    let history = useHistory()
    const { register, handleSubmit } = useForm()
    const handleRegis = (data) => {
        console.log(data)
        axios
            .post("http://localhost:5000/api/user/register", data)
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
                            <Form.Control style={{BorderRight:"20px"}} placeholder="FUNBuddies" {...register("name")}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="username">
                            <h6 style={{color:'#501E65'}}>Username</h6>
                            <Form.Control placeholder="teamwithfun" {...register("username")}></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId='email'>
                            <h6 style={{color:'#501E65'}}>Email</h6>
                            <Form.Control style={{paddingRight:"220px"}} type='email' placeholder='teamwithfun@gmail.com' {...register("email")}></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId='password'>
                            <h6 style={{color:'#501E65'}}>Password</h6>
                            <Form.Control style={{paddingRight:"220px"}} type='password' placeholder='Min. 8 Character' {...register("password")}></Form.Control>
                        </Form.Group>
                    </Row>

                    <RegBtn  type='submit' variant='primary' onClick={handleSubmit(handleRegis)}>Create Account</RegBtn>
                            
                        <Row>
                            Already Have an Account? &nbsp; <NavLink to ="/login" >Log in</NavLink>
                        </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Registerpage
