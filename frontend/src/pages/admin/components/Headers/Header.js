
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import teacher from '../../assets/img/teacher.png'
import course from '../../assets/img/course.png'
import student from '../../assets/img/student.png'
import "./header.css"


const Header = () => {
  return (
      <div className="header pb-8 pt-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <p className="hello"> Hi Admin, Welcome Back! </p>
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <Container>
                   <Row>
                     <Col md={6}>
                       <img src={student} style={{width:"100%"}}></img>
                     </Col>
                     <Col md={6}>

                       <p className="title">Student</p>
                      <p className="angka">1002</p>
                     </Col>
                   </Row>
                   </Container>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
  );
};

export default Header;
