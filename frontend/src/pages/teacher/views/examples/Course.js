import { useState, useEffect } from "react";
import React from "react";
import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";
import Divider from '@mui/material/Divider';
import { CloseButton, Form } from "react-bootstrap";
import axios from 'axios'
import {
  Col,
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
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { styled, Box } from '@mui/system';
import './styling.css'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import Cookies from "js-cookie";
import swal from "sweetalert";


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: '1000px',
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  borderRadius: 5
};

const Course = () => {
  let history = useHistory()
  const { register, handleSubmit } = useForm()
  const [ course, setCourse ] = useState([])

  useEffect(() => {
    let isSubscribed = true
    const params = new URLSearchParams([['token', Cookies.get('token')]])
    axios
    .get('https://backend-fundemy.herokuapp.com/api/guru/getCourse', {params})
    .then((res) => {
        if(isSubscribed){
            setCourse(res.data.Course.course_id)
        }
    })
    return () => isSubscribed = false

  }, [])

  const handleCourse = (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('token', Cookies.get('token'))
    formData.append('file', data.file[0])
    formData.append('course_description', data.course_description)
    formData.append('course_name', data.course_name)
    formData.append('soal', data.soal)
    formData.append('jawaban_benar', data.jawaban_benar)
    console.log(...formData)
    axios
        .post("https://backend-fundemy.herokuapp.com/api/guru/course/upload", formData)
        .then((response) => {
            swal({
                title: "Course Berhasil Diupload",
                text: "Terima kasih telah berkontribusi di Fundemy!",
                icon: "success",
            })
            history.push("/teacher")
        })
        .catch((err) => {
            if(err.response.status === 400){
              swal({
                title: "Terjadi kesalahan",
                text: "Silakan input kembali data anda!",
                icon: "error",
                button: "OK",
              })
            }
            if(err.response.status === 401){
              swal({
                title: "Session anda telah habis!",
                text: "Silakan login kembali",
                icon: "error",
                button: "OK",
              })
              history.push('/loginteacher')
            }
            if(err.response.status === 403){
              swal({
                title: "Anda tidak memiliki akses!",
                text: "Hanya guru dan admin yang dapat menambahkan course",
                icon: "error",
                button: "OK",
              })
            }
            if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
        })
  }

  const selectAngka = e => {
    Cookies.set("angka", e.currentTarget.value)
    handleDeleteCourse()
 }

 const selectAngkaUpdate = e => {
   Cookies.set("angkaUpdate", e.currentTarget.value)
   setOpenUpdate(true)
   //handleUpdateCourse()
 }

  const handleDeleteCourse = () => {

    axios
      .delete("https://backend-fundemy.herokuapp.com/api/guru/course/delete", { 
        data : {
          token: Cookies.get("token"),
          Course_id: course[Cookies.get("angka")]._id,
        }
      })
      .then(()=> {
        Cookies.remove("angka")
        swal({
          title: "Course Berhasil Didelete",
          text: "Terima kasih telah berkontribusi di Fundemy!",
          icon: "success",
       })
        history.push("/teacher")
      })
      .catch((err) => {
        if(err.response.status === 401){
          swal({
            title: "Session anda telah habis!",
            text: "Silakan login kembali",
            icon: "error",
            button: "OK",
          })
          history.push('/loginteacher')
        }
        if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
      })
  }

  const handleUpdateCourse = (data) => {
    const formData = new FormData()
    //console.log(course[data.index]._id)
    console.log(course[Cookies.get("angkaUpdate")]._id)
    formData.append('token', Cookies.get('token'))
    formData.append('file', data.file[0])
    formData.append('course_description', data.course_description)
    formData.append('course_name', data.course_name)
    formData.append('soal', data.soal)
    formData.append('jawaban_benar', data.jawaban_benar)
    console.log(...formData)

    axios
     .patch(`https://backend-fundemy.herokuapp.com/api/guru/course/update/${course[Cookies.get("angkaUpdate")]._id}`, formData)
     .then(()=> {
       Cookies.remove("angkaUpdate")
       swal({
        title: "Course Berhasil Diupdate",
        text: "Terima kasih telah berkontribusi di Fundemy!",
        icon: "success",
        })
       history.push("/teacher")
     })
     .catch((err) => {
      if(err.response.status === 401){
        swal({
          title: "Session anda telah habis!",
          text: "Silakan login kembali",
          icon: "error",
          button: "OK",
        })
        history.push('/loginteacher')
      }
      if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response, err.status) }
     })
    
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ openUpdate, setOpenUpdate ] = useState(false)
  //const handleOpenUpdate = () => setOpenUpdate(true)
  const handleCloseUpdate = () => setOpenUpdate(false)

  return (
    <>
      <Headeradmin />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
          <button type="button" onClick={handleOpen} variant="contained" color="black" type="submit" style={{borderRadius:"10px", paddingLeft:"15px",paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", marginBottom:"20px", borderStyle:"none", backgroundColor:"#FABD2E", color:"#89559F", width:"120px"}}>
            Add Course
            </button>
            <StyledModal
  aria-labelledby="unstyled-modal-title"
  aria-describedby="unstyled-modal-description"
  open={open}
  onClose={handleClose}
  BackdropComponent={Backdrop}
>
  <Box sx={style}>
  <div style={{float:"right"}}>
    <button onClick={handleClose} style={{float:"right", backgroundColor:"white", borderStyle:"none"}}>
  <CloseButton/>  </button>

  </div>

    <Row>
      <Col md={6}>
    <h2 id="unstyled-modal-title" >Add Course</h2>
    <p> Title</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="course_name"
            variant="outlined"
            label="Description"
            placeholder="Reading Story"
            {...register("course_name")}
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
          <p> Description</p>
    <Form.Control
            type="textarea"
            style={{ width: "100%", height: "15%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="course_description"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            {...register("course_description")}
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
                  <p> Video</p>
    <Form.Control
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            style={{ width: "100%", height: "15%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="file"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            directory =""
            {...register("file")}
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />

        </Col>
        <Col md={1}>
        <Divider orientation="vertical" variant="middle"  />
        </Col>
        <Col md={5}>
    <h2 id="unstyled-modal-title" >Add Quiz</h2>
    <p> Question</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="soal"
            variant="outlined"
            label="Question"
            placeholder="What the color is it?"
            {...register("soal")}
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
          <p> Answer</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="jawaban_benar"
            variant="outlined"
            label="Answer"
            placeholder="Red"
            {...register("jawaban_benar")}
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
        </Col>
        </Row>
        <div style={{height:"20px"}}></div>

<button variant="contained" color="black" size="large" type="submit" style={{borderRadius:"10px", paddingLeft:"15px",paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", marginRight:"20px", borderStyle:"none", backgroundColor:"#A0D4BA", color:"black"}} onClick={handleSubmit(handleCourse)}>
  PUBLISH
</button>
  </Box>
</StyledModal>

            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Course</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Video</th>
                    <th scope="col">Date</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    course.map((e, index)=>{
                      return(
                        <tr>
                          <td>{e.course_name}</td>
                          <td>{e.course_description}</td>
                          <td>{e.course_video[0].video_file}</td>
                          <td>{e.updatedAt}</td>
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
                                  onClick={selectAngka}
                                >
                                  Delete
                                </DropdownItem>
                                <DropdownItem
                                  value={index}
                                  onClick={selectAngkaUpdate}
                                >
                                Update
                                </DropdownItem>
                              
                              </DropdownMenu>
                          </UncontrolledDropdown>
                    </td>
                    <StyledModal
  aria-labelledby="unstyled-modal-title"
  aria-describedby="unstyled-modal-description"
  open={openUpdate}
  onClose={handleCloseUpdate}
  BackdropComponent={Backdrop} >
    <Box sx={style}>
  <div style={{float:"right"}}>
    <button onClick={handleClose} style={{float:"right", backgroundColor:"white", borderStyle:"none"}}>
  <CloseButton/>  </button>

  </div>
  <Row>
      <Col md={6}>
    <h2 id="unstyled-modal-title" >Add Course</h2>
    <p> Title</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="course_name"
            variant="outlined"
            label="Description"
            placeholder="Reading Story"
            {...register("course_name")}
          />
          <div style={{height:"20px"}}></div>
          <p> Description</p>
    <Form.Control
            type="textarea"
            style={{ width: "100%", height: "15%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="course_description"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            {...register("course_description")}
          />
          <div style={{height:"20px"}}></div>
                  <p> Video</p>
    <Form.Control
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            style={{ width: "100%", height: "15%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="file"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            directory =""
            {...register("file")}
          />

        </Col>
        <Col md={1}>
        <Divider orientation="vertical" variant="middle"  />
        </Col>
        <Col md={5}>
    <h2 id="unstyled-modal-title" >Add Quiz</h2>
    <p> Question</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="soal"
            variant="outlined"
            label="Question"
            placeholder="What the color is it?"
            {...register("soal")}
          />
          <div style={{height:"20px"}}></div>
          <p> Answer</p>
    <Form.Control
            type="text"
            style={{ width: "100%", height: "10%", color:"black", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="jawaban_benar"
            variant="outlined"
            label="Answer"
            placeholder="Red"
          />
          <div style={{height:"20px"}}></div>
        </Col>
        </Row>
        <div style={{height:"20px"}}></div>
        <input type="hidden" value={index} {...register("index")} />

<button variant="contained" color="black" size="large" type="submit" style={{borderRadius:"10px", paddingLeft:"15px",paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", marginRight:"20px", borderStyle:"none", backgroundColor:"#A0D4BA", color:"black"}} onClick={handleSubmit(handleUpdateCourse)}>
  UPDATE COURSE
</button>
  </Box>
  </StyledModal>
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

export default Course;
