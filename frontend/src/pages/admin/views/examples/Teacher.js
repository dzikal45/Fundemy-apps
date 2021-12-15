import React, { useState, useEffect } from "react";
import axios from 'axios'
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
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

const Teacher = () => {
  const [ teacher, setTeacher ] = useState([])

  useEffect(() => {
    let isSubscribed = true
    const params = new URLSearchParams([['token', Cookies.get('token')]])
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/guruCollection', {params})
    .then((res) => {
        if(isSubscribed){
            setTeacher(res.data.response)
        }
    })
    return () => isSubscribed = false

  }, [])

  return (
    <>
      <Headeradmin />
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <th>No</th>
          <th>Nama</th>
          <th>Username</th>
          <th>Email</th>
          <th>User Action</th>
        </thead>
        <tbody>
          {
            teacher.map((e,index) => {
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
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
            })
          }
        </tbody>
      </Table>

    </>
  );
};

export default Teacher;
