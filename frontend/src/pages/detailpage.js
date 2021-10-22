import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbar";
import './detailpage.css'
import alphabet from "../component/icons/alphabet.png";
import number from "../component/icons/number.png";
import color from "../component/icons/color.png";
import { NavLink } from "../elements/navbarElement"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import headercourse from "../component/icons/abc.jpg"
import ReactPlayer from 'react-player'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";


const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};




const Detailpage = () => {
    const value = 4;



    return (
       
        <>
        <Navbar />
        <Container>
        <div style={{height:"180px"}}></div>
        <h1 className="headtext1">A B C</h1>
        <Box
      sx={{
        // justifyContent:'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]} (2 Rating)</Box>
    </Box>
    <div style={{height:"40px"}}></div>
    <Row>
        <Col md={9} fluid>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
        
      </div>
	


	<div class="tabs">
		<div class="tabby-tab">
			<Input type="radio" id="tab-1" name="tabby-tabs" checked/>
			<label for="tab-1">Tabby Tab 1</label>
			<div class="tabby-content">
				<img src="http://i64.tinypic.com/20qrlc.png"/>
				<p>Purr while eating meowing non stop for food or chase laser sleep on dog bed, force dog to sleep on floor, so play riveting piece on synthesizer keyboard hiss at vacuum cleaner. Stares at human while pushing stuff off a table spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce so refuse to leave cardboard box.</p>
			</div>
		</div>

		<div class="tabby-tab">
			<Input type="radio" id="tab-2" name="tabby-tabs"/>
			<label for="tab-2">Tabby Tab 2</label>
			<div class="tabby-content">
				<img src="http://i63.tinypic.com/wtykg4.png"/>
				<p>Cats go for world domination if it fits, i sits, meowwww but claw drapes, or sleep in the bathroom sink. Missing until dinner time under the bed, or eat from dog's food hide from vacuum cleaner kick up litter but lie on your belly and purr when you are asleep.</p>
			</div>
		</div>

		<div class="tabby-tab">
			<Input type="radio" id="tab-3" name="tabby-tabs"/>
			<label for="tab-3">Tabby Tab 3</label>
			<div class="tabby-content">
					<img src="http://i66.tinypic.com/wuhy7b.png"/>
					<p>Throwup on your pillow wake up human for food at 4am and hide when guests come over, yet inspect anything brought into the house.</p>
			</div>
		</div>

		<div class="tabby-tab">
			<Input type="radio" id="tab-4" name="tabby-tabs"/>
			<label for="tab-4">Tabby Tab 4</label>
			<div class="tabby-content">
				<img src="http://i63.tinypic.com/kakc9i.png"/>
				<p>Use lap as chair love to play with owner's hair tie pooping rainbow while flying in a toasted bread costume in space. Run in circles loves cheeseburgers, nap all day kick up litter. Stick butt in face hide when guests come over.</p>
				
			</div>
		</div>
		
	</div>

      </Col>
      <Col md={3}>
          tes</Col> 
          </Row>  
        


          
          
          
          
           </Container>

    {/* <img src={headercourse} style={{width:"100%", height: "undefined"}}></img> */}
    </>

        
       
    )
}

export default Detailpage
