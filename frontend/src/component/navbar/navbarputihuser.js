
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Flex,
  } from "../../elements/navbarElement";
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from "../icons/secondlogo.png";

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
    color: `white`,
    display: 'flex'
  }
});

const navLinks = [
  { title: `aprischanauva`, path: `/subject` },

];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{backgroundColor:"#89559F"}}>
      <Toolbar>
        <Container maxWidth="100%" className={classes.navbarDisplayFlex}>
        <NavLink className="text-decoration-none" to="/">
                                 <Flex>
                                     <img src={logo} width="200" alt="logo" style={{marginBottom:"10px", marginTop:"10px"}}/>
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
                <ArrowDropDownIcon style={{marginTop:"20px"}}/>
              </a>
            ))}
 
          </List>
          

        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
