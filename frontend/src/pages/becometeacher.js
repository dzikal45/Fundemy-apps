import React from 'react'
import Navbar from "../component/navbar/navbar";
import './becometeacher.css'
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { LogBtn, NavLink, RegBtn } from "../elements/loginElement"
import gambar from '../component/icons/login image2.png'
import gambar2 from '../component/icons/login image.png'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import axios from 'axios'
// import Navbar from "../component/navbar/navbarputih"





const Teacherauth = () => {

    let history = useHistory()
    const { register, handleSubmit } = useForm()
    const handleRegis = (data) => {
        console.log(data)
        axios
            .post("http://localhost:5000/api/guru/register", data)
            .then(() => {
                history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogin = data => {
        console.log(data)
        axios
            .post("http://localhost:5000/api/guru/login", data)
            .then(() => {
                history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
       
        <>
        <Navbar />
        <div className="headerteacher">
        </div>
        <Container>
          <Row>
          <Col md={6} className="justify-content-md-center">
                        <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Login</h1>
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

                            <LogBtn type='submit' variant='primary' onSubmit={handleSubmit(handleLogin)}>Login</LogBtn>

                        </Form>
                    </Col>
            <Col md={6} className="justify-content-md-center">
            <h1 style={{color:'#89559F', marginTop:"80px", marginLeft:"-15px"}}>Sign Up</h1>
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
                </Form>
                    </Col>
                   
          </Row>

          
        </Container>

    </>

        
       
    )
}

export default Teacherauth
