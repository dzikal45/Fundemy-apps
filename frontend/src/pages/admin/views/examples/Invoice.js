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
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">

            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Invoice</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Username</th>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Invoice Status</th>
                    <th scope="col">Subscription</th>
                    <th scope="col">Bukti Pembayaran</th>
                    <th scope="col">Invoice Action</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    invoice.map((e, index)=>{
                      return(
                        <tr>
                          <td>{index+1}</td>
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

                          <td>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem
                                  value={index}
                                //   onClick={selectAngkaDelete}
                                >
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                          </UncontrolledDropdown>
                    </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>


              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
        </>

        
    )
}

export default Tables