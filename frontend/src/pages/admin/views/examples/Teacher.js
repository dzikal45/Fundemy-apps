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
                    teacher.map((e, index)=>{
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

export default Teacher;
