import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Headeradmin from "../../components/Headers/Header.js";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';

const Tables = () => {
    const [ invoice, setInvoice ] = useState([])
    const params = new URLSearchParams([['token', Cookies.get('token')]])
    let history = useHistory()

    useEffect(() => {
        let isSubscribed = true
        axios
        .get('https://backend-fundemy.herokuapp.com/api/admin/getPembayaran', {params})
        .then((res) => {
            if(isSubscribed){
                setInvoice(res.data)
            }
            
        })
        return () => isSubscribed = false

      }, [])

    //console.log(invoice[Cookies.get('angka')].username)

    const selectAngka = e => {
       Cookies.set("angka", e.currentTarget.value)
       handleAccept()
    }

    const handleAccept = () => {
        const data = {}
        data['token'] = Cookies.get('token')
        data['user_id'] = invoice[Cookies.get('angka')]._id
        data['invoice_status'] = 'accept'
        data['invoiceId'] = invoice[Cookies.get('angka')].pesanan[0].invoiceId

        console.log(data)

        axios
         .post("https://backend-fundemy.herokuapp.com/api/admin/editPembayaran", data)
         .then((res) => {
             console.log(res)
             swal({
                title: "Berhasil diterima!",
                icon: "success",
                button: "Ok",
             })
             history.push("/admin")
         })
         .catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
         })
    }

    return(
        <>
            <Headeradmin />
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Username</th>
                    <th>Invoice ID</th>
                    <th>Invoice Status</th>
                    <th>Subscription</th>
                    <th>Bukti Pembayaran</th>
                    <th>Invoice Action</th>
                </tr>
                {
                    invoice.map((e, index) => {
                    return(
                    <tr>
                        <th>{index+1}</th>
                        <td>{e.username}</td>
                        <td>{e.pesanan[0].invoiceId}</td>
                        <td>{e.pesanan[0].invoice_status}</td>
                        <td>{e.pesanan[0].subscribe}</td>
                        <td>{e.pesanan[0].invoiceFile}</td>
                        <td>
                            <button key={index} value={index} onClick={selectAngka}>
                                Accept
                            </button>
                        </td>
                    </tr>
                    )
                })}
            
                </thead>
            </Table>
        </>
    )
}

export default Tables