// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//     Flex,
//   } from "../../elements/navbarElement";
// import logo from "../icons/secondlogo.png";
// import coba from "../icons/Try it free.png";
// import * as React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Container
// } from "@material-ui/core";
// import { Home } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";
// import Cookies from "js-cookie";
// import { useHistory } from "react-router";
// import swal from "sweetalert";
// import { Col, Button } from "react-bootstrap";

// const useStyles = makeStyles({
//   navbarDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   navDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   linkText: {
//     textDecoration: `none`,
//     color: `white`,
//     display: 'flex'
//   }
// });

// const navLinks = [
//   { title: `Course`, path: `/subject` },
//   { title: `Package`, path: `/paket` },
//   { title: `Become a Teacher`, path: `/teacherauth` },
// ];

// const Header = () => {
//   const classes = useStyles();

//   const loged = Cookies.get("token")
//   const history = useHistory()

//   const logOut = () => {
//     swal({
//       title: "Log out berhasil",
//       icon: "success"
//     })
//     Cookies.remove("token")
//     Cookies.remove("username")
//     history.push("/")
//   }

//   return loged ? (
//     <AppBar position="fixed" style={{backgroundColor:"#89559F"}}>
//       <Toolbar>
//         <Container maxWidth="100%" className={classes.navbarDisplayFlex}>
//         <NavLink className="text-decoration-none" to="/">
//                                  <Flex>
//                                      <img src={logo} width="200" alt="logo" style={{marginBottom:"10px", marginTop:"10px"}}/>
//                                </Flex>
//                              </NavLink>
//           <List
//             component="nav"
//             aria-labelledby="main navigation"
//             className={classes.navDisplayFlex}
//           >
//             {navLinks.map(({ title, path }) => (
//               <a href={path} key={title} className={classes.linkText}>
//                 <ListItem button>
//                   <ListItemText primary={title} />
//                 </ListItem>
//               </a>
//             ))}
//             <NavLink className="text-decoration-none" to="/paket">
//                                 <Flex>
//                                      <img src={coba} width="100" height="50%" alt="logo" style={{marginTop:"15px", marginLeft:"10px"}} />
//                                  </Flex>
//                              </NavLink>
//           </List>

//           <Col md={true}>
//             <Button style={{padding:"4px", margin:"auto"}} onClick={logOut}>
//               Logout
//             </Button>
//           </Col>

//         </Container>
//       </Toolbar>
//     </AppBar>
//   ):(
//     <AppBar position="fixed" style={{backgroundColor:"#89559F"}}>
//       <Toolbar>
//         <Container maxWidth="100%" className={classes.navbarDisplayFlex}>
//         <NavLink className="text-decoration-none" to="/">
//                                  <Flex>
//                                      <img src={logo} width="200" alt="logo" style={{marginBottom:"10px", marginTop:"10px"}}/>
//                                </Flex>
//                              </NavLink>
//           <List
//             component="nav"
//             aria-labelledby="main navigation"
//             className={classes.navDisplayFlex}
//           >
//             {navLinks.map(({ title, path }) => (
//               <a href={path} key={title} className={classes.linkText}>
//                 <ListItem button>
//                   <ListItemText primary={title} />
//                 </ListItem>
//               </a>
//             ))}
//             <NavLink className="text-decoration-none" to="/paket">
//                                 <Flex>
//                                      <img src={coba} width="100" height="50%" alt="logo" style={{marginTop:"15px", marginLeft:"10px"}} />
//                                  </Flex>
//                              </NavLink>
//           </List>

//           <Col md={true}>
//             <NavLink classname="text-decoration-none" to="/login">
//               Log in
//             </NavLink>
//           </Col>

//         </Container>
//       </Toolbar>
//     </AppBar>
//   )
// };
// export default Header;


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import logonav from "../icons/secondlogo.png";
import register from "../icons/Try it free.png"
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { Col, Button } from "react-bootstrap";

const Navbar = () => {

  const loged = Cookies.get("token")
  const history = useHistory()

  const logOut = () => {
    swal({
      title: "Log out berhasil",
      icon: "success"
    })
    Cookies.remove("token")
    Cookies.remove("username")
    history.push("/")
  }
  return loged ? (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "#89559F", color: "black", height: "100px" }}
      >
        <Toolbar>
          <img src={logonav} alt="" height="80%"></img>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div style={{alignItems:"center", fontSize:"18px"}}>
            <a href="/listcourse" style={{color:"white", margin:"20px"}}>ini dah login</a>
            <a href="/paket" style={{color:"white", margin:"20px"}}>Package</a>
            <a href="/teacherauth" style={{color:"white", margin:"20px"}}>Become a Teacher</a>
            <a href="/login" style={{color:"white", margin:"20px"}}>Login</a>
            <img src={register} width="18%" style={{marginLeft:"20px"}}></img>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    // </Box>
  ):(
    <AppBar
    style={{ background: "#89559F", color: "black", height: "100px" }}
  >
    <Toolbar>
      <img src={logonav} alt="" height="80%"></img>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <div style={{alignItems:"center", fontSize:"18px"}}>
        <a href="/listcourse" style={{color:"white", margin:"20px"}}>Course</a>
        <a href="/paket" style={{color:"white", margin:"20px"}}>Package</a>
        <a href="/teacherauth" style={{color:"white", margin:"20px"}}>Become a Teacher</a>
        <a href="/login" style={{color:"white", margin:"20px"}}>Login</a>
        <img src={register} width="18%" style={{marginLeft:"20px"}}></img>
        </div>
      </Box>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
