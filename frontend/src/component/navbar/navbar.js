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
            <a href="/listcourse" style={{color:"white", margin:"20px"}}>Course</a>
            <a href="/paket" style={{color:"white", margin:"20px"}}>Package</a>
            <a href="/teacherauth" style={{color:"white", margin:"20px"}}>Become a Teacher</a>
            <button onClick={logOut} style={{color:"white", margin:"20px", width:"100px", borderRadius:"20px", borderStyle:"none", color:"#89559F"}}>Log out</button>
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
        <img src={register} width="18%" style={{marginLeft:"20px"}}></img>        </div>
      </Box>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
