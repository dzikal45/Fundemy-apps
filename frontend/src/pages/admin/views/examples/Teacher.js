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
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const Teacher = () => {
  const [ teacher, setTeacher ] = useState([])
  let history = useHistory()

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

  const selectAngkaDelete = e => {
    Cookies.set("angkaDelete", e.currentTarget.value)
    handleDeleteTeacher()
  } 

  const handleDeleteTeacher = () => {

    axios
      .delete("https://backend-fundemy.herokuapp.com/api/admin/deleteGuru", { 
        data : {
          token: Cookies.get("token"),
          user_id: teacher[Cookies.get("angkaDelete")]._id,
        }
      })
      .then(()=> {
        Cookies.remove("angkaDelete")
        swal({
          title: "Guru Berhasil Didelete",
          icon: "success",
       })
        history.push("/admin")
      })
      .catch((err) => {
        if(err.response.status === 401){
          swal({
            title: "Session anda telah habis!",
            text: "Silakan login kembali",
            icon: "error",
            button: "OK",
          })
          history.push('/loginadmin')
        }
        if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
      })
  }

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
                              value={index}
                              onClick={selectAngkaDelete}
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

    </>
  );
};

export default Teacher;
