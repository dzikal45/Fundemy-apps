import StarIcon from "@mui/icons-material/Star";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Input } from "reactstrap";
import Footer from "../component/footer/footer";
import abc from "../component/icons/abc.jpg";
import fotomas from "../component/icons/fotomasmas.png";
import Navbar from "../component/navbar/navbar";
import "./detailpage.css";

const labels = {
  0.5: "0.5",
  1: "1.0",
  1.5: "1.5",
  2: "2.0",
  2.5: "2.5",
  3: "3.0",
  3.5: "3.5",
  4: "4.0",
  4.5: "4.5",
  5: "5.0",
};

const Detailpage = () => {
  const value = 4;

  return (
    <>
      <Navbar />
      <div style={{ margin: "100px" }}>
        {/* <div style={{height:"50px"}}></div> */}
        <div style={{ height: "40px" }}></div>
        <Row>
          <Col md={9} fluid>
            <h1 className="headtext1">A B C</h1>
            <Box
              sx={{
                // justifyContent:'center',
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{labels[value]} (2 Rating)</Box>
              <div style={{ height: "50px" }}></div>
            </Box>

            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=_UR-l3QI2nE"
                width="100%"
                height="100%"
              />
            </div>

            <div style={{ height: "50px" }}></div>

            <div class="tabs">
              <div class="tabby-tab">
                <Input type="radio" id="tab-1" name="tabby-tabs" checked />
                <label for="tab-1">Overview</label>
                <div class="tabby-content">
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Course Description
                  </p>
                  <p>
                    Pada course ini akan mempelajari dan mengenal huruf A, B,
                    dan C.
                  </p>
                </div>
              </div>

              <div class="tabby-tab">
                <Input type="radio" id="tab-2" name="tabby-tabs" />
                <label for="tab-2">Teacher</label>
                <div class="tabby-content">
                  <img src={fotomas} style={{ height: "400px" }} />
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Sutrisno
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "#89559F",
                    }}
                  >
                    Guru Bahasa di Olif Kindergarten
                  </p>
                  <p>
                    Halo!! Nama saya Sutrisno tetapi biasa dipanggil Ka Nono.
                    Disini saya akan mengenalkan apa itu alphabet A, B, dan C.
                  </p>
                </div>
              </div>

              <div class="tabby-tab">
                <Input type="radio" id="tab-3" name="tabby-tabs" />
                <label for="tab-3">Reviews</label>
                <div class="tabby-content">onprogress </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <Container>
              <p
                style={{
                  fontSize: "20px",
                  color: "#89559F",
                  marginTop: "20px",
                }}
              >
                {" "}
                Next Course{" "}
              </p>
              <div
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#FABD2E",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              ></div>
              <div
                style={{
                  justifyContent: "center",
                  padding: "28px",
                  margin: "5px",
                  borderRadius: "10px",
                  backgroundColor: "#A4D0BA",
                }}
              >
                <Card sx={{ borderRadius: "10px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="120" image={abc} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        D E F
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <div style={{ height: "20px" }}></div>

                <Card sx={{ borderRadius: "10px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="120" image={abc} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        G H I
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <div style={{ height: "20px" }}></div>
                <Card sx={{ borderRadius: "10px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="120" image={abc} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        J K L
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <div style={{ height: "20px" }}></div>

                <Card sx={{ borderRadius: "10px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="120" image={abc} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        M N O
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
      <div className="separator-sage"></div>
      <div className="separator-purple"></div>
      <Footer />

      {/* <img src={headercourse} style={{width:"100%", height: "undefined"}}></img> */}
    </>
  );
};

export default Detailpage;
