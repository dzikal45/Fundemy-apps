import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Table } from "react-bootstrap";
import Navbar from "../component/navbar/navbarputih";
import './packagepage.css'
import bear from '../component/icons/bearrr 1.png'
import lion from '../component/icons/lion-3 1.png'
import tupai from '../component/icons/tupai 1.png'
import testimoni from '../component/icons/testimoni paket.png'
import Footer from '../component/footer/footer';
import Cookies from "js-cookie";
import axios from 'axios'

const EditProfile = () => {
    const [ profile, setProfile ] = useState([])
    const [ pembayaran, setPembayaran ] = useState([])

    const params = new URLSearchParams([['token', Cookies.get('token')]])
    const username = Cookies.get('username')

    useEffect(() => {
        let isSubscribed = true
        axios
        .get(`https://backend-fundemy.herokuapp.com/api/user/profile/${username}`, {params})
        .then((res) => {
          if(isSubscribed){
            setProfile(res.data)
          }
        })
        .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
        })

        return() => isSubscribed = false
      })
    
    useEffect(() => {
        let isSubscribed = true
        axios
        .get(`https://backend-fundemy.herokuapp.com/api/user/getPembayaran/`, {params})
        .then((res) => {
          if(isSubscribed){
            setPembayaran(res.data[0])
          }
        })
        .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
        })

        return() => isSubscribed = false
    })
    
    return (
        <>
            <Table>
                <thead>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Invoice ID</th>
                    <th>Invoice Status</th>
                    <th>Subscription Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{profile.name}</td>
                        <td>{profile.email}</td>
                        <td>{profile.username}</td>
                        <td>{pembayaran.invoiceId}</td>
                        <td>{pembayaran.invoice_status}</td>
                        <td>{ pembayaran.invoice_status === "accept" ? pembayaran.subscribe : "Free user"}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default EditProfile
