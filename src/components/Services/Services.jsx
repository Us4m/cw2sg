import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
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
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>services</span>
        <spane>
          Our Services includes Websites Services, Graphic Services, and Content/Seo Services
          <br />
          In Website Services we provide Frontend/Backend and also UIUX design for clients websites.<br />
          We have expertise in django (For Backend), React/Html/Css/Tailwind/Angular/NextJs (For Frontend) 
          <br />
          In Graphic Designing services we provide illustrations, logo design, vector,2d animation,<br /> cartoon tracing, Anime creation etc. Our expertise in adobe illustrator , photoshop, cartoon animator.
          <br />
          We Also have Experienced Content Writer And Seo Expert and provide content  <br /> related E-Gaming and Health Sciences. 
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
            heading={"Graphic Services"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
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
            heading={"Websites Services"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
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
            heading={"Content/Seo Services"}
            detail={
              "Technical SEO, On-page SEO, Off-page SEO, and Content"
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
