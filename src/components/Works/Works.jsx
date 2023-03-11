import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            What is  <div className="bl" style={{  }}>CW2SG</div>
          </span><span></span>
          
          <spane>
          We are Two (2) Individuals working together to help you grow the Business.<br />
           We are professionals in the field of Content Writing (C), Web Development (W),<br />
            SEO (S), and Graphics (G), making CW2SG.
            Our mission is to Give Life to your <br /> Imagination by making an incredibly beautiful Website,
            filling it up with that alluring <br /> Content, and ranking it on Google with our 
            SEO. On top of that, we can provide <br /> you with Graphics Services like Logos,
             UI/UX Design, Animations, and much more.
          </spane>
         <div className="bttr">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Us</button>
          </Link>
          </div>
          <div
            className="blc"
            style={{ background: "#ABF1FF94" , width:"100px", height:"150px" , borderBottomRightRadius: "100px" , borderTopRightRadius: "100px", marginLeft: "-130px"  ,marginTop:"-270px" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
