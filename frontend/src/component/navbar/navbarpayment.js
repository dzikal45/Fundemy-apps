
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
  { title: `Become a Teacher`, path: `/teacherauth` },
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

          

        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
