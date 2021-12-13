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

    const params = new URLSearchParams([['token', Cookies.get('token')]])
    const username = Cookies.get('username')

    console.log(`https://backend-fundemy.herokuapp.com/user/profile/${username}`)

    useEffect(() => {
        axios
        .get(`https://backend-fundemy.herokuapp.com/user/profile/${username}`, {params})
        .then((res) => {
          setProfile(res.data.response)
          console.log(profile)
        })
        .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
        })
      })
    return (
        <>
        
        <table style={{margin:'auto'}}>
            <tr>Nama
                <td>Daniel</td>
            </tr>
            <tr>Username
                <td>Username Daniel</td>
            </tr>

            <tr>Email
                <td></td>
            </tr>
        </table>
       

        </>
    )
}

export default EditProfile
