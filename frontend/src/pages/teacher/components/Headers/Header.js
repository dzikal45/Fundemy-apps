import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import teacher from '../../assets/img/teacher.png'
import courseimg from '../../assets/img/course.png'
import student from '../../assets/img/student.png'
import "./header.css"
import Cookies from "js-cookie";
import axios from "axios"

const Headeradmin = () => {
  const teacherInfo = Cookies.get("name")
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

  const courseCount = course.length
  return (
      <div className="header pb-8 pt-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <p className="hello"> Hi {teacherInfo}, Welcome Back! </p>
            <Row>
              <Col lg="6" xl="6">
              <div className="cardteacher">

                  <Container>
                   <Row>
                     <Col md={4}>
                       <img src={student} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={8}>

                       <p className="title">My Reviews</p>
                      <p className="angka">4.7</p>
                     </Col>
                   </Row>
                   </Container>
                 </div>
              </Col>
              <Col lg="6" xl="6">
              <div className="cardteacher">

                    <Container>
                   <Row>
                     <Col md={4}>
                       <img src={courseimg} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={8}>

                       <p className="title">My Course</p>
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
