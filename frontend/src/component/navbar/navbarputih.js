// import React from 'react'
// import { Col, Row, Container } from "react-bootstrap";
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//     Flex,
//   } from "../../elements/navbarElement";
// import logo from "../icons/fundemy.png";
// import coba from "../icons/Try it free.png";

// const Navbar = () => {
//     return (
//         <div className="">
//             <Container fluid>
//                 <Row>
//                     <Nav>

//                         <Col md={true}  style={{marginRight:"750px"}} >
//                             <NavLink className="text-decoration-none" to="/">
//                                 <Flex>
//                                     <img src={logo} width="120" alt="logo" />
//                                 </Flex>
//                             </NavLink>
//                         </Col>

//                         <Col md={true} style={{marginLeft:"-150px"}}>
//                             <NavLink className="text-decoration-none" to ="/course">
//                                 Course
//                             </NavLink>
//                         </Col>

//                         <Col md={true} style={{marginLeft:"-250px",}}>
//                             <NavLink className="text-decoration-none" to ="/paket">
//                                 Pilihan Paket
//                             </NavLink>
//                         </Col>

//                         <Col md={true} style={{marginLeft:"-220px"}}>
//                             <NavLink classname="text-decoration-none" to="/login">
//                                 Log in
//                             </NavLink>
//                         </Col>

//                         <Col md={true} style={{marginTop:"35px", marginLeft:"-280px"}}>
//                             <NavLink className="text-decoration-none" to="/paket">
//                                 <Flex>
//                                     <img src={coba} width="100" height="50%" alt="logo" />
//                                 </Flex>
//                             </NavLink>
//                         </Col>
//                     </Nav>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default Navbar
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Flex,
  } from "../../elements/navbarElement";
import logo from "../icons/secondlogo.png";
import logocolor from "../icons/logocolor.png";
import coba from "../icons/Try it free.png";
import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    color: `#89559F`,
    display: 'flex'
  }
});

const navLinks = [
  { title: `Course`, path: `/subject` },
  { title: `Package`, path: `/paket` },
  { title: `Become a Teacher`, path: `/teacher` },
  { title: `Log In`, path: `/login` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{backgroundColor:"white"}}>
      <Toolbar>
        <Container maxWidth="100%" className={classes.navbarDisplayFlex}>
        <NavLink className="text-decoration-none" to="/">
                                 <Flex>
                                     <img src={logocolor} width="200" alt="logo" style={{marginBottom:"10px", marginTop:"10px"}}/>
                               </Flex>
                             </NavLink>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
            <NavLink className="text-decoration-none" to="/paket">
                                <Flex>
                                     <img src={coba} width="100" height="50%" alt="logo" style={{marginTop:"15px", marginLeft:"10px"}} />
                                 </Flex>
                             </NavLink>
          </List>
          

        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
