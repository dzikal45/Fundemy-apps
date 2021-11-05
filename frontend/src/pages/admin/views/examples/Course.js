import { useState } from "react";
import React from "react";
import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";
import Divider from '@mui/material/Divider';
import { CloseButton } from "react-bootstrap";
import {
  Col,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Headeradmin from "../../components/Headers/Header.js";
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { styled, Box } from '@mui/system';
import './styling.css'


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: '1000px',
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  borderRadius: 5
};

const Course = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Headeradmin />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
          <button type="button" onClick={handleOpen} variant="contained" color="black" type="submit" style={{borderRadius:"10px", paddingLeft:"15px",paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", marginBottom:"20px", borderStyle:"none", backgroundColor:"#FABD2E", color:"#89559F", width:"120px"}}>
            Add Course
            </button>
            <StyledModal
  aria-labelledby="unstyled-modal-title"
  aria-describedby="unstyled-modal-description"
  open={open}
  onClose={handleClose}
  BackdropComponent={Backdrop}
>
  <Box sx={style}>
  <div style={{float:"right"}}>
    <button onClick={handleClose} style={{float:"right", backgroundColor:"white", borderStyle:"none"}}>
  <CloseButton/>  </button>

  </div>

    <Row>
      <Col md={6}>
    <h2 id="unstyled-modal-title" >Add Course</h2>
    <p> Title</p>
    <Input
            type="text"
            style={{ width: "100%", height: "10%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="description"
            variant="outlined"
            label="Description"
            placeholder="Reading Story"
            fullWidth
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
          <p> Description</p>
    <Input
            type="textarea"
            style={{ width: "100%", height: "15%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="description"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            fullWidth
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
                  <p> Video</p>
    <Input
            type="file"
            style={{ width: "100%", height: "15%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="description"
            variant="outlined"
            label="Description"
            placeholder="Deskripsi Course"
            fullWidth
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />

        </Col>
        <Col md={1}>
        <Divider orientation="vertical" variant="middle"  />
        </Col>
        <Col md={5}>
    <h2 id="unstyled-modal-title" >Add Quiz</h2>
    <p> Question</p>
    <Input
            type="text"
            style={{ width: "100%", height: "10%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="question"
            variant="outlined"
            label="Question"
            placeholder="What the color is it?"
            fullWidth
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
          <p> Answer</p>
    <Input
            type="text"
            style={{ width: "100%", height: "10%", background: "#FFFFFF", border: "1.5px solid #686A71", boxSizing: "border-box", borderRadius: "7.34848px", fontSize: "15px", padding: "10px", overflow: "scroll"}}
            name="answer"
            variant="outlined"
            label="Answer"
            placeholder="Red"
            fullWidth
            // value={postData.description}
            // onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          />
          <div style={{height:"20px"}}></div>
        </Col>
        </Row>
        <div style={{height:"20px"}}></div>

<button variant="contained" color="black" size="large" type="submit" style={{borderRadius:"10px", paddingLeft:"15px",paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", marginRight:"20px", borderStyle:"none", backgroundColor:"#A0D4BA", color:"black"}}>
  PUBLISH
</button>
  </Box>
</StyledModal>
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Course</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Video</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Date</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
    
                          <span className="mb-0 text-sm">
                            Coloring
                          </span>
                    </th>
                    <td>Course ini mempelajari mengenai warna-warna dasar.</td>
                    <td>
                      www.youtube.com/abjUGu87B
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                     25 April 2000
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
    
                          <span className="mb-0 text-sm">
                            Coloring
                          </span>
                    </th>
                    <td>Course ini mempelajari mengenai warna-warna dasar.</td>
                    <td>
                      www.youtube.com/abjUGu87B
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                     25 April 2000
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
    
                          <span className="mb-0 text-sm">
                            Coloring
                          </span>
                    </th>
                    <td>Course ini mempelajari mengenai warna-warna dasar.</td>
                    <td>
                      www.youtube.com/abjUGu87B
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                     25 April 2000
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
    
                          <span className="mb-0 text-sm">
                            Coloring
                          </span>
                    </th>
                    <td>Course ini mempelajari mengenai warna-warna dasar.</td>
                    <td>
                      www.youtube.com/abjUGu87B
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                     25 April 2000
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
    
                          <span className="mb-0 text-sm">
                            Coloring
                          </span>
                    </th>
                    <td>Course ini mempelajari mengenai warna-warna dasar.</td>
                    <td>
                      www.youtube.com/abjUGu87B
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                     25 April 2000
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Update
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Course;
