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
import { useHistory } from 'react-router';
import Cookies from "js-cookie";
import swal from "sweetalert";

const Tables = () => {
  const [ students, setStudents ] = useState([])

  let history = useHistory()

  const params = new URLSearchParams([['token', Cookies.get('token')]])

  const studentsPerPage = 10

  useEffect(() => {
    let isSubscribed = true
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/getAllUser', {params})
    .then((res) => {
        if(isSubscribed){
          setStudents(res.data.response)
        }
        //setStudents(res.data.response)
      //console.log(students)
    })
    return() => isSubscribed = false
  }, [])

  const selectAngkaDelete = e => {
    Cookies.set("angkaDelete", e.currentTarget.value)
    handleDeleteStudent()
  } 

  const handleDeleteStudent = () => {

    axios
      .delete("https://backend-fundemy.herokuapp.com/api/admin/deleteUser", { 
        data : {
          token: Cookies.get("token"),
          user_id: students[Cookies.get("angkaDelete")]._id,
        }
      })
      .then(()=> {
        Cookies.remove("angkaDelete")
        swal({
          title: "Siswa Berhasil Didelete",
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
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
            <th>User Action</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((e, index) => {
            return(
              <tr>
                <td>{index+1}</td>
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
          })}
          </tbody>
      </Table>
    </>
  );
};

export default Tables;
