import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/py.png";
import Glasses from "../../img/cl.png";
import Humble from "../../img/ai.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { Link } from 'react-router-dom';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <span>What I Offer</span>
        <spane>
          <li>Designing tailored cloud solutions on AWS, Azure, and GCP.</li>
          <br />
          <li>Building robust APIs with Django REST Framework and FastAPI.</li><br />
          <li> Integrating AI models (OpenAI, Generative AI) for smart systems</li>
          <br />
          <li>Streamlining deployments and infrastructure with Docker and Kubernetes.</li>
          <br />
          <li>Providing expert guidance in cloud, AI,  and DevOps to <br /> &nbsp;&emsp;ensure efficient.</li>  
          <br /> 
        </spane>
        <Link to="Portfolio" className="navbar-link nav-link" >Learn more</Link>
        <a href={Resume} download>
          {/* <button className="button s-button">Download CV</button> */}
        </a>
        <div
            className="blc"
            style={{ background: "#ABF1FF94" , width:"100px", height:"150px" , borderBottomRightRadius: "100px" , borderTopRightRadius: "100px", marginLeft: "-130px"  ,marginTop:"-170px" }}
          ></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Backend Development"}
            detail={"Robust APIs with Django REST Framework and FastAPI for seamless integration and top-notch performance across web and mobile apps."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            
            heading={"Cloud Solutions & DevOps"}
            detail={"Scalable cloud architectures and automated workflows on AWS, Azure, and GCP. Secure, efficient systems with CI/CD pipelines using Docker and Kubernetes."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"AI-Powered Innovations"}
            detail={
              "Cutting-edge AI solutions like chatbots and automated transcription to bring intelligence and innovation to your projects."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
            className="blc"
            style={{ background: "var(--purple)" , width:"100px", height:"150px" , borderBottomLeftRadius: "100px" , borderTopLeftRadius: "100px", marginLeft: "750px"  ,marginTop:"-270px" }}
          ></div>
          <div
            className="blc"
            style={{ background: "var(--purple)" , width:"100px", height:"200px" , borderBottomLeftRadius: "200px" , borderTopLeftRadius: "200px", marginLeft: "750px"  ,marginTop:"770px" }}
          ></div>
        
      </div>
    </div>
  );
};

export default Services;
