import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import teacher from '../../assets/img/teacher.png'
import course from '../../assets/img/course.png'
import student from '../../assets/img/student.png'
import "./header.css"
import axios from 'axios'
import Cookies from "js-cookie";


const Headeradmin = () => {
  const [ students, setStudents ] = useState([])
  const params = new URLSearchParams([['token', Cookies.get('token')]])
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

  let studentCount = students.length
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
                       <img src={teacher} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Teacher</p>
                      <p className="angka">36</p>
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
                       <img src={course} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Course</p>
                      <p className="angka">21</p>
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
