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

const Tables = () => {
  const [ students, setStudents ] = useState([])

  const params = new URLSearchParams([['token', Cookies.get('token')]])

  const studentsPerPage = 10

  useEffect(() => {
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/getAllUser', {params})
    .then((res) => {
      setStudents(res.data.response)
      //console.log(students)
    })
    .catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
    })
  })
  return (
    <>
      <Headeradmin />
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
            <th>User Action</th>
          </tr>
          {
            students.map((e, index) => {
            return(
              <tr>
                <th>{index+1}</th>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.pesanan.invoice_status}</td>
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
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                </td>
              </tr>
            )
          })}
          
        </thead>
      </Table>
    </>
  );
};

export default Tables;
