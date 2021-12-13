import React from 'react'
import { Col, Row, Container, Table } from "react-bootstrap";
// <<<<<<< HEAD
import ava from "../component/icons/ava1.png";
// import homeimg from "../component/icons/header-lp.png";
import homeimg1 from "../component/icons/header-lp1.jpg";
import oneicon from "../component/icons/one.png";
import twoicon from "../component/icons/two.png";
import threeicon from "../component/icons/three.png";
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import backgreen from "../component/icons/back-green.png";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import Lottie from 'react-lottie';
import './homepage.css';
import animationData from '../component/lottie/child'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Flex,
} from "../elements/navbarElement";
import coba from "../component/icons/Try it free.png";




// =======
import gambar1 from "../component/icons/header-lp 1.png"
// >>>>>>> 8407dca670664b0dcdf96e436afcec767d42d103

const Homepage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
      
      
      
    return (
// <<<<<<< HEAD
        <>
        <Navbar/>
        <div>
        <img src={homeimg1} width="100%" style={{marginTop:"10px"}}/>
        </div>


        <Container style={{width: "1440px", height: "651px", paddingTop:"7%"}}>
        <Row>
    <Col xs={6}>
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />  
    </Col> 
    
    <Col xs={12} md={6} sm={6}>
        <p className="title1"> Why Us? </p>
        <div style={{height:"35px"}}></div>
        <Row>
        <Col sm={3}>
            <img src={oneicon} height="72px"/>
            </Col>
        <Col sm={9}><h2>Pembelajaran yang terukur</h2>
        <p>Di setiap module terdapat mini-quiz untuk mengukur pemahaman anak terhadap materi.</p></Col>
        </Row>

        <Row>
        <Col sm={3}><img src={twoicon} height="72px"/></Col>
        <Col sm={9}><h2>Pembelajaran yang mudah</h2>
        <p>Dapat belajar darimana saja dan kapan saja dengan materi yang telah disesuaikan dengan kurikulum yang berlaku</p></Col>
        </Row>
   
        <Row>
        <Col sm={3}><img src={threeicon} height="72px"/></Col>
        <Col sm={9}><h2>Pembelajaran yang seru</h2>
        <p>Dengan materi belajar yang beragam mulai dari gambar, video, dan audio.</p></Col>
        </Row>

        </Col>
  </Row>
        </Container>

        <div className="quote" style={{backgroundImage:`url(${backgreen})`, height:"242px" }}>
        <p style={{width: "957px",height: "120px", marginTop:"55px", fontSize:"40px", fontWeight:"bold"}}>We help you raise kids who are confident and prepared for school</p>
        </div>

        <div className="subject">
          <div style={{paddingTop:"5%"}}>
          <p className="title2">Our Subjects</p>
          <div style={{height:"45px"}}></div>
   <Container>
        <Row>
          <Col md={4}>
            
          <div className="cardsub text-md-center">
          <div style={{height:"25px"}}></div>
          <img src={alphabet} width="75%" style={{marginTop:"10px"}}/>
          <p className="titlecardsub">Alphabet</p>
            
          </div>
          </Col>
          <Col md={4}>
          <div className="cardsub text-md-center">
          <div style={{height:"25px"}}></div>
          <img src={number} width="75%" style={{marginTop:"10px"}}/>
          <p className="titlecardsub">Number</p>
            
          </div>
          </Col>
          <Col md={4}>
          <div className="cardsub text-md-center">
          <div style={{height:"25px"}}></div>
          <img src={color} width="75%" style={{marginTop:"10px"}}/>
          <div style={{height:"55px"}}></div>
          <p className="titlecardsub">Color</p>
            
          
          </div>

          </Col>
        </Row>
        
      </Container>
    
      
      </div>
     

            
        </div>

        <div className="testimoni">
          <Container style={{paddingTop:"10%", paddingLeft:"2px"}}>
        <Row>
        <Col sm={3}>
         <p className="title3">What they say?</p>
         <p className="text1">Pengalaman FUNbuddies yang sudah menggunakan FUNdemy</p>
            </Col>

            <Col sm={9}>
              <Container style={{marginRight:"-70px"}}>
        <div className="">
     <AliceCarousel autoPlay autoPlayInterval="3000">
     <div className="sliderimg" alt="">
     <Row>
     <Col sm={4}><img src={ava} width="120%" style={{marginTop:"10px"}}/>
     <div className="elipse"></div></Col>
     <Col sm={8}><p className="testimonitext text-md-center">FUNdemy sangat membantu anak saya untuk tetap belajar di masa pandemi ini dengan cara pembelajaran yang FUN dan hemat di kantong.</p></Col>

       </Row>
       </div>

       <div className="sliderimg" alt="">
     <Row>
     <Col sm={4}><img src={ava} width="120%" style={{marginTop:"10px"}}/>
     <div className="elipse"></div></Col>
     <Col sm={8}><p className="testimonitext text-md-center">FUNdemy sangat membantu anak saya untuk tetap belajar di masa pandemi ini dengan cara pembelajaran yang FUN dan hemat di kantong.</p></Col>

       </Row>
       </div>
       <div className="sliderimg" alt="">
     <Row>
     <Col sm={4}><img src={ava} width="120%" style={{marginTop:"10px"}}/>
     <div className="elipse"></div></Col>
     <Col sm={8}><p className="testimonitext text-md-center">FUNdemy sangat membantu anak saya untuk tetap belajar di masa pandemi ini dengan cara pembelajaran yang FUN dan hemat di kantong.</p></Col>

       </Row>
       </div>
     
    </AliceCarousel>
    </div>   
    </Container>

    </Col>
    </Row>
    </Container>


      
        </div>


        <div className="separator-sage">
            
        </div>
        <div className="separator-purple">
            
        </div>

        <Footer/>
       

        {/* // <Row>
            <Row>
                <img src={gambar1} width="100%" style={{marginLeft:"100px"}} alt="logo" />
            </Row>
        // </Row> */}
        </>
    )
   

}
export default Homepage;
