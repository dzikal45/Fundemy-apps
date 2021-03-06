import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import "./navbar.css"
import logo from "../../assets/img/logofunfun.png"
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import swal from "sweetalert";


const TeacherNavbar = (props) => {
  const loged = Cookies.get("token")
  const history = useHistory()

  const logOut = () => {
    swal({
      title: "Log out berhasil",
      icon: "success"
    })
    Cookies.remove("token")
    Cookies.remove("name")
    history.push("/")
  }

  return (
    <>
    <div className="backnavbar">
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <img src={logo} style={{width:"15%"}}></img>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold" style={{color:"black"}}>
                      {Cookies.get("name")}
                      <i class="fas fa-caret-down" style={{marginLeft:"10px"}}></i>
                    </span>
                  </Media>
                 
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>

                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <button onClick={logOut} style={{borderStyle:"none", background:"none", textAlign:"left"}}>Logout</button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
};

export default TeacherNavbar;
