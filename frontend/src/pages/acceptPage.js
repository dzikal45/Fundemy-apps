import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
import swal from "sweetalert";

const AcceptPage = () => {

    const acceptHandle = () => {
        const data = {}
        data['token'] = Cookies.get("token")
        data['invoice_status'] = Cookies.get("invoice_status")
        data['invoiceId'] = Cookies.get("invoiceId")
        data['userId'] = Cookies.get("userId")
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
         })
         .catch((err) => {
            if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
         })
    }

    return(
        <>
            <button onClick={acceptHandle}>Coba klik aku</button>
        </>
    )

}

export default AcceptPage