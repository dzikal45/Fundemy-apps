import React, { useEffect, useState } from 'react'
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
import { useHistory } from 'react-router';

const Tables = () => {
    const [ invoice, setInvoice ] = useState([])

    const params = new URLSearchParams([['token', Cookies.get('token')]])

    let history = useHistory()

    useEffect(() => {
        axios
        .get('https://backend-fundemy.herokuapp.com/api/admin/getPembayaran', {params})
        .then((res) => {
          setInvoice(res.data)
          //console.log(invoice)
        })
        .catch((err) => {
          if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
        })
      })

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
                            <button onClick={history.push(`/admin/acceptPembayaran/${e.pesanan[0].invoiceId}`)}>
                                View
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