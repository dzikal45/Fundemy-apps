import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import teacherimg from '../../assets/img/teacher.png'
import courseimg from '../../assets/img/course.png'
import student from '../../assets/img/student.png'
import "./header.css"
import axios from 'axios'
import Cookies from "js-cookie";


const Headeradmin = () => {
  const [ students, setStudents ] = useState([])
  const [ course, setCourse ] = useState([])
  const [ teacher, setTeacher ] = useState([])
  
  const params = new URLSearchParams([['token', Cookies.get('token')]])
  useEffect(() => {
    let isSubscribed = true
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/getAllUser', {params})
    .then((res) => {
        if(isSubscribed){
          setStudents(res.data.response)
        }
      //console.log(students)
    })
    .catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) }
    })

    return() => isSubscribed = false
  })

  useEffect(() => {
    let isSubscribed = true
    
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/courseCollection', {params})
    .then((res) => {
        if(isSubscribed){
            setCourse(res.data.response)
        }
    })
    return () => isSubscribed = false

  }, [])

  useEffect(() => {
    let isSubscribed = true
    axios
    .get('https://backend-fundemy.herokuapp.com/api/admin/guruCollection', {params})
    .then((res) => {
        if(isSubscribed){
            setTeacher(res.data.response)
        }
    })
    return () => isSubscribed = false

  }, [])

  let studentCount = students.length
  let courseCount = course.length
  let teacherCount = teacher.length

  return (
      <div className="header pb-8 pt-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <p className="hello"> Hi Admin, Welcome Back! </p>
            <Row>
              <Col lg="6" xl="4">
                <div className="cardadmin">
                  <Container>
                   <Row>
                     <Col md={6}>
                       <img src={teacherimg} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Teacher</p>
                      <p className="angka">{teacherCount}</p>
                     </Col>
                   </Row>
                   </Container>
              </div>
              </Col>
              <Col lg="6" xl="4">
              <div className="cardadmin">

                  <Container>
                   <Row>
                     <Col md={6}>
                       <img src={student} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Student</p>
                      <p className="angka">{studentCount}</p>
                     </Col>
                   </Row>
                   </Container>
                 </div>
              </Col>
              <Col lg="6" xl="4">
              <div className="cardadmin">

                    <Container>
                   <Row>
                     <Col md={6}>
                       <img src={courseimg} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Course</p>
                      <p className="angka">{courseCount}</p>
                     </Col>
                   </Row>
                   </Container>
                  </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
  );
};

export default Headeradmin;
