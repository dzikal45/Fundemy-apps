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
                    <th scope="col">Nama</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">User Action</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((e, index)=>{
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
  );
};

export default Tables;
