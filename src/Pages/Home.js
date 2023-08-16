import { Container, Grid, Typography } from "@mui/material";
import bodyBorder from "../images/border12.png";
import PhotoBorder from "../images/dp3.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Chip from "@mui/material/Chip";
import ProjectsData from "../Components/ProjectsData";
import apsProjectImg from "../images/aps01.png";
import CarDekhoProjectImg from "../images/carDekhoUI.png";
import FormProjectImg from "../images/formCreator.png";
import BharatProjectImg from "../images/bharatClone.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <img src={bodyBorder} className="body-border" alt=" ... " /> */}

      <section>
        <Grid container spacing={2} className="CenteredBox" margin={0}>
        <Grid item xs={5} className="DPpart">
            <div className="PhotoContainer ">
              <img src={PhotoBorder} className="PhotoBorder" style={{scale:"1.5"}} alt=" ... " />
            </div>
          </Grid>
          <Grid item xs={7} className="HeadPart">
            <Typography variant="h4" component="p" marginBottom={0}>
              Hii
            </Typography>
            <Typography variant="h1" component="h6" marginBottom={0}>
              <small>I'm</small> <span className="blueText">SURAJ</span>
            </Typography>
            <Typography className="blueText" variant="h5" component="h1" marginTop={2}>
              FrontEnd Developer
            </Typography>
            <div className="icon-Container">
              <Link className="icon" to="https://github.com/srj47" target="blank">
                <GitHubIcon />
              </Link>
              <Link className="icon" to="https://www.linkedin.com/in/suraj-kumar-hedaoo-a29448150" target="blank">
                <LinkedInIcon />
              </Link>
              
              <Link className="icon" to="mailto:surajhedaoo74@gmail.com" sx={{display:"flex", alignItem:"center"}}>
                <span style={{marginRight:"8px"}}><MailIcon /></span> <span> surajhedaoo74@gmail.com </span>
              </Link>
            </div>
          </Grid>
         
        </Grid>
      </section>
      <section>
        <Grid container spacing={2} className=" skill" margin={0}>
          <Grid item xs={5} className="leftPart">
            <Typography variant="h3" component="h3" marginBottom={0}>
            <span className="blueText">Skills</span>  
            </Typography>
          </Grid>
          <Grid item xs={7} className="rightPart">
            <Typography variant="p" component="h2" marginBottom={2}>
              React Js
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              JavaScript
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              CSS
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              Bootstrap
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              HTML
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              Python
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              C, C++
            </Typography>
            <Typography variant="p" component="h2" marginBottom={2}>
              SQL
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section style={{marginTop:"50vh"}}>
      <Grid container spacing={2} className=" projectPart" margin={0}>
          <Grid item xs={5} className="leftPart">
            <Typography variant="h3" component="h3" marginBottom={0}>
            <span className="blueText">Projects</span>  
            </Typography>
          </Grid>

           {/* project 1 ==================================== */} 
            <Grid item xs={10} sx={{marginInline:"auto"}} className="" >
              <Card sx={{marginBottom:"3em",display:"flex"}}> 
              <div className="projectImgContainer" >
                  <CardMedia
                    component="img"
                    sx={{width:"100%", height:"auto", backgroundColor:"red"}}
                    image={apsProjectImg}
                    alt="ddd iguana"
                  />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                    Front-End Web Developer in APS Projects and Technologies Pvt. Ltd.
                    </Typography>
                   
                    <div direction="" spacing={1}>
                        <Chip
                          label="Using : React JS, JS, Bootstrap, CSS, HTML"
                          variant="outlined" 
                          sx={{ padding: "0px", marginRight: "5px" }}
                        />
                      
                    </div>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={2}
                    >
                      I worked as a Web Developer specializing in React JS focusing on User Interface (UI) development. I contributed to successfully implementing cutting-edge digital solutions, enhancing the overall user experience and fullfill the project requirement
                    </Typography>
                    {/* <Button  size="small" sx={{padding:"5px", margin:0}}>
                      <Link
                        component="button"
                        variant="a"
                        to="#"
                       
                      >
                       <b>View</b> 
                      </Link>
                      </Button>                   */}
                      
                  </CardContent> 
              </Card>
            </Grid>
            {/* project 2 ==================================== */}
            <Grid item xs={10} sx={{marginInline:"auto"}} className="" >
              <Card sx={{marginBottom:"3em",display:"flex"}}> 
              <div className="projectImgContainer" >
                  <CardMedia
                    component="img"
                    sx={{width:"100%", height:"auto", backgroundColor:"red"}}
                    image={CarDekhoProjectImg}
                    alt="ddd iguana"
                  />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                    Car-Dekho UI Replica for BABA BASUKINATH RETAILING
                    </Typography>
                   
                    <div direction="" spacing={1}>
                        <Chip
                          label="Using : React JS, Bootstrap, CSS, HTML"
                          variant="outlined" 
                          sx={{ padding: "0px", marginRight: "5px" }}
                        />
                      
                    </div>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={2}
                    >
                      It was a Car Finance based project developed using React JS. As a part of this project, I primarily focused on designing and implementing the user interface (UI). My responsibility was full fill the customer's requirements and create reusable components in React JS.                    
                      </Typography>
                    <Button  size="small" sx={{padding:"5px", margin:0}}>
                      <Link
                        component="button"
                        variant="a"
                        to="https://srj47.github.io/CarDekho-SimilarUI/"
                        target="blank"
                       
                      >
                       <b>View</b> 
                      </Link>
                      </Button>                  
                      
                  </CardContent> 
              </Card>
            </Grid>
            {/* project 3 ==================================== */}
            <Grid item xs={10} sx={{marginInline:"auto"}} className="" >
              <Card sx={{marginBottom:"3em",display:"flex"}}> 
              <div className="projectImgContainer" >
                  <CardMedia
                    component="img"
                    sx={{width:"100%", height:"auto", backgroundColor:"red"}}
                    image={FormProjectImg}
                    alt="ddd iguana"
                  />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                    Custom Form Creator under Sir M. VIT College
                    </Typography>
                   
                    <div direction="" spacing={1}>
                        <Chip
                          label="Using : React JS, Bootstrap, CSS, HTML"
                          variant="outlined" 
                          sx={{ padding: "0px", marginRight: "5px" }}
                        />
                      
                    </div>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={2}
                    >
                      I meticulously cloned the Google Form UI and creatively extended it using React.js, focusing solely on the user interface enhancements. Leveraged my proficiency in frontend development to replicate and enhance the design, demonstrating a deep understanding of UI/UX principles.                    
                      </Typography>
                    <Button  size="small" sx={{padding:"5px", margin:0}}>
                      <Link
                        component="button"
                        variant="a"
                        to="https://srj47.github.io/Form-Creator/"
                        target="blank"
                       
                      >
                       <b>View</b> 
                      </Link>
                      </Button>                  
                      
                  </CardContent> 
              </Card>
            </Grid>
            {/* project 4 ==================================== */}
            <Grid item xs={10} sx={{marginInline:"auto"}} className="" >
              <Card sx={{marginBottom:"3em",display:"flex"}}> 
              <div className="projectImgContainer" >
                  <CardMedia
                    component="img"
                    sx={{width: "400px"  , height:"auto", backgroundColor:"red"}}
                    image={BharatProjectImg}
                    alt="ddd iguana"
                  />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                    Bharat-Finance-UI-Clone
                    </Typography>
                   
                    <div direction="" spacing={1}>
                        <Chip
                          label="Using : React JS, Bootstrap, CSS, HTML"
                          variant="outlined" 
                          sx={{ padding: "0px", marginRight: "5px" }}
                        />
                      
                    </div>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={2}
                    >
                      I made this project for a clinet, I worked as a Freelance Developer.                    
                      </Typography>
                    <Button  size="small" sx={{padding:"5px", margin:0}}>
                      <Link
                        component="button"
                        variant="a"
                        to="https://srj47.github.io/Bharat-Finance-Clone/"
                        target="blank"
                       
                      >
                       <b>View</b> 
                      </Link>
                      </Button>   
                      <span>|</span>               
                    <Button  size="small" sx={{padding:"5px", margin:0}}>
                      <Link
                        component="button"
                        variant="a"
                        to="https://srj47.github.io/Bharat-Finance-Admin/"
                        target="blank"
                       
                      >
                       <b>Admin Section</b> 
                      </Link>
                      </Button>                  
                      
                  </CardContent> 
              </Card>
            </Grid>
         
        </Grid>
      </section>
    </>
  );
}

export default Home;
