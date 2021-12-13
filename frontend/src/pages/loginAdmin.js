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
import Cookies from "js-cookie";
import swal from "sweetalert";
// import Navbar from "../component/navbar/navbarputih"





const LoginAdmin = () => {

    let history = useHistory()
    const { register, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
        axios
            .post("https://backend-fundemy.herokuapp.com/api/admin/login", data)
            .then((response) => {
                swal({
                    title: "Login Berhasil",
                    icon: "success",
                })
                Cookies.set("name", response.data.name)
                Cookies.set("token", response.data.token);
                history.push("/admin")
            })
            .catch((err) => {
                swal({
                    title: "Username atau Password salah",
                    text: `${err.response.data}`,
                    icon: "error",
                    button: "Ok !",
                  });
                if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
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

                            <LogBtn type='submit' variant='primary' onClick={handleSubmit(handleLogin)}>Login</LogBtn>

                        </Form>
                    </Col>
            </Row>      
        </Container>

    </>

        
       
    )
}

export default LoginAdmin
